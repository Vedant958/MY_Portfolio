export default function GridBackground() {
  return (
    <div
      className="fixed inset-0 pointer-events-none"
      style={{
        zIndex: -10,
        backgroundImage:
          'linear-gradient(rgba(6,182,212,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.07) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }}
      aria-hidden="true"
    />
  )
}

