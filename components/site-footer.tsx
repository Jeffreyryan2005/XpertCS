import { AmbientBackground } from "./hero_background_canvas"

export function SiteFooter() {
  return (
    <footer className="relative mt-16 overflow-hidden border-t border-border/60 bg-secondary/30" id="helpdesk">
      <div className="pointer-events-none absolute top-0 inset-x-0 h-[2px] bg-[linear-gradient(90deg,#22d3ee,45%,#60a5fa,70%,#a78bfa,95%,#22d3ee)] animate-bg-pan-x opacity-70" />
      <AmbientBackground lines={18} opacity={0.06} speed={0.0035} />
      <div className="mx-auto max-w-screen-2xl px-6 py-10 grid gap-8 md:grid-cols-4">
        <div>
          <h3 className="font-semibold">About Us</h3>
          <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
            We are a fast-growing consultancy delivering practical solutions in cloud, secure infrastructure, and IT
            transformation—paired with immersive UI.
          </p>
        </div>
        <div>
          <h3 className="font-semibold">Our Services</h3>
          <ul className="mt-2 text-sm text-muted-foreground grid gap-1">
            <li>Cloud Technologies</li>
            <li>Secure Infrastructure</li>
            <li>IT Consultancy</li>
            <li>Managed Services</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">Quick links</h3>
          <ul className="mt-2 text-sm text-muted-foreground grid gap-1">
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#knowledge">Knowledge Base</a>
            </li>
            <li>
              <a href="#partners">Partners</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/terms">Terms &amp; Conditions</a>
            </li>
            <li>
              <a href="/legal-disclaimer">Legal Disclaimer</a>
            </li>
            <li>
              <a href="/privacy">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">Contact Info</h3>
          <address className="not-italic mt-2 text-sm text-muted-foreground">
            Xpert Consultancy Ltd
            <br />
            71-75 Shelton Street, London, England, WC2H 9JQ
            <br />
            <a href="mailto:enquiry@xpertcs.com">enquiry@xpertcs.com</a>
            <br />
            <a href="tel:+442073607595">0207 360 7595</a>
          </address>
        </div>
      </div>
      <div className="border-t border-border/60 py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Xpert Consultancy Limited. All rights reserved.
      </div>
    </footer>
  )
}
