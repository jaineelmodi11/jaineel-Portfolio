"use client"

import { motion, useSpring, useTransform } from "framer-motion"
import { useRef, MouseEvent } from "react"

interface MagneticButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  className?: string
  variant?: "outline" | "filled"
}

export function MagneticButton({
  children,
  href,
  onClick,
  className = "",
  variant = "outline",
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement & HTMLButtonElement>(null)
  const x = useSpring(0, { stiffness: 200, damping: 20 })
  const y = useSpring(0, { stiffness: 200, damping: 20 })

  const handleMouseMove = (e: MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    x.set((e.clientX - cx) * 0.3)
    y.set((e.clientY - cy) * 0.3)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  const baseClass =
    variant === "filled"
      ? `inline-flex items-center gap-2 px-8 py-4 bg-amber text-[#080808] font-mono text-sm uppercase tracking-widest font-semibold rounded-none transition-all duration-300 hover:bg-amber-dark ${className}`
      : `inline-flex items-center gap-2 px-8 py-4 border border-amber text-amber font-mono text-sm uppercase tracking-widest rounded-none transition-all duration-300 hover:bg-amber hover:text-[#080808] ${className}`

  if (href) {
    return (
      <motion.a
        ref={ref}
        href={href}
        style={{ x, y }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={baseClass}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      ref={ref as unknown as React.RefObject<HTMLButtonElement>}
      style={{ x, y }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={baseClass}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </motion.button>
  )
}
