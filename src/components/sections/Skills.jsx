import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Cpu, Code2, Sparkles, Terminal, Brain, CheckCircle2, ChevronDown } from 'lucide-react'
import SectionLabel from '../ui/SectionLabel'
import GlassPanel from '../ui/GlassPanel'
import CurrentFocus from './CurrentFocus'
import { skillCategories } from '../../data/skills'

const ICONS = { Cpu, Code2, Sparkles, Terminal, Brain }

export default function Skills() {
  const [expanded, setExpanded] = useState({})

  const toggleGroup = (id) => {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <section id="skills" className="py-28 px-6 md:px-16 max-w-[1280px] mx-auto">
      <div className="section-divider mb-16" />
      <SectionLabel number="03">SKILLS</SectionLabel>
      <h2
        className="font-orbitron font-bold text-slate-900 mb-12"
        style={{ fontSize: 'clamp(28px, 4vw, 42px)' }}
      >
        Technical Competencies
      </h2>

      {/* Current Focus Banner */}
      <div className="mb-14">
        <CurrentFocus />
      </div>

      {/* Skill Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((group, idx) => {
          const Icon = ICONS[group.icon] || Cpu
          const isExpanded = expanded[group.id] !== false // Default open

          return (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
            >
              <GlassPanel className="p-6 hud-corners h-full flex flex-col justify-between">
                <div>
                  <div
                    className="flex items-center justify-between pb-3 mb-3 border-b border-slate-200/80 cursor-pointer select-none"
                    onClick={() => toggleGroup(group.id)}
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-600">
                        <Icon size={18} />
                      </div>
                      <h3 className="font-orbitron text-base font-bold text-slate-900">
                        {group.title}
                      </h3>
                    </div>

                    <button className="p-1 text-slate-400 hover:text-cyan-600 transition-colors">
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                      />
                    </button>
                  </div>

                  <p className="text-xs text-slate-500 mb-4">
                    {group.description}
                  </p>
                </div>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="flex flex-col gap-2 mt-auto"
                    >
                      {group.skills.map((skill) => (
                        <div
                          key={skill.name}
                          className="p-3 rounded-lg bg-slate-50 border border-slate-200/80 flex items-center justify-between hover:border-cyan-500/40 hover:bg-cyan-500/5 transition-all group"
                        >
                          <div className="flex items-center gap-2">
                            <CheckCircle2 size={15} className="text-cyan-600 group-hover:scale-110 transition-transform" />
                            <span className="font-sans text-xs font-bold text-slate-800">
                              {skill.name}
                            </span>
                          </div>
                          <span className="font-mono text-[10px] font-semibold text-slate-500 bg-white border border-slate-200 px-2 py-0.5 rounded">
                            {skill.badge}
                          </span>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </GlassPanel>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
