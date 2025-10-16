import Image from "next/image"
import Link from "next/link"
import { AmbientBackground } from "@/components/hero_background_canvas"

export const metadata = {
  title: "About Us — XPERTCS",
  description: "Learn who we are, what we do, how we deliver, and why to choose XPERTCS.",
}

export default function AboutPage() {
  return (
    <div className="relative">
      <section className="relative overflow-hidden border-b border-border/60">
        {/* animated ambient background like homepage */}
        <AmbientBackground color="59,130,246" lines={72} opacity={0.2} speed={0.01} />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(1200px_500px_at_20%_-10%,hsl(var(--primary)/0.15),transparent_70%)]" />
        <div className="mx-auto max-w-screen-2xl px-6 py-14 md:py-20 text-center">
          <p className="text-sm text-muted-foreground animate-step-in [animation-delay:40ms] mx-auto">
            <Link href="/" className="hover:underline">
              Home
            </Link>{" "}
            / <span className="text-foreground">About Us</span>
          </p>
          <h1 className="mt-3 text-balance text-3xl md:text-5xl font-semibold tracking-tight animate-step-in">
            About Us
          </h1>
          <p className="mt-3 mx-auto max-w-3xl text-muted-foreground animate-step-in [animation-delay:120ms]">
            Get to know our story, capabilities, and how we consistently deliver with integrity.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section id="who-we-are" className="scroll-mt-28">
        <div className="mx-auto max-w-screen-2xl px-6 py-10 md:py-16 grid md:grid-cols-2 gap-8 items-start">
          <div className="animate-step-in">
            <h2 className="text-pretty text-2xl md:text-4xl font-semibold">Who We Are</h2>
            <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                We are a fast-growing business who understand the pressures you operate under and your preference for
                no-nonsense advice and practical solutions. Our company has a reputation for understanding the
                industry‑specific requirements of each client and responding to them with quality service and support.
              </p>
              <p>
                Xpert Consultancy has been providing IT solutions since 2003. We remain committed to putting our clients
                first, offering solutions with true integrity.
              </p>
            </div>
          </div>
          <div className="relative aspect-[4/3] rounded-3xl bg-muted/40 animate-step-in [animation-delay:120ms]">
            <Image
              src="/team-collaborating-illustration.jpg"
              alt="Our team collaborating"
              fill
              className="object-cover rounded-3xl"
              priority
            />
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section id="what-we-do" className="scroll-mt-28">
        <div className="mx-auto max-w-screen-2xl px-6 py-10 md:py-16 grid md:grid-cols-2 gap-8 items-start">
          <div className="animate-step-in">
            <h2 className="text-pretty text-2xl md:text-4xl font-semibold">What We Do</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Xpert Consultancy delivers technology solutions that help our clients streamline their processes and
              embrace competitive advantages. We specialise in IT service and support, maintenance, virtualisation,
              migration and upgrades, systems integration, web‑enablement of legacy applications, enterprise‑scale
              database design and development, solution‑focused web/software development, consulting, and staffing
              services.
            </p>
            <ul className="mt-6 space-y-2 text-foreground/90">
              <li>• Cloud (Azure | Office 365 | Microsoft 365 | AWS)</li>
              <li>• Secure Infrastructure | Endpoint Protection</li>
              <li>• Skype | Teams | Collaboration</li>
              <li>• Merger &amp; Acquisitions | Transitions</li>
              <li>• Managed Services | IT Consultancy</li>
              <li>• Server Installations and Maintenance</li>
              <li>• Custom Images | Auto Pilot | PC/Notebook Installations</li>
              <li>• Backup Management — Remote &amp; Onsite</li>
              <li>• Email Solutions, Office Automations &amp; IT Service Management</li>
            </ul>
          </div>
          <div className="relative aspect-[4/3] rounded-3xl bg-muted/40 animate-step-in [animation-delay:120ms]">
            <Image
              src="/software-development-illustration.png"
              alt="What we do illustration"
              fill
              className="object-cover rounded-3xl"
            />
          </div>
        </div>
      </section>

      {/* How We Do It */}
      <section id="how-we-do-it" className="scroll-mt-28">
        <div className="mx-auto max-w-screen-2xl px-6 py-10 md:py-16 grid md:grid-cols-2 gap-8 items-start">
          <div className="relative aspect-[4/3] order-last md:order-first rounded-3xl bg-muted/40 animate-step-in [animation-delay:120ms]">
            <Image
              src="/process-and-planning-illustration.jpg"
              alt="How we work"
              fill
              className="object-cover rounded-3xl"
            />
          </div>
          <div className="animate-step-in">
            <h2 className="text-pretty text-2xl md:text-4xl font-semibold">How We Do It</h2>
            <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Our professional services teams work with customers in an agreed project engagement — either time‑based
                or resource‑based — enabling informed decisions before engaging in any IT projects. We partner with your
                team to carry out discovery and assessment of the project requirements.
              </p>
              <p>
                We prepare a comprehensive plan at the beginning of the engagement. Complex workstreams are broken down
                into a logical sequence of events; effective project management is executed with excellence.
              </p>
              <p className="font-medium text-foreground">It requires 3 skillsets:</p>
              <ul className="space-y-2 text-foreground/90">
                <li>• Technical Knowledge</li>
                <li>• Processes and Procedures</li>
                <li>• Strength and Stamina in Execution</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Xpert Consultancy */}
      <section id="why-xpert" className="scroll-mt-28">
        <div className="mx-auto max-w-screen-2xl px-6 py-10 md:py-16">
          <h2 className="text-pretty text-2xl md:text-4xl font-semibold animate-step-in">Why Xpert Consultancy</h2>
          <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed animate-step-in [animation-delay:120ms]">
            <p>
              In our decades of existence, we have worked with leading companies and performed extensive work in
              industries that rely on fast and robust IT infrastructure. Our developed expertise makes us an invaluable
              strategic partner.
            </p>
            <p>
              We provide a comprehensive experience including consultation by subject matter experts, professional
              design and implementation, and world‑class service and support for everything we do.
            </p>
          </div>
        </div>
      </section>

      {/* Our Solutions Help Our Clients */}
      <section id="solutions-help" className="scroll-mt-28">
        <div className="mx-auto max-w-screen-2xl px-6 py-10 md:py-16">
          <h2 className="text-pretty text-2xl md:text-4xl font-semibold animate-step-in">
            Our Solutions Help Our Clients
          </h2>
          <ul className="mt-6 space-y-2 text-foreground/90 animate-step-in [animation-delay:120ms]">
            <li>• Manage the Total Cost of Ownership of Technology Investments</li>
            <li>• Decrease Overall Expenses and Increase ROI</li>
            <li>• Support Revenue Opportunities Through Data Mining</li>
            <li>• Outperform Competition With a Better Infrastructure</li>
            <li>• Please Customers With Improved Responsiveness</li>
          </ul>
          <p className="mt-6 max-w-4xl text-muted-foreground leading-relaxed animate-step-in [animation-delay:220ms]">
            We deliver high‑quality, reliable and cost‑effective information technology services by constantly exploring
            and implementing innovative solutions that drive long‑term value. We focus on helping enterprises leverage
            technology to achieve business goals.
          </p>
        </div>
      </section>

      {/* Technology Centre */}
      <section id="technology-centre" className="scroll-mt-28">
        <div className="mx-auto max-w-screen-2xl px-6 py-10 md:py-16">
          <h2 className="text-pretty text-2xl md:text-4xl font-semibold animate-step-in">
            Xpert Consultancy Technology Centre
          </h2>
          <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed animate-step-in [animation-delay:120ms]">
            <p>
              Our technology centre exists to provide full‑service solutions to comprehensive requirements. The premise
              is simple: <strong>Get the right information to the right people at the right time.</strong>
            </p>
            <p>
              We offer enterprise architecture services including rapid assessment, corporate technology strategy,
              infrastructure planning, design and implementation. We rapidly design and implement enterprise
              architectures and frameworks that are open, secure, scalable, reliable, and ready for future iteration.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
