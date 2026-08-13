import { useState, useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { FolderGit2, ExternalLink, Sparkles, Gamepad2, Compass } from 'lucide-react'
import ProjectVisualOrbit from './ProjectVisualOrbit'
import ProjectVisualVoid from './ProjectVisualVoid'

export default function ProjectCard({ title, tagline, description, tech, year, highlights, links, index }) {
  const [hovered, setHovered] = useState(false)
  const cardRef = useRef(null)

  // 3D Tilt Effect
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), { stiffness: 120, damping: 18 })
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), { stiffness: 120, damping: 18 })

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    mouseX.set(x)
    mouseY.set(y)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
    setHovered(false)
  }

  const isOrbit = title.includes('ORBIT')

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      className="glass-panel hud-corners flex flex-col h-full overflow-hidden group cursor-default transition-shadow duration-300 hover:shadow-[0_12px_40px_rgba(6,182,212,0.18)] hover:border-cyan-500/50"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
    >
      {/* Visual Artwork Top Area */}
      {isOrbit ? (
        <ProjectVisualOrbit hovered={hovered} />
      ) : (
        <ProjectVisualVoid hovered={hovered} />
      )}

      {/* Content Body */}
      <div className="p-7 flex flex-col flex-1 gap-4 bg-white/60 backdrop-blur-sm">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-orbitron text-[22px] font-bold text-slate-900 leading-snug group-hover:text-cyan-600 transition-colors">
              {title}
            </h3>
            <p className="font-mono text-xs font-semibold text-cyan-600 mt-1">
              {tagline}
            </p>
          </div>
          <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-500 border border-slate-200">
            {year}
          </span>
        </div>

        <p className="text-[14px] leading-relaxed text-slate-600">
          {description}
        </p>

        {/* Feature Highlights Tags */}
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
        <div className="flex flex-wrap gap-2 mt-auto pt-3 border-t border-slate-200/60">
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
              className="flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider text-slate-700 hover:text-cyan-600 transition-colors"
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
              className="flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider text-slate-700 hover:text-emerald-600 transition-colors"
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
