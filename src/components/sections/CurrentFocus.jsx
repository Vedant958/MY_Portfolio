import { motion } from 'framer-motion'
import { Target, BookOpen, ArrowUpRight } from 'lucide-react'

export default function CurrentFocus() {
  return (
    <motion.div
      className="p-8 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-teal-500/10 to-emerald-500/10 border border-cyan-500/30 shadow-[0_8px_30px_rgba(6,182,212,0.08)] relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Background graphic glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-400/20 blur-3xl pointer-events-none rounded-full" />

      <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex flex-col gap-3 max-w-3xl">
          <div className="flex items-center gap-2 font-mono text-xs font-bold tracking-widest text-cyan-700 uppercase">
            <Target size={16} className="text-cyan-600 animate-spin" style={{ animationDuration: '8s' }} />
            <span>CURRENT FOCUS</span>
          </div>

          <p className="text-[17px] sm:text-[19px] font-medium leading-relaxed text-slate-800">
            “Strengthening programming fundamentals in <strong className="text-cyan-700">C</strong> and <strong className="text-cyan-700">Python</strong> while learning <strong className="text-teal-700">JavaScript</strong>, <strong className="text-teal-700">React</strong> and modern frontend development through practical projects.”
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <div className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 font-mono text-xs font-bold flex items-center gap-2 shadow-sm">
            <BookOpen size={14} className="text-cyan-600" />
            <span>ACTIVE LEARNING</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
