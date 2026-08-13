import { useRef, useState, useEffect } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Download, ArrowRight, Sparkles } from 'lucide-react'
import StatusPill from '../ui/StatusPill'
import Button from '../ui/Button'
import { useDecodeText } from '../../hooks/useDecodeText'
import { scrollTo } from '../../hooks/useLenis'

export default function Hero() {
  const { output: nameOutput } = useDecodeText('VEDANT VARSHNEY', { duration: 900, startDelay: 200 })

  // Mouse Parallax Effect
  const containerRef = useRef(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const smoothX = useSpring(mouseX, { stiffness: 100, damping: 20 })
  const smoothY = useSpring(mouseY, { stiffness: 100, damping: 20 })

  const rotateX = useTransform(smoothY, [-0.5, 0.5], [6, -6])
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-6, 6])
  const parallaxX = useTransform(smoothX, [-0.5, 0.5], [-15, 15])
  const parallaxY = useTransform(smoothY, [-0.5, 0.5], [-15, 15])

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
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20 overflow-hidden"
    >
      {/* Soft light hero background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'var(--gradient-hero)' }}
        aria-hidden="true"
      />

      {/* Parallax Container */}
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
          style={{
            fontSize: 'clamp(40px, 8vw, 80px)',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          {nameOutput}
        </motion.h1>

        {/* Role & Subtitle */}
        <motion.div
          className="flex items-center gap-3 font-mono text-[15px] sm:text-[17px] font-semibold tracking-wider text-cyan-600 uppercase bg-cyan-500/10 border border-cyan-500/20 px-4 py-1.5 rounded-full"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.5 }}
        >
          <Sparkles size={16} className="text-cyan-500 animate-pulse" />
          <span>B.Tech IT • Developer • Builder</span>
        </motion.div>

        {/* Authentic Quote Description */}
        <motion.p
          className="max-w-[580px] text-[18px] sm:text-[21px] font-medium leading-relaxed text-slate-600 mt-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          “Building projects to understand how software works.”
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex items-center gap-4 flex-wrap justify-center mt-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.5 }}
        >
          <Button
            variant="primary"
            onClick={() => scrollTo('#projects')}
            className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-mono text-sm font-bold tracking-wider text-white bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 shadow-[0_4px_20px_rgba(6,182,212,0.35)] transition-all hover:scale-105"
          >
            <span>VIEW PROJECTS</span>
            <ArrowRight size={16} />
          </Button>

          <Button
            variant="secondary"
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-mono text-sm font-bold tracking-wider text-slate-700 bg-white border border-slate-300 hover:border-cyan-500 hover:text-cyan-600 shadow-sm transition-all hover:scale-105"
          >
            <Download size={16} />
            <span>DOWNLOAD RESUME</span>
          </Button>
        </motion.div>
      </motion.div>

      {/* Decorative Parallax Background Elements */}
      <motion.div
        style={{ x: parallaxX, y: parallaxY }}
        className="absolute w-[450px] h-[450px] rounded-full bg-cyan-400/10 blur-[100px] pointer-events-none z-0"
      />
    </section>
  )
}
