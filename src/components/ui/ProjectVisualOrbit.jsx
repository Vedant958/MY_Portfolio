import { motion } from 'framer-motion'

export default function ProjectVisualOrbit({ hovered = false }) {
  return (
    <div className="relative w-full h-52 overflow-hidden rounded-t-2xl border-b border-slate-200/80 bg-slate-50">
      <motion.img
        src="https://lh3.googleusercontent.com/aida/AP1WRLtYrkFeXibSj6aEN3T_nTKCxNaKHXTZgjq3_vAYA2LKcc2QiRXIZfUMn2_UxzKhCE_Oi1HAPUEi4VMFwXi25MYPk5ogbjrG-NMoFxz84TpTN7JrxTLgCFY3mIWIMEJT9A5aA7hX3HFiq44ZZpNs4eDUMWgDiNSN4MRzjTX9WegWeYRu6Ug7ezOI_-Xrj-xRInPQQgQYbvE-GYI3ziLqkTmUoGfUXCa3eOMNoY_D177Rsq3II_8qfLoi5A"
        alt="ORBIT: The Last Defense Preview"
        className="w-full h-full object-cover"
        animate={hovered ? { scale: 1.06 } : { scale: 1 }}
        transition={{ duration: 0.5 }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-60" />
      <span className="absolute top-3 left-3 font-mono text-[11px] font-bold px-2.5 py-1 rounded bg-slate-900/90 text-cyan-400 border border-cyan-500/30">
        [ ARCADE ENGINE ]
      </span>
    </div>
  )
}
