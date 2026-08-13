import { motion } from 'framer-motion'

export default function EdgeLighting() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[150] overflow-hidden" aria-hidden="true">
      {/* Left Neon Light Strip */}
      <motion.div
        className="absolute top-0 bottom-0 left-0 w-[2px]"
        style={{
          background: 'linear-gradient(180deg, transparent 0%, #06B6D4 20%, #00D8D6 50%, #06B6D4 80%, transparent 100%)',
          boxShadow: '0 0 12px rgba(6, 182, 212, 0.5), 0 0 4px rgba(6, 182, 212, 0.8)',
        }}
        animate={{
          opacity: [0.6, 0.95, 0.6],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Right Neon Light Strip */}
      <motion.div
        className="absolute top-0 bottom-0 right-0 w-[2px]"
        style={{
          background: 'linear-gradient(180deg, transparent 0%, #06B6D4 20%, #00D8D6 50%, #06B6D4 80%, transparent 100%)',
          boxShadow: '0 0 12px rgba(6, 182, 212, 0.5), 0 0 4px rgba(6, 182, 212, 0.8)',
        }}
        animate={{
          opacity: [0.6, 0.95, 0.6],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      />

      {/* Viewport Corner Brackets */}
      {/* Top Left */}
      <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-cyan-500/60 rounded-tl-sm" />
      {/* Top Right */}
      <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-cyan-500/60 rounded-tr-sm" />
      {/* Bottom Left */}
      <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-cyan-500/60 rounded-bl-sm" />
      {/* Bottom Right */}
      <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-cyan-500/60 rounded-br-sm" />
    </div>
  )
}
