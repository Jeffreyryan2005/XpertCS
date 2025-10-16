"use client"

import type React from "react"
import { AmbientBackground } from "./hero_background_canvas"
import { useRef } from "react"
import { cn } from "@/lib/utils"
import { CloudPulseIcon, ShieldPulseIcon, CompassPulseIcon, GearsPulseIcon } from "./animated-icons"

type CardProps = {
  title: string
  desc: string
  bullets: string[]
  icon: React.ReactNode
}

function TiltCard({ title, desc, bullets, icon }: CardProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const handle = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const rx = (y / rect.height - 0.5) * -12
    const ry = (x / rect.width - 0.5) * 12
    el.style.setProperty("--rx", `${rx}deg`)
    el.style.setProperty("--ry", `${ry}deg`)
    el.style.setProperty("--px", `${x}px`)
    el.style.setProperty("--py", `${y}px`)
  }
  const leave = () => {
    const el = ref.current
    if (!el) return
    el.style.setProperty("--rx", `0deg`)
    el.style.setProperty("--ry", `0deg`)
  }

  return (
    <div
      ref={ref}
      onMouseMove={handle}
      onMouseLeave={leave}
      className={cn(
        "group relative rounded-3xl border border-border/60 bg-card/60 p-6",
        "transition-all duration-300 will-change-transform cursor-pointer",
        "hover:-translate-y-1 hover:shadow-[0_18px_60px_-24px_rgba(0,0,0,0.6)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
        "before:absolute before:inset-0 before:rounded-3xl before:opacity-0 before:transition-opacity before:duration-300",
        "before:bg-[conic-gradient(from_180deg_at_50%_50%,#22d3ee,rgba(99,102,241,0.7),#34d399,#f59e0b,#22d3ee)]",
        "group-hover:before:opacity-30",
      )}
      style={
        { transformStyle: "preserve-3d", transform: "rotateX(var(--rx)) rotateY(var(--ry))" } as React.CSSProperties
      }
    >
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-80 transition-opacity"
        style={{
          background:
            "radial-gradient(240px 120px at var(--px, 50%) var(--py, 50%), rgba(59,130,246,0.18), transparent), radial-gradient(240px 120px at calc(var(--px, 50%) - 80px) calc(var(--py, 50%) + 40px), rgba(16,185,129,0.14), transparent)",
        }}
      />
      <div className="flex items-start gap-4">
        <div className="relative grid size-16 md:size-20 place-items-center select-none transition-transform duration-500 group-hover:scale-110">
          {/* halo ping */}
          <span className="pointer-events-none absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(closest-side,theme(colors.primary.DEFAULT/_25),transparent_70%)]" />
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="mt-1 text-muted-foreground">{desc}</p>
          <ul className="mt-3 grid gap-1 text-sm text-muted-foreground list-disc pl-4">
            {bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

const cards: CardProps[] = [
  {
    title: "Cloud Technologies",
    desc: "As end‑users consider the following “option” for running production workloads, the cloud is becoming the default standard.",
    bullets: ["Read more"],
    icon: <CloudPulseIcon className="size-10 md:size-12" />,
  },
  {
    title: "Secure Infrastructure",
    desc: "Our secure infrastructure service focuses on providing a secure infrastructure for customers using the public cloud.",
    bullets: ["Read more"],
    icon: <ShieldPulseIcon className="size-10 md:size-12" />,
  },
  {
    title: "IT Consultancy",
    desc: "Xpert Consultancy is a highly experienced, lively and innovative company that is very ambitious and passionate about technology.",
    bullets: ["Read more"],
    icon: <CompassPulseIcon className="size-10 md:size-12" />,
  },
  {
    title: "Managed Services",
    desc: "Our support consultants have extensive experience supporting an array of functions: server operating systems and enterprise applications.",
    bullets: ["Read more"],
    icon: <GearsPulseIcon className="size-10 md:size-12" />,
  },
]

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden py-20">
      <AmbientBackground lines={36} opacity={0.1} speed={0.006} />
      <div className="mx-auto max-w-screen-2xl px-6">
        <h2 className="text-pretty text-3xl md:text-4xl font-semibold">What we do</h2>
        <p className="mt-2 text-muted-foreground max-w-prose">
          We combine consulting expertise with immersive UI to improve clarity and conversion.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {cards.map((c) => (
            <TiltCard key={c.title} {...c} />
          ))}
        </div>
      </div>
    </section>
  )
}
