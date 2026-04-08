"use client"

import { motion } from "framer-motion"
import { ChevronDown, Mail } from "lucide-react"
import Image from "next/image"
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons"
import { TextScramble } from "@/components/ui/TextScramble"
import { Typewriter } from "@/components/ui/Typewriter"
import { MagneticButton } from "@/components/ui/MagneticButton"

const SOCIAL = [
  { icon: GithubIcon, href: "https://github.com/jaineelmodi11", label: "GitHub" },
  { icon: LinkedinIcon, href: "https://linkedin.com/in/jaineelmodi", label: "LinkedIn" },
  { icon: Mail, href: "mailto:jaineelmodi04@gmail.com", label: "Email" },
]

export function Hero() {
  const scrollToProjects = () =>
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  const scrollToContact = () =>
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })

  return (
    <section className="relative min-h-screen flex items-center px-6 md:px-16 lg:px-24 pt-24 pb-12 overflow-hidden">
      {/* Two-column layout */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* LEFT: text content */}
        <div>
          {/* Available badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex items-center gap-2 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#6b7280]">
              Available for work &mdash; Toronto, ON
            </span>
          </motion.div>

          {/* Name */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.3 }}
            className="mb-6"
          >
            <div className="text-[clamp(48px,8vw,100px)] font-bold leading-none tracking-tight text-[#f5f5f5]">
              <TextScramble text="JAINEEL" delay={400} />
            </div>
            <div className="text-[clamp(48px,8vw,100px)] font-bold leading-none tracking-tight text-[#f5f5f5]">
              <TextScramble text="MODI" delay={800} />
            </div>
          </motion.div>

          {/* Typewriter subtitle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="text-xl md:text-2xl text-[#6b7280] font-light mb-10 h-8"
          >
            <Typewriter
              phrases={["Software Developer", "AI / ML Engineer", "Volleyball Enthusiast", "Ramen Connoisseur"]}
              startDelay={1400}
            />
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.5 }}
            className="flex flex-wrap gap-4 mb-10"
          >
            <MagneticButton variant="filled" onClick={scrollToProjects}>
              View My Work
            </MagneticButton>
            <MagneticButton variant="outline" onClick={scrollToContact}>
              Get In Touch
            </MagneticButton>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="flex items-center gap-6"
          >
            {SOCIAL.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={label}
                className="text-[#6b7280] hover:text-amber transition-colors duration-200"
              >
                <Icon size={18} />
              </a>
            ))}
          </motion.div>
        </div>

        {/* RIGHT: photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.7, ease: "easeOut" }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative">
            {/* Amber accent border offset */}
            <div className="absolute inset-0 translate-x-3 translate-y-3 border border-amber/40" />
            {/* Photo */}
            <div className="relative w-64 h-80 md:w-80 md:h-96 lg:w-96 lg:h-[480px] overflow-hidden">
              <Image
                src="/Jaineel_modi.png"
                alt="Jaineel Modi"
                fill
                className="object-cover object-top"
                priority
              />
              {/* Subtle amber gradient overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#080808]/60 to-transparent" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="text-[#6b7280]"
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  )
}
