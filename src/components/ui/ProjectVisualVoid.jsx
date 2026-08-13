import { motion } from 'framer-motion'

export default function ProjectVisualVoid({ hovered = false }) {
  return (
    <div className="relative w-full h-52 overflow-hidden rounded-t-2xl border-b border-slate-200/80 bg-slate-50">
      <motion.img
        src="https://lh3.googleusercontent.com/aida/AP1WRLsRA-JaTPrjt4YD_rao4R1vcftSkL-hDY8W5AEexAz1BqtQZWRuIsWbyk-H15VYt5-nk5jESuZQMffyX5BLCleCnsAisvlO2fgLmZp8MjZa11TogmqBG7lH2fSxa2uz41scK-y_DcoEVZMu5i_mbXnT_Ps8UxEQv-1PXvy64YQHPxnVwAFNhmjZtmNGbYeJghpKnbST0BL6Z2SBtlAE3Ey8gkXHvspazuaeyTwpUt_q0JOxMgezr1v9"
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
