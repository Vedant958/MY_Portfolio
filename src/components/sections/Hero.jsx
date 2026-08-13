import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Download, ArrowRight, Sparkles, Terminal } from 'lucide-react'
import StatusPill from '../ui/StatusPill'
import Button from '../ui/Button'
import HeroVisual from '../ui/HeroVisual'
import { useDecodeText } from '../../hooks/useDecodeText'
import { scrollTo } from '../../hooks/useLenis'

export default function Hero() {
  const { output: nameOutput } = useDecodeText('VEDANT VARSHNEY', { duration: 900, startDelay: 200 })

  // Mouse Parallax Effect
  const containerRef = useRef(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const smoothX = useSpring(mouseX, { stiffness: 90, damping: 20 })
  const smoothY = useSpring(mouseY, { stiffness: 90, damping: 20 })

  const rotateX = useTransform(smoothY, [-0.5, 0.5], [4, -4])
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-4, 4])

  const handleMouseMove = (e) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    mouseX.set(x)
    mouseY.set(y)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <section
      id="hero"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-16 overflow-hidden"
    >
      {/* Background radial glow */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{ background: 'var(--gradient-hero)' }}
        aria-hidden="true"
      />

      <motion.div
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="relative z-10 flex flex-col items-center gap-6 max-w-4xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Status Pill */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.4 }}
        >
          <StatusPill text="AVAILABLE FOR OPPORTUNITIES" />
        </motion.div>

        {/* H1 Name */}
        <motion.h1
          className="font-orbitron font-black leading-[1.05] tracking-tight text-slate-900 drop-shadow-sm select-none"
          style={{ fontSize: 'clamp(40px, 7.5vw, 76px)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          {nameOutput}
        </motion.h1>

        {/* Role Subtitle */}
        <motion.div
          className="flex items-center gap-3 font-mono text-sm sm:text-base font-bold tracking-wider text-cyan-700 uppercase bg-cyan-500/10 border border-cyan-500/20 px-4 py-1.5 rounded-full"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.5 }}
        >
          <Sparkles size={16} className="text-cyan-600 animate-pulse" />
          <span>B.Tech IT • Developer • Builder</span>
        </motion.div>

        {/* Authentic Supporting Quote */}
        <motion.p
          className="max-w-[580px] text-lg sm:text-xl font-medium leading-relaxed text-slate-600"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          “Building projects to understand how software works.”
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex items-center gap-4 flex-wrap justify-center my-2"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.5 }}
        >
          <Button
            variant="primary"
            onClick={() => scrollTo('#projects')}
            className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-mono text-sm font-extrabold tracking-wider text-white bg-slate-900 hover:bg-slate-800 border border-cyan-500/40 hover:border-cyan-400 shadow-[0_4px_20px_rgba(6,182,212,0.25)] transition-all hover:scale-105"
          >
            <span>VIEW PROJECTS</span>
            <ArrowRight size={16} className="text-cyan-400" />
          </Button>

          <Button
            variant="secondary"
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-mono text-sm font-bold tracking-wider text-slate-800 bg-white border border-slate-300 hover:border-cyan-500 hover:text-cyan-600 shadow-xs transition-all hover:scale-105"
          >
            <Download size={16} />
            <span>DOWNLOAD RESUME</span>
          </Button>
        </motion.div>

        {/* Stitch Generated Hero Visual Artwork Motif */}
        <motion.div
          className="w-full mt-4"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <HeroVisual />
        </motion.div>
      </motion.div>
    </section>
  )
}
