import { skillCategories } from "@/data/skills"

export function Skills() {
  return (
    <section id="skills" className="px-6 md:px-12 lg:px-20 py-20 lg:py-28">
      <div className="flex items-baseline justify-between gap-6 pb-5">
        <h2 className="font-[family-name:var(--font-display)] text-ink text-[clamp(32px,5vw,64px)] leading-none tracking-[-0.02em]">
          Tools
        </h2>
      </div>
      <div className="rule" />

      <dl className="grid grid-cols-1 md:grid-cols-12 gap-y-0">
        {skillCategories.map((category) => (
          <div
            key={category.label}
            className="md:col-span-12 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-6 border-b border-rule"
          >
            <dt className="md:col-span-3 caption pt-1">{category.label}</dt>
            <dd className="md:col-span-9 text-ink-soft leading-relaxed">
              {category.skills.join(", ")}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
