# fangjet.com: project notes

Portfolio and studio site for Colin Tucker and FangJet LLC, live at https://fangjet.com.

## Stack and why

- **React + Vite**, chosen over Next.js on purpose: Colin is learning React and wants to see what React
  itself is doing before adding a framework. **React Router** for pages.
- **Prerendered**: `npm run build` does a client build, an SSR build of `src/entry-server.jsx`, then
  `scripts/prerender.mjs` writes every route to static HTML in `dist/`. `src/main.jsx` hydrates when the
  page already has content.
- **Tailwind CSS v4**, through the `@tailwindcss/vite` plugin; no CSS-in-JS and no per-component
  stylesheets. Components style themselves with utility classes. `src/styles/global.css` is the only
  stylesheet and holds:
  - `@import "tailwindcss" source("..")` (only `src/` is scanned for class names).
  - A `@theme` block with the design tokens (below). The default colour palette is cleared, so only the
    site's colours exist: `bg-bg`, `bg-surface`, `border-border`, `text-text`, `text-muted`,
    `text-accent`, `text-accent-hover`, `text-accent-bright` and the others listed below, plus
    `font-mono`, `font-sans`, `max-w-page`, `animate-blink` and `animate-crt-blink`. Every colour is a
    token: add one to `@theme` rather than writing a hex value in a class. The only literal colours
    left are the translucent black and green in shadows and glows.
  - Custom variants: `narrow:` (max-width 768px) and `phone:` (max-width 640px), matching the old
    breakpoints exactly, and `hover:` redefined as plain `:hover`.
  - `@layer base`: body defaults, element styles (`p`, `a`, headings) and the few Preflight resets
    the site relied on (form controls keep `line-height: normal`).
  - `@layer components`: `.fj-label` and `.fj-btn` / `.fj-btn-primary` / `.fj-btn-secondary` (shared by
    most pages), `.legal-prose` for the long text of the two privacy pages, and the CRT widget's glow
    and scanlines (`.crt`). `@utility hero-gradient` is the green hero background.
  - Sizes and spacing use Tailwind's default scale (`text-lg`, `leading-relaxed`, `max-w-2xl`, `py-1`).
    Named font sizes also set a line-height, so pair them with a `leading-*` class when the text
    should keep the site's looser line spacing. Arbitrary values are kept only where a comment says
    why (the CRT geometry, the cursor height, two grid templates).
- **No TypeScript** for now, to keep the learning surface small.
- **SEO**: every page renders `<SEO title description path>` (`src/components/SEO.jsx`)
  for its title, description, canonical URL and social previews. It renders plain `<title>`, `<meta>` and
  `<link>` tags, which React 19 hoists into `<head>`; there is no head library. `scripts/prerender.mjs`
  fails the build if a page has a missing or duplicated tag. Public pages are listed in
  `public/sitemap.xml`.
- **Formspree** handles the contact form.

## Hosting

- Firebase Hosting, project `fangjet-web` (`https://fangjet-web.web.app`); DNS is on Cloudflare.
- `firebase.json` serves `dist/`, answers unknown paths with the prerendered 404 page, sets caching and
  security headers, and 301-redirects the old WordPress URLs `/about` and `/services` to `/`.

## Deploying

```bash
npm run lint
npm run build
firebase deploy --only hosting
```

Pushing to GitHub does not deploy. Before deploying, check the live site matches `main` (build `main`
and compare its `dist/assets/index-*.js` name with the one fangjet.com serves), so a deploy never
publishes or drops uncommitted work.

## Pages

- `/`, `/projects`, `/ai`, `/contact`, `/privacy-policy`: linked from the nav or footer.
- `/weather`: the Furcast Weather app's privacy policy. Linked from the apps and their store listings
  only, deliberately not from the site's navigation, footer or sitemap.

## Design tokens

The `@theme` block in `src/styles/global.css` (each also exists as a CSS variable, e.g.
`var(--color-muted)`):

```css
--color-bg:            #0d1117   /* bg-bg */
--color-surface:       #161b22   /* bg-surface */
--color-border:        #30363d   /* border-border */
--color-accent:        #148526   /* bg-accent, border-accent */
--color-accent-hover:  #1bbc68   /* text-accent-hover */
--color-accent-bright: #18e699   /* text-accent-bright */
--color-text:          #e6edf3   /* text-text */
--color-muted:         #8b949e   /* text-muted */
--color-faint:         #484f58   /* placeholder:text-faint */
--color-surface-raised: #1c2128  /* bg-surface-raised: the AI terminal's title bar */
--color-accent-deep:   #10540e   /* bg-accent-deep: project tags */
--color-hero-tint:     #0f1f14   /* middle of the hero gradient */
--color-error:         #f87171   /* text-error */
--color-white:         #fff      /* with an opacity only: hover:bg-white/4 */
--color-info, -info-bg, -info-border   /* the project card status badge */
--color-window-close, -minimize, -zoom /* macOS buttons on the AI terminal */
--color-crt-*          /* the CRT widget: rim, frame, case, header, header-edge, label,
                          screen, text, dim, bright */
--container-page:      1080px    /* max-w-page */
--font-mono:           'JetBrains Mono', …
--font-sans:           'Inter', …
```

## Writing style

- No em dashes in site copy; use a colon, comma or full stop.
- Keep claims plain and accurate (no superlatives like "optimal").
- No AI attribution in commits, PRs or copy.
