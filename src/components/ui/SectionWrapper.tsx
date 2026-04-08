"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver"

interface SectionWrapperProps {
  children: React.ReactNode
  id: string
  className?: string
}

export function SectionWrapper({ children, id, className = "" }: SectionWrapperProps) {
  const ref = useRef<HTMLElement>(null)
  const isVisible = useIntersectionObserver(ref as React.RefObject<Element>)

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`px-6 md:px-16 lg:px-24 pt-36 pb-28 relative ${className}`}
    >
      {children}
    </motion.section>
  )
}
