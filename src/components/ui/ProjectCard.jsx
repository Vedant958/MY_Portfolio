import { useState } from 'react'
import { motion } from 'framer-motion'
import { FolderGit2, ExternalLink, Sparkles, Gamepad2, Compass } from 'lucide-react'

export default function ProjectCard({ title, tagline, description, tech, year, highlights, links, index, accent = 'cyan' }) {
  const [hovered, setHovered] = useState(false)

  const isOrbit = title.includes('ORBIT')
  const IconHeader = isOrbit ? Gamepad2 : Compass

  return (
    <motion.div
      className="glass-panel hud-corners flex flex-col h-full overflow-hidden group cursor-default"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      {/* Visual Top Header Area */}
      <div className="w-full h-44 relative bg-gradient-to-br from-slate-100 via-cyan-50/50 to-teal-50/30 overflow-hidden border-b border-slate-200/80 flex items-center justify-center">
        {/* Animated Grid Graphic */}
        <div
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(rgba(6,182,212,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.12) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />

        {/* Floating Graphic Badge */}
        <motion.div
          className="relative z-10 flex flex-col items-center gap-2 text-cyan-600"
          animate={hovered ? { scale: 1.08, y: -2 } : { scale: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="p-4 rounded-2xl bg-white/90 border border-cyan-500/30 shadow-[0_8px_25px_rgba(6,182,212,0.18)]">
            <IconHeader size={36} className="text-cyan-600" />
          </div>
          <span className="font-mono text-[11px] font-bold tracking-widest text-slate-400 uppercase">
            PROJECT_INDEX // 0{index}
          </span>
        </motion.div>

        {/* Year tag */}
        <span className="absolute top-3 right-3 font-mono text-[11px] font-semibold px-2.5 py-0.5 rounded bg-white/80 border border-slate-200 text-slate-500">
          {year}
        </span>
      </div>

      {/* Content Body */}
      <div className="p-7 flex flex-col flex-1 gap-4">
        <div>
          <h3 className="font-orbitron text-[22px] font-bold text-slate-900 leading-snug group-hover:text-cyan-600 transition-colors">
            {title}
          </h3>
          <p className="font-mono text-[12px] font-medium text-cyan-600 mt-1">
            {tagline}
          </p>
        </div>

        <p className="text-[14px] leading-relaxed text-slate-600">
          {description}
        </p>

        {/* Feature Highlights pill tags */}
        {highlights && highlights.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-1">
            {highlights.map(h => (
              <span
                key={h}
                className="font-sans text-[11px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200"
              >
                • {h}
              </span>
            ))}
          </div>
        )}

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mt-auto pt-3 border-t border-slate-100">
          {tech.map(t => (
            <span
              key={t}
              className="font-mono text-[11px] font-semibold px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-700 border border-cyan-500/20"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 pt-3 border-t border-slate-200/60">
          {links.repo && (
            <a
              href={links.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-mono text-[12px] font-bold uppercase tracking-wider text-slate-600 hover:text-cyan-600 transition-colors"
            >
              <FolderGit2 size={15} />
              <span>GITHUB REPO</span>
            </a>
          )}
          {links.live && (
            <a
              href={links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-mono text-[12px] font-bold uppercase tracking-wider text-slate-600 hover:text-emerald-600 transition-colors"
            >
              <ExternalLink size={15} />
              <span>LIVE DEMO</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}
