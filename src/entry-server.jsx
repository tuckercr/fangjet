import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.jsx'

// React 19 hoists <title>/<meta>/<link> that Helmet renders, so renderToString emits them
// ahead of the markup. Split them back out so they can be placed in <head>.
export function render(url) {
  const out = renderToString(
    <HelmetProvider>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </HelmetProvider>,
  )
  const m = out.match(/^((?:<(?:title|meta|link)\b[^>]*?(?:\/>|>[^<]*<\/title>|>))*)/)
  const head = m ? m[1] : ''
  return { html: out.slice(head.length), head }
}
