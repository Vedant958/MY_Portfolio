export default function GridBackground() {
  return (
    <div
      className="fixed inset-0 pointer-events-none"
      style={{
        zIndex: -10,
        backgroundImage:
          'linear-gradient(rgba(15,240,252,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(15,240,252,0.05) 1px, transparent 1px)',
        backgroundSize: '42px 42px',
      }}
      aria-hidden="true"
    />
  )
}
