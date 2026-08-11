import { motion } from 'framer-motion'
import { ShieldCheck } from 'lucide-react'

export default function CertBadge({ code, title, issuer, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, rotateX: 8, y: 20 }}
      whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16,1,0.3,1] }}
      className="glass-panel hud-corners p-6 flex items-start gap-4 group"
      style={{
        boxShadow: '0 0 0 1px rgba(57,255,158,0.08)',
        transformStyle: 'preserve-3d',
      }}
    >
      <ShieldCheck
        className="mt-0.5 flex-shrink-0 transition-all duration-300 group-hover:scale-110"
        size={20}
        style={{ color: 'var(--neon-green)' }}
      />
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2 mb-1">
          <p className="text-[15px] font-semibold leading-snug" style={{ color: 'var(--text-primary)' }}>
            {title}
          </p>
          <span
            className="font-mono text-[10px] whitespace-nowrap ml-2 px-1.5 py-0.5 rounded"
            style={{
              color: 'var(--neon-green)',
              border: '1px solid rgba(57,255,158,0.25)',
              background: 'rgba(57,255,158,0.05)',
            }}
          >
            {code}
          </span>
        </div>
        <p className="font-mono text-[12px] tracking-[0.04em]" style={{ color: 'var(--text-muted)' }}>
          {issuer}
        </p>
      </div>
    </motion.div>
  )
}
