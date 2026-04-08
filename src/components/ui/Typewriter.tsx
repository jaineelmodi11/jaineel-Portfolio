"use client"

import { useEffect, useRef, useState } from "react"

interface TypewriterProps {
  phrases: string[]
  className?: string
  startDelay?: number
}

export function Typewriter({ phrases, className = "", startDelay = 0 }: TypewriterProps) {
  const [text, setText] = useState("")
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const started = useRef(false)

  useEffect(() => {
    const startTimer = setTimeout(() => {
      started.current = true

      const tick = () => {
        const current = phrases[phraseIndex]

        if (!isDeleting) {
          setText(current.slice(0, text.length + 1))
          if (text.length + 1 === current.length) {
            setTimeout(() => setIsDeleting(true), 2000)
            return
          }
        } else {
          setText(current.slice(0, text.length - 1))
          if (text.length - 1 === 0) {
            setIsDeleting(false)
            setPhraseIndex((i) => (i + 1) % phrases.length)
            return
          }
        }
      }

      const delay = isDeleting ? 40 : 80
      const t = setTimeout(tick, delay)
      return t
    }, startDelay)

    return () => clearTimeout(startTimer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, isDeleting, phraseIndex, startDelay])

  return (
    <span className={className}>
      {text}
      <span className="text-amber animate-blink">|</span>
    </span>
  )
}
