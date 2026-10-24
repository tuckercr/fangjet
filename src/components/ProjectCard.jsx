const tag = 'rounded-sm border px-2.5 py-[3px] font-mono text-[0.9rem]'

export default function ProjectCard({ title, description, tags, links, statusTag, note }) {
  return (
    <div className="rounded-lg border border-border bg-surface p-8 transition-[border-color] duration-200 hover:border-accent-hover">
      <div className="mb-4 flex items-start justify-between gap-3">
        <h3 className="text-[1.3rem] text-text">{title}</h3>
        {links && links.length > 0 && (
          <div className="flex shrink-0 gap-3">
            {links.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="whitespace-nowrap font-mono text-[0.95rem] text-accent-hover transition-[color] duration-150 hover:text-accent-bright"
              >
                {label} →
              </a>
            ))}
          </div>
        )}
      </div>

      {statusTag && (
        <div className="mb-3.5 flex flex-wrap gap-2">
          <span className={`${tag} border-[#3b4f7a] bg-[#1c2233] text-[#7aa2f7]`}>{statusTag}</span>
        </div>
      )}

      <p className="mb-4.5 text-[1.05rem] leading-[1.7] text-muted">{description}</p>

      {tags && tags.length > 0 && (
        <div className="mb-3 flex flex-wrap gap-2">
          {tags.map(t => <span key={t} className={`${tag} border-accent bg-[#10540e] text-accent-hover`}>{t}</span>)}
        </div>
      )}

      {note && <p className="mt-2 mb-0 font-mono text-[0.9rem] text-muted italic">{note}</p>}
    </div>
  )
}
