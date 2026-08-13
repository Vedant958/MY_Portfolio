import { motion } from 'framer-motion'

export default function HeroVisual() {
  return (
    <div className="relative w-full max-w-[650px] aspect-[16/9] mx-auto overflow-hidden rounded-2xl border border-cyan-500/20 bg-white/70 shadow-[0_10px_40px_rgba(6,182,212,0.1)] backdrop-blur-md">
      {/* Stitch Generated Hero Artwork Background */}
      <img
        src="https://lh3.googleusercontent.com/aida/AP1WRLu6neQxlBw9rjN_BcctSOUECPSJE0K9bSxHDfkv10gbqqMoJcuMexTp2Qop9SK0svr_2AMzDcxU_gG1yZTPkxKrg3Xt3mF49VekJJFl8yqCzR-TEcz1ORL5BXiyXRUv25kXZ4xpA1CGvPAqts_XV2CztuJ1JZ20JEEUHJCrGfthQpRXKfEWM53ZH77uCUf3Ogo95yULLTFYFuxG5-KtnK9IB8pPGmGpu6gtf09WduEIWzsy5rZ9pdTGSQ"
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
      <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 rounded-md bg-slate-900/90 backdrop-blur-md border border-cyan-500/40 text-cyan-400 font-mono text-[11px] font-bold shadow-md">
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
        <span>SYSTEM_CORE // ACTIVE</span>
      </div>

      <div className="absolute bottom-4 right-4 font-mono text-[11px] font-semibold text-slate-600 bg-white/90 px-3 py-1 rounded-md border border-slate-200 shadow-sm">
        LATENCY: 0.04ms
      </div>
    </div>
  )
}
