import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <span className="footer-copy">© 2026 FangJet LLC</span>
      <span className="footer-dot">·</span>
      <a href="mailto:colin@fangjet.com" className="footer-link">colin@fangjet.com</a>
      <span className="footer-dot">·</span>
      <a href="https://github.com/tuckercr" target="_blank" rel="noopener noreferrer" className="footer-link">GitHub</a>
      <span className="footer-dot">·</span>
      <a href="https://www.linkedin.com/in/colin-r-tucker/" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
      <span className="footer-dot">·</span>
      <Link to="/privacy-policy" className="footer-link">Privacy Policy</Link>
    </footer>
  )
}
