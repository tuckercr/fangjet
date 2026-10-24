import { Link } from 'react-router-dom'

const link = 'text-muted transition-colors duration-150 hover:text-accent-hover'
const dot = <span className="opacity-40">·</span>

export default function Footer() {
  return (
    <footer className="flex flex-wrap items-center justify-center gap-3 border-t border-border bg-surface px-8 py-4 font-mono text-base leading-relaxed text-muted">
      <span>© 2026 FangJet LLC</span>
      {dot}
      <a href="mailto:colin@fangjet.com" className={link}>colin@fangjet.com</a>
      {dot}
      <a href="https://github.com/tuckercr" target="_blank" rel="noopener noreferrer" className={link}>GitHub</a>
      {dot}
      <a href="https://www.linkedin.com/in/colin-r-tucker/" target="_blank" rel="noopener noreferrer" className={link}>LinkedIn</a>
      {dot}
      <Link to="/privacy-policy" className={link}>Privacy Policy</Link>
    </footer>
  )
}
