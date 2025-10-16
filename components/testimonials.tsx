"use client"

import { AmbientBackground } from "./hero_background_canvas"

export function Testimonials() {
  return (
    <section id="testimonials" className="relative overflow-hidden py-20 bg-secondary/40">
      <AmbientBackground lines={24} opacity={0.08} speed={0.0045} />
      <div className="mx-auto max-w-screen-2xl px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-pretty text-center">Client Testimonials</h2>
        <div className="mt-8 rounded-3xl border border-border/60 bg-card p-8 md:p-10">
          <p className="text-muted-foreground leading-relaxed text-balance">
            Xpert Consultancy planned a successful migration for a Magic Circle Law firm that was moving to a new data
            centre, optimised the project by focusing on the application layer and diligently mapping the existing
            estate.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-4 text-balance">
            The team advised a global investment bank on its data centre topology and helped an Eastern European
            Investment Bank to plan its end‑user computing strategy for a new trading floor. The team worked hard, had
            genuine expertise and was always ready to stand up and present the case in the clients’ best interest. We
            strongly recommend any engagement.
          </p>
          <div className="mt-6">
            <div className="font-semibold">Greg Collins</div>
            <div className="text-sm text-muted-foreground">CEO, JP Reis</div>
            <div className="text-xs text-muted-foreground">
              The world's leading trading communications technology consultancy.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
