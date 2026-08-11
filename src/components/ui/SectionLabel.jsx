export default function SectionLabel({ number, children }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span
        className="font-mono text-[13px] font-medium tracking-[0.18em] uppercase"
        style={{ color: 'var(--neon-cyan)' }}
      >
        // {number} — {children}
      </span>
      <div className="flex-1 h-px" style={{ background: 'var(--grid-line)' }} />
    </div>
  )
}
