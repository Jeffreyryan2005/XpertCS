"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"

const NAV_LINKS = [
  { href: "/knowledge-base", label: "Knowledge Base" },
  { href: "/partners", label: "Partners" },
  { href: "/contact", label: "Contact Us" },
]

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 hover:bg-accent rounded-lg transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-background border-b border-border/60 backdrop-blur supports-[backdrop-filter]:bg-background/95 z-40">
          <nav className="flex flex-col p-4 gap-2">
            <Link
              href="/"
              className={cn(
                "px-3 py-2 rounded-lg text-sm transition-colors",
                pathname === "/" ? "bg-accent text-accent-foreground" : "text-muted-foreground hover:text-foreground",
              )}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>

            <div className="border-t border-border/40 my-2" />

            <div className="px-3 py-2">
              <p className="text-xs font-semibold text-muted-foreground mb-2">About Us</p>
              <div className="flex flex-col gap-1 ml-2">
                <Link
                  href="/about#who-we-are"
                  className="text-sm text-muted-foreground hover:text-foreground py-1"
                  onClick={() => setIsOpen(false)}
                >
                  Who We Are
                </Link>
                <Link
                  href="/about#what-we-do"
                  className="text-sm text-muted-foreground hover:text-foreground py-1"
                  onClick={() => setIsOpen(false)}
                >
                  What We Do
                </Link>
                <Link
                  href="/about#how-we-do-it"
                  className="text-sm text-muted-foreground hover:text-foreground py-1"
                  onClick={() => setIsOpen(false)}
                >
                  How We Do It
                </Link>
                <Link
                  href="/about#why-xpert"
                  className="text-sm text-muted-foreground hover:text-foreground py-1"
                  onClick={() => setIsOpen(false)}
                >
                  Why Xpert Consultancy
                </Link>
              </div>
            </div>

            <div className="border-t border-border/40 my-2" />

            <div className="px-3 py-2">
              <p className="text-xs font-semibold text-muted-foreground mb-2">Services</p>
              <div className="flex flex-col gap-1 ml-2">
                <Link
                  href="/services/cloud-technologies"
                  className="text-sm text-muted-foreground hover:text-foreground py-1"
                  onClick={() => setIsOpen(false)}
                >
                  Cloud Technologies
                </Link>
                <Link
                  href="/services/secure-infrastructure"
                  className="text-sm text-muted-foreground hover:text-foreground py-1"
                  onClick={() => setIsOpen(false)}
                >
                  Secure Infrastructure
                </Link>
                <Link
                  href="/services/it-consultancy"
                  className="text-sm text-muted-foreground hover:text-foreground py-1"
                  onClick={() => setIsOpen(false)}
                >
                  IT Consultancy
                </Link>
                <Link
                  href="/services/managed-services"
                  className="text-sm text-muted-foreground hover:text-foreground py-1"
                  onClick={() => setIsOpen(false)}
                >
                  Managed Services
                </Link>
              </div>
            </div>

            <div className="border-t border-border/40 my-2" />

            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  "px-3 py-2 rounded-lg text-sm transition-colors",
                  pathname === l.href
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground hover:text-foreground",
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
              className="px-3 py-2 rounded-lg bg-primary text-primary-foreground text-sm text-center hover:opacity-90 transition-opacity"
              onClick={() => setIsOpen(false)}
            >
              Help Desk
            </a>
          </nav>
        </div>
      )}
    </div>
  )
}
