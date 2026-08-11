import { useRef, useEffect, useState } from 'react'
import { Cpu, Code2, Terminal } from 'lucide-react'
import SectionLabel from '../ui/SectionLabel'
import GlassPanel from '../ui/GlassPanel'
import SkillBar from '../ui/SkillBar'
import { skillGroups } from '../../data/skills'

const ICONS = { Cpu, Code2, Terminal }

function SkillGroup({ title, icon, items, delay = 0 }) {
  const [animate, setAnimate] = useState(false)
  const ref = useRef(null)
  const Icon = ICONS[icon] || Cpu

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setAnimate(true); observer.disconnect() }
    }, { threshold: 0.4 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <GlassPanel
      ref={ref}
      className="flex flex-col gap-0 transition-all duration-300 hover:border-cyan/20"
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/[0.06]">
        <Icon size={18} style={{ color: 'var(--neon-cyan)' }} />
        <span className="font-mono text-[13px] uppercase tracking-[0.12em]" style={{ color: 'var(--text-primary)' }}>
          {title}
        </span>
      </div>
      {items.map((skill, i) => (
        <SkillBar key={skill.name} {...skill} index={i} animate={animate} />
      ))}
    </GlassPanel>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 md:px-16 max-w-[1280px] mx-auto">
      <div className="section-divider mb-20" />
      <SectionLabel number="03">SYSTEM SPECS</SectionLabel>
      <h2
        className="font-orbitron font-bold mb-16"
        style={{ fontSize: 'clamp(26px,5vw,40px)', color: 'var(--text-primary)', letterSpacing: '0.02em' }}
      >
        Tech Stack
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skillGroups.map((group, i) => (
          <SkillGroup key={group.id} {...group} delay={i * 100} />
        ))}
      </div>
    </section>
  )
}
