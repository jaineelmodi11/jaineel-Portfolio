"use client"

import { useRef } from "react"
import { SectionWrapper } from "@/components/ui/SectionWrapper"
import { AmberDivider } from "@/components/ui/AmberDivider"
import { TimelineItem } from "@/components/ui/TimelineItem"
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver"
import { experience } from "@/data/experience"

export function About() {
  const ref = useRef<HTMLDivElement>(null)
  const isVisible = useIntersectionObserver(ref as React.RefObject<Element>)

  return (
    <SectionWrapper id="about">
      {/* Section number */}
      <span
        className="absolute top-8 right-6 md:right-16 lg:right-24 text-[120px] font-bold font-mono leading-none select-none pointer-events-none"
        style={{ color: "rgba(255,255,255,0.025)" }}
        aria-hidden
      >
        01
      </span>

      <div className="mb-3">
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-amber">About</span>
      </div>
      <h2 className="text-4xl md:text-6xl font-bold text-[#f5f5f5] tracking-tight mb-6">
        Who I Am
      </h2>
      <AmberDivider short className="mb-16" />

      <div ref={ref} className="grid lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Bio */}
        <div>
          <p className="text-2xl md:text-3xl font-light text-[#f5f5f5] leading-relaxed mb-6">
            Hi, I&apos;m Jaineel.
          </p>
          <p className="text-[#6b7280] text-lg leading-relaxed mb-6">
            A volleyball player, a ramen connoisseur, and a programmer.
          </p>
          <p className="text-[#6b7280] leading-relaxed">
            I&apos;m a software developer in Toronto, currently on RBC&apos;s retail credit
            engineering team writing Java and Spring Boot APIs. Before that I researched
            LLM-driven program repair at Queen&apos;s RISE Lab, and built a GPT-4 Revit copilot
            at Mulvey &amp; Banani that saved 26 hours per project. The one I&apos;m proudest of
            is AudioMark, a practice player for dancers with around 5,000 users, which I still
            maintain.
          </p>

          <div className="mt-10 flex gap-8">
            <div>
              <div className="text-3xl font-bold text-amber font-mono">1.5+</div>
              <div className="text-xs font-mono uppercase tracking-widest text-[#6b7280] mt-1">Years Exp.</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber font-mono">6</div>
              <div className="text-xs font-mono uppercase tracking-widest text-[#6b7280] mt-1">Internships</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber font-mono">10+</div>
              <div className="text-xs font-mono uppercase tracking-widest text-[#6b7280] mt-1">Projects</div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#6b7280] mb-8">Experience</p>
          <div className="space-y-0">
            {experience.map((exp, i) => (
              <TimelineItem
                key={exp.id}
                experience={exp}
                index={i}
                isLast={i === experience.length - 1}
                isVisible={isVisible}
              />
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
