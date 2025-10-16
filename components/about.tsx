"use client"

import { AmbientBackground } from "./hero_background_canvas"

export function About() {
  return (
    <section id="about" className="relative overflow-hidden py-20">
      <AmbientBackground lines={26} opacity={0.08} speed={0.005} />
      <div className="mx-auto max-w-screen-2xl px-6 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-pretty text-3xl md:text-4xl font-semibold">About Us</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            We are a fast‑growing business who understand the pressures you operate under and your preference for
            no‑nonsense advice and practical solutions. Our company has a reputation for understanding the
            industry‑specific requirements of each client and responding to them with quality service and support.
          </p>
        </div>
        <div className="rounded-3xl border border-border/60 bg-card h-56 md:h-64 grid place-items-center">
          <span className="text-sm text-muted-foreground">Illustration placeholder</span>
        </div>
      </div>
    </section>
  )
}
