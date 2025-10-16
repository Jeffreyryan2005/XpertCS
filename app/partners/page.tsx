import Image from "next/image"
import Link from "next/link"
import { AmbientBackground } from "@/components/hero_background_canvas"
import { PartnerCard } from "@/components/partner-card"

export const metadata = {
  title: "Partners — XPERTCS",
  description: "Meet our strategic technology partners including Microsoft, VMware, and industry leaders.",
}

export default function PartnersPage() {
  const partners = [
    // Microsoft Partners
    {
      name: "Microsoft Gold Partner - Cloud Platform",
      category: "Microsoft",
      image: "/partners/microsoft-gold-cloud.jpg",
    },
    {
      name: "Microsoft Gold Partner - Cloud Productivity",
      category: "Microsoft",
      image: "/partners/microsoft-gold-productivity.jpg",
    },
    {
      name: "Microsoft Silver Partner - Datacenter",
      category: "Microsoft",
      image: "/partners/microsoft-silver-datacenter.jpg",
    },
    {
      name: "Microsoft Silver Partner - Cloud Productivity",
      category: "Microsoft",
      image: "/partners/microsoft-silver-productivity.jpg",
    },
    {
      name: "Microsoft Silver Partner - Security",
      category: "Microsoft",
      image: "/partners/microsoft-silver-security.jpg",
    },
    {
      name: "Microsoft Silver Partner - Collaboration and Content",
      category: "Microsoft",
      image: "/partners/microsoft-silver-collaboration.jpg",
    },
    {
      name: "Microsoft Silver Partner - Application Development",
      category: "Microsoft",
      image: "/partners/microsoft-silver-app-dev.jpg",
    },
    {
      name: "Microsoft Silver Partner - Communications",
      category: "Microsoft",
      image: "/partners/microsoft-silver-communications.jpg",
    },

    // Security & Infrastructure
    { name: "Check Point Software Technologies", category: "Security", image: "/partners/checkpoint.jpg" },
    { name: "One Identity - Quest", category: "Security", image: "/partners/one-identity.jpg" },
    { name: "Quest - Registered Partner", category: "Security", image: "/partners/quest.jpg" },
    { name: "Bitdefender - Bronze Reseller", category: "Security", image: "/partners/bitdefender.jpg" },
    { name: "Cyber Essentials - Certified Plus", category: "Security", image: "/partners/cyber-essentials.jpg" },
    { name: "Opentext Cybersecurity", category: "Security", image: "/partners/opentext-cyber.jpg" },
    { name: "Delinea", category: "Security", image: "/partners/delinea.jpg" },
    { name: "Acronis", category: "Security", image: "/partners/acronis.jpg" },
    { name: "HorneSecurity", category: "Security", image: "/partners/hornetsecurity.jpg" },

    // Infrastructure & Management
    { name: "Quadric Software", category: "Infrastructure", image: "/partners/quadric.jpg" },
    { name: "Alike", category: "Infrastructure", image: "/partners/alike.jpg" },
    { name: "Nakivo - VM Data Protection", category: "Infrastructure", image: "/partners/nakivo.jpg" },
    { name: "Cyberelements", category: "Infrastructure", image: "/partners/cyberelements.jpg" },
    { name: "Webroot by Opentext", category: "Infrastructure", image: "/partners/webroot.jpg" },
    { name: "Kemp", category: "Infrastructure", image: "/partners/kemp.jpg" },
    { name: "SonicWall", category: "Infrastructure", image: "/partners/sonicwall.jpg" },
    { name: "PeterConnects", category: "Infrastructure", image: "/partners/peterconnects.jpg" },

    // Additional Partners
    { name: "CodeTwo", category: "Solutions", image: "/partners/codetwo.jpg" },
    { name: "StarWind", category: "Solutions", image: "/partners/starwind.jpg" },
    { name: "Altaro - Bronze Partner", category: "Solutions", image: "/partners/altaro.jpg" },
    { name: "VMware Partner Connect", category: "Solutions", image: "/partners/vmware.jpg" },
    { name: "Atera", category: "Solutions", image: "/partners/atera.jpg" },
    { name: "Domotz Partner", category: "Solutions", image: "/partners/domotz.jpg" },
  ]

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border/60">
        <AmbientBackground color="59,130,246" lines={72} opacity={0.2} speed={0.01} />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(1200px_500px_at_20%_-10%,hsl(var(--primary)/0.15),transparent_70%)]" />
        <div className="mx-auto max-w-screen-2xl px-6 py-14 md:py-20 text-center">
          <p className="text-sm text-muted-foreground animate-step-in [animation-delay:40ms] mx-auto">
            <Link href="/" className="hover:underline">
              Home
            </Link>{" "}
            / <span className="text-foreground">Partners</span>
          </p>
          <h1 className="mt-3 text-balance text-3xl md:text-5xl font-semibold tracking-tight animate-step-in">
            Our Partners
          </h1>
          <p className="mt-3 mx-auto max-w-3xl text-muted-foreground animate-step-in [animation-delay:120ms]">
            Strategic partnerships with industry-leading technology vendors
          </p>
        </div>
      </section>

      {/* Partners Overview */}
      <section className="scroll-mt-28">
        <div className="mx-auto max-w-screen-2xl px-6 py-10 md:py-16 grid md:grid-cols-2 gap-8 items-start">
          <div className="animate-step-in">
            <h2 className="text-pretty text-2xl md:text-4xl font-semibold">Our Partners</h2>
            <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Our strategic partners are a significant part of our business. Xpert Consultancy is pleased to announce
                that the company is now partnered with many high-tech vendors such as Microsoft by earning the required
                competency which makes the most of this unprecedented market momentum.
              </p>
              <p>
                Provide us with the platform to show our customers that working with you is a smart decision. And build
                a thriving practice, by delivering optimised IT services and solutions that enable everyone to focus on
                the business, instead of the technology.
              </p>
            </div>
          </div>
          <div className="relative aspect-[4/3] rounded-3xl bg-muted/40 animate-step-in [animation-delay:120ms]">
            <Image
              src="/business-partnership-collaboration.png"
              alt="Our partners"
              fill
              className="object-cover rounded-3xl"
            />
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="scroll-mt-28">
        <div className="mx-auto max-w-screen-2xl px-6 py-10 md:py-16">
          <h2 className="text-pretty text-2xl md:text-4xl font-semibold animate-step-in">Our Philosophy</h2>
          <ul className="mt-6 space-y-3 text-foreground/90 animate-step-in [animation-delay:120ms]">
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">•</span>
              <span>Respect for our customers in everything we do</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">•</span>
              <span>Well-defined solutions to well-defined problems</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">•</span>
              <span>Complete, easy-to-use solution</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">•</span>
              <span>Commitment to excellence and innovation</span>
            </li>
          </ul>
          <p className="mt-6 max-w-4xl text-muted-foreground leading-relaxed animate-step-in [animation-delay:220ms]">
            By achieving Microsoft Gold Competency, partners have proven themselves as specialized technology experts
            with the skills needed to best serve customers. The Competency in the Microsoft Partner Network is designed
            to help customers identify services and solution providers that have demonstrated proof of their capability
            to deliver quality outcomes and customer satisfaction.
          </p>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="scroll-mt-28">
        <div className="mx-auto max-w-screen-2xl px-6 py-10 md:py-16">
          <h2 className="text-pretty text-2xl md:text-4xl font-semibold animate-step-in mb-8">
            Our Technology Partners
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {partners.map((partner, idx) => (
              <PartnerCard key={idx} partner={partner} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Microsoft Gold Certification Info */}
      <section className="scroll-mt-28 bg-muted/30">
        <div className="mx-auto max-w-screen-2xl px-6 py-10 md:py-16">
          <h2 className="text-pretty text-2xl md:text-4xl font-semibold animate-step-in mb-6">
            Microsoft Gold Certification
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed animate-step-in [animation-delay:120ms]">
            <p className="font-medium text-foreground">Microsoft Describes its Gold-Certified Partner Program as:</p>
            <blockquote className="border-l-4 border-primary pl-4 italic">
              "Microsoft Gold-Certified partner status validates IT professional and developer technical expertise
              through rigorous, industry-proven, and industry-recognized exams. Exams cover a wide range of Microsoft
              products, technologies, and solutions."
            </blockquote>
            <p>
              This certification demonstrates our commitment to delivering high-quality solutions and services to our
              customers. Our team of certified professionals ensures that every project is executed with excellence and
              expertise.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
