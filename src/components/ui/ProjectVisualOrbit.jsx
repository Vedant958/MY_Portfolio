import { motion } from 'framer-motion'

export default function ProjectVisualOrbit({ hovered = false }) {
  return (
    <div className="relative w-full h-52 overflow-hidden rounded-t-2xl border-b border-slate-200/80 bg-slate-50">
      <motion.img
        src="https://lh3.googleusercontent.com/aida/AP1WRLsSFtJHLx6w8pMgPQy-N-yr0zRrGIoYzsyhau18t76EDmsDxVZw3jc2f-pjVFzg5BSHBNEz9aZpuyH7kwOHoaXLbp_gIV8cxrKdWwHEg0LpbMrL5yXA3lN3oqM3AbrejGqECucsMiu5Eh8sEo6lmHmJIXYFBmh_-2uzAT_Rf1HZcGBd5qAgC6v59BHIKvDKJldO_3B-NvGSm7zfPdjwT8PSMxwzPDgKcOWgGvAwK5DN1UyYCSDuY2ha"
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
