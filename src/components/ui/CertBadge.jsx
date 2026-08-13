import { motion } from 'framer-motion'
import { Award, ShieldCheck, CheckCircle } from 'lucide-react'

export default function CertBadge({ code, title, issuer, index }) {
  return (
    <motion.div
      className="glass-panel p-6 hud-corners flex items-start gap-4 transition-all hover:border-cyan-500/40 hover:shadow-md"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
    >
      <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-600 shrink-0">
        <ShieldCheck size={24} />
      </div>

      <div className="flex flex-col gap-1 flex-1">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[11px] font-bold text-cyan-700 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
            {code}
          </span>
          <CheckCircle size={14} className="text-emerald-500" />
        </div>

        <h4 className="font-sans text-[15px] font-bold text-slate-900 leading-snug mt-1">
          {title}
        </h4>

        <p className="font-mono text-[12px] text-slate-500">
          {issuer}
        </p>
      </div>
    </motion.div>
  )
}
