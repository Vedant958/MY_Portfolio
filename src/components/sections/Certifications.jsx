import SectionLabel from '../ui/SectionLabel'
import CertBadge from '../ui/CertBadge'
import { certifications } from '../../data/certifications'

export default function Certifications() {
  return (
    <section id="certs" className="py-32 px-6 md:px-16 max-w-[1280px] mx-auto">
      <div className="section-divider mb-20" />
      <SectionLabel number="04">CLEARANCE</SectionLabel>
      <h2
        className="font-orbitron font-bold mb-16"
        style={{ fontSize: 'clamp(26px,5vw,40px)', color: 'var(--text-primary)', letterSpacing: '0.02em' }}
      >
        Security Clearances
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {certifications.map((cert, i) => (
          <CertBadge key={cert.id} {...cert} index={i} />
        ))}
      </div>
    </section>
  )
}
