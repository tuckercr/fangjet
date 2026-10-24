# fangjet.com

The source for [fangjet.com](https://fangjet.com), the site of Colin Tucker and FangJet LLC: Android and
iOS apps, built natively.

## Stack

- **React 19** and **Vite**, with **React Router** for the pages
- **Prerendered**: the build renders every route to plain HTML (`scripts/prerender.mjs`), so pages
  load fast and search engines see real content. React then hydrates it in the browser
- **Per-page SEO**: titles, descriptions, canonical URLs and social previews via `react-helmet-async`
  (`src/components/SEO.jsx`), plus `sitemap.xml` and `robots.txt`
- **Plain CSS**, no framework: `src/styles/global.css` and a stylesheet per component
- **Formspree** for the contact form
- **Firebase Hosting**, with **Cloudflare** for DNS

## Running it

```bash
npm install
npm run dev       # local dev server
npm run lint      # oxlint
npm run build     # client build, SSR build, then prerender every route into dist/
npm run preview   # serve dist/ locally
```

## Deploying

```bash
npm run build
firebase deploy --only hosting
```

`firebase.json` serves `dist/`, sets caching headers, sends unknown paths to the app, and
301-redirects the old WordPress URLs (`/about`, `/services`) to the home page.

## Layout

```
src/
  pages/             one component per route (Home, Projects, AI, Contact, the privacy policies)
  components/        Nav, Footer, ProjectCard, SEO and friends
  styles/            global styles and design tokens
  entry-server.jsx   SSR entry used by the prerender step
public/              copied as-is: sitemap, robots.txt, résumé, images
scripts/             prerender.mjs
```

© FangJet LLC. All rights reserved.
