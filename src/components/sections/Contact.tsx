import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons"

const LINKS = [
  { label: "GitHub", href: "https://github.com/jaineelmodi11", Icon: GithubIcon },
  { label: "LinkedIn", href: "https://linkedin.com/in/jaineelmodi", Icon: LinkedinIcon },
]

export function Contact() {
  return (
    <footer id="contact" className="px-6 md:px-12 lg:px-20 pt-20 lg:pt-28 pb-16">
      <div className="rule" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-14">
        <div className="lg:col-span-7">
          <h2 className="font-[family-name:var(--font-display)] text-ink text-[clamp(32px,5.5vw,72px)] leading-[1.05] tracking-[-0.02em]">
            Open to full-time
            <br />
            roles and internships.
          </h2>
          <a
            href="mailto:jaineelmodi04@gmail.com"
            className="link-rule inline-block mt-8 text-xl md:text-2xl text-ink"
          >
            jaineelmodi04@gmail.com
          </a>
          <p className="caption mt-4">647 274 5055</p>
        </div>

        <div className="lg:col-span-5 lg:pt-4">
          <span className="caption">Elsewhere</span>
          <ul className="mt-4 space-y-3">
            {LINKS.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-rule inline-flex items-center gap-3 text-ink"
                >
                  <Icon size={16} />
                  {label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/SWE_Jaineel_Modi_Resume.pdf"
                download
                className="link-rule inline-block text-ink"
              >
                Résumé (PDF)
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Colophon */}
      <div className="rule mt-20" />
      <div className="flex flex-wrap justify-between gap-4 pt-5">
        <span className="caption">Jaineel Modi — Toronto</span>
        <span className="caption">Set in Instrument Serif &amp; Inter</span>
      </div>
    </footer>
  )
}
