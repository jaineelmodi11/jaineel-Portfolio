"use client"

import { motion } from "framer-motion"

interface MarqueeTrackProps {
  items: string[]
  direction?: "left" | "right"
  speed?: number
}

export function MarqueeTrack({ items, direction = "left", speed = 35 }: MarqueeTrackProps) {
  // Duplicate items for seamless loop
  const doubled = [...items, ...items, ...items, ...items]
  const xFrom = direction === "left" ? "0%" : "-50%"
  const xTo = direction === "left" ? "-50%" : "0%"

  return (
    <div className="overflow-hidden w-full">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: [xFrom, xTo] }}
        transition={{ duration: speed, ease: "linear", repeat: Infinity }}
      >
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-2 mx-8 font-mono text-sm uppercase tracking-widest text-[#6b7280]">
            <span className="text-amber text-xs">·</span>
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  )
}
