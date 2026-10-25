// Prerenders each route to static HTML after `vite build` so crawlers and link previews
// see per-page titles and content. Run via `npm run build`.
import fs from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const dist = path.resolve('dist')
const server = path.resolve('dist-server/entry-server.js')
const { render } = await import(pathToFileURL(server).href)

let template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8')
// Drop the default tags; each page supplies its own through Helmet.
template = template
  .replace(/<title>[\s\S]*?<\/title>\s*/, '')
  .replace(/<meta name="description"[^>]*>\s*/, '')
  .replace(/<meta property="og:(?!type)[^>]*>\s*/g, '')
  .replace(/<meta property="og:type"[^>]*>\s*/, '')
  .replace(/<meta name="twitter:[^>]*>\s*/g, '')

// Preload the fonts used above the fold. Their filenames are hashed, so look them up in dist/.
const assets = fs.readdirSync(path.join(dist, 'assets'))
const preloads = ['inter-latin-400-normal', 'inter-latin-600-normal', 'jetbrains-mono-latin-400-normal']
  .map(prefix => assets.find(f => f.startsWith(prefix) && f.endsWith('.woff2')))
  .filter(Boolean)
  .map(f => `<link rel="preload" href="/assets/${f}" as="font" type="font/woff2" crossorigin />`)
  .join('\n    ')

const pages = {
  '/': 'index.html',
  '/ai': 'ai.html',
  '/projects': 'projects.html',
  '/contact': 'contact.html',
  '/privacy-policy': 'privacy-policy.html',
  '/weather': 'weather.html',
  '/__404__': '404.html',
}

for (const [url, file] of Object.entries(pages)) {
  const { html, head } = render(url === '/__404__' ? '/404-not-found' : url)
  const out = template
    .replace('</head>', `    ${preloads}\n    ${head}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${html}</div>`)
  fs.writeFileSync(path.join(dist, file), out)
  console.log('prerendered', url, '->', file)
}
fs.rmSync(path.resolve('dist-server'), { recursive: true })
