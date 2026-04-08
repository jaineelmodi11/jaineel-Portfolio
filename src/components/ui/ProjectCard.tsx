"use client"

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { GithubIcon } from "@/components/ui/Icons"
import { Project } from "@/types"

interface ProjectCardProps {
  project: Project
  index: number
  isVisible: boolean
}

export function ProjectCard({ project, index, isVisible }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="bg-[#111111] border border-[#1f1f1f] p-8 group flex flex-col gap-5 hover:border-amber/30 transition-colors duration-500"
    >
      {/* Number */}
      <span className="font-mono text-xs text-[#6b7280] tracking-widest">
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Title with animated underline */}
      <div>
        <h3 className="text-xl font-bold text-[#f5f5f5] mb-1">{project.title}</h3>
        <span className="block h-px w-0 group-hover:w-full bg-amber transition-all duration-500 ease-out" />
      </div>

      {/* Description */}
      <p className="text-[#6b7280] text-sm leading-relaxed flex-1">{project.description}</p>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="font-mono text-xs px-2 py-1 border border-[#1f1f1f] text-[#6b7280] uppercase tracking-wide"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex items-center gap-4 pt-2">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6b7280] hover:text-amber transition-colors duration-200 flex items-center gap-1.5 text-sm font-mono"
          >
            <GithubIcon size={15} />
            Code
          </a>
        )}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6b7280] hover:text-amber transition-colors duration-200 flex items-center gap-1.5 text-sm font-mono"
          >
            <ExternalLink size={15} />
            Live
          </a>
        )}
      </div>
    </motion.div>
  )
}
