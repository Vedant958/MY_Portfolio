import { motion } from 'framer-motion'
import { Cpu, Code2, Sparkles, Terminal, CheckCircle2 } from 'lucide-react'
import SectionLabel from '../ui/SectionLabel'
import GlassPanel from '../ui/GlassPanel'
import CurrentFocus from './CurrentFocus'
import { skillCategories } from '../../data/skills'

const ICONS = { Cpu, Code2, Sparkles, Terminal }

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 md:px-16 max-w-[1280px] mx-auto">
      <div className="section-divider mb-16" />
      <SectionLabel number="03">SKILLS</SectionLabel>
      <h2
        className="font-orbitron font-bold text-slate-900 mb-12"
        style={{ fontSize: 'clamp(28px, 4vw, 42px)' }}
      >
        Technical Skillset
      </h2>

      {/* Current Focus Banner */}
      <div className="mb-14">
        <CurrentFocus />
      </div>

      {/* Visual Skill Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((group, idx) => {
          const Icon = ICONS[group.icon] || Cpu
          return (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              <GlassPanel className="p-7 hud-corners h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200/80">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-600">
                        <Icon size={20} />
                      </div>
                      <h3 className="font-orbitron text-lg font-bold text-slate-900">
                        {group.title}
                      </h3>
                    </div>
                    <span className="font-mono text-[11px] font-bold text-slate-400">
                      0{idx + 1}
                    </span>
                  </div>

                  <p className="text-[13px] text-slate-500 mb-6">
                    {group.description}
                  </p>
                </div>

                {/* Skill Tag Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-auto">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between hover:border-cyan-500/40 hover:bg-cyan-500/5 transition-all group"
                    >
                      <div className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-cyan-600 group-hover:scale-110 transition-transform" />
                        <span className="font-sans text-sm font-bold text-slate-800">
                          {skill.name}
                        </span>
                      </div>
                      <span className="font-mono text-[10px] font-semibold tracking-wider text-slate-500 bg-white border border-slate-200 px-2 py-0.5 rounded">
                        {skill.badge}
                      </span>
                    </div>
                  ))}
                </div>
              </GlassPanel>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
