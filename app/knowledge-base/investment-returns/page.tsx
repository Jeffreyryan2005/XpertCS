import Link from "next/link"
import Image from "next/image"
import { AmbientBackground } from "@/components/hero_background_canvas"

export const metadata = {
  title: "Ideas for High Returns on Investment — XPERTCS",
  description: "Learn strategies for maximizing your investment returns with our expert insights.",
}

export default function InvestmentReturnsPage() {
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
            / <span className="text-foreground">Investment Returns</span>
          </p>
          <h1 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight animate-step-in">
            Ideas for High Returns on Investment
          </h1>
          <p className="mt-3 mx-auto max-w-3xl text-muted-foreground animate-step-in [animation-delay:120ms]">
            Discover proven strategies to maximize your investment returns and grow your wealth.
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
                src="/investment-returns-financial-growth-charts.jpg"
                alt="Investment returns and financial growth"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="prose prose-invert max-w-none space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Using the profit accumulator is one such way, and you should understand why it increases your chances of
                achieving your financial goals. The profit accumulator is a strategy that allows investors to reinvest
                their earnings, creating a compounding effect that accelerates wealth growth over time.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-6">Understanding Compound Growth</h2>
              <p>
                The power of compound growth cannot be overstated. When you reinvest your profits, you're not just
                earning returns on your initial investment—you're earning returns on your returns. This exponential
                growth pattern is one of the most effective ways to build substantial wealth over the long term.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-6">Diversification Strategy</h2>
              <p>
                A well-diversified portfolio is essential for managing risk while maximizing returns. By spreading your
                investments across different asset classes, sectors, and geographies, you reduce the impact of any
                single investment's poor performance on your overall portfolio.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-6">Long-Term Investment Approach</h2>
              <p>
                The most successful investors understand that wealth building is a marathon, not a sprint. By
                maintaining a long-term perspective and staying committed to your investment strategy, you can weather
                market volatility and benefit from the overall upward trajectory of well-chosen investments.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-6">Risk Management</h2>
              <p>
                Understanding and managing risk is crucial to achieving high returns. This involves setting appropriate
                stop-loss levels, maintaining adequate emergency funds, and ensuring your investment strategy aligns
                with your risk tolerance and financial goals.
              </p>

              <p className="text-sm text-muted-foreground/70 mt-8">Last updated: October 2025</p>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="bg-card border border-border/40 rounded-2xl p-6">
              <h3 className="font-semibold text-foreground mb-4">Key Takeaways</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Reinvest profits for compound growth</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Diversify across asset classes</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Maintain a long-term perspective</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Manage risk effectively</span>
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
