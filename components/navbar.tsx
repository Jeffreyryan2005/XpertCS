"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "./theme-toggle"
import { AnimatedLogo } from "./animated-logo"
import { MobileNav } from "./mobile-nav"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu"

const NAV_LINKS = [
  { href: "/knowledge-base", label: "Knowledge Base" },
  { href: "/partners", label: "Partners" },
  { href: "/contact", label: "Contact Us" }, // Updated Contact link to point to /contact page
]

export function Navbar() {
  const pathname = usePathname()
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2" aria-label="XPERTCS Home">
          <AnimatedLogo />
          <span className="text-base sm:text-lg font-semibold tracking-tight">XPERTCS</span>
        </Link>

        <nav className="hidden md:flex items-center gap-4">
          <Link
            href="/"
            className={cn(
              "text-sm/6 px-2 text-muted-foreground hover:text-foreground transition-colors",
              pathname === "/" && "text-foreground",
            )}
          >
            Home
          </Link>

          <NavigationMenu className="mx-0" viewport={false}>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium">About Us</NavigationMenuTrigger>
                <NavigationMenuContent className="min-w-[260px]">
                  <div className="grid gap-1 p-1">
                    <Link href="/about#who-we-are" className="block rounded-md px-2 py-2 hover:bg-accent">
                      Who We Are
                    </Link>
                    <Link href="/about#what-we-do" className="block rounded-md px-2 py-2 hover:bg-accent">
                      What We Do
                    </Link>
                    <Link href="/about#how-we-do-it" className="block rounded-md px-2 py-2 hover:bg-accent">
                      How We Do It
                    </Link>
                    <Link href="/about#why-xpert" className="block rounded-md px-2 py-2 hover:bg-accent">
                      Why Xpert Consultancy
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <NavigationMenu className="mx-0" viewport={false}>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium">Services</NavigationMenuTrigger>
                <NavigationMenuContent className="min-w-[260px]">
                  <div className="grid gap-1 p-1">
                    <Link href="/services/cloud-technologies" className="block rounded-md px-2 py-2 hover:bg-accent">
                      Cloud Technologies
                    </Link>
                    <Link href="/services/secure-infrastructure" className="block rounded-md px-2 py-2 hover:bg-accent">
                      Secure Infrastructure
                    </Link>
                    <Link href="/services/it-consultancy" className="block rounded-md px-2 py-2 hover:bg-accent">
                      IT Consultancy
                    </Link>
                    <Link href="/services/managed-services" className="block rounded-md px-2 py-2 hover:bg-accent">
                      Managed Services
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={cn(
                "text-sm/6 px-2 text-muted-foreground hover:text-foreground transition-colors",
                pathname === l.href && "text-foreground",
              )}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://helpdesk.xpertcs.com/login?redirectTo=%2F"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl px-3 py-2 bg-primary text-primary-foreground ring-1 ring-border hover:ring-2 transition-shadow"
          >
            Help Desk
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <MobileNav />
          <div className="hidden md:block">
            <ThemeToggle />
          </div>
          <div className="md:hidden">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}
