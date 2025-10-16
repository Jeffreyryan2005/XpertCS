"use client"

import type React from "react"
import * as THREE from "three"
import { Canvas, useFrame } from "@react-three/fiber"
import { useTexture } from "@react-three/drei"
import { useEffect, useMemo, useRef, useState } from "react"

type Slide = {
  src: string
  title: string
  subtitle: string
}

const slides: Slide[] = [
  {
    src: "/images/cloud-tech.png",
    title: "Cloud Technologies",
    subtitle: "Don't get left behind. Start your cloud journey with XPERTCS.",
  },
  {
    src: "/images/secure-infra.png",
    title: "Secure Infrastructure",
    subtitle: "Operate anywhere with trusted security and remote access.",
  },
  {
    src: "/images/it-consultancy.png",
    title: "IT Consultancy",
    subtitle: "20+ years helping customers achieve technology goals.",
  },
  {
    src: "/images/managed-service.png",
    title: "Managed Services",
    subtitle: "We extend your ICT team with proactive support.",
  },
]

function Scene({
  active,
  mouse,
}: {
  active: number
  mouse: React.MutableRefObject<{ x: number; y: number }>
}) {
  const group = useRef<THREE.Group>(null)
  const planeRefs = useRef<Array<THREE.Mesh<THREE.PlaneGeometry, THREE.MeshBasicMaterial>>>([])
  const textures = useTexture(slides.map((s) => s.src)) as THREE.Texture[]
  const clock = useMemo(() => new THREE.Clock(), [])

  // Ensure correct color space for UI images
  textures.forEach((t) => (t.colorSpace = THREE.SRGBColorSpace))

  useFrame(() => {
    const g = group.current
    if (!g) return

    const t = clock.getElapsedTime()

    const autoYaw = Math.sin(t * 0.15) * 0.06

    // Subtle parallax tilt toward cursor + auto yaw
    g.rotation.y = THREE.MathUtils.lerp(g.rotation.y, mouse.current.x * 0.28 + autoYaw, 0.08)
    g.rotation.x = THREE.MathUtils.lerp(g.rotation.x, -mouse.current.y * 0.18, 0.08)

    planeRefs.current.forEach((mesh, i) => {
      if (!mesh) return
      const mat = mesh.material
      const rel = (i - active + slides.length) % slides.length

      let targetX = 0
      let targetZ = 0
      if (rel === 0) {
        targetX = 0
        targetZ = 0
      } else if (rel === 1) {
        targetX = 1.3
        targetZ = -0.8
      } else if (rel === slides.length - 1) {
        targetX = -1.3
        targetZ = -0.8
      } else {
        targetX = 0
        targetZ = -1.8
      }

      mesh.position.x = THREE.MathUtils.lerp(mesh.position.x, targetX, 0.08)
      mesh.position.z = THREE.MathUtils.lerp(mesh.position.z, targetZ, 0.08)

      const targetScale = rel === 0 ? 1.0 : rel === 1 || rel === slides.length - 1 ? 0.92 : 0.84
      mesh.scale.x = THREE.MathUtils.lerp(mesh.scale.x, targetScale, 0.08)
      mesh.scale.y = THREE.MathUtils.lerp(mesh.scale.y, targetScale, 0.08)

      const targetOpacity = rel === 0 ? 1 : rel === 1 || rel === slides.length - 1 ? 0.7 : 0.22
      mat.opacity = THREE.MathUtils.lerp(mat.opacity, targetOpacity, 0.12)

      if (rel === 0) {
        mesh.position.y = Math.sin(t * 0.9) * 0.08
        mesh.rotation.z = Math.sin(t * 0.6) * 0.015
      } else {
        mesh.position.y = THREE.MathUtils.lerp(mesh.position.y, 0, 0.08)
        mesh.rotation.z = THREE.MathUtils.lerp(mesh.rotation.z, 0, 0.08)
      }
    })
  })

  return (
    <>
      <ambientLight intensity={1} />
      <group ref={group}>
        {textures.map((tex, i) => {
          const baseH = 2.25
          const aspect =
            (tex.image as HTMLImageElement | undefined)?.width && (tex.image as HTMLImageElement | undefined)?.height
              ? ((tex.image as HTMLImageElement).width as number) / ((tex.image as HTMLImageElement).height as number)
              : 16 / 9
          const w = baseH * aspect
          return (
            <mesh
              key={i}
              ref={(el) => {
                if (el) planeRefs.current[i] = el as any
              }}
              position={[0, 0, -i * 0.5]}
              scale={[1, 1, 1]}
            >
              <planeGeometry args={[w, baseH]} />
              <meshBasicMaterial map={tex} transparent opacity={i === 0 ? 1 : 0.22} toneMapped={false} />
            </mesh>
          )
        })}
      </group>
    </>
  )
}

function SlidesWrapper() {
  const [active, setActive] = useState(0)
  const [webglSupported, setWebglSupported] = useState(true)
  const mouse = useRef({ x: 0, y: 0 })

  // Check WebGL support on mount
  useEffect(() => {
    try {
      const canvas = document.createElement("canvas")
      const gl = canvas.getContext("webgl") || canvas.getContext("webgl2")
      if (!gl) {
        setWebglSupported(false)
      }
    } catch (e) {
      setWebglSupported(false)
    }
  }, [])

  // Autoplay
  useEffect(() => {
    const id = setInterval(() => {
      setActive((a) => (a + 1) % slides.length)
    }, 3800)
    return () => clearInterval(id)
  }, [active])

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect()
    mouse.current.x = ((e.clientX - rect.left) / rect.width) * 2 - 1
    mouse.current.y = ((e.clientY - rect.top) / rect.height) * 2 - 1
  }

  return (
    <div className="absolute inset-0 rounded-[inherit] overflow-hidden" onPointerMove={onPointerMove}>
      <img
        src={slides[active].src || "/placeholder.svg"}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 size-full object-cover rounded-[inherit] pointer-events-none"
      />
      {webglSupported && (
        <Canvas
          className="w-full h-full"
          dpr={[1, 2]}
          camera={{ position: [0, 0, 9.6], fov: 16 }}
          onCreated={(state) => {
            // Ensure proper context settings
            state.gl.setPixelRatio(Math.min(window.devicePixelRatio, 2))
          }}
        >
          <Scene active={active} mouse={mouse} />
        </Canvas>
      )}
      {/* caption */}
      <div className="pointer-events-none absolute inset-x-0 bottom-3 flex justify-center px-3">
        <div className="relative rounded-xl border border-border/40 bg-card/85 text-foreground backdrop-blur-md px-3 md:px-4 py-1.5 shadow-lg">
          <div key={active} className="transition-opacity duration-300">
            <SlideCaption index={active} />
          </div>
        </div>
      </div>
      {/* controls */}
      <div className="absolute inset-x-0 top-2 flex justify-between px-2">
        <button
          aria-label="Previous slide"
          className="rounded-full bg-card/85 text-foreground backdrop-blur-md border border-border/40 px-2.5 py-1.5 text-xs hover:bg-card transition-colors"
          onClick={() => {
            setActive((a) => (a - 1 + slides.length) % slides.length)
          }}
        >
          ‹
        </button>
        <button
          aria-label="Next slide"
          className="rounded-full bg-card/85 text-foreground backdrop-blur-md border border-border/40 px-2.5 py-1.5 text-xs hover:bg-card transition-colors"
          onClick={() => {
            setActive((a) => (a + 1) % slides.length)
          }}
        >
          ›
        </button>
      </div>
    </div>
  )
}

function SlideCaption({ index }: { index: number }) {
  const s = slides[index]
  return (
    <div className="text-center">
      <div className="text-base md:text-lg font-medium">{s.title}</div>
      <div className="text-xs md:text-sm text-muted-foreground mt-1">{s.subtitle}</div>
    </div>
  )
}

export function HeroSlides3D() {
  return <SlidesWrapper />
}
