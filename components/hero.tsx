"use client"
import { MeshDistortMaterial } from "@react-three/drei"
import { useState } from "react"
import { AmbientBackground } from "./hero_background_canvas"
import { HeroSlides3D } from "./hero_slideshow_3d"

function LiquidSphere() {
  const [hovered, setHovered] = useState(false)
  return (
    <mesh
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      position={[0, 0, 0]}
      scale={hovered ? 1.05 : 1}
    >
      <icosahedronGeometry args={[1.25, 20]} />
      <MeshDistortMaterial
        speed={2.5}
        distort={hovered ? 0.55 : 0.38}
        color="var(--brand-blue)"
        emissive="var(--brand-blue)"
        emissiveIntensity={0.35}
        roughness={0.2}
        metalness={0.6}
      />
    </mesh>
  )
}

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden text-foreground">
      {/* Ambient live background */}
      <AmbientBackground />

      <div className="relative mx-auto max-w-screen-2xl px-6 pt-14 pb-20 grid md:grid-cols-5 items-center gap-8">
        <div className="md:col-span-2">
          <h1 className="text-balance text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight max-w-xl">
            <span className="text-gradient-primary">Cloud Technologies</span> · Secure Infrastructure · IT Consultancy ·
            Managed Services
          </h1>
          <p className="mt-4 text-foreground/80 text-sm md:text-base leading-relaxed max-w-2xl">
            We are a fast‑growing business who understand the pressures you operate under and your preference for
            no‑nonsense advice and practical solutions.
          </p>
          <div className="mt-7 flex gap-3">
            <a
              href="#contact"
              className="rounded-2xl px-5 py-3 bg-primary text-primary-foreground shadow-lg hover:ring-2 hover:ring-primary transition-shadow"
            >
              Contact us
            </a>
            <a
              href="#services"
              className="rounded-2xl px-5 py-3 border border-border bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
            >
              Read more
            </a>
          </div>
          <ul className="mt-5 grid grid-cols-2 gap-2 text-xs md:text-sm text-foreground/70 font-medium">
            <li>Cloud Technologies</li>
            <li>Secure Infrastructure</li>
            <li>IT Consultancy</li>
            <li>Managed Services</li>
          </ul>
        </div>

        <div className="md:col-span-3 relative h-[260px] md:h-[340px] lg:h-[400px] rounded-3xl overflow-hidden fancy-frame soft-glow">
          <HeroSlides3D />
        </div>
      </div>
    </section>
  )
}
