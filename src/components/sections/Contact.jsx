import { useState, useRef } from 'react'
import { FolderGit2, Globe, Mail, Copy, Check } from 'lucide-react'
import SectionLabel from '../ui/SectionLabel'
import GlassPanel from '../ui/GlassPanel'
import Button from '../ui/Button'

const EMAIL = 'vedantvarshney958@gmail.com'

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const formRef = useRef(null)

  const handleCopy = () => {
    navigator.clipboard.writeText(EMAIL)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    // Simulate submission (replace with Formspree/EmailJS endpoint)
    await new Promise(r => setTimeout(r, 1500))
    setStatus('sent')
    formRef.current?.reset()
    setTimeout(() => setStatus('idle'), 4000)
  }

  return (
    <section id="contact" className="py-32 px-6 md:px-16 max-w-[1280px] mx-auto">
      <div className="section-divider mb-20" />
      <SectionLabel number="05">COMMS</SectionLabel>
      <h2
        className="font-orbitron font-bold mb-16"
        style={{ fontSize: 'clamp(26px,5vw,40px)', color: 'var(--text-primary)', letterSpacing: '0.02em' }}
      >
        Open a Channel
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-10 items-start">
        {/* Left */}
        <div className="flex flex-col gap-8">
          <p className="text-[17px] leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Transmission open — reach out directly or via the form. I reply within 24 hours.
          </p>

          {/* Social icons */}
          <div className="flex gap-4">
            {[
              { href: 'https://github.com/Vedant958', Icon: FolderGit2, color: 'var(--text-secondary)', id: 'contact-github' },
              { href: 'https://linkedin.com/in/vedant2254', Icon: Globe, color: 'var(--neon-cyan)', id: 'contact-linkedin' },
              { href: `mailto:${EMAIL}`, Icon: Mail, color: 'var(--neon-magenta)', id: 'contact-email' },
            ].map(({ href, Icon, color, id }) => (
              <a
                key={id}
                id={id}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel hud-corners w-12 h-12 flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{ '--hover-color': color }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = `0 0 20px ${color}40`; e.currentTarget.style.borderColor = color }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = ''; e.currentTarget.style.borderColor = '' }}
                aria-label={id}
              >
                <Icon size={18} style={{ color }} />
              </a>
            ))}
          </div>

          {/* Email copy */}
          <div
            className="glass-panel flex items-center justify-between gap-4 px-5 py-4 cursor-pointer group"
            onClick={handleCopy}
          >
            <span className="font-mono text-[13px] tracking-wide break-all" style={{ color: 'var(--text-secondary)' }}>
              {EMAIL}
            </span>
            <button
              className="flex-shrink-0 p-1 rounded transition-colors"
              style={{ color: copied ? 'var(--neon-green)' : 'var(--text-muted)' }}
              aria-label="Copy email"
            >
              {copied ? <Check size={16} /> : <Copy size={16} />}
            </button>
          </div>
        </div>

        {/* Right: contact form */}
        <GlassPanel>
          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-7">
            <div className="hud-input-group">
              <input id="name" type="text" name="name" placeholder=" " required />
              <label htmlFor="name">Name</label>
              <div className="hud-input-focus-line" />
            </div>
            <div className="hud-input-group">
              <input id="email" type="email" name="email" placeholder=" " required />
              <label htmlFor="email">Email</label>
              <div className="hud-input-focus-line" />
            </div>
            <div className="hud-input-group">
              <textarea id="message" name="message" rows={4} placeholder=" " required />
              <label htmlFor="message">Message</label>
              <div className="hud-input-focus-line" />
            </div>
            <button
              type="submit"
              disabled={status === 'sending' || status === 'sent'}
              className="w-full py-3.5 rounded-lg font-mono text-[14px] font-semibold uppercase tracking-[0.08em] transition-all duration-300 disabled:opacity-70"
              style={{
                background: status === 'sent'
                  ? 'rgba(57,255,158,0.15)'
                  : 'var(--gradient-cta)',
                color: status === 'sent' ? 'var(--neon-green)' : '#000',
                boxShadow: status === 'sent' ? '0 0 20px rgba(57,255,158,0.3)' : '0 0 24px rgba(255,46,154,0.3)',
              }}
            >
              {status === 'sending'
                ? 'TRANSMITTING...'
                : status === 'sent'
                ? 'MESSAGE_SENT ✔'
                : 'Transmit Message'}
            </button>
          </form>
        </GlassPanel>
      </div>
    </section>
  )
}
