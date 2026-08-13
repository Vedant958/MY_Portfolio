import React from 'react';

/**
 * TECHNICAL CORNER BRACKETS
 * Minimal geometric accents for framing content blocks.
 */
export const CornerBracket = ({ position = 'top-left', size = '24px', thickness = '2px', color = 'text-cyan-500' }) => {
  const positions = {
    'top-left': 'top-0 left-0 border-t border-l',
    'top-right': 'top-0 right-0 border-t border-r',
    'bottom-left': 'bottom-0 left-0 border-b border-l',
    'bottom-right': 'bottom-0 right-0 border-b border-r',
  };

  return (
    <div 
      className={`absolute ${positions[position]} ${color}`}
      style={{ width: size, height: size, borderWidth: thickness }}
    />
  );
};

/**
 * THIN GEOMETRIC SECTION SEPARATOR
 * A sleek divider with a central terminal-style node.
 */
export const TechSeparator = ({ label = "SECTION_ID" }) => (
  <div className="relative flex items-center w-full my-8">
    <div className="flex-grow h-px bg-slate-200" />
    <div className="flex items-center gap-2 px-4">
      <div className="w-1 h-1 bg-cyan-400 rounded-full animate-pulse" />
      <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase">{label}</span>
      <div className="w-1 h-1 bg-emerald-400 rounded-full" />
    </div>
    <div className="flex-grow h-px bg-slate-200" />
  </div>
);

/**
 * SMALL DATA NODES
 * Interactive or status-based geometric points for data maps.
 */
export const DataNode = ({ status = 'active', label, subtext }) => {
  const statusColors = {
    active: 'bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.5)]',
    stable: 'bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.5)]',
    idle: 'bg-slate-300',
  };

  return (
    <div className="flex items-center gap-3 p-2 border border-slate-100 bg-white/50 backdrop-blur-sm rounded-lg hover:border-cyan-200 transition-all cursor-crosshair">
      <div className={`w-2 h-2 rounded-full ${statusColors[status]}`} />
      <div className="flex flex-col">
        {label && <span className="text-[10px] font-mono font-bold text-slate-800 leading-none">{label}</span>}
        {subtext && <span className="text-[8px] font-mono text-slate-400 uppercase">{subtext}</span>}
      </div>
    </div>
  );
};

/**
 * SUBTLE CIRCUIT TRACES
 * SVG-based background or foreground decorative line paths.
 */
export const CircuitTrace = ({ className = "" }) => (
  <svg 
    className={`opacity-20 pointer-events-none ${className}`} 
    width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M0 20H40L60 40H100" 
      stroke="currentColor" 
      strokeWidth="0.5" 
      className="text-cyan-500"
    />
    <circle cx="40" cy="20" r="1.5" fill="currentColor" className="text-cyan-400" />
    <circle cx="60" cy="40" r="1.5" fill="currentColor" className="text-emerald-400" />
    <path 
      d="M20 100V70L40 50V0" 
      stroke="currentColor" 
      strokeWidth="0.5" 
      className="text-slate-300"
    />
  </svg>
);
