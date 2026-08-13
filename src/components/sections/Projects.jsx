import SectionLabel from '../ui/SectionLabel'
import ProjectCard from '../ui/ProjectCard'
import { projects } from '../../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6 md:px-16 max-w-[1280px] mx-auto">
      <div className="section-divider mb-16" />
      <SectionLabel number="02">PROJECTS</SectionLabel>
      <h2
        className="font-orbitron font-bold text-slate-900 mb-12"
        style={{ fontSize: 'clamp(28px, 4vw, 42px)' }}
      >
        Featured Work
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <ProjectCard key={p.id} {...p} index={i + 1} />
        ))}
      </div>
    </section>
  )
}
