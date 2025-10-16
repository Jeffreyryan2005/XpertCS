import { AmbientBackground } from "./hero_background_canvas"

export function CTASection() {
  return (
    <section id="contact" className="relative py-20">
      <AmbientBackground lines={28} opacity={0.09} speed={0.005} className="-z-20" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/20 to-transparent" />
      <div className="mx-auto max-w-screen-2xl px-6 rounded-3xl border border-border/60 bg-card/80 p-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-pretty text-3xl md:text-4xl font-semibold">Reach out now</h2>
            <p className="mt-2 text-muted-foreground">enquiry@xpertcs.com · 0207 360 7595</p>
            <p className="mt-1 text-muted-foreground">71-75 Shelton Street, London, England, WC2H 9JQ</p>
          </div>
          <div className="flex gap-3 md:justify-end">
            <a href="mailto:enquiry@xpertcs.com" className="rounded-2xl px-5 py-3 bg-primary text-primary-foreground">
              Email us
            </a>
            <a href="tel:+442073607595" className="rounded-2xl px-5 py-3 border border-border hover:bg-secondary">
              Call us
            </a>
            <a href="#contact" className="rounded-2xl px-5 py-3 border border-border hover:bg-secondary">
              Contact us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
