"use client"

import Image from "next/image"
import { AmbientBackground } from "./hero_background_canvas"

export function About() {
  return (
    <section id="about" className="relative overflow-hidden py-12 sm:py-16 lg:py-20">
      <AmbientBackground lines={26} opacity={0.08} speed={0.005} />
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-start">
        <div>
          <h2 className="text-pretty text-2xl sm:text-3xl md:text-4xl font-semibold">About Us</h2>
          <p className="mt-3 sm:mt-4 text-muted-foreground leading-relaxed text-sm sm:text-base">
            We are a fast‑growing business who understand the pressures you operate under and your preference for
            no‑nonsense advice and practical solutions. Our company has a reputation for understanding the
            industry‑specific requirements of each client and responding to them with quality service and support.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          <div className="rounded-xl sm:rounded-2xl overflow-hidden border border-border/60 bg-card h-24 sm:h-28 md:h-32">
            <Image
              src="/modern-cloud-infrastructure-technology.jpg"
              alt="Cloud infrastructure technology"
              width={256}
              height={256}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-xl sm:rounded-2xl overflow-hidden border border-border/60 bg-card h-24 sm:h-28 md:h-32">
            <Image
              src="/secure-data-protection-cybersecurity.jpg"
              alt="Secure data protection"
              width={256}
              height={256}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-xl sm:rounded-2xl overflow-hidden border border-border/60 bg-card h-24 sm:h-28 md:h-32">
            <Image
              src="/it-consulting-business-solutions.jpg"
              alt="IT consulting solutions"
              width={256}
              height={256}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-xl sm:rounded-2xl overflow-hidden border border-border/60 bg-card h-24 sm:h-28 md:h-32">
            <Image
              src="/digital-transformation-innovation.jpg"
              alt="Digital transformation"
              width={256}
              height={256}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
