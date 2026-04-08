import { Navbar } from "@/components/layout/Navbar"
import { NoiseOverlay } from "@/components/layout/NoiseOverlay"
import { Hero } from "@/components/sections/Hero"
import { About } from "@/components/sections/About"
import { Skills } from "@/components/sections/Skills"
import { Projects } from "@/components/sections/Projects"
import { Contact } from "@/components/sections/Contact"
import { AmberDivider } from "@/components/ui/AmberDivider"

export default function Home() {
  return (
    <main className="bg-[#080808] text-[#f5f5f5] min-h-screen relative">
      <NoiseOverlay />
      <Navbar />
      <Hero />
      <AmberDivider />
      <About />
      <AmberDivider />
      <Skills />
      <AmberDivider />
      <Projects />
      <AmberDivider />
      <Contact />
    </main>
  )
}
