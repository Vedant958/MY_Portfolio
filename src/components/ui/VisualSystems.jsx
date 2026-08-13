import React from 'react';
import { 
  Terminal, 
  Code2, 
  Cpu, 
  Hash, 
  Binary, 
  Layout, 
  GitBranch, 
  FolderGit2, 
  Triangle, 
  Box,
  Zap,
  ShieldCheck
} from 'lucide-react';

/**
 * TECHNICAL SKILL NODE
 * An abstract geometric representation of a skill, styled as a system node.
 */
export const SkillNode = ({ icon: Icon, label, level = "OPTIMAL", color = "cyan" }) => {
  const themes = {
    cyan: "text-cyan-500 border-cyan-100 bg-cyan-50/30 shadow-[0_0_15px_rgba(6,182,212,0.1)]",
    emerald: "text-emerald-500 border-emerald-100 bg-emerald-50/30 shadow-[0_0_15px_rgba(16,185,129,0.1)]",
  };

  return (
    <div className={`relative group flex flex-col items-center justify-center p-6 border rounded-xl transition-all duration-500 hover:scale-105 ${themes[color]}`}>
      {/* Abstract Background Geometry */}
      <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden rounded-xl">
        <div className="absolute top-0 left-0 w-full h-px bg-current transform -translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
        <div className="absolute -right-4 -bottom-4 w-12 h-12 border border-current rounded-full rotate-45" />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-3">
        <div className="p-3 bg-white/80 rounded-lg shadow-sm border border-inherit">
          <Icon size={24} strokeWidth={1.5} />
        </div>
        <div className="text-center">
          <span className="block text-[10px] font-mono tracking-widest uppercase opacity-60 mb-1">
            // {level}
          </span>
          <span className="block text-sm font-bold tracking-tight text-slate-800 uppercase">
            {label}
          </span>
        </div>
      </div>
      
      {/* Corner Accents */}
      <div className="absolute top-2 left-2 w-1 h-1 bg-current rounded-full opacity-40" />
      <div className="absolute bottom-2 right-2 w-1 h-1 bg-current rounded-full opacity-40" />
    </div>
  );
};

/**
 * CERTIFICATION BADGE (CertBadge)
 * A high-fidelity badge featuring thin-line motifs and minimal geometry.
 */
export const CertBadge = ({ title, issuer, date, status = "VERIFIED" }) => (
  <div className="relative flex items-center gap-4 p-4 border border-slate-200 bg-white shadow-sm rounded-sm overflow-hidden group hover:border-cyan-400 transition-colors">
    {/* Thin Line Motifs */}
    <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none opacity-20">
      <svg viewBox="0 0 100 100" className="w-full h-full text-cyan-600">
        <path d="M0 0 L100 100 M20 0 L100 80 M0 20 L80 100" stroke="currentColor" strokeWidth="0.5" fill="none" />
      </svg>
    </div>

    {/* Badge Geometry */}
    <div className="relative flex-shrink-0 w-12 h-12 flex items-center justify-center">
      <div className="absolute inset-0 border border-cyan-500/30 rotate-45 group-hover:rotate-90 transition-transform duration-1000" />
      <div className="absolute inset-2 border border-emerald-500/20 -rotate-12 group-hover:rotate-12 transition-transform duration-1000" />
      <ShieldCheck className="text-cyan-600" size={20} strokeWidth={1.5} />
    </div>

    <div className="flex flex-col z-10">
      <div className="flex items-center gap-2">
        <span className="text-[9px] font-mono font-bold text-cyan-600 tracking-tighter uppercase">
          {status}
        </span>
        <div className="w-1 h-1 bg-slate-300 rounded-full" />
        <span className="text-[9px] font-mono text-slate-400">{date}</span>
      </div>
      <h4 className="text-sm font-bold text-slate-900 leading-tight mb-0.5">{title}</h4>
      <p className="text-[10px] text-slate-500 uppercase tracking-wider">{issuer}</p>
    </div>
  </div>
);
