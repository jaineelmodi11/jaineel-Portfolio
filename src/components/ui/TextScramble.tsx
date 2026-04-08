"use client"

import { useEffect, useRef, useState } from "react"

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

interface TextScrambleProps {
  text: string
  className?: string
  delay?: number
}

export function TextScramble({ text, className = "", delay = 0 }: TextScrambleProps) {
  const [displayed, setDisplayed] = useState(() => text.replace(/[A-Za-z0-9]/g, "?"))
  const frameRef = useRef(0)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      let progress = 0
      frameRef.current = 0

      intervalRef.current = setInterval(() => {
        frameRef.current++
        if (frameRef.current % 3 === 0) progress++

        setDisplayed(
          text
            .split("")
            .map((char, i) => {
              if (char === " ") return " "
              if (i < progress) return char
              return CHARS[Math.floor(Math.random() * CHARS.length)]
            })
            .join("")
        )

        if (progress >= text.length) {
          if (intervalRef.current) clearInterval(intervalRef.current)
          setDisplayed(text)
        }
      }, 40)
    }, delay)

    return () => {
      clearTimeout(timer)
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [text, delay])

  return (
    <span className={`font-mono ${className}`} aria-label={text}>
      {displayed}
    </span>
  )
}
