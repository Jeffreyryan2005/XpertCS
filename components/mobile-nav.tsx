"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Menu, X, ChevronDown } from "lucide-react"

const NAV_LINKS = [
  { href: "/knowledge-base", label: "Knowledge Base" },
  { href: "/partners", label: "Partners" },
  { href: "/contact", label: "Contact Us" },
]

const ABOUT_LINKS = [
  { href: "/about#who-we-are", label: "Who We Are" },
  { href: "/about#what-we-do", label: "What We Do" },
  { href: "/about#how-we-do-it", label: "How We Do It" },
  { href: "/about#why-xpert", label: "Why Xpert Consultancy" },
]

const SERVICE_LINKS = [
  { href: "/services/cloud-technologies", label: "Cloud Technologies" },
  { href: "/services/secure-infrastructure", label: "Secure Infrastructure" },
  { href: "/services/it-consultancy", label: "IT Consultancy" },
  { href: "/services/managed-services", label: "Managed Services" },
]

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({})
  const pathname = usePathname()

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 hover:bg-accent rounded-lg transition-colors text-foreground"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/20 md:hidden"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          <div className="fixed top-[60px] left-0 right-0 z-50 max-h-[calc(100vh-60px)] bg-background border-b border-border/60 backdrop-blur supports-[backdrop-filter]:bg-background/95 overflow-y-auto md:hidden">
            <nav className="flex flex-col p-4">
              <Link
                href="/"
                className={cn(
                  "px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                  pathname === "/" ? "bg-primary/10 text-primary" : "text-foreground hover:bg-accent/50",
                )}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>

              <div className="border-t border-border/40 my-2" />

              <button
                onClick={() => toggleSection("about")}
                className="flex items-center justify-between px-4 py-3 text-left hover:bg-accent/30 rounded-lg transition-colors"
              >
                <p className="text-xs font-semibold text-primary uppercase tracking-wide">About Us</p>
                <ChevronDown
                  className={cn(
                    "w-4 h-4 text-primary transition-transform duration-200",
                    expandedSections["about"] && "rotate-180",
                  )}
                />
              </button>
              {expandedSections["about"] && (
                <div className="flex flex-col gap-0 pl-4 py-1">
                  {ABOUT_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground py-2.5 px-2 rounded transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}

              <div className="border-t border-border/40 my-2" />

              <button
                onClick={() => toggleSection("services")}
                className="flex items-center justify-between px-4 py-3 text-left hover:bg-accent/30 rounded-lg transition-colors"
              >
                <p className="text-xs font-semibold text-primary uppercase tracking-wide">Services</p>
                <ChevronDown
                  className={cn(
                    "w-4 h-4 text-primary transition-transform duration-200",
                    expandedSections["services"] && "rotate-180",
                  )}
                />
              </button>
              {expandedSections["services"] && (
                <div className="flex flex-col gap-0 pl-4 py-1">
                  {SERVICE_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground py-2.5 px-2 rounded transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}

              <div className="border-t border-border/40 my-2" />

              {NAV_LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className={cn(
                    "px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                    pathname === l.href ? "bg-primary/10 text-primary" : "text-foreground hover:bg-accent/50",
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {l.label}
                </Link>
              ))}

              <div className="border-t border-border/40 my-2" />

              <a
                href="https://helpdesk.xpertcs.com/login?redirectTo=%2F"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 rounded-lg bg-primary text-primary-foreground text-sm font-medium text-center hover:bg-primary/90 transition-colors mt-2"
                onClick={() => setIsOpen(false)}
              >
                Help Desk
              </a>
            </nav>
          </div>
        </>
      )}
    </>
  )
}
