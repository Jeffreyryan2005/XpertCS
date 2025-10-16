import Link from "next/link"
import { AmbientBackground } from "@/components/hero_background_canvas"

export const metadata = {
  title: "Secure Infrastructure — XPERTCS",
  description:
    "Build secure, resilient remote-work infrastructure with zero‑trust controls, business continuity, and modern endpoint security.",
}

export default function SecureInfrastructurePage() {
  return (
    <main className="relative">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border/60">
        <AmbientBackground color="20,184,166" lines={80} opacity={0.22} speed={0.01} />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(1200px_500px_at_20%_-10%,hsl(168_84%_40%/.18),transparent_70%)]" />
        <div className="mx-auto max-w-screen-2xl px-6 py-14 md:py-20 text-center">
          <p className="text-sm text-muted-foreground animate-step-in">
            <Link href="/" className="hover:underline">
              Home
            </Link>{" "}
            / <span className="text-foreground">Services</span>
          </p>
          <h1 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight animate-step-in">
            Secure Infrastructure
          </h1>
          <p className="mt-3 mx-auto max-w-3xl text-muted-foreground animate-step-in [animation-delay:120ms]">
            Our secure infrastructure service focuses on providing a secure foundation for customers using the public
            cloud.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="mx-auto max-w-screen-2xl px-6 py-10 md:py-16 grid md:grid-cols-2 gap-8 items-start">
        <div className="space-y-4 text-muted-foreground leading-relaxed animate-step-in">
          <p>
            Remote work is redefined. Before 2020, less than 5% of the global workforce had the option to work from
            home. Typically reserved for executives, IT professionals, and consultants, remote work is now commonplace:
            more than half of employees engage in remote work at least part‑time. What was once a nice‑to‑have option is
            now a business necessity.
          </p>
          <p>
            Our expertise helps customers build remote‑work infrastructure, quickly deploy Windows virtual desktops,
            Windows Always‑on VPN, Azure VPN Gateway, Endpoint protection, Cloud apps, and securely connect to any
            resource.
          </p>
          <p>
            Our secure infrastructure and remote solutions allow you to do business from anywhere using modern devices —
            enabling employees to work seamlessly both onsite and remotely.
          </p>
        </div>
        <div className="animate-step-in [animation-delay:120ms]">
          <img
            src="/images/secure-remote.jpg"
            alt="Secure remote work with VPN and zero‑trust"
            className="rounded-3xl w-full h-auto aspect-[4/3] object-cover"
          />
        </div>
      </section>

      {/* Business Continuity */}
      <section className="mx-auto max-w-screen-2xl px-6 py-8 md:py-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-center animate-step-in">
          Business Continuity Solutions
        </h2>
        <p className="mt-3 text-muted-foreground text-center mx-auto max-w-3xl leading-relaxed animate-step-in [animation-delay:100ms]">
          Azure Backup and Site Recovery provide simple and robust cloud backup and disaster recovery solutions to avoid
          costly business disruptions.
        </p>
        <ul className="mt-6 mx-auto max-w-2xl grid md:grid-cols-2 gap-x-4 gap-y-3 text-foreground/90 animate-step-in [animation-delay:180ms]">
          <li className="text-center">• Azure Backup</li>
          <li className="text-center">• Azure Site Recovery</li>
        </ul>
      </section>

      {/* Cost Optimization */}
      <section className="mx-auto max-w-screen-2xl px-6 py-8 md:py-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-center animate-step-in">Cost Optimization</h2>
        <p className="mt-3 text-muted-foreground text-center mx-auto max-w-3xl leading-relaxed animate-step-in [animation-delay:100ms]">
          Migrate legacy applications, databases, Windows and Linux workloads to the cloud, continuously monitor,
          analyse and forecast spend to reduce IT cost and increase operational efficiency.
        </p>
        <ul className="mt-6 mx-auto max-w-4xl grid md:grid-cols-2 gap-x-4 gap-y-3 text-foreground/90 animate-step-in [animation-delay:180ms]">
          <li className="text-center">• Windows and SQL Server on Azure</li>
          <li className="text-center">• Linux on Azure</li>
          <li className="text-center">• Azure Hybrid Benefit</li>
          <li className="text-center">• Azure Cost Management</li>
          <li className="text-center">• Azure Reservations</li>
          <li className="text-center">• Azure Spot Virtual Machines</li>
        </ul>
      </section>
    </main>
  )
}
