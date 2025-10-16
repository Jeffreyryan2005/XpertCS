import { AmbientBackground } from "./hero_background_canvas"

export function CTASection() {
  return (
    <section id="contact" className="relative py-12 sm:py-16 lg:py-20">
      <AmbientBackground lines={28} opacity={0.09} speed={0.005} className="-z-20" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/20 to-transparent" />
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 rounded-2xl sm:rounded-3xl border border-border/60 bg-card/80 p-6 sm:p-8 md:p-10">
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
          <div>
            <h2 className="text-pretty text-2xl sm:text-3xl md:text-4xl font-semibold">Reach out now</h2>
            <p className="mt-2 text-muted-foreground text-sm sm:text-base">enquiry@xpertcs.com · 0207 360 7595</p>
            <p className="mt-1 text-muted-foreground text-sm sm:text-base">
              71-75 Shelton Street, London, England, WC2H 9JQ
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 md:justify-end">
            <a
              href="mailto:enquiry@xpertcs.com"
              className="rounded-2xl px-4 sm:px-5 py-2.5 sm:py-3 bg-primary text-primary-foreground text-sm sm:text-base text-center hover:opacity-90 transition-opacity"
            >
              Email us
            </a>
            <a
              href="tel:+442073607595"
              className="rounded-2xl px-4 sm:px-5 py-2.5 sm:py-3 border border-border hover:bg-secondary text-sm sm:text-base text-center transition-colors"
            >
              Call us
            </a>
            <a
              href="#contact"
              className="rounded-2xl px-4 sm:px-5 py-2.5 sm:py-3 border border-border hover:bg-secondary text-sm sm:text-base text-center transition-colors"
            >
              Contact us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
