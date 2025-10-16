"use client"

import Link from "next/link"
import { AmbientBackground } from "./hero_background_canvas"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const KNOWLEDGE_ITEMS = [
  {
    id: 1,
    title: "Ideas for High Returns on Investment",
    description:
      "Using the profit accumulator is one such way, and you should understand why it increases your chances of generating sustainable returns. Learn proven strategies for maximizing your investment portfolio.",
    image: "/investment-returns-financial-growth-charts.jpg",
    readMore: "#",
  },
  {
    id: 2,
    title: "How Technology Made Businesses More Efficient",
    description:
      "They play a role in making operations more seamless, bridging the gap between authorities, consumers and businesses. Discover how digital transformation revolutionizes modern enterprises.",
    image: "/business-technology-digital-transformation-automat.jpg",
    readMore: "#",
  },
  {
    id: 3,
    title: "Data Secure on Transitioning to a New Office",
    description:
      "It is far wiser to do your own installations and ensure that all data flowing through the organization remains protected. Explore best practices for secure data migration and infrastructure setup.",
    image: "/data-security-office-migration-cybersecurity.jpg",
    readMore: "#",
  },
]

export function Knowledge() {
  return (
    <section id="knowledge" className="relative overflow-hidden py-20">
      <AmbientBackground lines={22} opacity={0.08} speed={0.004} />
      <div className="mx-auto max-w-screen-2xl px-6">
        <h2 className="text-3xl md:text-4xl font-semibold">Knowledge Base</h2>
        <p className="mt-2 text-muted-foreground">
          Browse articles and implementation notes to enhance your business strategy.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {KNOWLEDGE_ITEMS.map((item) => (
            <Card
              key={item.id}
              className="overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-48 w-full overflow-hidden bg-muted">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content Container */}
              <div className="flex flex-col flex-1 p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 flex-1 line-clamp-3">{item.description}</p>

                {/* Read More Button */}
                <Link href={item.readMore}>
                  <Button variant="ghost" className="text-primary hover:text-primary/80 p-0 h-auto font-medium">
                    Read more →
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
