import { AmbientBackground } from "./hero_background_canvas"

export function Stats() {
  const stats = [
    { k: "100+", v: "Projects Done" },
    { k: "100%", v: "Quality Service" },
    { k: "24/7", v: "Customer Support" },
    { k: "Certified", v: "Partner" },
  ]
  return (
    <section className="relative overflow-hidden py-12 sm:py-16 lg:py-20">
      <AmbientBackground lines={24} opacity={0.08} speed={0.0045} />
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6">
        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.v} className="rounded-2xl sm:rounded-3xl border border-border/60 bg-card p-4 sm:p-6">
              <div className="text-3xl sm:text-4xl font-semibold">{s.k}</div>
              <div className="text-sm sm:text-base text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
