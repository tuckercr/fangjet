import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

const TERMINAL_LINES = [
  { type: 'cmd',  text: 'find why reminders fire an hour late after the DST change' },
  { type: 'out',  text: 'Reading ReminderScheduler.kt, AlarmRepository.kt...' },
  { type: 'out',  text: 'Cause: trigger time stored as local time, not UTC' },
  { type: 'cmd',  text: 'write a failing test for that first' },
  { type: 'out',  text: '✓ ReminderSchedulerTest: dstForwardShift (fails)' },
  { type: 'cmd',  text: 'now fix it' },
  { type: 'out',  text: '✓ 1 file changed, test passes' },
  { type: 'cursor', text: '' },
]

const USE_CASES = [
  { title: 'Architecture exploration', body: 'Mapping unfamiliar codebases, finding the patterns, and planning refactors before any code changes.' },
  { title: 'Test generation', body: 'Building unit tests for business logic quickly, then reviewing and hardening what comes out.' },
  { title: 'Code review', body: 'Identifying the design decisions hiding inside a diff, not just the syntax.' },
  { title: 'Debugging', body: 'Tracing a bug from the symptom to its cause, and pinning it with a failing test before anything is fixed.' },
  { title: 'Documentation', body: 'First drafts of architecture docs and inline comments, kept honest by someone who knows the code.' },
  { title: 'Build and release', body: 'Diagnosing CI failures, unblocking signing issues, and keeping the pipeline green.' },
]

// Each item names something real and links to it where it is public.
const AGENT_SETUP = [
  {
    title: 'Project rules',
    body: 'Every repo has a CLAUDE.md: the stack, the mistakes already paid for, and standing agreements, like never pushing without my approval and never adding AI attribution to a commit.',
    link: { label: "This site's CLAUDE.md", href: 'https://github.com/tuckercr/fangjet/blob/main/CLAUDE.md' },
  },
  {
    title: 'Memory',
    body: "Decisions and preferences carry from one session to the next, so the agent doesn't relearn them. A note that turns out wrong gets corrected, not trusted.",
  },
  {
    title: 'An MCP server I built',
    body: 'Rolo CRM has an MCP server, so an assistant can look up contacts and propose follow-ups in conversation. Every change it suggests waits for a person to approve it.',
    link: { label: 'Rolo CRM', href: '/projects#rolo-crm' },
  },
  {
    title: 'Connected tools',
    body: 'Slack, SFTP deploys and Firebase skills, so the routine work happens in one place. Anything that leaves the machine, like a push, a deploy or a message, still waits for my go-ahead.',
  },
  {
    title: 'AI in a client product',
    body: 'A diagnostic platform built for a consulting firm: Claude drafts each findings report, and a consultant reviews and edits every one before the client sees it.',
    link: { label: 'Commercial Translation Diagnostic', href: '/projects#commercial-translation-diagnostic' },
  },
]

export default function AI() {
  return (
    <div>
      <SEO
        title="AI"
        description="How Colin Tucker uses AI in software work: agents set up per project, an MCP server built for a CRM, and daily work from architecture to tests and debugging."
        path="/ai"
      />

      <section className="hero-gradient border-b border-border px-8 pb-16 narrow:px-5 narrow:pb-12">
        <div className="mx-auto max-w-page pt-14">
          <span className="fj-label">// ai-assisted development</span>
          <h1 className="my-4 text-6xl leading-tight font-bold text-text narrow:text-4xl">Using AI to build faster<br />without lowering the bar.</h1>
          <p className="mb-12 font-mono text-lg leading-relaxed text-accent-hover">Tools change. Judgment doesn't.</p>

          <div className="max-w-xl overflow-hidden rounded-lg border border-border bg-bg shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
            <div className="flex items-center gap-1.5 border-b border-border bg-surface-raised px-4 py-2.5">
              <span className="size-3 shrink-0 rounded-full bg-window-close" />
              <span className="size-3 shrink-0 rounded-full bg-window-minimize" />
              <span className="size-3 shrink-0 rounded-full bg-window-zoom" />
              <span className="ml-2 font-mono text-xs leading-relaxed text-muted">claude-code · fangjet</span>
            </div>
            <div className="px-6 py-5 font-mono text-sm leading-relaxed">
              {TERMINAL_LINES.map((line, i) => (
                line.type === 'cursor'
                  ? <div key={i} className="flex gap-2.5 text-text"><span className="shrink-0 text-accent-bright">&gt;</span>{/* h-[1em]: the cursor is exactly one line of text tall at any font size. */}<span className="inline-block h-[1em] w-2 animate-blink bg-accent-hover align-text-bottom" /></div>
                  : <div key={i} className={`flex gap-2.5 ${line.type === 'cmd' ? 'text-text' : 'pl-5 text-accent-hover'}`}>
                      {line.type === 'cmd' && <span className="shrink-0 text-accent-bright">&gt;</span>}
                      <span>{line.text}</span>
                    </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border px-8 py-14 narrow:px-5 narrow:py-10">
        <div className="mx-auto max-w-page">
          <span className="fj-label">// how I use it</span>
          <div className="mt-8 grid grid-cols-3 gap-5 narrow:grid-cols-1">
            {USE_CASES.map(({ title, body }) => (
              <div
                key={title}
                className="rounded-lg border border-border bg-surface px-6 py-7 transition-colors duration-200 hover:border-accent-hover"
              >
                <span className="mb-3.5 block font-mono text-xl leading-relaxed font-bold text-accent-hover">&gt;_</span>
                <h3 className="mb-2.5 text-base leading-tight text-text">{title}</h3>
                <p className="m-0 text-base leading-relaxed text-muted">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border px-8 py-14 narrow:px-5 narrow:py-10">
        <div className="mx-auto max-w-page">
          <span className="fj-label">// agents set up for the job</span>
          <p className="mt-4 mb-8 max-w-2xl text-lg leading-relaxed text-muted">
            Out of the box, an assistant knows nothing about a codebase's rules. Each of my projects gives it them,
            along with the tools it needs and the lines it doesn't cross.
          </p>
          <dl className="m-0 divide-y divide-border border-y border-border">
            {AGENT_SETUP.map(({ title, body, link }) => (
              // The fixed 220px term column lines the five descriptions up; no utility sizes a grid track.
              <div key={title} className="grid grid-cols-[220px_1fr] gap-6 py-6 narrow:grid-cols-1 narrow:gap-2">
                <dt className="font-mono text-base leading-relaxed text-accent-hover">{title}</dt>
                <dd className="m-0">
                  <p className="m-0 max-w-2xl text-base leading-relaxed text-text">{body}</p>
                  {link?.href.startsWith('/') && (
                    <Link to={link.href} className="mt-2 inline-block font-mono text-sm leading-relaxed text-accent-hover">
                      {link.label} →
                    </Link>
                  )}
                  {link && !link.href.startsWith('/') && (
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block font-mono text-sm leading-relaxed text-accent-hover">
                      {link.label} ↗
                    </a>
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="px-8 pt-14 pb-16 narrow:px-5 narrow:pt-10 narrow:pb-14">
        <div className="mx-auto max-w-2xl">
          <p className="m-0 text-lg leading-relaxed text-muted">
            AI tools can get you to a working first version fast. They can also generate bloated solutions,
            unnecessary complexity, and code that proves hard to maintain. The value isn't in the output.
            It's in knowing what to keep.
          </p>
        </div>
      </section>
    </div>
  )
}
