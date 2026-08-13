import { motion } from 'framer-motion'
import { ShieldCheck, CheckCircle, Award } from 'lucide-react'

export default function CertBadge({ code, title, issuer, category, index }) {
  return (
    <motion.div
      className="glass-panel p-6 hud-corners flex items-start gap-4 transition-all hover:border-cyan-500/40 hover:shadow-md group"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
    >
      <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-600 shrink-0 group-hover:scale-110 transition-transform">
        <ShieldCheck size={22} />
      </div>

      <div className="flex flex-col gap-1 flex-1">
        <div className="flex items-center justify-between gap-2">
          <span className="font-mono text-[11px] font-bold text-cyan-700 bg-cyan-500/10 px-2.5 py-0.5 rounded border border-cyan-500/20">
            {code}
          </span>
          <span className="font-mono text-[10px] text-slate-400 font-semibold uppercase">
            {category}
          </span>
        </div>

        <h4 className="font-sans text-[15px] font-bold text-slate-900 leading-snug mt-1.5 group-hover:text-cyan-700 transition-colors">
          {title}
        </h4>

        <div className="flex items-center gap-1.5 mt-1">
          <CheckCircle size={13} className="text-emerald-500 shrink-0" />
          <p className="font-mono text-xs font-semibold text-slate-500">
            {issuer}
          </p>
        </div>
      </div>
    </motion.div>
  )
}
