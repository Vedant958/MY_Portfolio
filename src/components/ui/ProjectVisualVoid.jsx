import { motion } from 'framer-motion'

export default function ProjectVisualVoid({ hovered = false }) {
  return (
    <div className="relative w-full h-52 overflow-hidden rounded-t-2xl border-b border-slate-200/80 bg-slate-50">
      <motion.img
        src="https://lh3.googleusercontent.com/aida/AP1WRLteEUUHQOVMEEoNlc5exbszXeVrtf1_xpOLxBRYqQ1fjBgQHr0q9r5qWlxgcAfRvPw6TodtuYCT6c_Gk9_T37wJtF7uEneRlYadsGdXl73S-fCOfCy7HL0ujB7bH1g72yjWLz1UK4e-UJGdwyD8RaddF7n-hUup3PhuJhvkBoeeVcbVNv9i-ihBPt2oYPQEgBdx17l3rzw7kmCLxAcpfPXt4E4yIVdIPG7W27kmxGYMEZ-TQtbp-eAa"
        alt="VOID Project Preview"
        className="w-full h-full object-cover"
        animate={hovered ? { scale: 1.06 } : { scale: 1 }}
        transition={{ duration: 0.5 }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-60" />
      <span className="absolute top-3 left-3 font-mono text-[11px] font-bold px-2.5 py-1 rounded bg-slate-900/90 text-emerald-400 border border-emerald-500/30">
        [ SYSTEM CORE ]
      </span>
    </div>
  )
}
