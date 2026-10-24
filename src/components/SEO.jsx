import { Helmet } from 'react-helmet-async'

const BASE = 'https://fangjet.com'
const DEFAULT_DESC = 'Senior Android engineer based near Knoxville, TN. 10+ years shipping Kotlin and Compose apps to millions of users. Open to full-time roles.'
const DEFAULT_IMG = `${BASE}/preview-image.png`

export default function SEO({ title, description, path = '', jsonLd }) {
  const fullTitle = title ? `${title} | FangJet` : 'Colin Tucker | Senior Android Engineer'
  const desc = description || DEFAULT_DESC
  const url = `${BASE}${path}`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:image" content={DEFAULT_IMG} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={DEFAULT_IMG} />

      {jsonLd && <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>}
    </Helmet>
  )
}
