import { useRef, useEffect } from 'react'
import { Download, ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'
import StatusPill from '../ui/StatusPill'
import Button from '../ui/Button'
import { useDecodeText } from '../../hooks/useDecodeText'
import { useTypewriter } from '../../hooks/useTypewriter'
import { scrollTo } from '../../hooks/useLenis'

export default function Hero() {
  const { output: nameOutput } = useDecodeText('VEDANT VARSHNEY', { duration: 900, startDelay: 200 })
  const { displayed: tagline } = useTypewriter(
    'Strengthening web fundamentals through practical software engineering and interactive design.',
    { speed: 28, startDelay: 1400 }
  )

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden"
    >
      {/* Hero glow backdrop */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'var(--gradient-hero)' }}
        aria-hidden="true"
      />

      <motion.div
        className="relative z-10 flex flex-col items-center gap-5 max-w-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        {/* Status pill */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05, duration: 0.5 }}
        >
          <StatusPill />
        </motion.div>

        {/* Eyebrow */}
        <motion.p
          className="font-mono text-[13px] uppercase tracking-[0.18em]"
          style={{ color: 'var(--neon-cyan)' }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          SYSTEM_USER: FRONTEND_DEV
        </motion.p>

        {/* H1 decode */}
        <motion.h1
          className="font-orbitron font-black leading-[1.05] tracking-[0.01em]"
          style={{
            fontSize: 'clamp(38px, 8vw, 72px)',
            color: 'var(--text-primary)',
            textShadow: '0 0 40px rgba(255,46,154,0.15)',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.3 }}
        >
          {nameOutput}
        </motion.h1>

        {/* Sub-heading */}
        <motion.p
          className="text-[20px] font-medium"
          style={{ color: 'var(--text-secondary)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          Frontend Developer &amp; IT Undergrad
        </motion.p>

        {/* Tagline typewriter */}
        <motion.div
          className="max-w-[560px] text-[17px] leading-relaxed min-h-[80px] flex items-start justify-center"
          style={{ color: 'var(--text-secondary)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.3 }}
        >
          <span>
            {tagline}
            <span className="cursor-blink" />
          </span>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          className="flex items-center gap-4 flex-wrap justify-center"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.5, ease: [0.16,1,0.3,1] }}
        >
          <Button
            variant="primary"
            onClick={() => scrollTo('#projects')}
          >
            Initialize Projects
          </Button>
          <Button
            variant="secondary"
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Download size={14} />
            Download Data_Log
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.button
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        style={{ color: 'var(--text-muted)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        onClick={() => scrollTo('#about')}
        aria-label="Scroll down"
      >
        <div
          className="w-px h-12"
          style={{
            background: 'linear-gradient(to bottom, transparent, var(--neon-cyan))',
            animation: 'scrollBounce 2s ease-in-out infinite',
          }}
        />
        <span className="font-mono text-[11px] tracking-[0.2em] uppercase">SCROLL</span>
        <ChevronDown size={14} />
      </motion.button>
    </section>
  )
}
