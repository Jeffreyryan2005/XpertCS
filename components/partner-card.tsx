"use client"

import Image from "next/image"
import { useState } from "react"

interface PartnerCardProps {
  partner: {
    name: string
    category: string
    image: string
  }
  index: number
}

export function PartnerCard({ partner, index }: PartnerCardProps) {
  const [imageError, setImageError] = useState(false)

  return (
    <div
      className="group relative rounded-lg border border-border/60 bg-card p-6 hover:border-primary/50 hover:shadow-lg transition-all duration-300 animate-step-in flex flex-col items-center justify-center min-h-[220px]"
      style={{ animationDelay: `${index * 30}ms` }}
    >
      <div className="relative w-full h-32 flex items-center justify-center mb-3">
        {!imageError ? (
          <Image
            src={partner.image || "/placeholder.svg"}
            alt={partner.name}
            width={150}
            height={100}
            className="object-contain max-w-full max-h-full"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="text-center text-sm font-medium text-muted-foreground">{partner.name}</div>
        )}
      </div>
      <p className="text-center text-xs md:text-sm font-medium text-foreground/80 line-clamp-2">{partner.name}</p>
      <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
  )
}
