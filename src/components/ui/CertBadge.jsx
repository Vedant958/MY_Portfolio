import { motion } from 'framer-motion'
import { ShieldCheck, CheckCircle } from 'lucide-react'

export default function CertBadge({ code, title, issuer, category, index }) {
  return (
    <motion.div
      className="relative flex items-center gap-4 p-4 border border-slate-200 bg-white shadow-sm rounded-sm overflow-hidden group hover:border-cyan-400 transition-colors"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
    >
      {/* Thin Line Motifs */}
      <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none opacity-20">
        <svg viewBox="0 0 100 100" className="w-full h-full text-cyan-600">
          <path d="M0 0 L100 100 M20 0 L100 80 M0 20 L80 100" stroke="currentColor" strokeWidth="0.5" fill="none" />
        </svg>
      </div>

      {/* Badge Geometry */}
      <div className="relative flex-shrink-0 w-12 h-12 flex items-center justify-center">
        <div className="absolute inset-0 border border-cyan-500/30 rotate-45 group-hover:rotate-90 transition-transform duration-1000" />
        <div className="absolute inset-2 border border-emerald-500/20 -rotate-12 group-hover:rotate-12 transition-transform duration-1000" />
        <ShieldCheck className="text-cyan-600 relative z-10 group-hover:scale-110 transition-transform" size={20} strokeWidth={1.5} />
      </div>

      <div className="flex flex-col z-10 flex-1">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-[9px] font-mono font-bold text-cyan-600 tracking-tighter uppercase">
            {code}
          </span>
          <div className="w-1 h-1 bg-slate-300 rounded-full" />
          <span className="text-[9px] font-mono text-slate-400 uppercase">{category}</span>
        </div>
        <h4 className="text-sm font-bold text-slate-900 leading-tight mb-0.5 group-hover:text-cyan-700 transition-colors">{title}</h4>
        
        <div className="flex items-center gap-1.5 mt-1">
          <CheckCircle size={10} className="text-emerald-500 shrink-0" />
          <p className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">{issuer}</p>
        </div>
      </div>
    </motion.div>
  )
}
