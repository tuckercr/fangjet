import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.css'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className="nav">
      <NavLink to="/" className="nav-logo" onClick={close}>
        <svg className="nav-logo-img" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect width="22" height="22" rx="4" fill="#0d1117"/>
          <text x="1" y="16" fontFamily="'JetBrains Mono', 'Fira Code', monospace" fontSize="12" fontWeight="700" fill="#1bbc68">&gt;_</text>
        </svg>
        <span className="nav-logo-text">fangjet</span>
      </NavLink>

      <button
        className={`nav-hamburger${open ? ' is-open' : ''}`}
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen(o => !o)}
      >
        <span /><span /><span />
      </button>

      <nav className={`nav-menu${open ? ' is-open' : ''}`}>
        <ul className="nav-links">
          <li><NavLink to="/projects" onClick={close}>projects</NavLink></li>
          <li>
            <a
              href="/colin-tucker-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-resume"
              onClick={close}
            >resume ↓</a>
          </li>
          <li><NavLink to="/ai" onClick={close}>ai</NavLink></li>
          <li><NavLink to="/contact" onClick={close}>contact</NavLink></li>
        </ul>
        <div className="nav-social">
          <a href="https://github.com/tuckercr" target="_blank" rel="noopener noreferrer" className="nav-social-link" aria-label="GitHub">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
          </a>
          <a href="https://www.linkedin.com/in/colin-r-tucker/" target="_blank" rel="noopener noreferrer" className="nav-social-link" aria-label="LinkedIn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
        </div>
      </nav>
    </header>
  )
}
