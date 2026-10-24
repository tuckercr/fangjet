import { useState } from 'react'
import { NavLink } from 'react-router-dom'

// Shared by every link in the menu, the resume link included. Below 640px the links stack and lose
// their bottom border (the old stylesheet did this with !important, so it applied to resume too).
const linkBase =
  'block whitespace-nowrap px-4 py-5 font-mono text-[1rem] font-normal transition-[color,background] duration-150 ' +
  'hover:bg-[rgba(255,255,255,0.04)] hover:text-text phone:px-1 phone:py-3.5 phone:border-b-0'

// The active page link is green on phones, hovered or not (hover:text-text would otherwise win).
const pageLink = ({ isActive }) =>
  `${linkBase} ${isActive ? 'border-b-2 border-accent-hover text-text phone:text-accent-hover phone:hover:text-accent-hover' : 'text-muted'}`

const socialLink =
  'flex size-9 items-center justify-center rounded-md text-muted transition-[color,background] duration-150 ' +
  'hover:bg-[rgba(255,255,255,0.06)] hover:text-text'

const bar = 'block h-0.5 w-5.5 origin-center rounded-xs bg-muted transition-[transform,opacity] duration-200'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className="sticky top-0 z-100 flex items-center gap-8 border-b border-border bg-surface px-8 phone:flex-wrap phone:px-5">
      <NavLink to="/" className="mr-auto flex shrink-0 items-center gap-2.5 py-3.5" onClick={close}>
        <svg className="block h-auto w-5.5" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect width="22" height="22" rx="4" fill="#0d1117"/>
          <text x="1" y="16" fontFamily="'JetBrains Mono', 'Fira Code', monospace" fontSize="12" fontWeight="700" fill="#1bbc68">&gt;_</text>
        </svg>
        <span className="whitespace-nowrap font-mono text-[1.3rem] font-semibold tracking-[-0.02em] text-text">fangjet</span>
      </NavLink>

      <button
        className="ml-auto hidden cursor-pointer flex-col justify-center gap-1.25 p-2 phone:flex"
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen(o => !o)}
      >
        <span className={`${bar} ${open ? '[transform:translateY(7px)_rotate(45deg)]' : ''}`} />
        <span className={`${bar} ${open ? 'opacity-0' : ''}`} />
        <span className={`${bar} ${open ? '[transform:translateY(-7px)_rotate(-45deg)]' : ''}`} />
      </button>

      <nav className={`phone:w-full phone:border-t phone:border-border ${open ? 'phone:block' : 'phone:hidden'}`}>
        <ul className="flex phone:flex-col phone:pt-2 phone:pb-3">
          <li><NavLink to="/projects" className={pageLink} onClick={close}>projects</NavLink></li>
          <li>
            <a
              href="/colin-tucker-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={`${linkBase} mx-1 my-auto rounded-sm border border-accent text-muted hover:border-accent-hover phone:mx-0 phone:my-2`}
              onClick={close}
            >resume ↓</a>
          </li>
          <li><NavLink to="/ai" className={pageLink} onClick={close}>ai</NavLink></li>
          <li><NavLink to="/contact" className={pageLink} onClick={close}>contact</NavLink></li>
        </ul>
        <div className="ml-1 flex items-center gap-1 border-l border-border pl-3 phone:m-0 phone:justify-start phone:border-t phone:border-l-0 phone:px-1 phone:py-3">
          <a href="https://github.com/tuckercr" target="_blank" rel="noopener noreferrer" className={socialLink} aria-label="GitHub">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
          </a>
          <a href="https://www.linkedin.com/in/colin-r-tucker/" target="_blank" rel="noopener noreferrer" className={socialLink} aria-label="LinkedIn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
        </div>
      </nav>
    </header>
  )
}
