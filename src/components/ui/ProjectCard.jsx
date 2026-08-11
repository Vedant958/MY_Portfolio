import { useState } from 'react'
import { motion } from 'framer-motion'
import { FolderGit2, ExternalLink } from 'lucide-react'

const ACCENT_COLORS = {
  magenta: 'var(--neon-magenta)',
  cyan:    'var(--neon-cyan)',
  purple:  'var(--neon-purple)',
}

export default function ProjectCard({ title, tagline, description, tech, year, links, index, accent = 'cyan' }) {
  const [hovered, setHovered] = useState(false)
  const color = ACCENT_COLORS[accent] || ACCENT_COLORS.cyan

  return (
    <motion.div
      className="glass-panel hud-corners flex flex-col h-full group cursor-default"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ delay: index * 0.12, duration: 0.7, ease: [0.16,1,0.3,1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      style={{
        boxShadow: hovered
          ? `0 8px 40px ${color}26, inset 0 1px 0 rgba(255,255,255,0.06)`
          : undefined,
        borderColor: hovered ? 'var(--border-glass-hover)' : undefined,
      }}
    >
      {/* Thumbnail area with glitch hover */}
      <div
        className="w-full h-40 rounded-t-xl overflow-hidden relative mb-0"
        style={{ background: `linear-gradient(135deg, rgba(13,13,24,0.8) 0%, ${color}18 100%)` }}
      >
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={hovered ? {
            x: [0, -3, 3, -2, 0],
            skewX: [0, 2, -2, 1, 0],
          } : { x: 0, skewX: 0 }}
          transition={{ duration: 0.15, times: [0,0.25,0.5,0.75,1] }}
        >
          <span
            className="font-orbitron text-5xl font-black opacity-20 select-none"
            style={{ color }}
          >
            {index.toString().padStart(2, '0')}
          </span>
        </motion.div>
        <span
          className="absolute top-3 left-3 font-mono text-[11px] tracking-[0.12em] px-2 py-0.5 rounded"
          style={{
            color,
            background: `${color}12`,
            border: `1px solid ${color}30`,
          }}
        >
          [ {String(index).padStart(2,'0')} ]
        </span>
        <span className="absolute top-3 right-3 font-mono text-[11px]" style={{ color: 'var(--text-muted)' }}>
          {year}
        </span>
      </div>

      <div className="p-6 flex flex-col flex-1 gap-3">
        <h3 className="font-orbitron text-[22px] font-bold leading-tight" style={{ color: 'var(--text-primary)' }}>
          {title}
        </h3>
        <p className="text-[14px] leading-relaxed line-clamp-3" style={{ color: 'var(--text-secondary)' }}>
          {description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mt-auto pt-2">
          {tech.map(t => (
            <span
              key={t}
              className="font-mono text-[11px] px-2 py-0.5 rounded"
              style={{
                color,
                border: `1px solid ${color}30`,
                background: `${color}08`,
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4 pt-3 border-t border-white/[0.04]">
          {links.repo && (
            <a
              href={links.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-mono text-[12px] uppercase tracking-widest transition-colors duration-200 group/link"
              style={{ color: 'var(--text-muted)' }}
              onMouseEnter={e => e.currentTarget.style.color = color}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
            >
              <FolderGit2 size={13} />
              VIEW_REPO →
            </a>
          )}
          {links.live && (
            <a
              href={links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-mono text-[12px] uppercase tracking-widest transition-colors duration-200"
              style={{ color: 'var(--text-muted)' }}
              onMouseEnter={e => e.currentTarget.style.color = color}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
            >
              <ExternalLink size={13} />
              LIVE_DEMO →
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}
