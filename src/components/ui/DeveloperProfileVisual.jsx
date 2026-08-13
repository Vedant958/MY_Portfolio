import { motion } from 'framer-motion';

export default function DeveloperProfileVisual() {
  return (
    <div className="w-full h-full min-h-[200px] bg-slate-50 relative overflow-hidden flex items-center justify-center border border-slate-200/60 rounded-xl">
      {/* Background Grid */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{
          backgroundImage: 'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}
      />
      
      {/* Core Node */}
      <motion.div
        className="relative z-10 w-24 h-24 flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="absolute inset-0 border border-cyan-400 rounded-full opacity-20" />
        <motion.div 
          className="absolute inset-2 border-2 border-dashed border-cyan-500 rounded-full opacity-40"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <div className="w-10 h-10 bg-gradient-to-tr from-cyan-500 to-emerald-400 rounded-lg rotate-45 opacity-80 shadow-[0_0_30px_rgba(6,182,212,0.4)]" />
        <div className="absolute w-4 h-4 bg-white rounded-sm rotate-45 z-20" />
      </motion.div>

      {/* Orbiting Elements */}
      <motion.div 
        className="absolute w-48 h-48 border border-emerald-500/10 rounded-full"
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute top-0 left-1/2 w-2 h-2 bg-emerald-400 rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
      </motion.div>

      {/* Connection Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30" viewBox="0 0 400 200" preserveAspectRatio="none">
        <motion.path 
          d="M0,100 L150,100 L175,75" 
          fill="none" 
          stroke="#06B6D4" 
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        <motion.path 
          d="M400,100 L250,100 L225,125" 
          fill="none" 
          stroke="#10B981" 
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      </svg>
      
      {/* Overlay gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent pointer-events-none" />
    </div>
  );
}
