import { education, experience, research } from "@/data/experience"
import type { Experience } from "@/types"

export function About() {
  return (
    <section id="about" className="px-6 md:px-12 lg:px-20 py-20 lg:py-28">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 lg:items-start">
        {/* Standfirst, set larger than body the way a lede runs. */}
        <div className="lg:col-span-5 lg:sticky lg:top-24 lg:self-start">
          <h2 className="font-[family-name:var(--font-display)] text-ink text-[clamp(32px,5vw,64px)] leading-none tracking-[-0.02em]">
            About
          </h2>
          <p className="mt-8 text-xl leading-relaxed text-ink">
            A volleyball player, a ramen connoisseur, and a programmer.
          </p>
          <p className="mt-5 leading-relaxed text-ink-soft">
            I&apos;m studying Computing with an AI specialization at Queen&apos;s
            University, graduating May 2028. At RBC I build the services behind
            its mortgage application system, and with RBC Borealis I research
            anemia screening from eyelid photos. Before that I traced failures
            in multi-agent LLM coding systems at the RISE Lab, and launched a
            GPT-4 Revit copilot at Mulvey &amp; Banani that 80+ people use. The
            work I&apos;m proudest of is AudioMark, which I co-built and still
            maintain.
          </p>
          <p className="mt-5 leading-relaxed text-ink-soft">
            Lately I&apos;ve been contributing upstream: two documentation fixes
            to{" "}
            <a
              href="https://github.com/vercel/next.js/pull/97559"
              target="_blank"
              rel="noopener noreferrer"
              className="link-rule text-ink"
            >
              Next.js
            </a>
            , found by auditing every error link the framework hands its users
            against the pages that actually exist.
          </p>
        </div>

        {/* Set as dated lists rather than a timeline graphic, in the order the
            résumé runs them: experience, research, education. */}
        <div className="lg:col-span-7 space-y-16">
          <Entries
            label="Experience"
            count={`${experience.length} roles`}
            entries={experience}
          />
          <Entries
            label="Research"
            count={`${research.length} labs`}
            entries={research}
          />

          <div>
            <div className="flex items-baseline justify-between gap-6 pb-4">
              <span className="caption">Education</span>
              <span className="caption">{education.period}</span>
            </div>
            <div className="rule" />
            <article className="py-8 border-b border-rule">
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                <h3 className="font-[family-name:var(--font-display)] text-ink text-2xl leading-tight">
                  {education.school}
                </h3>
                <span className="caption whitespace-nowrap">
                  {education.location}
                </span>
              </div>
              <p className="mt-1 text-sm text-ink-muted">{education.degree}</p>
              <p className="mt-4 text-ink-soft leading-relaxed">
                {education.notes.join(", ")}
              </p>
              <dl className="mt-4 space-y-2">
                <div>
                  <dt className="caption">Courses</dt>
                  <dd className="mt-1 text-ink-soft leading-relaxed">
                    {education.courses.join(", ")}
                  </dd>
                </div>
                <div className="pt-2">
                  <dt className="caption">Activities</dt>
                  <dd className="mt-1 text-ink-soft leading-relaxed">
                    {education.activities.join(", ")}
                  </dd>
                </div>
              </dl>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

function Entries({
  label,
  count,
  entries,
}: {
  label: string
  count: string
  entries: Experience[]
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between gap-6 pb-4">
        <span className="caption">{label}</span>
        <span className="caption">{count}</span>
      </div>
      <div className="rule" />

      {entries.map((job) => (
        <article key={job.id} className="py-8 border-b border-rule">
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
            <h3 className="font-[family-name:var(--font-display)] text-ink text-2xl leading-tight">
              {job.company}
            </h3>
            <span className="caption whitespace-nowrap">{job.period}</span>
          </div>
          <p className="mt-1 text-sm text-ink-muted">
            {job.location ? `${job.role}, ${job.location}` : job.role}
          </p>
          {job.descriptions.length > 0 && (
            <ul className="mt-4 space-y-2">
              {job.descriptions.map((line) => (
                <li
                  key={line}
                  className="text-ink-soft leading-relaxed pl-5 -indent-5 before:content-['–'] before:mr-2 before:text-ink-muted"
                >
                  {line}
                </li>
              ))}
            </ul>
          )}
          {job.tags.length > 0 && (
            <p className="caption mt-4">{job.tags.join(" · ")}</p>
          )}
        </article>
      ))}
    </div>
  )
}
