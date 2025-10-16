"use client"

import { useEffect, useRef } from "react"

type AmbientBackgroundProps = {
  color?: string // CSS rgb triplet without alpha, e.g. "59,130,246"
  lines?: number // how many flowing lines to draw
  opacity?: number // center glow opacity
  speed?: number // animation speed
  className?: string // extra classes for the canvas
}

export function AmbientBackground({
  color = "59,130,246",
  lines = 60,
  opacity = 0.18,
  speed = 0.008,
  className = "",
}: AmbientBackgroundProps) {
  const ref = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = ref.current!
    const ctx = canvas.getContext("2d", { alpha: true })!
    let raf = 0
    let width = (canvas.width = canvas.offsetWidth)
    let height = (canvas.height = canvas.offsetHeight)
    let t = 0
    const mouse = { x: width / 2, y: height / 2 }

    const onResize = () => {
      width = canvas.width = canvas.offsetWidth
      height = canvas.height = canvas.offsetHeight
    }
    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }
    window.addEventListener("resize", onResize)
    window.addEventListener("mousemove", onMove, { passive: true })

    function draw() {
      t += speed
      ctx.clearRect(0, 0, width, height)

      // Ambient gradient
      const grad = ctx.createRadialGradient(mouse.x, mouse.y, 10, width / 2, height / 2, Math.max(width, height))
      grad.addColorStop(0, `rgba(${color},${opacity})`)
      grad.addColorStop(1, "rgba(0,0,0,0)")
      ctx.fillStyle = grad
      ctx.fillRect(0, 0, width, height)

      // Flowing lines
      for (let i = 0; i < lines; i++) {
        const y = ((i / lines) * height + Math.sin(t + i) * 12) | 0
        ctx.beginPath()
        ctx.moveTo(0, y)
        for (let x = 0; x <= width; x += 12) {
          const offset = Math.sin(x * 0.01 + t * 2 + i) * 8
          ctx.lineTo(x, y + offset)
        }
        ctx.strokeStyle = `rgba(${color},${0.025 + (i % 10 === 0 ? 0.06 : 0)})`
        ctx.lineWidth = 1
        ctx.stroke()
      }

      raf = requestAnimationFrame(draw)
    }
    draw()
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("resize", onResize)
      window.removeEventListener("mousemove", onMove)
    }
  }, [color, lines, opacity, speed])

  return (
    <canvas
      ref={ref}
      className={`pointer-events-none absolute inset-0 -z-10 h-full w-full ${className}`}
      aria-hidden="true"
    />
  )
}
