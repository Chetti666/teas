# teas-web

Static portfolio site for Chilean contemporary artist TEAS. Content is in **Spanish**.

## Tech

- **Astro 5** (static output, SSG), **React 19**, **Tailwind CSS 3**, deployed via **Vercel**
- TypeScript via `astro/tsconfigs/strict`, React JSX transform
- Google Fonts: **Syne** (display) + **DM Sans** (body) loaded in `src/layouts/BaseLayout.astro`

## Commands

| Action     | Command             |
| ---------- | ------------------- |
| Dev server | `npm run dev`       |
| Build      | `npm run build`     |
| Preview    | `npm run preview`   |

No tests, no linter, no typecheck script.

## Content

All site data lives in JSON files under `src/data/`:
- `obras.json` — artwork catalog (id, title, image, alt, year, technique, dimensions)
- `productos.json` — shop items (price in CLP, stock, edition info)
- `exhibiciones.json` — exhibition history (title, venue, city, year, description)

Images go in `public/images/` (`.jpeg` format) and are referenced as `/images/...` in JSON.

## Tailwind theme

Custom colors: `surface` (#F5F0EB), `ink` (#1A1A1A), `muted` (#6B6258), `stone` (#D4CEC6), `accent` (#8B7E74).
Custom `fontFamily`: `display` (Syne), `body` (DM Sans).
Custom shadows: `shadow-brush`, `shadow-brush-lg`, `shadow-frame`.
Custom animations: `animate-reveal`, `animate-reveal-slow`, `animate-fade`.

## Pages

- `/` — home with hero + recent works
- `/trabajo` — full gallery
- `/exhibiciones` — grouped by year (descending)
- `/mural` — mural projects (placeholder)
- `/shop` — print store
- `/contacto` — contact form (client-side only, no backend; social links are `#` placeholders)

## Conventions

- Components use `.astro` (no React components in use despite React dependency). Headers use `font-display`; everything else uses `font-body`.
- Mobile menu uses vanilla JS inline `<script>` in `Header.astro`.
- Reveal animations use `animate-reveal` CSS class or inline `style` with `animation-delay` (stagger by `index` prop).
