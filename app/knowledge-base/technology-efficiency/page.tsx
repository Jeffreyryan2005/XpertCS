import Link from "next/link"
import Image from "next/image"
import { AmbientBackground } from "@/components/hero_background_canvas"

export const metadata = {
  title: "How Technology Made Businesses More Efficient — XPERTCS",
  description: "Explore how modern technology transforms business operations and improves efficiency.",
}

export default function TechnologyEfficiencyPage() {
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
            / <span className="text-foreground">Technology Efficiency</span>
          </p>
          <h1 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight animate-step-in">
            How Technology Made Businesses More Efficient
          </h1>
          <p className="mt-3 mx-auto max-w-3xl text-muted-foreground animate-step-in [animation-delay:120ms]">
            Discover how digital transformation streamlines operations and drives business success.
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
                src="/business-technology-digital-transformation-automat.jpg"
                alt="Business technology and digital transformation"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="prose prose-invert max-w-none space-y-4 text-muted-foreground leading-relaxed">
              <p>
                They play a role in making operations more seamless, bridging the gap between authorities, consumers and
                businesses. Technology has fundamentally transformed how organizations operate, enabling them to do more
                with less while maintaining or improving quality.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-6">Automation and Process Optimization</h2>
              <p>
                Modern technology enables businesses to automate repetitive tasks, freeing up employees to focus on
                higher-value activities. From invoice processing to customer service, automation reduces errors, speeds
                up operations, and significantly lowers operational costs.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-6">Real-Time Data and Analytics</h2>
              <p>
                Cloud-based analytics platforms provide businesses with real-time insights into their operations. This
                data-driven approach enables faster decision-making, better resource allocation, and the ability to
                identify and capitalize on market opportunities quickly.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-6">Improved Communication and Collaboration</h2>
              <p>
                Modern collaboration tools have eliminated geographical barriers, enabling teams to work together
                seamlessly regardless of location. This has not only improved productivity but also expanded the talent
                pool that businesses can access.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-6">Enhanced Customer Experience</h2>
              <p>
                Technology enables businesses to provide personalized, responsive customer experiences at scale. From
                AI-powered chatbots to predictive analytics, companies can now anticipate customer needs and deliver
                solutions proactively.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-6">Scalability and Flexibility</h2>
              <p>
                Cloud infrastructure allows businesses to scale operations up or down based on demand without
                significant capital investment. This flexibility enables companies to respond quickly to market changes
                and growth opportunities.
              </p>

              <p className="text-sm text-muted-foreground/70 mt-8">Last updated: October 2025</p>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="bg-card border border-border/40 rounded-2xl p-6">
              <h3 className="font-semibold text-foreground mb-4">Key Benefits</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Reduced operational costs</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Faster decision-making</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Better customer experiences</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Improved scalability</span>
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
