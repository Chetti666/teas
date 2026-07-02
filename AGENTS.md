# teas-web

Static portfolio site for Chilean contemporary artist TEAS. Content is **Spanish**.

## Stack

- **Astro 5** (SSG via `@astrojs/vercel`, `output: 'static'`), **React 19**, **Tailwind CSS 3**, deployed to Vercel
- TypeScript via `astro/tsconfigs/strict`, React JSX transform
- Image optimization via `astro/assets/services/sharp` at build time
- Google Fonts **Syne** (display) + **DM Sans** (body) in `src/layouts/BaseLayout.astro`

## Commands

| Action   | Command             |
|----------|---------------------|
| Dev      | `npm run dev`       |
| Build    | `npm run build`     |
| Preview  | `npm run preview`   |
| Astro CLI| `npm run astro`     |

No tests, no linter, no typecheck script.

## Content

All data in `src/data/` JSON files:
- `obras.json` — artwork catalog (id, title, image, alt, year, technique, dimensions)
- `productos.json` — shop items (price in CLP, stock, edition, technique, dimensions, signature)
- `exhibiciones.json` — exhibition history (title, venue, city, year, description)

Images in `public/images/` use **`.jpeg`** extension, referenced as `/images/...` in JSON.

## Tailwind theme

Defined in `tailwind.config.mjs`:
- Colors: `surface` (#F5F0EB), `ink` (#1A1A1A), `muted` (#6B6258), `stone` (#D4CEC6), `accent` (#8B7E74)
- Fonts: `font-display` (Syne), `font-body` (DM Sans)
- Shadows: `shadow-brush`, `shadow-brush-lg`, `shadow-frame`
- Animations: `animate-reveal`, `animate-reveal-slow`, `animate-fade`

## Pages

- `/` — hero + recent works (first 3 `obras.json` entries)
- `/trabajo` — full gallery (all `obras.json`, rendered via `ArtCard.astro`)
- `/exhibiciones` — grouped by year descending, inline staggered animation
- `/mural` — placeholder with hardcoded content (no JSON data file)
- `/shop` — print store; prices in CLP formatted via `toLocaleString('es-CL')`
- `/contacto` — form with `alert()` feedback, no backend; social links are `#` placeholders

## Conventions

- All components are `.astro` (React is a dependency but no React components in use).
- Mobile menu in `Header.astro` uses inline vanilla JS `<script>`.
- Reveal animations use `animate-reveal` CSS class or inline `style` with `animation-delay` (staggered 100–150ms).
- `src/styles/global.css` adds a `.reveal` utility (`opacity: 0`) and sets default `border-color` to `stone`.
- Font usage: headings `font-display` (Syne), body `font-body` (DM Sans).
