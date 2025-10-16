"use client"

import { AmbientBackground } from "./hero_background_canvas"

export function Process() {
  const steps = [
    { n: "1", t: "Concept", d: "Goals, scope, and measurable outcomes." },
    { n: "2", t: "Technology", d: "Solution design with cloud-native patterns." },
    { n: "3", t: "Integrity", d: "Security-first reviews and compliance mapping." },
    { n: "4", t: "Teamwork", d: "Co-delivery, enablement, and knowledge transfer." },
  ]
  return (
    <section id="process" className="relative overflow-hidden py-12 sm:py-16 lg:py-20 bg-secondary/40">
      <AmbientBackground lines={28} opacity={0.08} speed={0.005} />
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-pretty">Our Working Process</h2>
        <div className="mt-6 sm:mt-8 grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div
              key={s.n}
              className="group relative rounded-2xl sm:rounded-3xl border border-border/60 bg-card/70 p-4 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-[0_18px_60px_-24px_rgba(0,0,0,0.55)] focus-within:ring-2 focus-within:ring-primary/50 animate-step-in"
              style={{ animationDelay: `${i * 140}ms` }}
            >
              <div
                className="pointer-events-none absolute -inset-px rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-80 transition-opacity"
                style={{
                  background:
                    "radial-gradient(220px 110px at 20% 0%, rgba(59,130,246,0.16), transparent), radial-gradient(200px 120px at 80% 100%, rgba(16,185,129,0.12), transparent)",
                }}
              />
              <div className="relative">
                <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-br from-primary/90 via-primary to-primary/80 bg-clip-text text-transparent animate-shine">
                  {s.n}
                </div>
                <h3 className="mt-2 sm:mt-3 text-lg sm:text-xl font-semibold">{s.t}</h3>
                <p className="mt-1 sm:mt-2 text-muted-foreground text-sm sm:text-base">{s.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
