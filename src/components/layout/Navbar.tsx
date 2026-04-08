"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const NAV_LINKS = ["about", "skills", "projects", "contact"]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-40 px-6 md:px-16 lg:px-24 py-5 flex items-center justify-between transition-all duration-300 ${
        scrolled ? "bg-[#080808]/90 backdrop-blur-sm border-b border-[#1f1f1f]" : ""
      }`}
    >
      {/* Monogram */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="font-mono text-amber font-bold text-lg tracking-widest hover:opacity-70 transition-opacity"
      >
        JM
      </button>

      {/* Links */}
      <div className="hidden md:flex items-center gap-8">
        {NAV_LINKS.map((link) => (
          <button
            key={link}
            onClick={() => scrollTo(link)}
            className="font-mono text-xs uppercase tracking-widest text-[#6b7280] hover:text-amber transition-colors duration-200"
          >
            {link}
          </button>
        ))}
      </div>

      {/* Mobile: just show links inline smaller */}
      <div className="flex md:hidden items-center gap-4">
        {NAV_LINKS.map((link) => (
          <button
            key={link}
            onClick={() => scrollTo(link)}
            className="font-mono text-[10px] uppercase tracking-widest text-[#6b7280] hover:text-amber transition-colors duration-200"
          >
            {link}
          </button>
        ))}
      </div>
    </motion.nav>
  )
}
