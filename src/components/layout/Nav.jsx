import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { scrollTo } from '../../hooks/useLenis'

const NAV_SECTIONS = [
  { label: 'HOME',     href: '#hero' },
  { label: 'ABOUT',    href: '#about' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'SKILLS',   href: '#skills' },
  { label: 'CONTACT',  href: '#contact' },
]

export default function Nav({ activeSection }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
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
      className={`fixed top-0 left-0 right-0 z-[200] h-[72px] flex items-center px-6 md:px-16 transition-all duration-300 ${
        scrolled
          ? 'bg-white/85 border-b border-slate-200/80 shadow-[0_4px_20px_rgba(15,23,42,0.03)]'
          : 'bg-transparent'
      }`}
      style={{ backdropFilter: scrolled ? 'blur(16px)' : 'none' }}
    >
      {/* Brand mark */}
      <a
        href="#hero"
        onClick={e => handleNav(e, '#hero')}
        className="font-mono text-base font-bold tracking-widest mr-auto flex items-center gap-1 group"
        style={{ color: 'var(--neon-cyan)' }}
      >
        <span className="px-2 py-0.5 rounded border border-cyan-500/30 bg-cyan-500/10 group-hover:bg-cyan-500/20 transition-colors">
          VV_
        </span>
        <span className="cursor-blink" />
      </a>

      {/* Desktop navigation */}
      <ul className="hidden md:flex items-center gap-8 list-none">
        {NAV_SECTIONS.map(s => {
          const isActive = activeSection === s.href.replace('#', '')
          return (
            <li key={s.label} className="relative">
              <a
                href={s.href}
                onClick={e => handleNav(e, s.href)}
                className="font-mono text-[13px] font-semibold uppercase tracking-[0.12em] py-1 transition-colors duration-200"
                style={{
                  color: isActive ? 'var(--neon-cyan)' : 'var(--text-secondary)',
                }}
              >
                {s.label}
              </a>
              {isActive && (
                <motion.div
                  layoutId="activeNavLine"
                  className="absolute -bottom-1 left-0 right-0 h-[2px] bg-cyan-500 rounded-full"
                  style={{ boxShadow: '0 0 8px rgba(6, 182, 212, 0.6)' }}
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </li>
          )
        })}
      </ul>

      {/* Mobile Hamburger toggle */}
      <button
        className="md:hidden p-2 rounded-lg border border-slate-200 bg-white/80 text-cyan-600 focus:outline-none"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle mobile navigation menu"
      >
        {mobileOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="absolute top-[72px] left-4 right-4 bg-white/95 backdrop-blur-xl rounded-xl border border-slate-200 shadow-xl p-6 flex flex-col gap-4 md:hidden"
          >
            {NAV_SECTIONS.map(s => {
              const isActive = activeSection === s.href.replace('#', '')
              return (
                <a
                  key={s.label}
                  href={s.href}
                  onClick={e => handleNav(e, s.href)}
                  className={`font-mono text-sm font-semibold uppercase tracking-widest px-4 py-2.5 rounded-lg transition-all ${
                    isActive
                      ? 'bg-cyan-500/10 text-cyan-600 border border-cyan-500/30'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {s.label}
                </a>
              )
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

