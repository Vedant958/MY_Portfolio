import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SectionLabel from '../ui/SectionLabel'
import GlassPanel from '../ui/GlassPanel'
import StatusPill from '../ui/StatusPill'

gsap.registerPlugin(ScrollTrigger)

const DATA_ROWS = [
  { key: 'LOCATION',  val: 'Aligarh, Uttar Pradesh' },
  { key: 'PROGRAM',   val: 'B.Tech, Information Technology' },
  { key: 'GRAD_YEAR', val: '2028' },
  { key: 'PHONE',     val: '+91 7900427390' },
]

export default function About() {
  const sectionRef = useRef(null)
  const textRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 24 },
        {
          opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: textRef.current, start: 'top 80%', once: true },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="py-32 px-6 md:px-16 max-w-[1280px] mx-auto">
      <SectionLabel number="01">ABOUT</SectionLabel>
      <h2
        className="font-orbitron font-bold mb-16 text-glow-cyan"
        style={{ fontSize: 'clamp(26px,5vw,40px)', color: 'var(--text-primary)', letterSpacing: '0.02em' }}
      >
        The Databank
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-8">
        {/* ID card */}
        <GlassPanel hud className="flex flex-col gap-0 self-start">
          <p className="font-mono text-[12px] tracking-[0.12em] uppercase mb-6" style={{ color: 'var(--text-muted)' }}>
            DATABANK_ENTRY // 001
          </p>
          {/* Avatar placeholder */}
          <div
            className="w-full aspect-square rounded-lg mb-6 flex items-center justify-center relative overflow-hidden hud-corners"
            style={{ background: 'rgba(15,240,252,0.04)', border: '1px solid rgba(15,240,252,0.12)' }}
          >
            <span className="font-orbitron text-6xl font-black" style={{ color: 'rgba(15,240,252,0.2)' }}>VV</span>
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'repeating-linear-gradient(0deg, rgba(15,240,252,0.03) 0px, rgba(15,240,252,0.03) 1px, transparent 1px, transparent 4px)',
              }}
            />
          </div>
          {/* Data rows */}
          {DATA_ROWS.map(row => (
            <div
              key={row.key}
              className="flex gap-3 py-3 border-b border-white/[0.04] last:border-b-0 text-[14px]"
            >
              <span className="font-mono w-28 flex-shrink-0" style={{ color: 'var(--neon-cyan)' }}>{row.key}:</span>
              <span style={{ color: 'var(--text-secondary)' }}>{row.val}</span>
            </div>
          ))}
          <div className="flex gap-3 py-3 text-[14px] mt-1">
            <span className="font-mono w-28 flex-shrink-0" style={{ color: 'var(--neon-cyan)' }}>STATUS:</span>
            <StatusPill text="Active" />
          </div>
        </GlassPanel>

        {/* Bio */}
        <div ref={textRef}>
          <p className="text-[18px] leading-relaxed mb-5" style={{ color: 'var(--text-primary)' }}>
            Hey — I'm <span className="font-semibold" style={{ color: 'var(--neon-cyan)' }}>Vedant Varshney</span>, a B.Tech Information Technology student at ACET, Aligarh.
            I have a strong foundation in <span className="font-semibold" style={{ color: 'var(--neon-magenta)' }}>C programming</span> and a growing passion for
            frontend web development and interactive design.
          </p>
          <p className="text-[17px] leading-relaxed mb-5" style={{ color: 'var(--text-secondary)' }}>
            I'm captivated by the intersection of <em>code and creativity</em> — whether it's building
            an arcade game with React, crafting a cyberpunk interactive experience, or exploring
            machine learning fundamentals through self-study.
          </p>
          <p className="text-[17px] leading-relaxed mb-8" style={{ color: 'var(--text-secondary)' }}>
            I believe the best developers never stop building. I'm constantly shipping projects,
            earning certifications, and sharpening my analytical thinking through real-world
            engineering challenges.
          </p>
          {/* Inline skill tags */}
          <div className="flex flex-wrap gap-2">
            {['C', 'Python', 'JavaScript', 'React', 'Git', 'Vercel'].map(s => (
              <span
                key={s}
                className="font-mono text-[12px] px-2.5 py-1 rounded-md"
                style={{
                  color: 'var(--neon-cyan)',
                  border: '1px solid rgba(15,240,252,0.25)',
                  background: 'rgba(15,240,252,0.06)',
                }}
              >
                {s}
              </span>
            ))}
          </div>

          {/* Education block */}
          <div className="mt-10 p-6 rounded-xl border border-white/[0.06]" style={{ background: 'rgba(13,13,24,0.4)' }}>
            <p className="font-mono text-[11px] tracking-[0.14em] uppercase mb-4" style={{ color: 'var(--text-muted)' }}>EDUCATION_LOG</p>
            {[
              { deg: 'B.Tech — Information Technology', school: 'Aligarh College of Engineering & Technology (ACET)', year: '2024 – 2028' },
              { deg: 'Class XII — Science', school: 'Heeralal Barahseni Inter College (UP Board)', year: '2022 – 2024' },
              { deg: 'Class X', school: 'Heeralal Barahseni Inter College (UP Board)', year: '2022' },
            ].map((e, i) => (
              <div key={i} className="flex justify-between items-start py-3 border-b border-white/[0.04] last:border-b-0">
                <div>
                  <p className="font-semibold text-[15px]" style={{ color: 'var(--text-primary)' }}>{e.deg}</p>
                  <p className="font-mono text-[12px] mt-0.5" style={{ color: 'var(--text-muted)' }}>{e.school}</p>
                </div>
                <span className="font-mono text-[12px] whitespace-nowrap ml-4" style={{ color: 'var(--neon-cyan)' }}>{e.year}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
