import { useForm, ValidationError } from '@formspree/react'
import SEO from '../components/SEO'

const listLink = 'font-mono text-base leading-relaxed text-accent-hover transition-colors duration-150 hover:text-accent-bright'
const listLabel = 'font-mono text-xs leading-relaxed tracking-wider text-muted uppercase'
const field =
  'resize-y rounded-md border border-border bg-surface px-3.5 py-3 font-sans text-base leading-tight text-text outline-none ' +
  'transition-colors duration-150 placeholder:text-faint focus:border-accent-hover'
const fieldLabel = 'font-mono text-sm leading-relaxed text-muted'
const fieldError = 'font-mono text-sm leading-relaxed text-error'

export default function Contact() {
  const [state, handleSubmit] = useForm('xljennko')

  return (
    <div>
      <SEO
        title="Contact"
        description="Get in touch with Colin Tucker, Senior Android & iOS engineer near Knoxville, TN. Open to senior and staff mobile roles."
        path="/contact"
      />

      <section className="hero-gradient border-b border-border px-8 pb-16 narrow:px-5 narrow:pb-12">
        <div className="mx-auto max-w-page pt-14">
          <span className="fj-label">// get in touch</span>
          <h1 className="mb-5 text-6xl leading-tight font-bold narrow:text-4xl">Let's talk.</h1>
          <p className="m-0 text-lg leading-relaxed text-muted">
            Hiring for a mobile role, or just want to talk shop? Tell me what
            you're working on and I'll give you an honest read. No sales pitch.
          </p>
        </div>
      </section>

      <section className="px-8 pt-16 pb-20 narrow:px-5 narrow:pt-10 narrow:pb-16">
        <div className="mx-auto flex max-w-page items-start gap-20 narrow:flex-col narrow:gap-12">

          <div className="w-64 flex-none narrow:w-full">
            <span className="fj-label">// direct</span>
            <ul className="flex flex-col gap-5">
              <li className="flex flex-col gap-1">
                <span className={listLabel}>Email</span>
                <a href="mailto:colin@fangjet.com" className={listLink}>colin@fangjet.com</a>
              </li>
              <li className="flex flex-col gap-1">
                <span className={listLabel}>GitHub</span>
                <a href="https://github.com/tuckercr" target="_blank" rel="noopener noreferrer" className={listLink}>github.com/tuckercr</a>
              </li>
              <li className="flex flex-col gap-1">
                <span className={listLabel}>LinkedIn</span>
                <a href="https://www.linkedin.com/in/colin-r-tucker/" target="_blank" rel="noopener noreferrer" className={listLink}>linkedin.com/in/colin-r-tucker</a>
              </li>
              <li className="flex flex-col gap-1">
                <span className={listLabel}>Resume</span>
                <a href="/colin-tucker-resume.pdf" target="_blank" rel="noopener noreferrer" className={listLink}>colin-tucker-resume.pdf</a>
              </li>
              <li className="flex flex-col gap-1">
                <span className={listLabel}>Location</span>
                <span className="font-mono text-base leading-relaxed text-text">Knoxville, TN</span>
              </li>
            </ul>
          </div>

          <div className="flex-1">
            <span className="fj-label">// send a message</span>
            {state.succeeded ? (
              <div className="rounded-lg border border-accent bg-surface px-6 py-7">
                <p className="m-0 font-mono text-base leading-relaxed text-accent-bright">Got it. I'll be in touch shortly.</p>
              </div>
            ) : (
              <form className="flex flex-col gap-1.5" onSubmit={handleSubmit}>
                <label htmlFor="name" className={fieldLabel}>Name</label>
                <input id="name" name="name" type="text" required placeholder="Your name" className={field} />
                <ValidationError field="name" errors={state.errors} className={fieldError} />

                <label htmlFor="email" className={`${fieldLabel} mt-4`}>Email</label>
                <input id="email" name="email" type="email" required placeholder="your@email.com" className={field} />
                <ValidationError field="email" errors={state.errors} className={fieldError} />

                <label htmlFor="message" className={`${fieldLabel} mt-4`}>Message</label>
                <textarea id="message" name="message" required rows={6} placeholder="Tell me what you're building..." className={field} />
                <ValidationError field="message" errors={state.errors} className={fieldError} />

                <button type="submit" className="fj-btn fj-btn-primary mt-5 self-start" disabled={state.submitting}>
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
