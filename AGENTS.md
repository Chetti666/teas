# teas-web

Static portfolio site for Chilean contemporary artist TEAS. Content is **Spanish**.

## Stack

- **Astro 5** (SSG via `@astrojs/vercel`, `output: 'static'`), **React 19**, **Tailwind CSS 3**, deployed to Vercel
- TypeScript via `astro/tsconfigs/strict`, React JSX transform
- Image optimization via `astro/assets/services/sharp` at build time
- Font: **Helvetica Neue** system stack (no external font loads)
- Site URL: `https://teas.cl` (configured in `astro.config.mjs`)

## Commands

| Action   | Command             |
|----------|---------------------|
| Dev      | `npm run dev`       |
| Build    | `npm run build`     |
| Preview  | `npm run preview`   |

No tests, no linter, no typecheck script.

## Content

All data in `src/data/` JSON files:
- `obras.json` — artwork catalog
- `productos.json` — shop items (prices in CLP)
- `exhibiciones.json` — exhibition history

Images in `public/images/` use **`.jpeg`** extension, referenced as `/images/...` in JSON.
Mural process images live in `public/images/murales/` and use a mix of `.jpeg` and `.jpg`.

## Pages

| Route         | Description |
|---------------|-------------|
| `/`           | Hero + 3 random obras (picked at runtime via `sort(() => Math.random() - 0.5).slice(0, 3)`) |
| `/trabajo`    | Full gallery (all `obras.json`, rendered via `ArtCard.astro`) |
| `/exhibiciones` | Grouped by year descending, inline staggered animation |
| `/mural`      | Mural portfolio with click-to-open process gallery modal |
| `/shop`       | Print store (CLP prices formatted via `toLocaleString('es-CL')`); shows "Próximamente disponible" — no purchase flow |
| `/bio`        | Artist biography + statement |
| `/contacto`   | Form with `alert()` feedback, no backend |

## Tailwind theme (`tailwind.config.mjs`)

- Colors: `surface` (#FFFFFF), `ink` (#000000), `muted` (#6B6258), `stone` (#D4CEC6), `accent` (#8B7E74)
- Fonts: both `display` and `body` use `'Helvetica Neue'` system stack
- Shadows: `shadow-brush`, `shadow-brush-lg`, `shadow-subtle`, `shadow-subtle-lg`, `shadow-frame`
- Animations: `animate-reveal`, `animate-reveal-slow`, `animate-fade`

## Conventions

- All components are `.astro` (React is installed but unused in components).
- Mobile menu toggle in `Header.astro` uses inline vanilla JS `<script>`.
- `src/styles/global.css` adds a `.reveal` utility (`opacity: 0`) and sets default `border-color` to `stone`.
- Page sections use `max-w-6xl mx-auto px-6` wrapper, section padding `py-24`, separator `h-px w-16 bg-stone`.
- Active nav link detection: `currentPath.startsWith(link.href)` in `Header.astro`.
- Layout/SEO metadata (OG, Twitter cards) lives in `BaseLayout.astro`. Individual pages add page-specific JSON-LD via `<script set:html>`.
- Mural page modal uses `<script is:inline>` with vanilla JS, data duplicated in frontmatter and inline script.
- `public/sitemap.xml` and `public/robots.txt` are hand-maintained (not auto-generated).
- Newsletter and contact forms use `alert()` for feedback — no backend integration.
- Root-level `dist/` is build output, `.astro/` is cache; both gitignored.
