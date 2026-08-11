import { useEffect, useRef } from 'react'
import Lenis from 'lenis'

let lenisInstance = null

export function useLenis() {
  const ref = useRef(null)

  useEffect(() => {
    if (lenisInstance) return // singleton

    lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    function raf(time) {
      lenisInstance.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    ref.current = lenisInstance

    return () => {
      lenisInstance.destroy()
      lenisInstance = null
    }
  }, [])

  return lenisInstance
}

/** Smooth-scroll to a CSS selector via the Lenis instance */
export function scrollTo(target, options = {}) {
  if (lenisInstance) {
    lenisInstance.scrollTo(target, { offset: -72, ...options })
  } else {
    document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' })
  }
}
