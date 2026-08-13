export default function SectionLabel({ number, children }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span
        className="font-mono text-[13px] font-bold tracking-[0.18em] uppercase text-cyan-600 bg-cyan-500/10 px-2.5 py-1 rounded border border-cyan-500/20"
      >
        // {number} — {children}
      </span>
      <div className="flex-1 h-px bg-gradient-to-r from-cyan-500/30 via-slate-200 to-transparent" />
    </div>
  )
}
