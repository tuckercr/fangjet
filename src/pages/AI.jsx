import SEO from '../components/SEO'
import './AI.css'

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
    <div className="ai-page">
      <SEO
        title="AI"
        description="How Colin Tucker uses AI in real software engineering work: architecture exploration, test generation, code review, debugging, documentation, and build/release problem solving."
        path="/ai"
      />

      <section className="ai-hero">
        <div className="ai-hero-inner">
          <span className="fj-label">// ai-assisted development</span>
          <h1 className="ai-headline">Using AI to build faster<br />without lowering the bar.</h1>
          <p className="ai-subhead">Tools change. Judgment doesn't.</p>

          <div className="ai-terminal">
            <div className="ai-terminal-chrome">
              <span className="ai-dot ai-dot-red" />
              <span className="ai-dot ai-dot-yellow" />
              <span className="ai-dot ai-dot-green" />
              <span className="ai-terminal-title">claude-code · fangjet</span>
            </div>
            <div className="ai-terminal-body">
              {TERMINAL_LINES.map((line, i) => (
                line.type === 'cursor'
                  ? <div key={i} className="ai-line ai-line-cmd"><span className="ai-prompt">$</span><span className="ai-cursor" /></div>
                  : <div key={i} className={`ai-line ai-line-${line.type}`}>
                      {line.type === 'cmd' && <span className="ai-prompt">$</span>}
                      <span>{line.text}</span>
                    </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="ai-uses">
        <div className="ai-uses-inner">
          <span className="fj-label">// how I use it</span>
          <div className="ai-uses-grid">
            {USE_CASES.map(({ title, body }) => (
              <div key={title} className="ai-use-card">
                <span className="ai-use-icon">&gt;_</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ai-note">
        <div className="ai-note-inner">
          <p>
            AI tools can get you to a working first version fast. They can also generate bloated solutions,
            unnecessary complexity, and code that proves hard to maintain. The value isn't in the output.
            It's in knowing what to keep.
          </p>
        </div>
      </section>
    </div>
  )
}
