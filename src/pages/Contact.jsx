import { useForm, ValidationError } from '@formspree/react'
import SEO from '../components/SEO'
import './Contact.css'

export default function Contact() {
  const [state, handleSubmit] = useForm('xljennko')

  return (
    <div className="contact">
      <SEO
        title="Contact"
        description="Get in touch with Colin Tucker, Senior Android & iOS engineer in Knoxville, TN. Open to senior and staff mobile roles."
        path="/contact"
      />

      <section className="contact-hero">
        <div className="contact-hero-inner">
          <span className="fj-label">// get in touch</span>
          <h1>Let's talk.</h1>
          <p className="contact-lead">
            Hiring for a mobile role, or just want to talk shop? Tell me what
            you're working on and I'll give you an honest read. No sales pitch.
          </p>
        </div>
      </section>

      <section className="contact-body">
        <div className="contact-body-inner">

          <div className="contact-left">
            <span className="fj-label">// direct</span>
            <ul className="contact-list">
              <li>
                <span className="contact-list-label">Email</span>
                <a href="mailto:colin@fangjet.com">colin@fangjet.com</a>
              </li>
              <li>
                <span className="contact-list-label">GitHub</span>
                <a href="https://github.com/tuckercr" target="_blank" rel="noopener noreferrer">github.com/tuckercr</a>
              </li>
              <li>
                <span className="contact-list-label">LinkedIn</span>
                <a href="https://www.linkedin.com/in/colin-r-tucker/" target="_blank" rel="noopener noreferrer">linkedin.com/in/colin-r-tucker</a>
              </li>
              <li>
                <span className="contact-list-label">Resume</span>
                <a href="/colin-tucker-resume.pdf" target="_blank" rel="noopener noreferrer">colin-tucker-resume.pdf</a>
              </li>
              <li>
                <span className="contact-list-label">Location</span>
                <span>Knoxville, TN</span>
              </li>
            </ul>
          </div>

          <div className="contact-right">
            <span className="fj-label">// send a message</span>
            {state.succeeded ? (
              <div className="contact-thanks">
                <p>Got it. I'll be in touch shortly.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" required placeholder="Your name" />
                <ValidationError field="name" errors={state.errors} className="contact-field-error" />

                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" required placeholder="your@email.com" />
                <ValidationError field="email" errors={state.errors} className="contact-field-error" />

                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" required rows={6} placeholder="Tell me what you're building..." />
                <ValidationError field="message" errors={state.errors} className="contact-field-error" />

                <button type="submit" className="fj-btn fj-btn-primary" disabled={state.submitting}>
                  {state.submitting ? 'Sending…' : 'Send message'}
                </button>
              </form>
            )}
          </div>

        </div>
      </section>
    </div>
  )
}
