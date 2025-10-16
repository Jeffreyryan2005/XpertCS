import Link from "next/link"
import { AmbientBackground } from "@/components/hero_background_canvas"

export const metadata = {
  title: "IT Consultancy — XPERTCS",
  description:
    "Independent guidance to choose the right technology, plan architecture and deliver secure, cost‑effective solutions.",
}

export default function ITConsultancyPage() {
  return (
    <main className="relative">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border/60">
        <AmbientBackground color="30,58,138" lines={80} opacity={0.22} speed={0.01} />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(1200px_500px_at_50%_-10%,hsl(226_70%_45%/.18),transparent_70%)]" />
        <div className="mx-auto max-w-screen-2xl px-6 py-14 md:py-20 text-center">
          <p className="text-sm text-muted-foreground animate-step-in">
            <Link href="/" className="hover:underline">
              Home
            </Link>{" "}
            / <span className="text-foreground">Services</span>
          </p>
          <h1 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight animate-step-in">IT Consultancy</h1>
          <p className="mt-3 mx-auto max-w-3xl text-muted-foreground animate-step-in [animation-delay:120ms]">
            Practical, cost‑effective consultancy to scope, plan and deliver technology change with measurable outcomes.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-screen-2xl px-6 py-10 md:py-16 grid md:grid-cols-2 gap-8 items-start">
        <div className="space-y-4 text-muted-foreground leading-relaxed animate-step-in">
          <p>
            Xpert Consultancy is a highly experienced, lively and innovative company that is very ambitious and
            passionate about technology. We provide a wide range of cost‑effective IT consultancy to small and medium
            business. Our consultancy service assists customers to go through change, merger/demerger, consolidation or
            investment and achieve a high return of investment from technology.
          </p>
          <p>
            Xpert Consultancy have over 20+ years of expertise in the consulting service to help customers achieve their
            goals, to support and offer innovative solutions at all times, at the same time showing reliability,
            integrity and professionalism so that the customers can reach their full potential in all their
            technological aspects.
          </p>
          <p>
            Xpert Consultancy works as a Gold Partner for Unified Communications and Collaboration, Windows and Devices,
            Cloud Productivity, Datacenter, Cloud Platform, Enterprise Mobility Management Systems and works closely
            with Microsoft through Gold Partner Accreditation. The partnership allows us to use Technical Presales and
            Deployment Services (TPD) for remote, personalized, one‑to‑one consultations to build customer technical
            capabilities faster to achieve their goals.
          </p>
          <p>
            The consultation service provides guidance for customers to choose the right technology solution to solve
            their business problem and help to implement the solutions such as defining demonstrating technical
            solutions, initiating a technical proof‑of‑concept in a lab, and architecture planning and design leading to
            a Statement of Work. Xpert consultancy will help customers at various stages of their solution build such as
            architecture planning and design guidance, best practices and deployment guidance, product references and
            documentation.
          </p>
        </div>
        <div className="animate-step-in [animation-delay:100ms]">
          <img
            src="/images/it-consultancy-hero.jpg"
            alt="Consultants planning architecture with diagrams"
            className="rounded-3xl w-full h-auto aspect-[4/3] object-cover"
          />
        </div>
      </section>

      {/* Focus Areas */}
      <section className="mx-auto max-w-screen-2xl px-6 py-8 md:py-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-center animate-step-in">Focus Areas</h2>
        <div className="mt-6 mx-auto max-w-4xl grid md:grid-cols-2 gap-x-8 gap-y-3 text-foreground/90 animate-step-in [animation-delay:160ms]">
          <ul className="space-y-3">
            <li className="text-center">• Artificial Intelligence (AI)</li>
            <li className="text-center">• Internet of Things (IoT) Technologies</li>
            <li className="text-center">• Server Migration</li>
            <li className="text-center">• Data Migration</li>
            <li className="text-center">• Microsoft Modern Workplace Solutions</li>
            <li className="text-center">• Microsoft 365 for Cloud Productivity</li>
            <li className="text-center">• Device Management and Security Solutions</li>
          </ul>
          <ul className="space-y-3">
            <li className="text-center">• Deploying, Managing and Securing Microsoft 365</li>
            <li className="text-center">• IT Technology Review</li>
            <li className="text-center">• IT Strategy</li>
            <li className="text-center">• IT Due Diligence Services</li>
            <li className="text-center">• Information Security Management</li>
            <li className="text-center">• IT Project Management</li>
            <li className="text-center">• Information Protection</li>
            <li className="text-center">• IT Security Audit and Gap Analysis</li>
          </ul>
        </div>
      </section>

      {/* Advisory and Delivery */}
      <section className="mx-auto max-w-screen-2xl px-6 py-8 md:py-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-center animate-step-in">Advisory and Delivery</h2>
        <div className="mt-6 mx-auto max-w-4xl grid md:grid-cols-2 gap-x-8 gap-y-3 text-foreground/90 animate-step-in [animation-delay:160ms]">
          <ul className="space-y-3">
            <li className="text-center">• Solution Architecture and Roadmaps</li>
            <li className="text-center">• Proof‑of‑Concept Design and Rapid Prototyping</li>
            <li className="text-center">• Cloud Adoption Frameworks and Landing Zones</li>
            <li className="text-center">• Migration Assessments and Readiness</li>
            <li className="text-center">• Licensing and Cost Optimization Advisory</li>
            <li className="text-center">• Business Continuity and DR Planning</li>
            <li className="text-center">• Governance, Risk and Compliance Guidance</li>
          </ul>
          <ul className="space-y-3">
            <li className="text-center">• Project Recovery and Turnaround</li>
            <li className="text-center">• Vendor Selection and RFP Support</li>
            <li className="text-center">• Change, Release and Cut‑over Management</li>
            <li className="text-center">• Documentation and Knowledge Transfer</li>
            <li className="text-center">• Training, Enablement and Handover</li>
            <li className="text-center">• Ongoing Advisory Retainer</li>
          </ul>
        </div>
      </section>

      {/* Engagement Outcomes */}
      <section className="mx-auto max-w-screen-2xl px-6 py-8 md:py-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-center animate-step-in">Engagement Outcomes</h2>
        <p className="mt-3 text-muted-foreground text-center mx-auto max-w-3xl leading-relaxed animate-step-in [animation-delay:100ms]">
          Every consultancy engagement produces clear, actionable artefacts to accelerate delivery and reduce risk.
        </p>
        <ul className="mt-6 mx-auto max-w-4xl grid md:grid-cols-2 gap-x-4 gap-y-3 text-foreground/90 animate-step-in [animation-delay:180ms]">
          <li className="text-center">• Current‑state assessment with risks and issues</li>
          <li className="text-center">• Target architecture and design decisions</li>
          <li className="text-center">• Migration plan with effort, cost and timeline</li>
          <li className="text-center">• Security and compliance recommendations</li>
          <li className="text-center">• Operations runbooks and support model</li>
          <li className="text-center">• Success metrics and benefits tracking</li>
        </ul>
      </section>
    </main>
  )
}
