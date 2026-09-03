import { Navbar } from "@/components/sections/navbar"
import { Hero } from "@/components/sections/hero"
import { TrustStrip } from "@/components/sections/trust-strip"
import { About } from "@/components/sections/about"
import { Solutions } from "@/components/sections/solutions"
import { Services } from "@/components/sections/services"
import { Products } from "@/components/sections/products"
import { SelectedWork } from "@/components/sections/selected-work"
import { Problems } from "@/components/sections/problems"
import { Process } from "@/components/sections/process"
import { WhyUs } from "@/components/sections/why-us"
import { Pricing } from "@/components/sections/pricing"
import { CTA } from "@/components/sections/cta"
import { Contact } from "@/components/sections/contact"
import { Footer } from "@/components/sections/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <Hero />

      <TrustStrip />

      <About />

      <Solutions />

      <Services />

      <Products />

      <SelectedWork />

      <Problems />

      <Process />

      <WhyUs />

      <Pricing />

      <CTA />

      <Contact />

      <Footer />
    </main>
  )
}
