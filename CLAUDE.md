# CLAUDE.md — Kaixiang Huang Portfolio Website

This file governs all new work on this codebase. Every new project entry, section, component, or feature must match the patterns documented here. Do not introduce new dependencies, color tokens, fonts, or architectural patterns without a clear reason and explicit approval.

---

## Stack & Build

- **Framework**: Next.js 15 (App Router), React 18, TypeScript 5
- **Styling**: Tailwind CSS 3 with custom config + `tailwindcss-animate` plugin
- **Components**: Radix UI primitives (already installed — do not add alternatives like shadcn-new or MUI)
- **Icons**: Lucide React only
- **Forms**: React Hook Form + Zod
- **Notifications**: Sonner (`useToast` hook)
- **Output**: Static export (`output: 'export'`) for GitHub Pages deployment

Run `npm run dev` to develop, `npm run build` to export.

---

## Project/Work Item — Adding a New Entry

All project data lives in `lib/projects-data.ts`. Add a new object to the exported array. No separate file per project.

### Data shape

```typescript
{
  title: string            // "ProjectName - Short Subtitle"
  client: string           // Company or client name
  date: string             // "Month Year" (e.g., "March 2025")
  role: string             // Your role (e.g., "PM & UX Designer")
  tags: string[]           // Max 6. AI/ML tags come first (see tag ordering below)
  overview: string         // 1–2 sentences
  problemSpace: string     // The challenge being solved
  process: string[]        // 2–4 short process step strings
  jobToBeDone: string      // JTBD statement
  features: string[]       // 3 key features or outcomes
  outcome: string          // Business/user result
  images: string[]         // ["/images/project-slug/hero.jpg", "/images/project-slug/detail-1.jpg", ...]
  team?: string[]          // Optional team members
}
```

### Tag ordering rule

Tags containing "AI", "ML", "Computer Vision", "Machine Learning", or "Deep Learning" must be placed first in the `tags` array. The card component sorts them this way automatically, but keep source data consistent.

### Images

- Place images in `public/images/<slug>/` where `<slug>` is a short theme name (e.g. `amazon/`, `athena/`, `mocha/`) — NOT the literal `project-N`.
- `images[0]` = hero/cover (16:9, rendered full-width at `h-[50vh]` on the detail page).
- A separate `<slug>-thumbnail.jpg` (square-ish, shown at 256px) is referenced directly in the homepage `ProjectCard` and in the "More Projects" sidebar.
- Remaining `images[1+]` = the "Key Screens" gallery.
- Use `.jpg` for static covers/thumbnails, `.gif` for animated screen captures.

---

## Adding a New Project (run repo → capture GIFs → publish)

This is the standard process for turning another GitHub repo into a portfolio entry. Each project uses a sequential slug `project-N` (check `lib/projects-data.ts` for the highest existing number and use the next one).

### Step 1 — Capture animated GIFs of the real product

1. Clone the target repo to a **sibling temp directory** (never inside this website repo).
2. Read its `package.json`/README, install deps, and start its dev server (`npm install && npm run dev` or equivalent). Note the local URL/port.
3. Identify the key screens/flows (landing, onboarding, core feature, dashboard, etc.).
4. Drive each flow with **Playwright** recording video using `deviceScaleFactor: 2` and `recordVideo: { size: {width:2560, height:1600} }` so frames render at 2× native resolution. Convert each `.webm` to `.gif` with **ffmpeg** two-pass palette (256 colors, `bayer:bayer_scale=3` dithering, `fps=10`, `scale=1440:-1:flags=lanczos`). This matches the existing site standard (~1440×900, 4–8 MB, sharp text). Results-heavy GIFs may use `fps=8` to stay under 8 MB. Composite hero/thumbnail JPGs on a dark background: `pad=iw+120:ih+80:60:40:color=#0f0f0f`.
5. Save the GIFs plus one representative `<slug>-hero.jpg` and `<slug>-thumbnail.jpg` frame into `public/images/<slug>/`.
6. If the repo can't run locally (backend secrets, mobile-only, build failure), capture whatever screens are reachable and **flag the gap to the user — never fabricate screens**.

### Step 2 — Edit the four files

1. **`lib/projects-data.ts`** — add a `"project-N": { ... }` entry. `images` order = `[hero.jpg, screen1.gif, screen2.gif, ...]`.
2. **`components/project-layout.tsx`** — add an `if (projectSlug === 'project-N') { ... }` block before the default return. Define a `features` caption array with **exactly one caption per non-hero image** (must line up 1:1 with `images.slice(1)`). Use the GIF-heavy vertical-stack pattern (like `project-2`/`project-9`):
   ```tsx
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
   ```
3. **`app/page.tsx`** — add a `<ProjectCard title=... description=... image="/images/<slug>/<slug>-thumbnail.jpg" tags={[...]} link="/projects/project-N" />` to the `#projects` grid.
4. **`app/projects/[slug]/page.tsx`** — add one entry (with a `<div className="h-px bg-border"></div>` divider) to the shared **"More Projects"** sidebar list. If the project has a live URL, add a `slug === 'project-N'` "View Live Product" `PrimaryButton` block alongside the existing ones.

`generateStaticParams` derives routes from `Object.keys(projectsData)` automatically — no routing changes needed.

### Step 3 — Write the copy in the existing voice

Data-driven, metric-rich, PM/UX framing. `overview` 1–2 sentences; `problemSpace` states the gap (ideally with a stat); `process` = research/analysis bullets; `jobToBeDone` = "As a … I want … so that …"; `features` = exactly 3; `outcome` = results with metrics. Tags max 6, AI/ML tags first. Base all claims on what the repo actually does — observed features, README, running UI.

### Step 4 — Verify & run the visual validation loop

- `npm run dev`: new card shows on `/`; `/projects/project-N` renders hero + all sections + Key Screens GIFs with correct captions; new entry appears in another detail page's "More Projects".
- `npm run build` completes (static export) with the new route generated and no broken image paths.
- Then run the **Visual Validation Loop** below to confirm the new page matches the existing site's style.

---

## Visual Validation Loop

After implementing ANY new page, section, or component, do not consider the work done until it has been visually compared against the existing site. The goal is for new work to be indistinguishable in style from what's already there.

1. **Preview** — start the dev server (`npm run dev`) and load the new/changed page in a headless browser (Playwright).
2. **Screenshot the new work** — capture a full-page screenshot of the new page (e.g. `/projects/project-N`) at desktop width (~1440px) and mobile width (~390px).
3. **Screenshot a reference** — capture the equivalent existing page the new one should match (e.g. an existing `/projects/project-9` detail page, or the homepage `#projects` grid for a new card).
4. **Compare** — view both screenshots side by side and check, specifically:
   - **Typography**: Nunito body / Orbitron branding, heading weights (`font-light`/`font-semibold`), sizes match the type scale.
   - **Color**: cyan `#00D4FF` primary accents, no stray colors.
   - **Spacing & layout**: section padding (`py-24`/`py-32`), container width, grid gaps, card proportions match.
   - **Components**: section headers use `text-2xl font-normal text-primary`, "Key Screens" captions styled like existing projects, hover states present.
   - **Images**: hero at `h-[50vh]`, GIFs `object-contain` with `shadow-lg`, thumbnail not stretched.
5. **Fix and repeat** — if anything diverges, adjust the code and re-run steps 1–4. Loop until the new page is visually consistent with the reference.
6. **Report** — summarize the comparison to the user (what matched, what was adjusted). If a difference is intentional and justified, call it out rather than silently leaving it.

Use the live site or existing project pages as the source of truth for "the original style" — never redefine the style based on the new work.

---

## Color Palette

Use only these values. Do not introduce new colors.

| Token | Value | Usage |
|---|---|---|
| `primary` | `#00D4FF` (cyan) | CTAs, hover states, accent text, badges |
| `accent` | `#A64DBB` (purple) | Secondary highlights, gradient partner |
| Background | `#ffffff` | Page background |
| Foreground | dark navy (HSL 222, 47%, 11%) | Body text |
| Muted | gray (HSL 215, 16%, 47%) | Secondary text, labels |
| Gradient (contact) | `linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #3b82f6 100%)` | Section backgrounds |
| Gradient (particle bg) | `linear-gradient(135deg, #3b82f6 0%, #a855f7 50%, #6366f1 100%)` | Hero canvas |

Always reference Tailwind tokens (`text-primary`, `bg-primary/20`) over hardcoded hex values.

---

## Typography

### Fonts

- **Nunito** — all body text, labels, descriptions, form inputs
  - Weights in use: 200 (extralight), 300 (light), 400, 500, 600, 700
- **Orbitron** — logo ("KAI"), special hero headers only
  - Do not use Orbitron for body, cards, or descriptions

### Scale

| Element | Class |
|---|---|
| Hero h1 | `text-3xl md:text-5xl lg:text-7xl font-extralight` |
| Section h2 | `text-3xl font-semibold mb-10` |
| Card title | `text-xl font-medium` |
| Body | `text-base font-light` (Nunito 300) |
| Label/badge | `text-sm font-light` |
| Stat number | `text-3xl font-bold text-primary` |

Headings default to `font-light` (300) with `tracking-tight`. Never use `font-black` or `font-extrabold` outside of stat blocks.

---

## Layout & Spacing

```
Container: max-w-[1400px] px-4 sm:px-6 lg:px-8 mx-auto
Section padding: py-24 (96px) or py-32 (128px)
Card padding: p-6 or p-8
Grid gap: gap-6 or gap-8
```

### Section grid

- Projects: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`
- About: 2-column (`md:w-2/5` + `md:w-3/5`)
- Skills: `md:grid-cols-2 gap-12`
- Contact: `grid grid-cols-1 lg:grid-cols-2`

Sticky nav height is **80px** — use this as scroll offset (`useSmoothScroll` already handles it).

---

## Components — Required Patterns

### Buttons

Always use `PrimaryButton` and `SecondaryButton` components. Do not create ad-hoc `<button>` elements with manual styling.

```tsx
// Primary CTA
<PrimaryButton rounded="full" icon={<ArrowRight />}>
  View Project
</PrimaryButton>

// Secondary (on dark backgrounds)
<SecondaryButton>Download Resume</SecondaryButton>
```

- Primary: cyan background, `hover:-translate-y-0.5`, shadow
- Secondary: transparent, white border, `hover:bg-white/20`

### Project Card

Use the existing `ProjectCard` component. Do not build a new one. Card behavior:
- Hover: `shadow-xl` + `-translate-y-2` on card
- Image: `group-hover:scale-110` (110% zoom)
- Title: `group-hover:text-primary`
- Arrow icon: fades in from right (`opacity-0 group-hover:opacity-100`)

### Tags / Badges

Inline pill pattern:

```tsx
<span className="px-3 py-1 text-sm border border-border/50 hover:border-primary hover:text-primary hover:scale-105 transition-all duration-300">
  Tag Name
</span>
```

### Icon + Text block (used in contact, about)

```tsx
<div className="flex items-center gap-3">
  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
    <Icon className="h-6 w-6 text-primary" />
  </div>
  <div>
    <p className="text-white/60 text-sm">Label</p>
    <a className="text-white hover:text-primary transition-colors duration-300">Content</a>
  </div>
</div>
```

### Stat block (About section)

```tsx
<div className="text-center">
  <h3 className="text-3xl font-bold text-primary mb-1">3+</h3>
  <p className="text-muted-foreground text-sm font-light">Years Experience</p>
</div>
```

### Glassmorphism card (Contact/dark sections)

```tsx
<div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
  ...
</div>
```

---

## Animations & Transitions

### Standard transition

```css
transition-all duration-300 ease-out
```

Apply this to all interactive elements (cards, links, buttons, icons).

### Hover lift

```css
hover:-translate-y-0.5   /* buttons */
hover:-translate-y-1     /* links, small elements */
hover:-translate-y-2     /* project cards */
```

### Fade-in on load

```css
.animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
/* Delay classes: animate-delay-100 through animate-delay-500 */
```

Stagger delays by 100ms increments for lists of items.

### Animated underline (nav links)

```css
.animated-underline::after {
  content: '';
  display: block;
  width: 0;
  height: 2px;
  background: currentColor;
  transition: width 0.3s ease;
}
.animated-underline:hover::after { width: 100%; }
```

### Do not use

- Framer Motion (not installed)
- CSS `@keyframes` not already defined in `globals.css`
- Spin/pulse on non-loading elements

---

## Navigation & Routing

- Single-page app with hash anchors: `/#about`, `/#projects`, `/#contact`
- Use `<SmoothScrollLink href="#section-id">` for all internal nav links
- On project detail pages, use `<ScrollToHash />` component to handle direct URL access
- Scroll offset is always **80px** (sticky nav height)

---

## Globals & CSS Custom Properties

Custom utility classes in `app/globals.css` — use them, do not duplicate:

| Class | Behavior |
|---|---|
| `.gradient-heading` | primary color + light font weight |
| `.section-title` | `text-3xl font-light` |
| `.animated-card` | shadow + lift on hover |
| `.animated-underline` | bottom border slide-in on hover |
| `.gradient-bg` | blue/purple gradient (for contact-style sections) |

---

## Accessibility

- Semantic HTML: `<header>`, `<main>`, `<section id="...">`, `<footer>`
- Decorative elements (canvas, SVG backgrounds): `aria-hidden="true"`
- Icon-only buttons: `aria-label="Platform name"`
- Color contrast: always ensure primary cyan on white/dark meets WCAG AA

---

## What Not to Do

- Do not add new Google Fonts — Nunito and Orbitron are the only permitted typefaces
- Do not introduce MUI, Chakra, Bootstrap, or any other component library
- Do not use inline `style={{}}` for colors or spacing — use Tailwind classes
- Do not hardcode hex values — use Tailwind tokens (`text-primary`, `bg-accent`)
- Do not create new CSS files — all custom styles go in `app/globals.css`
- Do not add comments explaining what code does — code should be self-documenting
- Do not add error handling for scenarios that cannot happen
- Do not create `README.md` or additional documentation files — update this file instead
- Do not use Framer Motion — all animations are CSS/Tailwind
- Do not modify `next.config.mjs` image optimization settings (must stay unoptimized for static export)
