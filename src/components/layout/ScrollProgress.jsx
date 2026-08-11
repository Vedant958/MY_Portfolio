import { useEffect, useRef } from 'react'

export default function ScrollProgress() {
  const barRef = useRef(null)

  useEffect(() => {
    const update = () => {
      const scrolled = window.scrollY
      const total = document.documentElement.scrollHeight - window.innerHeight
      if (barRef.current) {
        barRef.current.style.width = (scrolled / total * 100) + '%'
      }
    }
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 h-[2px] z-[1000] pointer-events-none">
      <div
        ref={barRef}
        className="h-full w-0 transition-none"
        style={{ background: 'linear-gradient(90deg, #FF2E9A, #0FF0FC)' }}
      />
    </div>
  )
}
