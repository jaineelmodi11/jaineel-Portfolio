"use client"

import { useRef } from "react"
import { SectionWrapper } from "@/components/ui/SectionWrapper"
import { AmberDivider } from "@/components/ui/AmberDivider"
import { ProjectCard } from "@/components/ui/ProjectCard"
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver"
import { projects } from "@/data/projects"

export function Projects() {
  const ref = useRef<HTMLDivElement>(null)
  const isVisible = useIntersectionObserver(ref as React.RefObject<Element>)

  return (
    <SectionWrapper id="projects">
      {/* Section number */}
      <span
        className="absolute top-8 right-6 md:right-16 lg:right-24 text-[120px] font-bold font-mono leading-none select-none pointer-events-none"
        style={{ color: "rgba(255,255,255,0.025)" }}
        aria-hidden
      >
        03
      </span>

      <div className="mb-3">
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-amber">Projects</span>
      </div>
      <h2 className="text-4xl md:text-6xl font-bold text-[#f5f5f5] tracking-tight mb-2">
        Selected Work
      </h2>
      <p className="text-[#6b7280] mb-6">A few things I&apos;ve built.</p>
      <AmberDivider short className="mb-16" />

      <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} isVisible={isVisible} />
        ))}
      </div>
    </SectionWrapper>
  )
}
