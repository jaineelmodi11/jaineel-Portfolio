"use client"

import { RefObject, useEffect, useState } from "react"

export function useIntersectionObserver(
  ref: RefObject<Element | null>,
  options: IntersectionObserverInit = {}
): boolean {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
        observer.disconnect()
      }
    }, { threshold: 0.12, rootMargin: "0px 0px -60px 0px", ...options })

    observer.observe(el)
    return () => observer.disconnect()
  }, [ref, options])

  return isVisible
}
