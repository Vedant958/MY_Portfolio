import { useState, useEffect, useRef } from 'react'

const CHARSET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*<>/\\[]{}|'

function randomChar() {
  return CHARSET[Math.floor(Math.random() * CHARSET.length)]
}

/**
 * useDecodeText — scrambles characters then resolves to the final
 * text over ~900ms. Returns the current scrambled/decoded string.
 */
export function useDecodeText(text, { duration = 900, startDelay = 0 } = {}) {
  const [output, setOutput] = useState(() => text.replace(/\S/g, randomChar))
  const [resolved, setResolved] = useState(false)
  const raf = useRef(null)
  const startTime = useRef(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      startTime.current = null

      const animate = (timestamp) => {
        if (!startTime.current) startTime.current = timestamp
        const elapsed = timestamp - startTime.current
        const progress = Math.min(elapsed / duration, 1)
        const resolvedCount = Math.floor(progress * text.length)

        setOutput(
          text.split('').map((char, i) => {
            if (char === ' ') return ' '
            if (i < resolvedCount) return char
            return randomChar()
          }).join('')
        )

        if (progress < 1) {
          raf.current = requestAnimationFrame(animate)
        } else {
          setOutput(text)
          setResolved(true)
        }
      }

      raf.current = requestAnimationFrame(animate)
    }, startDelay)

    return () => {
      clearTimeout(timer)
      if (raf.current) cancelAnimationFrame(raf.current)
    }
  }, [text, duration, startDelay])

  return { output, resolved }
}
