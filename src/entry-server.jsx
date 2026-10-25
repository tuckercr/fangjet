import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import App from './App.jsx'

// React 19 hoists the <title>/<meta>/<link> tags that SEO.jsx renders, so renderToString emits them
// ahead of the markup. Split them back out so the prerender step can place them in <head>.
export function render(url) {
  const out = renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>,
  )
  const m = out.match(/^((?:<(?:title|meta|link)\b[^>]*?(?:\/>|>[^<]*<\/title>|>))*)/)
  const head = m ? m[1] : ''
  return { html: out.slice(head.length), head }
}
