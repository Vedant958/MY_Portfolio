import { motion } from 'framer-motion'

export default function Button({ children, variant = 'primary', onClick, href, className = '', ...props }) {
  const base = `inline-flex items-center gap-2 px-6 py-3 font-mono text-[14px] font-semibold uppercase tracking-[0.08em] rounded-lg hud-corners transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-void ${
    variant === 'primary'
      ? 'text-void focus:ring-magenta'
      : 'text-cyan border border-white/10 bg-transparent hover:border-white/20 focus:ring-cyan'
  } ${className}`

  const style = variant === 'primary'
    ? { background: 'var(--gradient-cta)', boxShadow: '0 0 24px rgba(255,46,154,0.3)' }
    : {}

  const El = href ? 'a' : 'button'
  return (
    <motion.div whileTap={{ scale: 0.97 }} whileHover={{ scale: 1.02 }}>
      <El className={base} style={style} onClick={onClick} href={href} {...props}>
        {children}
      </El>
    </motion.div>
  )
}
