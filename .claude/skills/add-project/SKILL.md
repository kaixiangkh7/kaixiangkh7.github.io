---
description: Add a new project to the portfolio: run the repo locally, capture full-width GIFs of key screens, write AI-native copy, and wire it into all 4 required files. Invoke with a GitHub repo URL and optionally a local path if the repo is already cloned and running.
---

# Skill: Add Project to Portfolio

Adds a new entry to `c:\Users\kaihuang\OneDrive - Capgemini\Desktop\website` by:
1. Running the target project locally (frontend + backend if needed)
2. Capturing animated GIFs of key screens using Playwright + ffmpeg
3. Writing project copy in the established portfolio voice (AI-native framing when applicable)
4. Wiring the project into the 4 required files + image folder

**Invoke with:** the GitHub repo URL (and optionally a path if already cloned/running).

---

## Phase 0 — Determine next slug

Check `lib/projects-data.ts` for the highest existing `"project-N"` key. The new project is `project-(N+1)`.

---

## Phase 1 — Run the project locally

### If already running / already cloned

Ask the user for the local URL(s). Skip to Phase 2.

### If cloning fresh

Clone to a **sibling temp dir** — never inside the website repo:

```bash
git clone <repo-url> "C:\Users\kaihuang\OneDrive - Capgemini\Desktop\<slug>_temp"
cd "C:\Users\kaihuang\OneDrive - Capgemini\Desktop\<slug>_temp"
```

Read the README/`package.json` to identify the stack. Typical patterns:

**Frontend-only (Vite/Next/CRA):**
```bash
npm install && npm run dev   # usually :5173 or :3000
```

**Full-stack (FastAPI + Vite, common pattern):**
```bash
# Backend (in background)
pip install -e ".[dev]"
python scripts/refresh_*.py   # any ETL/DB init step
uvicorn app.api:app --port 8000 &

# Frontend
cd frontend && npm install && npm run dev   # :5173
```

Poll until both are up:
```bash
until curl -sf http://localhost:5173 >/dev/null; do sleep 1; done
until curl -sf http://localhost:8000/api/health >/dev/null; do sleep 1; done
```

If setup fails (missing secrets, mobile-only, build errors) — capture whatever screens are reachable and flag the gap. Never fabricate screens.

---

## Phase 2 — Choose a short image slug

Pick a 1–3 word lowercase snake_case name for the image folder that describes the project (e.g. `buyorrent`, `athena`, `mocha`). NOT the literal `project-N`.

Create the folder:
```bash
mkdir -p "C:\Users\kaihuang\OneDrive - Capgemini\Desktop\website\public\images\<slug>"
```

---

## Phase 3 — Capture GIFs + hero/thumbnail

### Critical capture settings (non-negotiable)

- **Viewport**: `{ width: 1280, height: 800 }` — matches most app max-widths (1024–1152px), avoids gray-side margins
- **RecordVideo size**: must equal viewport — `{ size: { width: 1280, height: 800 } }`
- **DO NOT use `deviceScaleFactor: 2`** — it causes the app content to render in only part of the video frame
- **GIF encode width**: 1280px (matches the viewport; keeps files full-width and sharp)
- **Hero/thumbnail**: capture at 1280×800, composite onto dark background (`pad=iw+80:ih+60:40:30:color=#0f0f0f`)

### ffmpeg binary

```js
import ffmpegPath from 'ffmpeg-static'; // already installed in capture_temp
// path: C:\Users\kaihuang\OneDrive - Capgemini\Desktop\capture_temp\node_modules\ffmpeg-static\ffmpeg.exe
```

### Capture workspace

Use `C:\Users\kaihuang\OneDrive - Capgemini\Desktop\capture_temp\` — Playwright and ffmpeg-static are already installed there.

### GIF encoding recipe (two-pass palette)

```js
function toGif(src, dest, fps = 10, colors = 256, width = 1280) {
  const pal = dest.replace('.gif', '-pal.png');
  execFileSync(ffmpegPath, [
    '-y', '-i', src,
    '-vf', `fps=${fps},scale=${width}:-1:flags=lanczos,palettegen=max_colors=${colors}`,
    pal
  ]);
  execFileSync(ffmpegPath, [
    '-y', '-i', src, '-i', pal,
    '-filter_complex', `fps=${fps},scale=${width}:-1:flags=lanczos[x];[x][1:v]paletteuse=dither=bayer:bayer_scale=3`,
    dest
  ]);
  // delete palette file after
}
```

**Target sizes per GIF type:**

| GIF | fps | colors | Expected size |
|-----|-----|--------|---------------|
| Simple UI (home/landing) | 10 | 256 | 1–3 MB |
| Complex scroll (charts, maps, dashboards) | 5–6 | 128 | 5–9 MB |
| Interaction (sliders, drawers, modals) | 8 | 192 | 4–8 MB |

If a GIF exceeds 9 MB, drop fps by 2 or colors by half and re-encode from the same `.webm`.

### Key screens to capture (adapt to the actual app)

1. **Home/landing** — the entry point; hover over feature cards, type in a key input
2. **Core feature / dashboard** — the main value screen; scroll through it
3. **Interactive element** — chart, slider, filter, or any interaction that shows the product working
4. **Settings/config/drawer** — assumptions panel, profile editor, or secondary flow

### Capture script skeleton

```js
// capture_temp/capture_<slug>.mjs
import { chromium } from 'playwright';
import { execFileSync } from 'child_process';
import { mkdirSync, rmSync, existsSync } from 'fs';
import ffmpegPath from 'ffmpeg-static';

const WEBM = 'C:\\...\\capture_temp\\webms_<slug>';
const IMG  = 'C:\\...\\website\\public\\images\\<slug>';
const VP   = { width: 1280, height: 800 };
const BASE = 'http://localhost:5173'; // adjust port

mkdirSync(WEBM, { recursive: true });
mkdirSync(IMG,  { recursive: true });

const browser = await chromium.launch({ headless: true });

// Hero screenshot
{
  const ctx = await browser.newContext({ viewport: VP });
  const page = await ctx.newPage();
  await page.goto(`${BASE}/most-impressive-route`, { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(3000);
  await page.screenshot({ path: `${IMG}\\raw_hero.jpg`, type: 'jpeg', quality: 95 });
  // composite on dark bg
  execFileSync(ffmpegPath, ['-y', '-i', `${IMG}\\raw_hero.jpg`, '-vf', 'pad=iw+80:ih+60:40:30:color=#0f0f0f', `${IMG}\\<slug>-hero.jpg`]);
  rmSync(`${IMG}\\raw_hero.jpg`, { force: true });
  await ctx.close();
}

// Thumbnail
{
  const ctx = await browser.newContext({ viewport: VP });
  const page = await ctx.newPage();
  await page.goto(BASE, { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(1500);
  await page.screenshot({ path: `${IMG}\\raw_thumb.jpg`, type: 'jpeg', quality: 95 });
  execFileSync(ffmpegPath, ['-y', '-i', `${IMG}\\raw_thumb.jpg`, '-vf', 'pad=iw+80:ih+60:40:30:color=#0f0f0f', `${IMG}\\<slug>-thumbnail.jpg`]);
  rmSync(`${IMG}\\raw_thumb.jpg`, { force: true });
  await ctx.close();
}

// Each GIF: record → close context (finalizes webm) → toGif
// ... (one block per key screen)

await browser.close();
```

**Always close the context BEFORE calling `toGif`** — closing the context finalizes the `.webm` file. Calling ffmpeg on an open/unfinished webm produces a corrupted GIF.

### Verify GIFs are full-width

Extract frame 10 and read it visually before committing:
```js
execFileSync(ffmpegPath, ['-y', '-i', `${IMG}\\home.gif`, '-vf', 'select=eq(n\\,10)', '-vframes', '1', 'frame10.png']);
// Read frame10.png — if content fills the full width, proceed. If gray sides appear, re-check viewport.
```

---

## Phase 4 — Identify the app's features and write copy

Read the README, CLAUDE.md (if present), and observe the running app. Write all fields in the portfolio voice:

- **AI-native framing**: if the project was built with Claude Code, Codex, or another AI tool — lead with that in `overview`, tell the development story in `process[]`, and surface in-product AI features in `features[]`
- `overview`: 1–2 sentences, lead with the most impressive angle
- `problemSpace`: the gap being addressed, with a stat if real
- `process[]`: 2–3 bullets — development story OR research/methodology (whichever is more impressive)
- `jobToBeDone`: "As a … I want … so that …"
- `features[]`: exactly 3, covering the product's AI/key capabilities
- `outcome`: results with metrics or velocity claims
- Tags: max 6, AI/ML-related tags first

---

## Phase 5 — Wire into the 4 files

### 1. `lib/projects-data.ts`

Add `"project-N": { ... }` to the `projectsData` record (before the closing `}`). The `images` array:
```ts
images: [
  "/images/<slug>/<slug>-hero.jpg",      // index 0 = hero
  "/images/<slug>/home.gif",              // index 1+ = Key Screens
  "/images/<slug>/dashboard.gif",
  // ...
]
```

### 2. `components/project-layout.tsx`

Add a new `if (projectSlug === 'project-N')` block **before** the default return:

```tsx
if (projectSlug === 'project-N') {
  const features = [
    "Caption matching gif 1",   // must align 1:1 with images.slice(1)
    "Caption matching gif 2",
    "Caption matching gif 3",
    "Caption matching gif 4",
  ]
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-normal mb-4 text-primary">Key Screens</h2>
      <div className="space-y-8">
        {images.slice(1).map((image, index) => (
          <div key={index} className="overflow-hidden rounded-lg">
            <h3 className="text-lg font-medium mb-3 text-gray-800">{features[index]}</h3>
            <img src={getImagePath(image)} alt={`${projectTitle} - ${features[index]}`}
              className="w-full h-auto object-contain shadow-lg" />
          </div>
        ))}
      </div>
    </div>
  )
}
```

**Caption count must equal `images.length - 1`** (one per non-hero image). Mismatches cause blank captions.

**Section relabel** (optional): if the project story is about AI-native development, relabel "Research & Analytics" → "AI-Native Development" in `app/projects/[slug]/page.tsx` by adding a slug-specific check to the existing ternary at line ~71.

### 3. `app/page.tsx`

Add `<ProjectCard ... />` to the `#projects` grid (after the last existing card):

```tsx
<ProjectCard
  title="Project Name - Subtitle"
  description="One sentence that leads with the most impressive angle."
  image="/images/<slug>/<slug>-thumbnail.jpg"
  tags={["AI/ML", "Tag2", "Tag3", "Tag4"]}   // max 5 shown in card; AI/ML first
  link="/projects/project-N"
/>
```

### 4. `app/projects/[slug]/page.tsx`

Add to the "More Projects" sidebar list (after the last `<div className="h-px bg-border">` entry):

```tsx
<div className="h-px bg-border"></div>
<Link href="/projects/project-N" className="block group hover:bg-gray-50 p-3 -m-3 rounded-lg transition-all duration-300">
  <div className="flex items-center gap-3">
    <div className="w-16 h-16 overflow-hidden rounded-lg flex-shrink-0">
      <img src={getImagePath("/images/<slug>/<slug>-thumbnail.jpg")} alt="Project Name"
        className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-80" />
    </div>
    <div>
      <p className="font-light group-hover:text-primary transition-colors duration-300">Project Name - Subtitle</p>
      <p className="text-sm text-muted-foreground transition-colors duration-300 group-hover:text-gray-600">Tag1, Tag2</p>
    </div>
  </div>
</Link>
```

If the project has a live URL or GitHub repo, also add a `PrimaryButton` block keyed on `slug === 'project-N'` in the Project Details sidebar, matching the pattern at lines ~137–166.

---

## Phase 6 — Build + validate

```bash
cd "C:\Users\kaihuang\OneDrive - Capgemini\Desktop\website"
npm run build   # must pass; clears .next first if stale: rm -rf .next
```

Serve the output and take comparison screenshots:

```bash
npx serve out --listen 3010
```

Use Playwright to screenshot `/projects/project-N` and compare against an existing project page (e.g. `/projects/project-9`). Check:
- GIFs render full-width (no gray margins)
- All text sections populated (Overview, Problem Space, AI-Native Development / Research, JTBD, Key Features, Key Screens)
- Sidebar shows Project Details (Client, Role) and any GitHub/live-product button
- Card appears in homepage grid with correct title/tags

### Visual parity checklist

| Element | Expected |
|---|---|
| Section h2 headings | `text-2xl font-normal text-primary` (cyan) |
| Body text | Nunito, light weight, muted gray |
| GIF images | Full-width, no gray sides, `object-contain shadow-lg` |
| Thumbnail in card | Dark-framed screenshot, fills `h-64 object-cover` |
| Tags | Pill style `px-3 py-1 border border-border/50` |

---

## Phase 7 — Commit

```bash
cd "C:\Users\kaihuang\OneDrive - Capgemini\Desktop\website"
git add lib/projects-data.ts components/project-layout.tsx app/page.tsx \
  "app/projects/[slug]/page.tsx" public/images/<slug>/
git commit -m "Add <ProjectName> as project-N"
```

Do NOT push — leave that to the user.

---

## Common failure modes

| Symptom | Cause | Fix |
|---|---|---|
| Gray margins in GIF | Viewport too wide for app max-width | Use 1280px viewport |
| GIF shows blank first frame | Screenshot taken before page rendered | Increase `waitForTimeout` before recording |
| GIF is corrupted/empty | webm finalized after ffmpeg called | Always close Playwright context BEFORE calling `toGif` |
| `pages-manifest.json` error on dev server | Stale `.next` cache | `rm -rf .next` then restart |
| `EADDRINUSE` on port | Prior server process still running | `pkill -f "next dev"` then use a new port |
| GIF over 9MB | Map/chart content with high color variation | Drop fps to 5, colors to 128, width to 1100px |
| Caption count mismatch | `features[]` length ≠ `images.slice(1).length` | Count images array carefully |
