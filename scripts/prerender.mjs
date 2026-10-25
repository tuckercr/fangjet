// Prerenders each route to static HTML after `vite build` so crawlers and link previews
// see per-page titles and content. Run via `npm run build`.
import fs from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const dist = path.resolve('dist')
const server = path.resolve('dist-server/entry-server.js')
const { render } = await import(pathToFileURL(server).href)

let template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8')
// Drop the default tags; each page supplies its own through <SEO>.
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

// Fail the build instead of shipping a page with missing or duplicated SEO tags.
const BASE = 'https://fangjet.com'
const count = (html, re) => (html.match(re) || []).length

function check(url, file, html, body) {
  const is404 = url === '/__404__'
  const problems = []
  const once = (label, re) => {
    const n = count(html, re)
    if (n !== 1) problems.push(`${label}: found ${n}, expected 1`)
  }
  once('<title>', /<title>/g)
  once('meta description', /<meta name="description"/g)
  once('og:title', /<meta property="og:title"/g)
  once('og:url', /<meta property="og:url"/g)
  once('og:image', /<meta property="og:image"/g)
  once('twitter:card', /<meta name="twitter:card"/g)
  if (is404) {
    once('noindex', /<meta name="robots" content="noindex"/g)
  } else {
    once('canonical', /<link rel="canonical"/g)
    const want = `${BASE}${url === '/' ? '/' : url}`
    if (!html.includes(`<link rel="canonical" href="${want}"`)) problems.push(`canonical should be ${want}`)
    if (html.includes('name="robots"')) problems.push('unexpected robots meta')
  }
  if (/<(title|meta)\b/.test(body)) problems.push('head tags left in the page body')
  if (problems.length) {
    console.error(`prerender: ${file} (${url}) failed SEO checks:\n  - ${problems.join('\n  - ')}`)
    process.exit(1)
  }
}

for (const [url, file] of Object.entries(pages)) {
  const { html, head } = render(url === '/__404__' ? '/404-not-found' : url)
  const out = template
    .replace('</head>', `    ${preloads}\n    ${head}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${html}</div>`)
  check(url, file, out, html)
  fs.writeFileSync(path.join(dist, file), out)
  console.log('prerendered', url, '->', file)
}
fs.rmSync(path.resolve('dist-server'), { recursive: true })
