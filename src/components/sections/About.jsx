import { useRef } from 'react'
import { motion } from 'framer-motion'
import { User, MapPin, GraduationCap, Code, Cpu, Activity, Terminal } from 'lucide-react'
import SectionLabel from '../ui/SectionLabel'
import GlassPanel from '../ui/GlassPanel'
import StatusPill from '../ui/StatusPill'

const SYSTEM_FACTS = [
  { label: 'LOCATION', value: 'Aligarh, Uttar Pradesh, India', icon: MapPin },
  { label: 'DEGREE', value: 'B.Tech — Information Technology', icon: GraduationCap },
  { label: 'INSTITUTION', value: 'Aligarh College of Engg. & Tech.', icon: User },
  { label: 'BATCH', value: '2024 – 2028', icon: Activity },
]

const FUNDAMENTAL_TAGS = ['C', 'Python', 'JavaScript', 'React', 'HTML5', 'CSS3', 'Git', 'Vercel']

export default function About() {
  return (
    <section id="about" className="py-28 px-6 md:px-16 max-w-[1280px] mx-auto">
      <SectionLabel number="01">ABOUT</SectionLabel>
      
      <motion.h2
        className="font-orbitron font-bold text-slate-900 mb-12"
        style={{ fontSize: 'clamp(28px, 4vw, 42px)' }}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Developer Profile
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-10 items-start">
        {/* Left Side: Short Authentic Introduction */}
        <motion.div
          className="flex flex-col gap-6"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="glass-panel p-8 flex flex-col gap-5">
            <p className="text-[18px] sm:text-[20px] font-medium leading-relaxed text-slate-800">
              Hello! I'm <span className="font-bold text-cyan-600">Vedant Varshney</span>, a B.Tech Information Technology student at ACET, Aligarh.
            </p>

            <p className="text-[16px] leading-relaxed text-slate-600">
              I am deeply interested in software development and frontend engineering. Right now, I'm focusing on strengthening my core fundamentals in <strong className="text-slate-800 font-semibold">C</strong>, <strong className="text-slate-800 font-semibold">Python</strong>, <strong className="text-slate-800 font-semibold">JavaScript</strong>, and <strong className="text-slate-800 font-semibold">React</strong>.
            </p>

            <p className="text-[16px] leading-relaxed text-slate-600">
              My goal is simple: build practical software projects, understand how systems work from first principles, and continuously evolve into a well-rounded engineer.
            </p>

            <div className="pt-4 border-t border-slate-200/80">
              <span className="font-mono text-xs uppercase tracking-widest text-slate-400 block mb-3">
                CORE STACK &amp; TOOLING
              </span>
              <div className="flex flex-wrap gap-2">
                {FUNDAMENTAL_TAGS.map(tag => (
                  <span
                    key={tag}
                    className="font-mono text-[12px] font-semibold px-3 py-1 rounded-md bg-cyan-500/10 text-cyan-700 border border-cyan-500/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side: SYSTEM STATUS / Facts Panel */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <GlassPanel className="p-7 hud-corners flex flex-col gap-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200/80">
              <div className="flex items-center gap-2 font-mono text-xs font-bold tracking-widest text-slate-800 uppercase">
                <Terminal size={16} className="text-cyan-600" />
                <span>SYSTEM STATUS</span>
              </div>
              <StatusPill text="ONLINE" />
            </div>

            <div className="flex flex-col gap-4">
              {SYSTEM_FACTS.map((fact) => {
                const Icon = fact.icon
                return (
                  <div
                    key={fact.label}
                    className="flex items-start gap-3.5 p-3 rounded-lg bg-slate-50/80 border border-slate-200/60"
                  >
                    <div className="p-2 rounded-md bg-cyan-500/10 text-cyan-600 shrink-0 mt-0.5">
                      <Icon size={16} />
                    </div>
                    <div>
                      <span className="font-mono text-[11px] font-bold tracking-wider text-slate-400 uppercase block">
                        {fact.label}
                      </span>
                      <span className="font-sans text-[14px] font-semibold text-slate-800">
                        {fact.value}
                      </span>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="p-4 rounded-xl bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 border border-cyan-500/20 mt-1">
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-cyan-700 uppercase mb-1">
                <Code size={14} />
                <span>CURRENT OBJECTIVE</span>
              </div>
              <p className="text-[13px] leading-relaxed text-slate-600">
                Building browser games and interactive React applications to sharpen problem solving.
              </p>
            </div>
          </GlassPanel>
        </motion.div>
      </div>
    </section>
  )
}
