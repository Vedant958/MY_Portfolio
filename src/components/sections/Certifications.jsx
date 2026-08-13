import SectionLabel from '../ui/SectionLabel'
import CertBadge from '../ui/CertBadge'
import { certifications } from '../../data/certifications'

export default function Certifications() {
  return (
    <section id="certs" className="py-24 px-6 md:px-16 max-w-[1280px] mx-auto">
      <div className="section-divider mb-16" />
      <SectionLabel number="04">ACHIEVEMENTS</SectionLabel>
      <h2
        className="font-orbitron font-bold text-slate-900 mb-12"
        style={{ fontSize: 'clamp(28px, 4vw, 42px)' }}
      >
        Certifications &amp; Training
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certifications.map((cert, i) => (
          <CertBadge key={cert.id} {...cert} index={i} />
        ))}
      </div>
    </section>
  )
}
