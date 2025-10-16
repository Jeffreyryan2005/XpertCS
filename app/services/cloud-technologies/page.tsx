import Link from "next/link"
import { AmbientBackground } from "@/components/hero_background_canvas"

export const metadata = {
  title: "Cloud Technologies — XPERTCS",
  description: "Adopt and migrate to Azure, AWS, Google, VMware, or hybrid cloud with security-first design.",
}

export default function CloudTechnologiesPage() {
  return (
    <main className="relative">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border/60">
        <AmbientBackground color="59,130,246" lines={80} opacity={0.22} speed={0.01} />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(1200px_500px_at_80%_-10%,hsl(var(--primary)/0.18),transparent_70%)]" />
        <div className="mx-auto max-w-screen-2xl px-6 py-14 md:py-20 text-center">
          <p className="text-sm text-muted-foreground animate-step-in">
            <Link href="/" className="hover:underline">
              Home
            </Link>{" "}
            / <span className="text-foreground">Services</span>
          </p>
          <h1 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight animate-step-in">Cloud Technologies</h1>
          <p className="mt-3 mx-auto max-w-3xl text-muted-foreground animate-step-in [animation-delay:120ms]">
            Don’t get left behind. Start your cloud journey with Xpert Consultancy.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-screen-2xl px-6 py-10 md:py-16 grid md:grid-cols-2 gap-8 items-start">
        <div className="space-y-4 text-muted-foreground leading-relaxed animate-step-in">
          <p>
            As end‑users consider the “cloud‑first” option for running production workloads, the cloud is becoming the
            default standard. According to IDC, in the new normal, 40% of employees will primarily work from home,
            compared with just 16% before the pandemic, making digital workspace agility vital. As a result, most
            enterprises will shift to cloud‑centric infrastructure in the coming years.
          </p>
          <p>
            Xpert Consultancy helps customers adopt and migrate on‑premises resources to the cloud. We offer flexible
            ways to embrace cloud design by moving to Azure, Amazon, Google, VMware, or hybrid cloud solutions. We
            support hosting applications, building testing tools, cloud app development, data‑centre migrations, backup
            and disaster‑recovery, and modernising legacy apps.
          </p>
          <p>
            Our cloud designs follow best practices and security: data‑in‑transit and at‑rest protection, asset
            protection, threat intelligence, secure access and resilience, governance, operational security and logging,
            network segmentation, and auditing.
          </p>
        </div>
        <div className="animate-step-in [animation-delay:120ms]">
          <img
            src="/images/cloud-hero.jpg"
            alt="Hybrid cloud infrastructure with dashboards"
            className="rounded-3xl w-full h-auto aspect-[4/3] object-cover"
          />
        </div>
      </section>

      {/* Microsoft 365 & Onboarding */}
      <section className="mx-auto max-w-screen-2xl px-6 py-8 md:py-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-center animate-step-in">Microsoft 365 and Onboarding</h2>
        <p className="mt-3 text-muted-foreground text-center mx-auto max-w-3xl leading-relaxed animate-step-in [animation-delay:100ms]">
          Our team has extensive experience in cloud technologies to help customers design, migrate and adopt cloud
          securely. We also provide data‑centre migration/transformation guidance and clearly defined road‑maps.
        </p>
        <ul className="mt-6 mx-auto max-w-4xl grid md:grid-cols-2 gap-x-4 gap-y-3 text-foreground/90 animate-step-in [animation-delay:180ms]">
          <li className="text-center">• Azure | Microsoft 365 Services</li>
          <li className="text-center">• Azure/Office 365 Health Check | Security Review | Information Protection</li>
          <li className="text-center">• Email Migration to Office 365 | Public Folder Migration Assistance</li>
          <li className="text-center">• Office 365 Tenant Configuration | Tenant‑to‑Tenant Migration</li>
          <li className="text-center">• Office 365 Implementation Project Management | ProPlus Pilot Assistance</li>
          <li className="text-center">• Active Directory Synchronization | Active Directory Federation</li>
          <li className="text-center">
            • Microsoft Intune – Endpoint Manager | Windows Autopilot | Advanced Threat Protection
          </li>
          <li className="text-center">• System Center Configuration Manager: Co‑Management</li>
          <li className="text-center">• Microsoft Teams Planning & Assistance | Direct Routing | Onboarding</li>
        </ul>
      </section>
    </main>
  )
}
