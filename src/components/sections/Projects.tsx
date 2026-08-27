import { projects } from "@/data/projects"

export function Projects() {
  return (
    <section id="work" className="px-6 md:px-12 lg:px-20 py-20 lg:py-28">
      <div className="flex items-baseline justify-between gap-6 pb-5">
        <h2 className="font-[family-name:var(--font-display)] text-ink text-[clamp(32px,5vw,64px)] leading-none tracking-[-0.02em]">
          Selected work
        </h2>
        <span className="caption whitespace-nowrap">
          {String(projects.length).padStart(2, "0")} projects
        </span>
      </div>
      <div className="rule" />

      <ol>
        {projects.map((project, i) => (
          <li key={project.id}>
            <article className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-9 lg:py-11 border-b border-rule">
              <div className="md:col-span-1">
                <span className="caption">{String(i + 1).padStart(2, "0")}</span>
              </div>

              <div className="md:col-span-4">
                <h3 className="font-[family-name:var(--font-display)] text-ink text-3xl md:text-4xl leading-tight tracking-[-0.01em]">
                  {project.title}
                </h3>
                <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-rule text-sm font-medium text-accent"
                    >
                      Source
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-rule text-sm font-medium text-accent"
                    >
                      Live
                    </a>
                  )}
                </div>
              </div>

              <div className="md:col-span-7">
                <p className="text-ink-soft leading-relaxed max-w-2xl">
                  {project.description}
                </p>
                <p className="caption mt-4">{project.tech.join(" · ")}</p>
              </div>
            </article>
          </li>
        ))}
      </ol>
    </section>
  )
}
