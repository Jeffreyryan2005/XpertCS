import { AmbientBackground } from "./hero_background_canvas"

export function Partners() {
  const items = ["Bitdefender", "Kemp", "VMware", "Quadric"]
  return (
    <section id="partners" className="relative overflow-hidden py-20">
      <AmbientBackground lines={30} opacity={0.08} speed={0.006} />
      <div className="mx-auto max-w-screen-2xl px-6">
        <h2 className="text-3xl md:text-4xl font-semibold">Partners</h2>
        <div className="mt-6 overflow-hidden rounded-2xl border border-border/60">
          <div className="flex gap-8 animate-marquee whitespace-nowrap px-6 py-4">
            {items.map((p) => (
              <span key={p} className="px-4 py-2 rounded-xl bg-secondary text-sm">
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
