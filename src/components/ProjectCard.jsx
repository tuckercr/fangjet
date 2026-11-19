const tag = 'rounded-sm border px-2.5 py-1 font-mono text-sm leading-relaxed'

export default function ProjectCard({ id, title, description, tags, links, statusTag, note }) {
  return (
    <div id={id} className="scroll-mt-28 rounded-lg border border-border bg-surface p-8 transition-colors duration-200 target:border-accent-hover hover:border-accent-hover">
      {/* Wraps so a card with many links moves them under the title instead of squeezing it. */}
      <div className="mb-4 flex flex-wrap items-baseline justify-between gap-x-3 gap-y-2">
        <h3 className="text-xl leading-tight text-text">{title}</h3>
        {links && links.length > 0 && (
          <div className="flex flex-wrap gap-x-3 gap-y-1">
            {links.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="whitespace-nowrap font-mono text-base leading-relaxed text-accent-hover transition-colors duration-150 hover:text-accent-bright"
              >
                {label} →
              </a>
            ))}
          </div>
        )}
      </div>

      {statusTag && (
        <div className="mb-3.5 flex flex-wrap gap-2">
          <span className={`${tag} border-info-border bg-info-bg text-info`}>{statusTag}</span>
        </div>
      )}

      <p className="mb-4 text-base leading-relaxed text-muted">{description}</p>

      {tags && tags.length > 0 && (
        <div className="mb-3 flex flex-wrap gap-2">
          {tags.map(t => <span key={t} className={`${tag} border-accent bg-accent-deep text-accent-hover`}>{t}</span>)}
        </div>
      )}

      {note && <p className="mt-2 mb-0 font-mono text-sm leading-relaxed text-muted italic">{note}</p>}
    </div>
  )
}
