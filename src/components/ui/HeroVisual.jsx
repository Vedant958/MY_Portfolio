import { motion } from 'framer-motion'

export default function HeroVisual() {
  return (
    <div className="relative w-full max-w-[650px] aspect-[16/9] mx-auto overflow-hidden rounded-2xl border border-cyan-500/20 bg-white/70 shadow-[0_10px_40px_rgba(6,182,212,0.1)] backdrop-blur-md">
      {/* Stitch Generated Hero Artwork Background */}
      <img
        src="https://lh3.googleusercontent.com/aida/AP1WRLtfTy6IF51hcdQ9-6rGv9dRRp6fa7s6SueQD2WpvEdO4tacg9vPKkDisgqN-17iwR_DHunaXQje5R-1QyeaPPHEpNyFH0KD2T6MLV1Vc9L0DJBLcKuYGuMM5EoQyGg2gIpfxRuKOKnIaa9-LLw5dmXszINfcSokkIx_tiQB4LOOa46gsSpPum9R3LQ1rttdZYY4h6Xy7NiuKwbZ1bT58vRMy_TdYKZBVX0S2E82CVny6kWK9GSv6jkh2Q"
        alt="Hero Luminous Geometry Motif"
        className="w-full h-full object-cover opacity-90 transition-transform duration-700 hover:scale-105"
      />

      {/* Overlay Ambient Signal Glow */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(6,182,212,0.15) 0%, transparent 70%)',
        }}
        animate={{
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Floating Interactive HUD Tags */}
      <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/80 backdrop-blur-md border border-slate-200 text-slate-600 font-mono text-[10px] font-bold shadow-sm">
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
        <span className="tracking-widest uppercase">VV // PORTFOLIO</span>
      </div>
    </div>
  )
}
