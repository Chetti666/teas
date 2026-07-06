# teas-web

Static portfolio site for Chilean contemporary artist TEAS. Content is **Spanish**.

## Stack

- **Astro 5** (SSG via `@astrojs/vercel`, `output: 'static'`), **React 19**, **Tailwind CSS 3**, deployed to Vercel
- TypeScript via `astro/tsconfigs/strict`, React JSX transform
- Image optimization via `astro/assets/services/sharp` at build time
- Font: **Helvetica Neue** system stack (no external font loads)

## Commands

| Action   | Command             |
|----------|---------------------|
| Dev      | `npm run dev`       |
| Build    | `npm run build`     |
| Preview  | `npm run preview`   |

No tests, no linter, no typecheck script.

## Content

All data in `src/data/` JSON files:
- `obras.json` — artwork catalog (id, title, image, alt, year, technique, dimensions)
- `productos.json` — shop items (price in CLP, stock, edition, technique, dimensions, signature)
- `exhibiciones.json` — exhibition history (title, venue, city, year, description)

Images in `public/images/` use **`.jpeg`** extension, referenced as `/images/...` in JSON.

## Tailwind theme (`tailwind.config.mjs`)

- Colors: `surface` (#FFFFFF), `ink` (#000000), `muted` (#6B6258), `stone` (#D4CEC6), `accent` (#8B7E74)
- Fonts: both `display` and `body` use `'Helvetica Neue'` system stack
- Shadows: `shadow-brush`, `shadow-brush-lg`, `shadow-subtle`, `shadow-subtle-lg`, `shadow-frame`
- Animations: `animate-reveal`, `animate-reveal-slow`, `animate-fade`

## Pages

- `/` — hero + recent works (first 3 `obras.json` entries)
- `/trabajo` — full gallery (all `obras.json`, rendered via `ArtCard.astro`)
- `/exhibiciones` — grouped by year descending, inline staggered animation
- `/mural` — mural portfolio with click-to-open process gallery modal (vanilla JS)
- `/shop` — print store; prices in CLP formatted via `toLocaleString('es-CL')`
- `/bio` — artist biography + statement
- `/contacto` — form with `alert()` feedback, no backend

## Conventions

- All components are `.astro` (React is a dependency but never used directly).
- Mobile menu toggle in `Header.astro` uses inline vanilla JS `<script>`.
- `src/styles/global.css` adds a `.reveal` utility (`opacity: 0`) and sets default `border-color` to `stone`.
- Page sections use `max-w-6xl mx-auto px-6` wrapper, section padding `py-24`, separator `h-px w-16 bg-stone`.
- Active nav link detection: `currentPath.startsWith(link.href)` in `Header.astro`.
- Layout/SEO metadata (OG, Twitter cards, JSON-LD) lives in `BaseLayout.astro` — each page passes `title`, `description`, `canonical`, optional `ogImage`/`ogType`.
