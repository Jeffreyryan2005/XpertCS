import Link from "next/link"
import { AmbientBackground } from "@/components/hero_background_canvas"

export const metadata = {
  title: "Managed Services — XPERTCS",
  description:
    "End‑to‑end IT managed services: service desk, monitoring, asset and platform support with 24/7/365 coverage.",
}

export default function ManagedServicesPage() {
  return (
    <main className="relative">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border/60">
        <AmbientBackground color="16,185,129" lines={80} opacity={0.22} speed={0.01} />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(1200px_500px_at_80%_-10%,hsl(152_63%_40%/.18),transparent_70%)]" />
        <div className="mx-auto max-w-screen-2xl px-6 py-14 md:py-20 text-center">
          <p className="text-sm text-muted-foreground animate-step-in">
            <Link href="/" className="hover:underline">
              Home
            </Link>{" "}
            / <span className="text-foreground">Services</span>
          </p>
          <h1 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight animate-step-in">Managed Services</h1>
          <p className="mt-3 mx-auto max-w-3xl text-muted-foreground animate-step-in [animation-delay:120ms]">
            Reliable, responsive support from shared service desk to on‑site presence, backed by proactive monitoring
            and transparent reporting.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="mx-auto max-w-screen-2xl px-6 py-10 md:py-16 grid md:grid-cols-2 gap-8 items-start">
        <div className="space-y-4 text-muted-foreground leading-relaxed animate-step-in">
          <p>We focus our Managed Services for organisations with between 50 and 3000 seats.</p>
          <p>
            Our support consultants have extensive experience supporting an array of functions: server operating
            systems, enterprise applications, desktops, security, networks and infrastructures through to bespoke system
            support and asset management.
          </p>
          <p>
            Our Managed Services capability ranges from fully outsourced IT departments, to supporting single systems
            remotely from the head office, and comprises of:
          </p>
          <ul className="space-y-2 text-foreground/90 pl-4">
            <li>• On‑site/off‑site Support</li>
            <li>• Up to 24/7/365 Support</li>
          </ul>
          <p>
            Our services are provided through a shared service desk at our offices, on‑site support presence, dedicated
            account and delivery management, comprehensive pro‑active monitoring and reporting, extensive design,
            development and delivery capabilities, and robust and transparent escalation procedures.
          </p>
          <p>
            Working in an ITIL framework and using Key Performance Indicators and Service Level Agreements, the service
            is benchmarked and operates alongside the business to achieve its goals and objectives. We understand
            mission‑critical IT and offer a responsive and flexible approach to our client's requirements.
          </p>
          <p>
            Our service teams take responsibility to manage all problems end‑to‑end and utilise our Microsoft Premier
            Support and other multi‑vendor contracts such as VMWare, Dell, Altaro, HP & Amazon to transparently solve
            the minority of issues requiring further escalation.
          </p>
          <p>
            We make significant investments in maintaining the accreditation levels and knowledge base of our technical
            support staff. We work with the leading suppliers in the industry to build our solutions so our people are
            fully trained to support products from the likes of Microsoft, Amazon, Cisco, Citrix, Dell, Google, Kemp,
            SonicWall, Checkpoint, HP, Juniper and VMware.
          </p>
          <p>
            Our support teams are organised into various teams focussing on the delivery of following managed services.
          </p>
        </div>
        <div className="animate-step-in [animation-delay:120ms]">
          <img
            src="/images/managed-services-ops.jpg"
            alt="Operations & monitoring center"
            className="rounded-3xl w-full h-auto aspect-[4/3] object-cover"
          />
        </div>
      </section>

      {/* Capabilities */}
      <section className="mx-auto max-w-screen-2xl px-6 py-8 md:py-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-center animate-step-in">What We Support</h2>
        <ul className="mt-4 grid md:grid-cols-2 gap-2 text-foreground/90 animate-step-in [animation-delay:180ms]">
          <li>• Desktop Support</li>
          <li>• First, Second- and Third-line Support</li>
          <li>• Helpdesk Management</li>
          <li>• Infrastructure Support</li>
          <li>• Outsource Solutions</li>
          <li>• Single/Mixed‑vendor Environment Support</li>
          <li>• Platform Support</li>
        </ul>
      </section>

      {/* Approach */}
      <section className="mx-auto max-w-screen-2xl px-6 py-8 md:py-12 grid md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1 space-y-4 text-muted-foreground leading-relaxed animate-step-in">
          <p>
            These teams take pride in being an extension of our customers' ICT departments. Our support packages offer a
            pre‑agreed amount of dedicated time to each customer's environment and carry out a routine set of
            management/maintenance duties on the customer's equipment's. A suitable technical lead and support engineer
            is available to carry out the duties on behalf of customers, and an agreed level of reporting will be
            provided to the customer. The work will be carried out under Xpert's standard terms and conditions and all
            site visits are scheduled in advance with customers at mutually agreed times.
          </p>
        </div>
        <div className="order-1 md:order-2 animate-step-in [animation-delay:100ms]">
          <img
            src="/images/managed-services-team.jpg"
            alt="Service desk team helping users"
            className="rounded-3xl w-full h-auto aspect-[4/3] object-cover"
          />
        </div>
      </section>

      {/* Support Teams */}
      <section className="mx-auto max-w-screen-2xl px-6 py-8 md:py-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-center animate-step-in">Support Teams</h2>
        <ul className="mt-6 mx-auto max-w-3xl grid md:grid-cols-2 gap-x-4 gap-y-3 text-foreground/90 animate-step-in [animation-delay:180ms]">
          <li className="text-center">• Cloud and Infrastructure</li>
          <li className="text-center">• Security</li>
          <li className="text-center">• Voice and Collaboration</li>
          <li className="text-center">• Networking</li>
        </ul>
      </section>

      {/* Service Packages */}
      <section className="mx-auto max-w-screen-2xl px-6 py-8 md:py-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-center animate-step-in">Service Packages Include</h2>
        <ul className="mt-6 mx-auto max-w-4xl grid md:grid-cols-2 gap-x-4 gap-y-3 text-foreground/90 animate-step-in [animation-delay:180ms]">
          <li className="text-center">• On‑site / Off‑site Support</li>
          <li className="text-center">• Up to 24/7/365 Support</li>
          <li className="text-center">• Proactive Monitoring and Alerting</li>
          <li className="text-center">• Patch and Vulnerability Management</li>
          <li className="text-center">• Asset and License Management</li>
          <li className="text-center">• Backup, Retention and Recovery Management</li>
          <li className="text-center">• Monthly Reporting and KPIs</li>
          <li className="text-center">• Quarterly Service Reviews and Continual Improvement</li>
        </ul>
      </section>

      {/* Reporting & Governance */}
      <section className="mx-auto max-w-screen-2xl px-6 py-8 md:py-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-center animate-step-in">Reporting & Governance</h2>
        <p className="mt-4 text-muted-foreground text-center mx-auto max-w-3xl leading-relaxed animate-step-in [animation-delay:100ms]">
          Managed services are delivered under ITIL processes with agreed SLAs and KPIs. Governance ensures
          transparency, predictable outcomes and continuous improvement.
        </p>
      </section>
    </main>
  )
}
