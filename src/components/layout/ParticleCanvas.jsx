import { useRef, useEffect } from 'react'

export default function ParticleCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    // Respect prefers-reduced-motion
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let W, H, particles, raf
    const COUNT = 60
    let mouseX = 0, mouseY = 0

    function init() {
      W = canvas.width = window.innerWidth
      H = canvas.height = window.innerHeight
      particles = Array.from({ length: COUNT }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.2 + 0.2,
        opacity: Math.random() * 0.5 + 0.1,
      }))
    }

    function draw() {
      ctx.clearRect(0, 0, W, H)
      particles.forEach(p => {
        // Subtle parallax push from mouse
        const dx = (mouseX - W / 2) * 0.008
        const dy = (mouseY - H / 2) * 0.008
        p.x += p.vx + dx * 0.02
        p.y += p.vy + dy * 0.02
        if (p.x < 0) p.x = W
        if (p.x > W) p.x = 0
        if (p.y < 0) p.y = H
        if (p.y > H) p.y = 0
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(6, 182, 212, ${p.opacity * 0.7})`
        ctx.fill()
      })
      raf = requestAnimationFrame(draw)
    }

    const onMouse = (e) => { mouseX = e.clientX; mouseY = e.clientY }
    const onResize = () => init()
    window.addEventListener('mousemove', onMouse)
    window.addEventListener('resize', onResize)

    // Pause when scrolled past hero
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        if (!raf) raf = requestAnimationFrame(draw)
      } else {
        cancelAnimationFrame(raf)
        raf = null
      }
    }, { threshold: 0 })
    observer.observe(canvas)

    init()
    raf = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMouse)
      window.removeEventListener('resize', onResize)
      observer.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: -9 }}
      aria-hidden="true"
    />
  )
}
