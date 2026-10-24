import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import SEO from '../components/SEO'

export default function NotFound() {
  return (
    <div className="contact">
      <SEO title="Page not found" path="/" />
      <Helmet>
        <meta name="robots" content="noindex" />
      </Helmet>
      <section className="contact-hero">
        <div className="contact-hero-inner">
          <span className="fj-label">// 404</span>
          <h1>Page not found.</h1>
          <p className="contact-lead">
            That URL doesn't exist. Head back to the <Link to="/">home page</Link> or see my{' '}
            <Link to="/projects">projects</Link>.
          </p>
        </div>
      </section>
    </div>
  )
}
