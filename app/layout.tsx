import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { SiteFooter } from "@/components/site-footer"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "XPERTCS Consulting — AR/VR-grade Web Experiences",
  description:
    "XPERTCS delivers cloud, secure infrastructure, and IT consulting with immersive web experiences, ambient motion, and 3D interactions.",
  generator: "v0.app",
  metadataBase: new URL("https://example.com"),
  icons: {
    icon: "/favicon.jpg",
    apple: "/favicon.jpg",
  },
}

function ThemeInitScript() {
  // Runs before hydration to avoid flash of wrong theme.
  const code = `
    try {
      const stored = localStorage.getItem('theme')
      const mql = window.matchMedia('(prefers-color-scheme: dark)')
      const shouldDark = stored ? stored === 'dark' : mql.matches
      if (shouldDark) document.documentElement.classList.add('dark')
      document.documentElement.style.colorScheme = shouldDark ? 'dark' : 'light'
    } catch {}
  `
  return <script dangerouslySetInnerHTML={{ __html: code }} />
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <ThemeInitScript />
      </head>
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased bg-background text-foreground`}
        suppressHydrationWarning
      >
        <Suspense fallback={null}>
          <div className="flex min-h-dvh flex-col">
            <Navbar />
            <main className="flex-1 scroll-smooth">{children}</main>
            <SiteFooter />
          </div>
        </Suspense>
      </body>
    </html>
  )
}
