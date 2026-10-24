import SEO from '../components/SEO'

const TERMINAL_LINES = [
  { type: 'cmd',  text: 'explore -architecture clean-mvvm' },
  { type: 'out',  text: '✓ Analyzing patterns across 847 files...' },
  { type: 'out',  text: '✓ Identified 3 refactor opportunities' },
  { type: 'out',  text: '✓ Generated migration plan' },
  { type: 'cmd',  text: 'generate -tests -coverage 90' },
  { type: 'out',  text: '✓ Writing unit tests for PaymentViewModel...' },
  { type: 'out',  text: '✓ 47 tests generated, 0 failing' },
  { type: 'cmd',  text: 'review -pr -senior-engineer' },
  { type: 'cursor', text: '' },
]

const USE_CASES = [
  { title: 'Architecture exploration', body: 'Mapping unfamiliar codebases, identifying patterns, and planning refactors before writing a line.' },
  { title: 'Test generation', body: 'Bootstrapping unit test coverage on business logic fast, then reviewing and hardening what comes out.' },
  { title: 'Code review', body: 'Identifying the design decisions hiding inside a diff, not just the syntax.' },
  { title: 'MCP integration', body: 'Built an MCP connector for Rolo CRM so AI agents can read contacts, log activities, and surface follow-ups through natural conversation instead of a UI.' },
  { title: 'Documentation', body: 'First drafts of architecture docs and inline comments, kept honest by someone who knows the code.' },
  { title: 'Build and release', body: 'Diagnosing CI failures, unblocking signing issues, and keeping the pipeline green.' },
]

export default function AI() {
  return (
    <div>
      <SEO
        title="AI"
        description="How Colin Tucker uses AI in real software engineering work: architecture exploration, test generation, code review, debugging, documentation, and build/release problem solving."
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
                  ? <div key={i} className="flex gap-2.5 text-text"><span className="shrink-0 text-accent-bright">$</span>{/* h-[1em]: the cursor is exactly one line of text tall at any font size. */}<span className="inline-block h-[1em] w-2 animate-blink bg-accent-hover align-text-bottom" /></div>
                  : <div key={i} className={`flex gap-2.5 ${line.type === 'cmd' ? 'text-text' : 'pl-5 text-accent-hover'}`}>
                      {line.type === 'cmd' && <span className="shrink-0 text-accent-bright">$</span>}
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
