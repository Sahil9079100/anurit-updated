"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

/* ──────────────────────────────────────────────
   Icons
   ────────────────────────────────────────────── */

function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      className={`h-3.5 w-3.5 ${className}`}
      aria-hidden="true"
    >
      <path
        d="M3 8h10m0 0L9 4m4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/* ──────────────────────────────────────────────
   CTA button
   ────────────────────────────────────────────── */

function CtaPill({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/contact"
      className={`group inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-5 py-2 text-[13.5px] text-[#0d0e15] shadow-[0_8px_24px_rgba(255,255,255,0.16)] transition-all duration-300 hover:bg-gray-200 ${className}`}
    >
      Talk to Our Team
      <ArrowIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
    </Link>
  )
}

/* ──────────────────────────────────────────────
   Hamburger icon
   ────────────────────────────────────────────── */

function Hamburger({ open, className = "" }: { open: boolean; className?: string }) {
  return (
    <span className={`relative block h-3.5 w-5 ${className}`}>
      <span
        className={`absolute left-0 top-0 h-[1.5px] w-full bg-white transition-transform duration-300 ${
          open ? "translate-y-[6px] rotate-45" : ""
        }`}
      />
      <span
        className={`absolute left-0 top-1/2 h-[1.5px] w-full -translate-y-1/2 bg-white transition-opacity duration-200 ${
          open ? "opacity-0" : ""
        }`}
      />
      <span
        className={`absolute bottom-0 left-0 h-[1.5px] w-full bg-white transition-transform duration-300 ${
          open ? "-translate-y-[6px] -rotate-45" : ""
        }`}
      />
    </span>
  )
}

/* ──────────────────────────────────────────────
   Navbar
   ────────────────────────────────────────────── */

interface NavbarProps {
  /** Use the dark text style from the start (for pages without a hero image). */
  forceDark?: boolean
}

export default function Navbar({ forceDark = false }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [pastHero, setPastHero] = useState(false)
  const pathname = usePathname()
  const scrolled = pastHero || forceDark
  const onServicesPage = pathname.startsWith("/service")
  const onProductsPage = pathname.startsWith("/product")

  /* ── Close on Escape ── */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  /* ── Lock scroll on mobile menu ── */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [mobileOpen])

  /* ── Scroll-aware text color ──
       The hero section occupies ≥100 vh of the viewport.
       Once the user scrolls past ~75 % of the viewport height the
       hero has receded enough that the next (light‑bg) sections
       are under the navbar — switch text from white to black.  */
  useEffect(() => {
    const onScroll = () => {
      setPastHero(window.scrollY > window.innerHeight * 0.75)
    }
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const linkClass = (active: boolean) =>
    `inline-flex items-center whitespace-nowrap rounded-lg px-3.5 py-2 text-[14px] tracking-[0.02em] transition-colors duration-300 ${
      active
        ? scrolled
          ? "bg-black/15 text-black"
          : "bg-white/15 text-white"
        : scrolled
          ? "text-black/75 hover:bg-black/[0.08] hover:text-black"
          : "text-white/75 hover:bg-white/[0.08] hover:text-white"
    }`

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-[100] flex justify-center px-4 pt-5 lg:pt-6">
      <div className="pointer-events-auto relative">
        <div
          className="
            rounded-xl border border-white/20 bg-white/10
            backdrop-blur-md shadow-[0_4px_14px_rgba(0,0,0,0.12)]
            overflow-hidden w-[min(calc(100vw-2rem),40rem)] min-w-0
          "
        >
          {/* ─── Navbar Row ─── */}
          <div className="flex items-center justify-between w-full px-5 py-2">
            {/* Left group: brand + nav links */}
            <div className="flex items-center gap-1">
              {/* Logo — text switches white/black with scroll */}
              <Link href="/" className="shrink-0">
                <span
                  className={`font-['Pixelify_Sans:Regular'] whitespace-nowrap text-[19px] leading-none transition-colors duration-300 ${
                    scrolled ? "text-black" : "text-white"
                  }`}
                >
                  Anurit Innovation
                </span>
              </Link>

              {/* Desktop links */}
              <ul className="ml-2 hidden list-none items-center gap-1 lg:flex">
                <li className="list-none">
                  <Link
                    href="/service"
                    aria-current={onServicesPage ? "page" : undefined}
                    className={linkClass(onServicesPage)}
                  >
                    Services
                  </Link>
                </li>
                <li className="list-none">
                  <Link
                    href="/products"
                    aria-current={onProductsPage ? "page" : undefined}
                    className={linkClass(onProductsPage)}
                  >
                    Products
                  </Link>
                </li>
                <li className="list-none">
                  <Link href="/about" className={linkClass(false)}>
                    About Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Right side: CTA (desktop) + hamburger (mobile) */}
            <div className="flex items-center gap-2">
              <CtaPill className="hidden lg:inline-flex" />

              {/* Hamburger — mobile only */}
              <button
                type="button"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
                onClick={() => setMobileOpen((v) => !v)}
                className={`grid h-10 w-10 place-items-center rounded-lg transition-colors duration-300 hover:bg-white/10 lg:hidden ${
                  scrolled ? "text-black" : "text-white"
                }`}
              >
                <Hamburger open={mobileOpen} />
              </button>
            </div>
          </div>
        </div>

        {/* ─── Mobile Drawer ─── */}
        <div
          className={`pointer-events-auto fixed inset-0 z-[90] transition-opacity duration-300 lg:hidden ${
            mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        >
          {/* Scrim */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />

          {/* Drawer panel */}
          <aside
            className={`absolute right-0 top-0 flex h-full w-[min(88vw,340px)] flex-col overflow-y-auto bg-white/10 backdrop-blur-2xl border-l border-white/20 shadow-[0_0_60px_rgba(0,0,0,0.3)] transition-transform duration-300 ease-out ${
              mobileOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/15 px-6 py-4">
              <span className={`font-['Pixelify_Sans:Regular'] text-[19px] leading-none transition-colors duration-300 ${scrolled ? "text-black" : "text-white"}`}>
                Anurit Innovation
              </span>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setMobileOpen(false)}
                className="grid h-10 w-10 place-items-center rounded-lg border border-white/15 bg-white/5 text-white transition hover:bg-white/10"
              >
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <path
                    d="m4 4 8 8M12 4l-8 8"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            {/* Links */}
            <div className="flex-1 px-6 py-4">
              <ul className="space-y-1">
                <li>
                  <Link
                    href="/service"
                    onClick={() => setMobileOpen(false)}
                    className="flex w-full items-center gap-2 rounded-lg px-3 py-2.5 text-[15px] text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products"
                    onClick={() => setMobileOpen(false)}
                    className="flex w-full items-center gap-2 rounded-lg px-3 py-2.5 text-[15px] text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    onClick={() => setMobileOpen(false)}
                    className="flex w-full items-center gap-2 rounded-lg px-3 py-2.5 text-[15px] text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                  >
                    About Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* CTA */}
            <div className="px-6 pb-8 pt-4">
              <CtaPill className="w-full justify-center" />
            </div>
          </aside>
        </div>
      </div>
    </header>
  )
}
