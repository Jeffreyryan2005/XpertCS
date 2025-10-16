"use client"

import { useEffect, useState } from "react"

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    setMounted(true)
    try {
      const stored = localStorage.getItem("theme")
      const mql = window.matchMedia("(prefers-color-scheme: dark)")
      const dark = stored ? stored === "dark" : mql.matches
      setIsDark(dark)
    } catch {}
  }, [])

  useEffect(() => {
    if (!mounted) return
    const root = document.documentElement
    if (isDark) root.classList.add("dark")
    else root.classList.remove("dark")
    try {
      localStorage.setItem("theme", isDark ? "dark" : "light")
      root.style.colorScheme = isDark ? "dark" : "light"
    } catch {}
  }, [isDark, mounted])

  if (!mounted) {
    return (
      <button
        aria-label="Toggle dark or light mode"
        className="h-9 px-3 inline-flex items-center gap-2 rounded-xl border border-border/60 bg-secondary text-foreground"
      >
        <span className="block size-4 rounded-full bg-foreground" />
        <span className="text-xs font-medium">Theme</span>
      </button>
    )
  }

  return (
    <button
      onClick={() => setIsDark((v) => !v)}
      aria-pressed={isDark}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="h-9 px-3 inline-flex items-center gap-2 rounded-xl border border-border/60 bg-secondary hover:bg-accent transition-colors"
      title={isDark ? "Light mode" : "Dark mode"}
    >
      {/* sun/moon inline SVGs with clear label */}
      {isDark ? (
        <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" className="fill-foreground">
          <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 1 0 9.79 9.79Z" />
        </svg>
      ) : (
        <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" className="fill-foreground">
          <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12ZM12 2v2M12 20v2M4 12H2m20 0h-2M5 5l-1.4-1.4M20.4 20.4 19 19M19 5l1.4-1.4M5 19l-1.4 1.4" />
        </svg>
      )}
      <span className="text-xs font-medium">{isDark ? "Dark" : "Light"}</span>
    </button>
  )
}
