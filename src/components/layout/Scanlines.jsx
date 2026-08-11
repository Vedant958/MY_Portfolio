export default function Scanlines() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-[998] opacity-50"
      style={{
        background: 'repeating-linear-gradient(0deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 3px)',
      }}
      aria-hidden="true"
    />
  )
}
