import { motion } from 'framer-motion'

export default function Button({ children, variant = 'primary', onClick, href, className = '', ...props }) {
  const base = `inline-flex items-center gap-2 px-7 py-3.5 font-mono text-[14px] font-extrabold uppercase tracking-[0.08em] rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
    variant === 'primary'
      ? 'text-white bg-slate-900 hover:bg-slate-800 border border-cyan-500/40 hover:border-cyan-400 shadow-[0_4px_20px_rgba(6,182,212,0.25)] focus:ring-cyan-500'
      : 'text-slate-800 font-bold bg-white border border-slate-300 hover:border-cyan-500 hover:text-cyan-600 shadow-sm focus:ring-cyan-500'
  } ${className}`

  const El = href ? 'a' : 'button'
  return (
    <motion.div whileTap={{ scale: 0.97 }} whileHover={{ scale: 1.03 }}>
      <El className={base} onClick={onClick} href={href} {...props}>
        {children}
      </El>
    </motion.div>
  )
}
