import { useState, useEffect } from 'react'
import { ArrowUp, FolderGit2, Mail } from 'lucide-react'
import Nav from './components/layout/Nav'
import EdgeLighting from './components/layout/EdgeLighting'
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

const LinkedInIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

const SECTION_IDS = ['hero', 'about', 'projects', 'skills', 'certs', 'contact']

function Footer() {
  return (
    <footer className="py-12 px-6 md:px-16 max-w-[1280px] mx-auto border-t border-slate-200/80">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Degree */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <a
            href="#hero"
            onClick={e => { e.preventDefault(); scrollTo('#hero') }}
            className="font-mono text-base font-bold tracking-widest text-cyan-600"
          >
            VEDANT VARSHNEY
          </a>
          <span className="font-mono text-xs text-slate-500">
            B.Tech Information Technology • ACET Aligarh
          </span>
        </div>

        {/* System Line */}
        <div className="font-mono text-xs tracking-wider text-slate-400 uppercase bg-slate-100 px-3.5 py-1.5 rounded-full border border-slate-200">
          “Built with curiosity.”
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/Vedant958"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-cyan-600 transition-colors"
            aria-label="GitHub"
          >
            <FolderGit2 size={18} />
          </a>
          <a
            href="https://linkedin.com/in/vedant2254"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-cyan-600 transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedInIcon size={18} />
          </a>
          <a
            href="mailto:vedantvarshney958@gmail.com"
            className="text-slate-500 hover:text-cyan-600 transition-colors"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>
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
        { threshold: 0.25 }
      )
      obs.observe(el)
      return obs
    }).filter(Boolean)

    const scrollHandler = () => setShowBackTop(window.scrollY > window.innerHeight * 0.6)
    window.addEventListener('scroll', scrollHandler, { passive: true })

    return () => {
      observers.forEach(o => o.disconnect())
      window.removeEventListener('scroll', scrollHandler)
    }
  }, [])

  return (
    <>
      {/* Viewport edge lighting & background layers */}
      <EdgeLighting />
      <GridBackground />
      <ParticleCanvas />
      <ScrollProgress />

      {/* Navigation header */}
      <Nav activeSection={activeSection} />

      {/* Main page sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
        <Footer />
      </main>

      {/* Back to top button */}
      <button
        className={`back-to-top ${showBackTop ? 'visible' : ''}`}
        onClick={() => scrollTo('#hero')}
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </button>
    </>
  )
}
