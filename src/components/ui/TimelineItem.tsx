"use client"

import { motion } from "framer-motion"
import { Experience } from "@/types"

interface TimelineItemProps {
  experience: Experience
  index: number
  isLast: boolean
  isVisible: boolean
}

export function TimelineItem({ experience, index, isLast, isVisible }: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="flex gap-6"
    >
      {/* Timeline spine */}
      <div className="flex flex-col items-center flex-shrink-0">
        <div className="w-2 h-2 rounded-full bg-amber mt-2 flex-shrink-0" />
        {!isLast && <div className="w-px flex-1 bg-[#1f1f1f] mt-2" />}
      </div>

      {/* Content */}
      <div className={`pb-10 ${isLast ? "pb-0" : ""}`}>
        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3 mb-1">
          <h3 className="font-semibold text-[#f5f5f5]">{experience.role}</h3>
          <span className="hidden sm:block text-[#2a2a2a]">·</span>
          <span className="text-amber font-mono text-sm">{experience.company}</span>
        </div>
        <span className="font-mono text-xs text-[#6b7280] uppercase tracking-widest mb-3 block">
          {experience.period}
        </span>
        <ul className="space-y-1 mb-4">
          {experience.descriptions.map((d, i) => (
            <li key={i} className="text-[#6b7280] text-sm leading-relaxed flex gap-2">
              <span className="text-amber mt-1 flex-shrink-0">—</span>
              {d}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2">
          {experience.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-xs px-2 py-0.5 border border-[#1f1f1f] text-[#6b7280]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
