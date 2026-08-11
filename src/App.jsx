import { useState, useEffect, useRef } from 'react'
import { ArrowUp } from 'lucide-react'
import Nav from './components/layout/Nav'
import ScrollProgress from './components/layout/ScrollProgress'
import GridBackground from './components/layout/GridBackground'
import ParticleCanvas from './components/layout/ParticleCanvas'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Projects from './components/sections/Projects'
import Skills from './components/sections/Skills'
import Certifications from './components/sections/Certifications'
import Contact from './components/sections/Contact'
import { useLenis, scrollTo } from './hooks/useLenis'

const SECTION_IDS = ['hero', 'about', 'projects', 'skills', 'certs', 'contact']

function Footer() {
  return (
    <footer className="py-10 px-6 md:px-16 max-w-[1280px] mx-auto">
      <div
        className="section-divider mb-8"
        style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(15,240,252,0.2) 50%, transparent 100%)' }}
      />
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <a
          href="#hero"
          onClick={e => { e.preventDefault(); scrollTo('#hero') }}
          className="font-mono text-[13px] tracking-widest"
          style={{ color: 'var(--neon-cyan)' }}
        >
          VV_
        </a>
        <p className="font-mono text-[12px] tracking-[0.06em] text-center" style={{ color: 'var(--text-muted)' }}>
          © 2026 VEDANT_VARSHNEY // BUILT_WITH: REACT + GSAP + FRAMER_MOTION
        </p>
        <p className="font-mono text-[11px]" style={{ color: 'var(--text-muted)' }}>
          ALIGARH, UP — INDIA
        </p>
      </div>
    </footer>
  )
}

export default function App() {
  useLenis()
  const [activeSection, setActiveSection] = useState('hero')
  const [showBackTop, setShowBackTop] = useState(false)

  useEffect(() => {
    const observers = SECTION_IDS.map(id => {
      const el = document.getElementById(id)
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
        { threshold: 0.4 }
      )
      obs.observe(el)
      return obs
    }).filter(Boolean)

    const scrollHandler = () => setShowBackTop(window.scrollY > window.innerHeight * 0.8)
    window.addEventListener('scroll', scrollHandler, { passive: true })

    return () => {
      observers.forEach(o => o.disconnect())
      window.removeEventListener('scroll', scrollHandler)
    }
  }, [])

  return (
    <>
      {/* Global fixed layers */}
      <GridBackground />
      <ParticleCanvas />
      <ScrollProgress />

      {/* Nav */}
      <Nav activeSection={activeSection} />

      {/* Page content */}
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
        <Footer />
      </main>

      {/* Back to top */}
      <button
        className={`back-to-top ${showBackTop ? 'visible' : ''}`}
        onClick={() => scrollTo('#hero')}
        aria-label="Back to top"
      >
        <ArrowUp size={18} />
      </button>
    </>
  )
}
