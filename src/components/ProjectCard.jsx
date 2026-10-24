const tag = 'rounded-sm border px-2.5 py-1 font-mono text-sm leading-relaxed'

export default function ProjectCard({ title, description, tags, links, statusTag, note }) {
  return (
    <div className="rounded-lg border border-border bg-surface p-8 transition-colors duration-200 hover:border-accent-hover">
      <div className="mb-4 flex items-start justify-between gap-3">
        <h3 className="text-xl leading-tight text-text">{title}</h3>
        {links && links.length > 0 && (
          <div className="flex shrink-0 gap-3">
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
