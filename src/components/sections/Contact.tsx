"use client"

import { motion } from "framer-motion"
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons"
import { SectionWrapper } from "@/components/ui/SectionWrapper"
import { AmberDivider } from "@/components/ui/AmberDivider"

export function Contact() {
  return (
    <SectionWrapper id="contact" className="flex flex-col items-center text-center">
      {/* Section number */}
      <span
        className="absolute top-8 right-6 md:right-16 lg:right-24 text-[120px] font-bold font-mono leading-none select-none pointer-events-none"
        style={{ color: "rgba(255,255,255,0.025)" }}
        aria-hidden
      >
        04
      </span>

      <div className="mb-3">
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-amber">Contact</span>
      </div>
      <h2 className="text-4xl md:text-6xl font-bold text-[#f5f5f5] tracking-tight mb-6">
        Let&apos;s Talk
      </h2>
      <AmberDivider short className="mb-10 mx-auto" />

      <p className="text-[#6b7280] max-w-md mb-12 leading-relaxed">
        Open to full-time roles, internships, and interesting projects.
        My inbox is always open — reach out and I&apos;ll get back to you.
      </p>

      {/* Email headline */}
      <a
        href="mailto:jaineelmodi04@gmail.com"
        className="group block text-2xl md:text-4xl lg:text-5xl font-bold text-[#f5f5f5] hover:text-amber transition-colors duration-300 mb-2"
      >
        jaineelmodi04@gmail.com
        <span className="block h-px w-0 group-hover:w-full bg-amber transition-all duration-500 ease-out mt-2" />
      </a>

      <p className="font-mono text-sm text-[#6b7280] mb-14">647-275-5055</p>

      {/* Socials */}
      <div className="flex items-center gap-6">
        <a
          href="https://github.com/jaineelmodi11"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 font-mono text-sm text-[#6b7280] hover:text-amber transition-colors duration-200"
        >
          <GithubIcon size={16} />
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/jaineelmodi"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 font-mono text-sm text-[#6b7280] hover:text-amber transition-colors duration-200"
        >
          <LinkedinIcon size={16} />
          LinkedIn
        </a>
      </div>

      {/* Footer */}
      <div className="mt-24 border-t border-[#1f1f1f] pt-8 w-full">
        <p className="font-mono text-xs text-[#2a2a2a] tracking-widest uppercase">
          Designed &amp; built by Jaineel Modi &mdash; {new Date().getFullYear()}
        </p>
      </div>
    </SectionWrapper>
  )
}
