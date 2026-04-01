import { Navbar } from "@/components/sections/navbar"
import { Hero } from "@/components/sections/hero"
import { TrustStrip } from "@/components/sections/trust-strip"
import { About } from "@/components/sections/about"
import { Services } from "@/components/sections/services"
import { Primecare } from "@/components/sections/primecare"
import { Problems } from "@/components/sections/problems"
import { Process } from "@/components/sections/process"
import { WhyUs } from "@/components/sections/why-us"
import { CTA } from "@/components/sections/cta"
import { Footer } from "@/components/sections/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <Hero />
      
      <TrustStrip />

      <About />
      
      <section id="services">
        <Services />
      </section>
      
      <section id="primecare">
        <Primecare />
      </section>
      
      <Problems />
      
      <section id="process">
        <Process />
      </section>
      
      <WhyUs />
      
      <section id="cta">
        <CTA />
      </section>
      
      <Footer />
    </main>
  )
}
