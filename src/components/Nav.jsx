import { useState } from 'react'
import { NavLink } from 'react-router-dom'

// Shared by every link in the menu, the resume link included. Below 640px the links stack and lose
// their bottom border (the old stylesheet did this with !important, so it applied to resume too).
const linkBase =
  'block whitespace-nowrap px-4 py-5 font-mono text-base leading-relaxed font-normal transition-colors duration-150 ' +
  'hover:bg-white/4 hover:text-text phone:px-1 phone:py-3.5 phone:border-b-0'

// The active page link is green on phones, hovered or not (hover:text-text would otherwise win).
const pageLink = ({ isActive }) =>
  `${linkBase} ${isActive ? 'border-b-2 border-accent-hover text-text phone:text-accent-hover phone:hover:text-accent-hover' : 'text-muted'}`

const bar = 'block h-0.5 w-6 origin-center rounded-xs bg-muted transition duration-200'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className="sticky top-0 z-50 flex items-center gap-8 border-b border-border bg-surface px-8 phone:flex-wrap phone:px-5">
      <NavLink to="/" className="mr-auto flex shrink-0 items-center gap-2.5 py-3.5" onClick={close}>
        <svg className="block h-auto w-6" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect width="22" height="22" rx="4" className="fill-bg"/>
          <text x="1" y="16" fontFamily="'JetBrains Mono', 'Fira Code', monospace" fontSize="12" fontWeight="700" className="fill-accent-hover">&gt;_</text>
        </svg>
        <span className="whitespace-nowrap font-mono text-xl leading-relaxed font-semibold tracking-tight text-text">fangjet</span>
      </NavLink>

      <button
        className="ml-auto hidden cursor-pointer flex-col justify-center gap-1.5 p-2 phone:flex"
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen(o => !o)}
      >
        <span className={`${bar} ${open ? 'translate-y-2 rotate-45' : ''}`} />
        <span className={`${bar} ${open ? 'opacity-0' : ''}`} />
        <span className={`${bar} ${open ? '-translate-y-2 -rotate-45' : ''}`} />
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
          <li><NavLink to="/contact" className={pageLink} onClick={close}>contact</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}
