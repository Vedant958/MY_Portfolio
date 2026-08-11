import { useState, useEffect, useRef } from 'react'

/**
 * useTypewriter — types text one character at a time,
 * with optional blinking cursor and configurable speed.
 */
export function useTypewriter(text, { speed = 28, startDelay = 0, loop = false } = {}) {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)
  const idx = useRef(0)
  const timer = useRef(null)

  useEffect(() => {
    setDisplayed('')
    setDone(false)
    idx.current = 0

    const start = setTimeout(() => {
      timer.current = setInterval(() => {
        idx.current++
        setDisplayed(text.slice(0, idx.current))
        if (idx.current >= text.length) {
          clearInterval(timer.current)
          setDone(true)
          if (loop) {
            setTimeout(() => {
              idx.current = 0
              setDisplayed('')
              setDone(false)
            }, 2000)
          }
        }
      }, speed)
    }, startDelay)

    return () => {
      clearTimeout(start)
      clearInterval(timer.current)
    }
  }, [text, speed, startDelay, loop])

  return { displayed, done }
}
