import { motion } from 'framer-motion';

export default function ContactVisual() {
  return (
    <div className="w-full h-full min-h-[160px] bg-slate-50 relative overflow-hidden flex items-center justify-center border border-slate-200/60 rounded-xl">
      {/* Background Grid */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{
          backgroundImage: 'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)',
          backgroundSize: '15px 15px'
        }}
      />
      
      {/* Network Nodes */}
      <div className="relative z-10 w-full h-full max-w-[300px]">
        <svg className="w-full h-full opacity-60" viewBox="0 0 300 160">
          {/* Paths */}
          <path d="M50,80 L150,80 L200,40 L250,40" fill="none" stroke="#06B6D4" strokeWidth="1.5" strokeOpacity="0.4" />
          <path d="M50,80 L120,120 L250,120" fill="none" stroke="#10B981" strokeWidth="1.5" strokeOpacity="0.4" />
          
          {/* Animated Signal Pulses */}
          <motion.circle cx="50" cy="80" r="3" fill="#06B6D4"
            animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.circle cx="150" cy="80" r="4" fill="#06B6D4" />
          <motion.circle cx="200" cy="40" r="3" fill="#06B6D4"
            animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, delay: 0.5, repeat: Infinity }}
          />
          <motion.circle cx="250" cy="40" r="4" fill="#06B6D4" />
          
          <motion.circle cx="120" cy="120" r="3" fill="#10B981"
            animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, delay: 1, repeat: Infinity }}
          />
          <motion.circle cx="250" cy="120" r="4" fill="#10B981" />
          
          {/* Signal dots moving along path */}
          <motion.circle r="2" fill="#06B6D4">
            <animateMotion dur="3s" repeatCount="indefinite" path="M50,80 L150,80 L200,40 L250,40" />
          </motion.circle>
          <motion.circle r="2" fill="#10B981">
            <animateMotion dur="4s" repeatCount="indefinite" path="M50,80 L120,120 L250,120" />
          </motion.circle>
        </svg>
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-transparent to-white/60 pointer-events-none" />
    </div>
  );
}
