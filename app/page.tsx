import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Process } from "@/components/process"
import { Stats } from "@/components/stats"
import { Partners } from "@/components/partners"
import { CTASection } from "@/components/cta-section"
import { About } from "@/components/about"
import { Testimonials } from "@/components/testimonials"

export default function Page() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Process />
      <Stats />
      <Partners />
      <Testimonials />
      <CTASection />
    </>
  )
}
