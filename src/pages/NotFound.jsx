import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import SEO from '../components/SEO'

export default function NotFound() {
  return (
    <div>
      <SEO title="Page not found" path="/" />
      <Helmet>
        <meta name="robots" content="noindex" />
      </Helmet>
      <section className="hero-gradient border-b border-border px-8 pb-16 narrow:px-5 narrow:pb-12">
        <div className="mx-auto max-w-page pt-14">
          <span className="fj-label">// 404</span>
          <h1 className="mb-5 text-[clamp(2.4rem,5vw,3.4rem)] font-bold">Page not found.</h1>
          <p className="m-0 text-[1.1rem] leading-[1.75] text-muted">
            That URL doesn't exist. Head back to the <Link to="/">home page</Link> or see my{' '}
            <Link to="/projects">projects</Link>.
          </p>
        </div>
      </section>
    </div>
  )
}
