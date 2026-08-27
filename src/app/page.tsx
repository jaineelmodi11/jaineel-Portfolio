import { Navbar } from "@/components/layout/Navbar"
import { Hero } from "@/components/sections/Hero"
import { Projects } from "@/components/sections/Projects"
import { About } from "@/components/sections/About"
import { Skills } from "@/components/sections/Skills"
import { Contact } from "@/components/sections/Contact"

export default function Home() {
  return (
    <main className="bg-paper text-ink min-h-screen">
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Contact />
    </main>
  )
}
