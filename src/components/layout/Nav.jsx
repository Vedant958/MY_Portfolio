import { useState, useEffect } from 'react'
import { scrollTo } from '../../hooks/useLenis'

const NAV_SECTIONS = [
  { label: 'ABOUT',    href: '#about' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'SPECS',    href: '#skills' },
  { label: 'CLEARANCE',href: '#certs' },
  { label: 'COMMS',    href: '#contact' },
]

export default function Nav({ activeSection }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const sectionIndex = NAV_SECTIONS.findIndex(s => s.href === '#' + activeSection)
  const sectionNum = sectionIndex >= 0 ? sectionIndex + 2 : 1

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const handleNav = (e, href) => {
    e.preventDefault()
    scrollTo(href)
    setMobileOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[200] h-[72px] flex items-center px-8 md:px-16 transition-all duration-300 ${
        scrolled ? 'bg-panel/90 border-b border-white/[0.06]' : 'bg-transparent'
      }`}
      style={{ backdropFilter: scrolled ? 'blur(20px)' : 'none' }}
    >
      {/* Logo */}
      <a
        href="#hero"
        onClick={e => handleNav(e, '#hero')}
        className="font-mono text-base font-semibold tracking-widest text-cyan mr-auto flex items-center gap-1"
        style={{ color: 'var(--neon-cyan)' }}
      >
        VV_<span className="cursor-blink" />
      </a>

      {/* Desktop links */}
      <ul className="hidden md:flex items-center gap-8 list-none">
        {NAV_SECTIONS.map(s => (
          <li key={s.label}>
            <a
              href={s.href}
              onClick={e => handleNav(e, s.href)}
              className="font-mono text-[13px] font-medium uppercase tracking-[0.12em] transition-all duration-200"
              style={{
                color: '#' + s.href === '#' + activeSection
                  ? 'var(--neon-cyan)'
                  : 'var(--text-secondary)',
              }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--neon-cyan)'}
              onMouseLeave={e => e.currentTarget.style.color = '#' + s.href === '#' + activeSection ? 'var(--neon-cyan)' : 'var(--text-secondary)'}
            >
              {s.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Section indicator */}
      <span
        className="hidden md:block font-mono text-[12px] tracking-widest ml-10"
        style={{ color: 'var(--text-muted)' }}
      >
        [ {String(sectionNum).padStart(2,'0')} / 06 ]
      </span>

      {/* Hamburger */}
      <button
        className="md:hidden ml-4 p-2"
        style={{ color: 'var(--neon-cyan)' }}
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle mobile menu"
      >
        <div className="w-5 h-px bg-current mb-1.5" />
        <div className="w-5 h-px bg-current mb-1.5" />
        <div className="w-5 h-px bg-current" />
      </button>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="absolute top-[72px] left-0 right-0 glass-panel rounded-none border-t-0 px-8 py-6 flex flex-col gap-5"
        >
          {NAV_SECTIONS.map(s => (
            <a
              key={s.label}
              href={s.href}
              onClick={e => handleNav(e, s.href)}
              className="font-mono text-sm uppercase tracking-[0.12em]"
              style={{ color: 'var(--text-secondary)' }}
            >
              {s.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
