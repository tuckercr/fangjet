import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

const TERMINAL_LINES = [
  { type: 'cmd',  text: 'find why reminders fire an hour late after the DST change' },
  { type: 'out',  text: 'Reading ReminderScheduler.kt, AlarmRepository.kt...' },
  { type: 'out',  text: 'Cause: next alarm saved as a fixed UTC instant, not 8:00 local' },
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

// Measured 11-19 on a Mac mini (M4, 16 GB) with Ollama on Apple's MLX engine, asking each
// model the question in LOCAL_PROMPT. Update the numbers if the models or the machine change.
const LOCAL_PROMPT = 'Why should an Android reminder app store alarm trigger times in UTC rather than local time?'

const LOCAL_RESULTS = [
  { model: 'Qwen 3.5 4B', memory: '4 GB', speed: 'about 27', verdict: 'No' },
  { model: 'Gemma 4 12B', memory: '8 GB', speed: '16 to 22', verdict: 'No, thinking on or off' },
]

export default function AI() {
  return (
    <div>
      <SEO
        title="AI"
        description="How Colin Tucker uses AI in software work: agents set up per project, an MCP server built for a CRM, and local models tested on a Mac mini."
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

      <section className="border-b border-border px-8 py-14 narrow:px-5 narrow:py-10">
        <div className="mx-auto max-w-page">
          <span className="fj-label">// local models</span>
          <div className="mt-4 max-w-2xl">
            <p className="mb-5 text-lg leading-relaxed text-muted">
              Some code shouldn't leave the machine, so I've been testing local models with Ollama on a Mac mini
              (M4, 16 GB). To see where they're good enough, I asked two of them a question I know the answer to:
            </p>
            <p className="mb-8 border-l-2 border-accent pl-4 font-mono text-base leading-relaxed text-text">
              {LOCAL_PROMPT}
            </p>
          </div>

          <div className="mb-8 overflow-x-auto">
            <table className="w-full border-collapse text-left text-base leading-relaxed tabular-nums">
              <thead>
                <tr className="border-b border-border font-mono text-sm text-accent-hover">
                  <th className="py-3 pr-6 narrow:pr-3 font-normal">model</th>
                  <th className="py-3 pr-6 narrow:pr-3 font-normal">memory</th>
                  <th className="py-3 pr-6 narrow:pr-3 font-normal">tokens/s</th>
                  <th className="py-3 font-normal">got daylight saving right?</th>
                </tr>
              </thead>
              <tbody>
                {LOCAL_RESULTS.map(({ model, memory, speed, verdict }) => (
                  <tr key={model} className="border-b border-border">
                    <td className="py-3 pr-6 narrow:pr-3 text-text">{model}</td>
                    <td className="py-3 pr-6 narrow:pr-3 text-muted">{memory}</td>
                    <td className="py-3 pr-6 narrow:pr-3 text-muted">{speed}</td>
                    <td className="py-3 text-muted">{verdict}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex max-w-2xl flex-col gap-5 text-base leading-relaxed text-muted">
            <p className="m-0">
              Both answered fast and fluently: UTC is immune to daylight saving, so store alarms in UTC. For a daily
              8:00 reminder that's backwards. A fixed UTC instant fires at 9:00 once the clocks spring forward, which
              is the bug the example at the top of this page fixes. The time of day belongs in local time; only the
              next alarm becomes an instant.
            </p>
            <p className="m-0">
              Where they earn a place: code that can't go to a cloud model, boilerplate, quick lookups, working
              offline. What they need is someone who knows the domain reading every answer. It's the rule I apply to
              any AI tool, applied harder.
            </p>
            <p className="m-0">
              Memory decides what's practical. At 4 GB, the small model leaves room for Android Studio and a Gradle
              build. At 8 GB, the 12B doesn't: with builds running beside it, macOS started swapping to disk and
              answers slowed to a crawl. Phones have the same limits, tighter, which is why Hark does its speech
              recognition on the device with a model sized for it.
            </p>
          </div>
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
