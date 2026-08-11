import SectionLabel from '../ui/SectionLabel'
import ProjectCard from '../ui/ProjectCard'
import { projects } from '../../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 md:px-16 max-w-[1280px] mx-auto">
      <div className="section-divider mb-20" />
      <SectionLabel number="02">PROJECTS</SectionLabel>
      <h2
        className="font-orbitron font-bold mb-16"
        style={{ fontSize: 'clamp(26px,5vw,40px)', color: 'var(--text-primary)', letterSpacing: '0.02em' }}
      >
        The Grid
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <ProjectCard key={p.id} {...p} index={i + 1} />
        ))}
      </div>
    </section>
  )
}
