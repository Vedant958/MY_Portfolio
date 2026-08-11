import { motion } from 'framer-motion'

const COLORS = [
  'var(--neon-magenta)',
  'var(--neon-cyan)',
  'var(--neon-purple)',
  'var(--neon-magenta)',
]

export default function SkillBar({ name, level, index = 0, animate = false }) {
  const color = COLORS[index % COLORS.length]
  return (
    <div className="flex items-center gap-4 py-2 border-b border-white/[0.04] last:border-b-0">
      <span className="text-[15px] min-w-[110px]" style={{ color: 'var(--text-primary)' }}>
        {name}
      </span>
      <div className="flex gap-1">
        {[1,2,3,4,5].map(i => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scaleX: 0 }}
            animate={animate ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ delay: (index * 0.06) + (i * 0.04), duration: 0.3, ease: 'easeOut' }}
            className="w-6 h-1 rounded-sm origin-left"
            style={{
              background: i <= level ? color : 'rgba(255,255,255,0.08)',
              boxShadow: i <= level ? `0 0 6px ${color}` : 'none',
            }}
          />
        ))}
      </div>
      <span className="font-mono text-[11px] ml-auto" style={{ color: 'var(--text-muted)' }}>
        {'▮'.repeat(level)}{'▯'.repeat(5 - level)}
      </span>
    </div>
  )
}
