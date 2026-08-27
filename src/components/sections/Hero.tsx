import Image from "next/image"

export function Hero() {
  return (
    <header className="px-6 md:px-12 lg:px-20 pt-10 pb-20">
      {/* Masthead line: the way a title page carries its metadata. */}
      <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 pb-4">
        <span className="caption">Jaineel Modi</span>
        <span className="caption">Toronto, Ontario</span>
        <span className="caption">Available May 2027</span>
      </div>
      <div className="rule" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 pt-14 lg:pt-20">
        {/* Headline */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <h1 className="font-[family-name:var(--font-display)] text-ink leading-[0.95] tracking-[-0.02em] text-[clamp(56px,9vw,116px)]">
            Software
            <br />
            developer who
            <br />
            <em className="italic">ships things.</em>
          </h1>

          <p className="mt-10 max-w-xl text-lg leading-relaxed text-ink-soft">
            I&apos;m on RBC&apos;s retail credit engineering team writing Java and
            Spring Boot APIs. On my own time I maintain{" "}
            <a
              href="#work"
              className="link-rule text-ink"
            >
              AudioMark
            </a>
            , a practice player for dancers, and publish the pieces I pull out of it.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3">
            <a href="#work" className="link-rule font-medium text-ink">
              Selected work
            </a>
            <a
              href="/SWE_Jaineel_Modi_Resume.pdf"
              download
              className="link-rule font-medium text-ink"
            >
              Résumé (PDF)
            </a>
            <a
              href="mailto:jaineelmodi04@gmail.com"
              className="link-rule font-medium text-ink"
            >
              jaineelmodi04@gmail.com
            </a>
          </div>
        </div>

        {/* Portrait, set like a plate with a figure caption. */}
        <figure className="lg:col-span-5 lg:pt-3">
          <div className="relative aspect-[4/5] w-full max-w-sm lg:max-w-none overflow-hidden bg-paper-deep">
            <Image
              src="/headshot.jpg"
              alt="Jaineel Modi"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-top"
              priority
            />
          </div>
          <figcaption className="caption mt-3">
            Fig. 1 — Queen&apos;s University, Computer Science
          </figcaption>
        </figure>
      </div>

      {/* Pull quote: the one number worth stopping on. */}
      <div className="mt-20 lg:mt-24">
        <div className="rule" />
        <blockquote className="py-10 lg:py-14 max-w-4xl">
          <p className="font-[family-name:var(--font-display)] text-ink leading-[1.1] tracking-[-0.01em] text-[clamp(30px,4.4vw,58px)]">
            About 5,000 people practise to something I built.
          </p>
          <cite className="caption mt-5 block not-italic">
            AudioMark on Google Play
          </cite>
        </blockquote>
        <div className="rule" />
      </div>
    </header>
  )
}
