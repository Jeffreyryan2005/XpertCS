import Link from "next/link"
import Image from "next/image"
import { AmbientBackground } from "@/components/hero_background_canvas"

export const metadata = {
  title: "Data Security on Transitioning to a New Office — XPERTCS",
  description: "Essential guide to maintaining data security during office transitions and migrations.",
}

export default function DataSecurityPage() {
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
            /{" "}
            <Link href="/knowledge-base" className="hover:underline">
              Knowledge Base
            </Link>{" "}
            / <span className="text-foreground">Data Security</span>
          </p>
          <h1 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight animate-step-in">
            Data Security on Transitioning to a New Office
          </h1>
          <p className="mt-3 mx-auto max-w-3xl text-muted-foreground animate-step-in [animation-delay:120ms]">
            Protect your organization's data during office relocations and infrastructure changes.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-screen-2xl px-6 py-10 md:py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-6">
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-muted">
              <Image
                src="/data-security-office-migration-cybersecurity.jpg"
                alt="Data security during office migration"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="prose prose-invert max-w-none space-y-4 text-muted-foreground leading-relaxed">
              <p>
                It is far wiser to do your own installations and ensure that all data flowing through the organization
                is properly secured and monitored. When transitioning to a new office, data security should be a top
                priority to protect your organization's sensitive information.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-6">Planning Your Migration</h2>
              <p>
                Before moving to a new office, conduct a comprehensive audit of all data assets and systems. Create a
                detailed migration plan that includes security checkpoints, backup procedures, and contingency plans for
                potential issues. This proactive approach minimizes risks and ensures business continuity.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-6">Secure Data Transfer</h2>
              <p>
                Use encrypted connections and secure protocols when transferring data between locations. Implement
                multi-factor authentication for all systems and ensure that only authorized personnel have access to
                sensitive information during the transition period.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-6">Infrastructure Security</h2>
              <p>
                Ensure your new office infrastructure meets or exceeds your previous security standards. This includes
                physical security measures like access controls, surveillance systems, and secure server rooms, as well
                as cybersecurity measures like firewalls and intrusion detection systems.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-6">Backup and Disaster Recovery</h2>
              <p>
                Maintain comprehensive backups of all critical data before, during, and after the transition. Test your
                disaster recovery procedures to ensure you can quickly restore operations if something goes wrong during
                the move.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-6">Employee Training and Awareness</h2>
              <p>
                Educate your team about security best practices during the transition. Ensure employees understand the
                importance of protecting data, recognizing phishing attempts, and following security protocols in the
                new office environment.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-6">Post-Migration Verification</h2>
              <p>
                After the move, conduct thorough security audits to verify that all systems are functioning correctly
                and securely. Check for any unauthorized access attempts, verify data integrity, and ensure all security
                measures are properly configured.
              </p>

              <p className="text-sm text-muted-foreground/70 mt-8">Last updated: October 2025</p>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="bg-card border border-border/40 rounded-2xl p-6">
              <h3 className="font-semibold text-foreground mb-4">Security Checklist</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Audit all data assets</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Create migration plan</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Encrypt data transfers</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Backup critical data</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Train employees</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Verify post-migration</span>
                </li>
              </ul>
            </div>

            <Link
              href="/knowledge-base"
              className="block w-full text-center px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium"
            >
              Back to Knowledge Base
            </Link>
          </aside>
        </div>
      </section>
    </main>
  )
}
