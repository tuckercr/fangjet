# fangjet.com: project notes

Portfolio and studio site for Colin Tucker and FangJet LLC, live at https://fangjet.com.

## Stack and why

- **React + Vite**, chosen over Next.js on purpose: Colin is learning React and wants to see what React
  itself is doing before adding a framework. **React Router** for pages.
- **Prerendered**: `npm run build` does a client build, an SSR build of `src/entry-server.jsx`, then
  `scripts/prerender.mjs` writes every route to static HTML in `dist/`. `src/main.jsx` hydrates when the
  page already has content.
- **Plain CSS**, no Tailwind or CSS-in-JS: `src/styles/global.css` holds the tokens and resets, and each
  component has its own stylesheet.
- **No TypeScript** for now, to keep the learning surface small.
- **SEO**: every page renders `<SEO title description path>` (`src/components/SEO.jsx`, react-helmet-async)
  for its title, description, canonical URL and social previews. Public pages are listed in
  `public/sitemap.xml`.
- **Formspree** handles the contact form.

## Hosting

- Firebase Hosting, project `fangjet-web` (`https://fangjet-web.web.app`); DNS is on Cloudflare.
- `firebase.json` serves `dist/`, rewrites unknown paths to the app, sets caching headers, and
  301-redirects the old WordPress URLs `/about` and `/services` to `/`.

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

From `src/styles/global.css`:

```css
--bg:           #0d1117
--surface:      #161b22
--border:       #30363d
--accent:       #148526
--accent-hover: #1bbc68
--accent-bright:#18e699
--text:         #e6edf3
--muted:        #8b949e
--max-width:    1080px
--mono:         'JetBrains Mono', …
--sans:         'Inter', …
```

## Writing style

- No em dashes in site copy; use a colon, comma or full stop.
- Keep claims plain and accurate (no superlatives like "optimal").
- No AI attribution in commits, PRs or copy.
