export default function ProjectCard({ title, description, tags, links, statusTag, note }) {
  return (
    <div className="project-card">
      <div className="project-card-header">
        <h3 className="project-card-title">{title}</h3>
        {links && links.length > 0 && (
          <div className="project-card-links">
            {links.map(({ label, href }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="project-link">
                {label} →
              </a>
            ))}
          </div>
        )}
      </div>

      {statusTag && (
        <div className="project-tags" style={{ marginBottom: 14 }}>
          <span className="tag tag-status">{statusTag}</span>
        </div>
      )}

      <p className="project-desc">{description}</p>

      {tags && tags.length > 0 && (
        <div className="project-tags">
          {tags.map(t => <span key={t} className="tag">{t}</span>)}
        </div>
      )}

      {note && <p className="project-note">{note}</p>}
    </div>
  )
}
