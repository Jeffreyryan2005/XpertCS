import Link from "next/link"
import Image from "next/image"
import { AmbientBackground } from "@/components/hero_background_canvas"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Knowledge Base — XPERTCS",
  description: "Explore our collection of articles and insights on technology, business, and IT solutions.",
}

const articles = [
  {
    id: "investment-returns",
    title: "Ideas for High Returns on Investment",
    excerpt:
      "Using the profit accumulator is one such way, and you should understand why it increases your chances of...",
    image: "/investment-returns-financial-growth-charts.jpg",
    slug: "investment-returns",
  },
  {
    id: "technology-efficiency",
    title: "How Technology Made Businesses More Efficient",
    excerpt:
      "They play a role in making operations more seamless, bridging the gap between authorities, consumers and businesses...",
    image: "/business-technology-digital-transformation-automat.jpg",
    slug: "technology-efficiency",
  },
  {
    id: "data-security",
    title: "Data Secure on Transitioning to a New Office",
    excerpt:
      "It is far wiser to do your own installations and ensure that all data flowing through the organization...",
    image: "/data-security-office-migration-cybersecurity.jpg",
    slug: "data-security",
  },
]

export default function KnowledgeBasePage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border/60">
        <AmbientBackground color="59,130,246" lines={72} opacity={0.2} speed={0.01} />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(1200px_500px_at_20%_-10%,hsl(var(--primary)/0.15),transparent_70%)]" />
        <div className="mx-auto max-w-screen-2xl px-6 py-14 md:py-20 text-center">
          <p className="text-sm text-muted-foreground animate-step-in">
            <Link href="/" className="hover:underline">
              Home
            </Link>{" "}
            / <span className="text-foreground">Knowledge Base</span>
          </p>
          <h1 className="mt-3 text-balance text-3xl md:text-5xl font-semibold tracking-tight animate-step-in">
            Knowledge Base
          </h1>
          <p className="mt-3 mx-auto max-w-3xl text-muted-foreground animate-step-in [animation-delay:120ms]">
            Explore our collection of articles and insights on technology, business, and IT solutions.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="mx-auto max-w-screen-2xl px-6 py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <article
              key={article.id}
              className="group rounded-2xl overflow-hidden bg-card border border-border/40 hover:border-border/80 transition-all duration-300 hover:shadow-lg animate-step-in flex flex-col"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-muted">
                <Image
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2 flex-grow">{article.excerpt}</p>
                <Link href={`/knowledge-base/${article.slug}`} className="mt-4 w-full">
                  <Button variant="outline" className="w-full bg-transparent">
                    Read More →
                  </Button>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
