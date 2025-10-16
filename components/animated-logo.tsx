"use client"

import { motion } from "framer-motion"

export function AnimatedLogo() {
  return (
    <div className="relative">
      <svg width="28" height="28" viewBox="0 0 28 28" className="relative z-10">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 18 -7"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
          <linearGradient id="brandGrad" x1="0" x2="1">
            <stop offset="0%" stopColor="var(--brand-blue)" />
            <stop offset="100%" stopColor="var(--brand-lime)" />
          </linearGradient>
        </defs>
        <g filter="url(#goo)">
          <motion.circle
            cx="10"
            cy="14"
            r="6"
            fill="url(#brandGrad)"
            animate={{ cx: [9, 11, 9], cy: [14, 12.5, 14] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3, ease: "easeInOut" }}
          />
          <motion.circle
            cx="17"
            cy="12"
            r="5"
            fill="url(#brandGrad)"
            animate={{ cx: [18.5, 15.5, 18.5], cy: [11, 13, 11] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3.2, ease: "easeInOut" }}
          />
        </g>
      </svg>
      <span
        className="absolute -inset-1 rounded-xl bg-[radial-gradient(closest-side,rgba(59,130,246,.25),transparent)] -z-10"
        aria-hidden="true"
      />
    </div>
  )
}
