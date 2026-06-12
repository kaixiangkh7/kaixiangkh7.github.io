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
git clone <repo-url> "C:\Users\kaixi\AppData\Local\Temp\<slug>_temp"
cd "C:\Users\kaixi\AppData\Local\Temp\<slug>_temp"
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
mkdir -p "c:\Users\kaixi\OneDrive\桌面\website\kaixiangkh7.github.io\public\images\<slug>"
```

---

## Phase 3 — Capture GIFs + hero/thumbnail

### Critical capture settings (non-negotiable)

- **Viewport**: `{ width: 1280, height: 800 }` — matches most app max-widths (1024–1152px), avoids gray-side margins
- **DO NOT use `recordVideo`** — headless Chromium produces blank webm files. Use frame-by-frame `page.screenshot()` at 100ms intervals and stitch with ffmpeg instead.
- **GIF encode width**: 1280px (matches the viewport; keeps files full-width and sharp)
- **Hero/thumbnail**: CSS laptop mockup on a gradient background (see below)

### ffmpeg binary

```js
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const ffmpegPath = require('ffmpeg-static');
```

### Capture workspace

Use `C:\Users\kaixi\AppData\Local\Temp\capture_temp\` — Playwright and ffmpeg-static are already installed there.

### GIF encoding recipe (frame-by-frame, two-pass palette)

Do not use `recordVideo`. Instead capture frames with `page.screenshot()` at 100ms intervals, then stitch:

```js
// capture_temp/capture_<slug>_frames.mjs
import { chromium } from 'playwright';
import { execFileSync } from 'child_process';
import { mkdirSync, rmSync } from 'fs';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const ffmpegPath = require('ffmpeg-static');

const FRAMES = 'C:\\Users\\kaixi\\AppData\\Local\\Temp\\capture_temp\\frames_<slug>';
const IMG    = 'c:\\Users\\kaixi\\OneDrive\\桌面\\website\\kaixiangkh7.github.io\\public\\images\\<slug>';
const VP     = { width: 1280, height: 800 };
const BASE   = 'http://localhost:5173';

mkdirSync(FRAMES, { recursive: true });

const browser = await chromium.launch({ headless: true });
const ctx  = await browser.newContext({ viewport: VP });
const page = await ctx.newPage();

await page.goto(BASE, { waitUntil: 'networkidle', timeout: 20000 });
await page.waitForTimeout(1500);

let frameIdx = 0;
const snap = async () => {
  await page.screenshot({ path: `${FRAMES}\\frame${String(frameIdx++).padStart(4,'0')}.png` });
};

// Capture interaction sequence — adapt to the app
for (let i = 0; i < 15; i++) { await snap(); await page.waitForTimeout(100); }
// ... type inputs, scroll, interact ...
for (let i = 0; i < 20; i++) { await snap(); await page.waitForTimeout(100); }

await ctx.close();
await browser.close();

// Stitch frames → GIF (one-pass with split/palette)
execFileSync(ffmpegPath, [
  '-y', '-framerate', '10', '-i', `${FRAMES}\\frame%04d.png`,
  '-vf', `scale=1280:-1:flags=lanczos,split[s0][s1];[s0]palettegen=max_colors=256[p];[s1][p]paletteuse=dither=bayer:bayer_scale=3`,
  `${IMG}\\home.gif`
]);

rmSync(FRAMES, { recursive: true, force: true });
console.log('GIF written');
```

**Target sizes per GIF type:**

| GIF | fps | colors | Expected size |
|-----|-----|--------|---------------|
| Simple UI (home/landing) | 10 | 256 | 300 KB – 3 MB |
| Complex scroll (charts, maps) | 5–6 | 128 | 3–9 MB |
| Interaction (sliders, modals) | 8 | 192 | 2–8 MB |

If a GIF exceeds 9 MB, drop fps by 2 or colors by half and re-stitch from the same frame directory.

### Key screens to capture (adapt to the actual app)

1. **Home/landing** — the entry point; type in a key input, hover feature cards
2. **Core feature / dashboard** — the main value screen; scroll through it
3. **Interactive element** — chart, slider, filter, or any interaction that shows the product working
4. **Settings/config/drawer** — assumptions panel, profile editor, or secondary flow

### Hero & thumbnail — detect app type, then apply the right frame

Before generating hero/thumbnail, **determine whether the app is a web app or a mobile app**:

| Signal | App type |
|---|---|
| GIF viewport width ≥ 800px | **Web app** → laptop mockup |
| GIF viewport width ≤ 500px | **Mobile app** → phone mockup |
| App has bottom nav, max-width ≤ 600px, or portrait layout | **Mobile app** → phone mockup |
| App fills full browser width at 1280px | **Web app** → laptop mockup |

Quick check: capture a screenshot at 1280×800. If the content is a narrow centered column (phone-like), it's a mobile app. If it fills the width, it's a web app.

**Choose a gradient that complements the project's brand colors:**
- Pink/red product → `linear-gradient(135deg, #f97794 0%, #c471ed 50%, #f64f59 100%)`
- Orange/warm product → `linear-gradient(135deg, #f6a623 0%, #f97794 50%, #f64f59 100%)`
- Blue/teal product → `linear-gradient(135deg, #667eea 0%, #764ba2 50%, #e0417a 100%)`

---

#### Option A — Web app: CSS laptop mockup

Screenshot the app at `{ width: 1280, height: 800 }`. MacBook Pro-style frame: thin bezel with pill notch, silver base **wider than the screen** with 4 rubber feet (2 per side).

**Script pattern** (`capture_<slug>_mockup.mjs`):

```js
import { chromium } from 'playwright';
import { execFileSync } from 'child_process';
import { readFileSync, writeFileSync } from 'fs';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const ffmpegPath = require('ffmpeg-static');

const OUT = 'c:\\Users\\kaixi\\OneDrive\\桌面\\website\\kaixiangkh7.github.io\\public\\images\\<slug>';
const TMP = 'C:\\Users\\kaixi\\AppData\\Local\\Temp\\capture_temp';

const browser = await chromium.launch({ headless: true });

// 1. Screenshot the app
const appCtx = await browser.newContext({ viewport: { width: 1280, height: 800 } });
const appPage = await appCtx.newPage();
await appPage.goto('http://localhost:5173', { waitUntil: 'networkidle', timeout: 20000 });
await appPage.waitForTimeout(2000);
await appPage.screenshot({ path: `${TMP}\\raw_app.png`, fullPage: false });
await appCtx.close();
const appBase64 = readFileSync(`${TMP}\\raw_app.png`).toString('base64');

// 2. Build HTML: gradient bg + thin MacBook-style laptop frame
const makeHtml = (canvasW, canvasH, laptopW, gradient) => {
  const ext  = Math.round(laptopW * 0.055); // base overhang each side
  const fW   = Math.round(laptopW * 0.044); // rubber foot width
  const fGap = Math.round(laptopW * 0.052); // gap between 2 feet per side
  return `<!DOCTYPE html>
<html><head><meta charset="utf-8"/>
<style>
  * { margin:0; padding:0; box-sizing:border-box; }
  body { width:${canvasW}px; height:${canvasH}px; background:${gradient};
         display:flex; align-items:center; justify-content:center; overflow:hidden; }
  .laptop { width:${laptopW}px; position:relative; }
  .bezel { background:#111; border-radius:8px 8px 0 0; padding:20px 5px 0;
    box-shadow:0 0 0 1px #2a2a2a,0 20px 50px rgba(0,0,0,0.45); position:relative; }
  .bezel::before { content:''; position:absolute; top:7px; left:50%; transform:translateX(-50%);
    width:50px; height:6px; background:#222; border-radius:3px; }
  .screen { background:#000; border-radius:3px 3px 0 0; overflow:hidden; width:100%; aspect-ratio:16/10; }
  .screen img { width:100%; height:100%; object-fit:cover; object-position:top; display:block; }
  .chin { background:#111; height:6px; }
  .hinge { background:linear-gradient(180deg,#1a1a1a,#252525); height:3px; }
  .base { background:linear-gradient(180deg,#c8c8c8,#b0b0b0); height:12px;
    width:calc(100% + ${ext*2}px); margin-left:-${ext}px;
    border-radius:0 0 8px 8px; box-shadow:0 6px 18px rgba(0,0,0,0.25); position:relative; }
  .base::after { content:''; position:absolute; bottom:0; left:50%; transform:translateX(-50%);
    width:${Math.round(laptopW*0.2)}px; height:4px; background:#9a9a9a; border-radius:0 0 3px 3px; }
  .feet { width:calc(100% + ${ext*2}px); margin-left:-${ext}px; height:4px; position:relative; }
  .feet::before { content:''; position:absolute; bottom:0; left:${Math.round(ext*0.5)}px;
    width:${fW}px; height:4px; background:#888; border-radius:0 0 2px 2px; box-shadow:${fGap}px 0 0 #888; }
  .feet::after { content:''; position:absolute; bottom:0; right:${Math.round(ext*0.5)}px;
    width:${fW}px; height:4px; background:#888; border-radius:0 0 2px 2px; box-shadow:-${fGap}px 0 0 #888; }
</style></head><body>
  <div class="laptop">
    <div class="bezel">
      <div class="screen"><img src="data:image/png;base64,${appBase64}"/></div>
      <div class="chin"></div>
    </div>
    <div class="hinge"></div>
    <div class="base"></div>
    <div class="feet"></div>
  </div>
</body></html>`;
};

const GRADIENT = 'linear-gradient(135deg, #f97794 0%, #c471ed 50%, #f64f59 100%)';

// Hero: 1400×900, laptop 760px wide
writeFileSync(`${TMP}\\mockup_hero.html`, makeHtml(1400, 900, 760, GRADIENT));
const heroCtx = await browser.newContext({ viewport: { width: 1400, height: 900 } });
const heroPage = await heroCtx.newPage();
await heroPage.goto(`file:///${TMP.replace(/\\/g,'/')}/mockup_hero.html`, { waitUntil: 'load' });
await heroPage.waitForTimeout(300);
await heroPage.screenshot({ path: `${TMP}\\hero_raw.png` });
await heroCtx.close();
execFileSync(ffmpegPath, ['-y','-i',`${TMP}\\hero_raw.png`,'-update','1','-q:v','2', `${OUT}\\<slug>-hero.jpg`]);

// Thumbnail: 1000×1000 → 800×800, laptop 480px wide
writeFileSync(`${TMP}\\mockup_thumb.html`, makeHtml(1000, 1000, 480, GRADIENT));
const thumbCtx = await browser.newContext({ viewport: { width: 1000, height: 1000 } });
const thumbPage = await thumbCtx.newPage();
await thumbPage.goto(`file:///${TMP.replace(/\\/g,'/')}/mockup_thumb.html`, { waitUntil: 'load' });
await thumbPage.waitForTimeout(300);
await thumbPage.screenshot({ path: `${TMP}\\thumb_raw.png` });
await thumbCtx.close();
execFileSync(ffmpegPath, ['-y','-i',`${TMP}\\thumb_raw.png`,'-update','1','-vf','scale=800:800:flags=lanczos','-q:v','2', `${OUT}\\<slug>-thumbnail.jpg`]);

await browser.close();
console.log('Hero and thumbnail done.');
```

---

#### Option B — Mobile app: 3-phone CSS mockup

Capture **3 distinct screens** (e.g. home, list/timeline, detail/settings). Show them side-by-side in a phone triptych — same pattern as Athena. Thumbnail: 3 phones centered. Hero: 3 phones grouped to the right (left side open).

Screenshot each screen at the **same mobile viewport used for GIFs** (e.g. `{ width: 448, height: 900 }`).

```js
// Capture 3 screens by navigating through the app
const thCtx = await browser.newContext({ viewport: { width: 448, height: 900 } });
const thPage = await thCtx.newPage();
await thPage.goto('http://localhost:3000', { waitUntil: 'networkidle', timeout: 20000 });
await thPage.waitForTimeout(2000);
await thPage.screenshot({ path: `${TMP}\\screen1.png` });   // screen 1 (home/default)

await thPage.click('text=<Tab2Label>');                      // navigate to screen 2
await thPage.waitForTimeout(1000);
await thPage.screenshot({ path: `${TMP}\\screen2.png` });

await thPage.click('text=<Tab3Label>');                      // navigate to screen 3
await thPage.waitForTimeout(1000);
await thPage.screenshot({ path: `${TMP}\\screen3.png` });

await thCtx.close();
const b1 = readFileSync(`${TMP}\\screen1.png`).toString('base64');
const b2 = readFileSync(`${TMP}\\screen2.png`).toString('base64');
const b3 = readFileSync(`${TMP}\\screen3.png`).toString('base64');

// 3-phone triptych — thin bezel, pill notch, proportional radii
// align='center': thumbnail (phones centered on square canvas)
// align='right':  hero (phones grouped right, left side open)
const makePhoneTriple = (cW, cH, pW, b1, b2, b3, gradient, align = 'center') => {
  const r   = Math.round(pW * 0.10);
  const p   = Math.round(pW * 0.026);
  const ni  = Math.round(pW * 0.067);
  const nw  = Math.round(pW * 0.24);
  const nh  = Math.round(pW * 0.075);
  const nr  = Math.round(pW * 0.038);
  const sr  = Math.round(pW * 0.08);
  const hw  = Math.round(pW * 0.28);
  const hm  = Math.round(pW * 0.035);
  const gap = Math.round(pW * 0.075);
  const phone = (b64) => `<div class="phone"><div class="screen"><img src="data:image/png;base64,${b64}"/></div><div class="home"></div></div>`;
  const rowStyle = align === 'right'
    ? `position:absolute;right:30px;top:50%;transform:translateY(-50%);display:flex;gap:${gap}px;align-items:center;`
    : `display:flex;gap:${gap}px;align-items:center;`;
  const bodyStyle = align === 'right'
    ? `width:${cW}px;height:${cH}px;background:${gradient};position:relative;`
    : `width:${cW}px;height:${cH}px;background:${gradient};display:flex;align-items:center;justify-content:center;`;
  return `<!DOCTYPE html><html><head><meta charset="utf-8"/>
<style>
  *{margin:0;padding:0;box-sizing:border-box;}
  body{${bodyStyle}}
  .phone{width:${pW}px;background:#111;border-radius:${r}px;padding:${p}px;
    box-shadow:0 0 0 1px #2a2a2a,0 0 0 2px #1a1a1a,0 30px 60px rgba(0,0,0,0.5);
    position:relative;flex-shrink:0;}
  .phone::before{content:'';position:absolute;top:${ni}px;left:50%;transform:translateX(-50%);
    width:${nw}px;height:${nh}px;background:#000;border-radius:${nr}px;z-index:2;}
  .screen{width:100%;aspect-ratio:448/900;border-radius:${sr}px;overflow:hidden;}
  .screen img{width:100%;height:100%;object-fit:cover;object-position:top;display:block;}
  .home{width:${hw}px;height:4px;background:rgba(255,255,255,0.25);border-radius:2px;margin:${hm}px auto 2px;}
</style></head><body>
  <div style="${rowStyle}">${phone(b1)}${phone(b2)}${phone(b3)}</div>
</body></html>`;
};

const GRADIENT = 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #e0417a 100%)';

// Thumbnail: 1000×1000, 3 phones at 220px each, centered
writeFileSync(`${TMP}\\th_thumb.html`, makePhoneTriple(1000, 1000, 220, b1, b2, b3, GRADIENT, 'center'));
// ... render + ffmpeg scale=800:800 → <slug>-thumbnail.jpg

// Hero: 1400×900, 3 phones at 170px each, right-aligned
writeFileSync(`${TMP}\\th_hero.html`, makePhoneTriple(1400, 900, 170, b1, b2, b3, GRADIENT, 'right'));
// ... render + ffmpeg → <slug>-hero.jpg
```

**Which screens to capture:** Pick 3 tabs/views that each show distinct, populated content. Avoid empty states. If a tab requires a filter change to show data (e.g. "Last 7 days"), click it before screenshotting.

---

### Verify GIFs are full-width

Extract frame 10 and read it visually before committing:
```js
execFileSync(ffmpegPath, ['-y', '-i', `${IMG}\\home.gif`, '-vf', 'select=eq(n\\,10)', '-vframes', '1', '-update', '1', 'frame10.png']);
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
cd "c:\Users\kaixi\OneDrive\桌面\website\kaixiangkh7.github.io"
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
cd "c:\Users\kaixi\OneDrive\桌面\website\kaixiangkh7.github.io"
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
| GIF is blank/white | headless Chromium `recordVideo` doesn't capture | Use frame-by-frame `page.screenshot()` + ffmpeg stitch instead |
| `pages-manifest.json` error on dev server | Stale `.next` cache | `rm -rf .next` then restart |
| `EADDRINUSE` on port | Prior server process still running | `pkill -f "next dev"` then use a new port |
| GIF over 9MB | Map/chart content with high color variation | Drop fps to 5, colors to 128, width to 1100px |
| Caption count mismatch | `features[]` length ≠ `images.slice(1).length` | Count images array carefully |
