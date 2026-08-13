import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { FolderGit2, Mail, Copy, Check, Send, Terminal, Shield } from 'lucide-react'
import SectionLabel from '../ui/SectionLabel'
import GlassPanel from '../ui/GlassPanel'

const EMAIL = 'vedantvarshney958@gmail.com'

const LinkedInIcon = ({ size = 20, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const [status, setStatus] = useState('idle')
  const formRef = useRef(null)

  const handleCopy = () => {
    navigator.clipboard.writeText(EMAIL)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    await new Promise(r => setTimeout(r, 1200))
    setStatus('sent')
    formRef.current?.reset()
    setTimeout(() => setStatus('idle'), 4000)
  }

  return (
    <section id="contact" className="py-28 px-6 md:px-16 max-w-[1280px] mx-auto">
      <div className="section-divider mb-16" />
      <SectionLabel number="05">COMMS</SectionLabel>
      <h2
        className="font-orbitron font-bold text-slate-900 mb-12"
        style={{ fontSize: 'clamp(28px, 4vw, 42px)' }}
      >
        Get In Touch
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-10 items-start">
        {/* Left Side: Contact Channels */}
        <div className="flex flex-col gap-8">
          <div className="w-full h-40 overflow-hidden rounded-xl border border-slate-200/60 bg-white shadow-sm">
            <img
              src="https://lh3.googleusercontent.com/aida/AP1WRLshuT3gOjeS47RFExWbPklrpQ_pOf3zT3_XA1oY4Nm1XvHW9JF81-74B8Qbt-VYcUFB_BbxvZef3dY0RMMn0ehsbJh9BJz9b_UDulwAT1D7mPtQ4h9IwQfgz7YWPyTflSJ5lDFRlcXnrmRJnEOUviu03yWPVjAj815HDzxDtTGdi75xsKwTQWrqdGzu8CsGriELvVI6Fwym4OuI1_Y_IVl95thbjob4dcg5Jk-Kyb67Hv7Yg3rbFCmw"
              alt="Connection abstract visual"
              className="w-full h-full object-cover opacity-90 transition-transform duration-700 hover:scale-105"
            />
          </div>

          <p className="text-[17px] leading-relaxed text-slate-600">
            Open channel — reach out directly via email or social links. I respond to inquiries regarding frontend development and project collaborations.
          </p>


          {/* Social Icons */}
          <div className="flex gap-4">
            {[
              { label: 'GitHub', href: 'https://github.com/Vedant958', Icon: FolderGit2, color: '#0F172A', id: 'contact-github' },
              { label: 'LinkedIn', href: 'https://linkedin.com/in/vedant2254', Icon: LinkedInIcon, color: '#0A66C2', id: 'contact-linkedin' },
              { label: 'Email', href: `mailto:${EMAIL}`, Icon: Mail, color: '#06B6D4', id: 'contact-email' },
            ].map(({ label, href, Icon, color, id }) => (
              <a
                key={id}
                id={id}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-xs hover:border-cyan-500 hover:shadow-md"
                aria-label={label}
              >
                <Icon size={22} style={{ color }} />
              </a>
            ))}
          </div>

          {/* Quick Copy Email Box */}
          <div
            className="glass-panel flex items-center justify-between gap-4 p-5 cursor-pointer hover:border-cyan-500/50 transition-colors group"
            onClick={handleCopy}
          >
            <div className="flex items-center gap-3">
              <Mail size={18} className="text-cyan-600" />
              <span className="font-mono text-[14px] font-bold text-slate-800 break-all">
                {EMAIL}
              </span>
            </div>

            <button
              className="flex items-center gap-1.5 font-mono text-xs font-semibold px-3 py-1.5 rounded-md bg-slate-100 text-slate-700 group-hover:bg-cyan-500/10 group-hover:text-cyan-700 transition-colors shrink-0"
              aria-label="Copy email"
            >
              {copied ? (
                <>
                  <Check size={14} className="text-emerald-500" />
                  <span className="text-emerald-600">COPIED</span>
                </>
              ) : (
                <>
                  <Copy size={14} />
                  <span>COPY</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Right Side: Message Form */}
        <GlassPanel className="p-8 hud-corners">
          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="hud-input-group">
              <input id="name" type="text" name="name" placeholder=" " required />
              <label htmlFor="name">YOUR NAME</label>
              <div className="hud-input-focus-line" />
            </div>

            <div className="hud-input-group">
              <input id="email" type="email" name="email" placeholder=" " required />
              <label htmlFor="email">YOUR EMAIL</label>
              <div className="hud-input-focus-line" />
            </div>

            <div className="hud-input-group">
              <textarea id="message" name="message" rows={4} placeholder=" " required />
              <label htmlFor="message">YOUR MESSAGE</label>
              <div className="hud-input-focus-line" />
            </div>

            <button
              type="submit"
              disabled={status === 'sending' || status === 'sent'}
              className="w-full py-4 rounded-xl font-mono text-sm font-extrabold uppercase tracking-wider text-white bg-slate-900 hover:bg-slate-800 border border-cyan-500/40 hover:border-cyan-400 shadow-[0_4px_20px_rgba(6,182,212,0.25)] transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70 flex items-center justify-center gap-2 cursor-pointer"
            >
              {status === 'sending' ? (
                <span className="text-cyan-400 font-extrabold">SENDING...</span>
              ) : status === 'sent' ? (
                <span className="text-emerald-400 font-extrabold flex items-center gap-1.5">
                  <Check size={18} className="text-emerald-400" /> MESSAGE SENT
                </span>
              ) : (
                <>
                  <span className="text-white font-extrabold">SEND MESSAGE</span>
                  <Send size={16} className="text-cyan-400" />
                </>
              )}
            </button>
          </form>
        </GlassPanel>
      </div>
    </section>
  )
}
