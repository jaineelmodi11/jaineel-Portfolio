import { SectionWrapper } from "@/components/ui/SectionWrapper"
import { AmberDivider } from "@/components/ui/AmberDivider"
import { MarqueeTrack } from "@/components/ui/MarqueeTrack"
import { marqueeRow1, marqueeRow2 } from "@/data/skills"

export function Skills() {
  return (
    <SectionWrapper id="skills">
      {/* Section number */}
      <span
        className="absolute top-8 right-6 md:right-16 lg:right-24 text-[120px] font-bold font-mono leading-none select-none pointer-events-none"
        style={{ color: "rgba(255,255,255,0.025)" }}
        aria-hidden
      >
        02
      </span>

      <div className="mb-3">
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-amber">Skills</span>
      </div>
      <h2 className="text-4xl md:text-6xl font-bold text-[#f5f5f5] tracking-tight mb-6">
        Tech Stack
      </h2>
      <AmberDivider short className="mb-16" />

      {/* Marquee bands */}
      <div className="border-y border-[#1f1f1f] py-6 space-y-6 -mx-6 md:-mx-16 lg:-mx-24 px-0">
        <MarqueeTrack items={marqueeRow1} direction="left" speed={30} />
        <MarqueeTrack items={marqueeRow2} direction="right" speed={25} />
      </div>

      {/* Category pills */}
      <div className="mt-16 flex flex-wrap gap-3">
        {[
          { label: "Languages", count: 9 },
          { label: "Frontend", count: 6 },
          { label: "Backend", count: 5 },
          { label: "AI / ML", count: 7 },
          { label: "DevOps & DB", count: 8 },
        ].map(({ label, count }) => (
          <div
            key={label}
            className="flex items-center gap-3 px-5 py-3 border border-[#1f1f1f] bg-[#111111]"
          >
            <span className="font-mono text-sm text-[#f5f5f5]">{label}</span>
            <span className="font-mono text-xs text-amber bg-amber/10 px-1.5 py-0.5 rounded">{count}</span>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
