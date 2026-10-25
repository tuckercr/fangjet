import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

export default function NotFound() {
  return (
    <div>
      <SEO title="Page not found" noindex />
      <section className="hero-gradient border-b border-border px-8 pb-16 narrow:px-5 narrow:pb-12">
        <div className="mx-auto max-w-page pt-14">
          <span className="fj-label">// 404</span>
          <h1 className="mb-5 text-6xl leading-tight font-bold narrow:text-4xl">Page not found.</h1>
          <p className="m-0 text-lg leading-relaxed text-muted">
            That URL doesn't exist. Head back to the <Link to="/">home page</Link> or see my{' '}
            <Link to="/projects">projects</Link>.
          </p>
        </div>
      </section>
    </div>
  )
}
