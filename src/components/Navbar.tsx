"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { imgAnuritLogoBlack, imgAnuritLogoWhite } from "../assets"

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

function CtaPill({
  className = "",
  dark = false,
}: {
  className?: string
  dark?: boolean
}) {
  return (
    <Link
      href="/contact"
      className={`group inline-flex shrink-0 items-center gap-1.5 rounded-lg px-4 py-1.5 text-[12.5px] font-medium shadow-[0_4px_14px_rgba(0,0,0,0.14)] transition-all duration-300 ${
        dark
          ? "bg-black text-white hover:bg-gray-900"
          : "bg-white text-[#0d0e15] hover:bg-gray-200"
      } ${className}`}
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
        className={`absolute left-0 top-0 h-[1.5px] w-full bg-current transition-transform duration-300 ${
          open ? "translate-y-[6px] rotate-45" : ""
        }`}
      />
      <span
        className={`absolute left-0 top-1/2 h-[1.5px] w-full -translate-y-1/2 bg-current transition-opacity duration-200 ${
          open ? "opacity-0" : ""
        }`}
      />
      <span
        className={`absolute bottom-0 left-0 h-[1.5px] w-full bg-current transition-transform duration-300 ${
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
  const onHome = pathname === "/" || pathname === "/"

  // Refs for the GIC-style mobile-menu blob reveal
  const bgRef = useRef<HTMLDivElement>(null)
  const navRef = useRef<HTMLElement>(null)
  const bottomRef = useRef<HTMLDivElement>(null)

  const menuLinks = [
    { label: "Home", href: "/", active: onHome },
    { label: "Services", href: "/service", active: onServicesPage },
    { label: "Products", href: "/products", active: onProductsPage },
    { label: "About Us", href: "/about", active: false },
  ]

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

  /* ── GIC-style blob reveal for the mobile menu ──
     Open:   white bg sweeps in from a sliver at the top-left corner with a
             huge bottom-left border-radius (curvy blob), then links reveal
             with a 0.1s stagger, then the footer fades up.
     Close:  reverse — footer slides down, links blur/clip out with a 0.06s
             stagger, bg fades, then the blob state resets for next time.  */
  useEffect(() => {
    const bg = bgRef.current
    const links: HTMLElement[] = navRef.current
      ? Array.from(navRef.current.querySelectorAll<HTMLElement>("a"))
      : []
    const bottom = bottomRef.current
    if (!bg || !bottom) return

    const timers: number[] = []
    const after = (ms: number, fn: () => void) => {
      timers.push(window.setTimeout(fn, ms))
    }
    const style = (el: HTMLElement, props: Partial<CSSStyleDeclaration>) => {
      Object.assign(el.style, props)
    }
    const linkCount = Math.max(links.length, 1)

    if (mobileOpen) {
      // 1) Blob background reveals from top-left (curved bottom-left corner)
      style(bg, {
        inset: "0px",
        borderRadius: "0px",
        opacity: "1",
        backdropFilter: "blur(10px)",
        transition:
          "inset 0.3s ease-out, border-radius 0.3s ease-out, opacity 0.3s ease-out, backdrop-filter 0.3s ease-out",
      })

      // 2) Links reveal with a 0.1s stagger
      after(320, () => {
        links.forEach((a, i) =>
          style(a, {
            opacity: "1",
            filter: "blur(0px)",
            clipPath: "inset(0 0% 0 0)",
            transition: `opacity 0.4s ease-out ${i * 0.1}s, filter 0.4s ease-out ${i * 0.1}s, clip-path 0.4s ease-out ${i * 0.1}s`,
          }),
        )
      })

      // 3) Footer fades up after the links finish
      after(320 + linkCount * 100 + 380, () => {
        style(bottom, {
          opacity: "1",
          transform: "translateY(0px)",
          transition: "opacity 0.25s ease-out, transform 0.25s ease-out",
        })
      })
    } else {
      // 1) Footer slides out first
      style(bottom, {
        opacity: "0",
        transform: "translateY(20px)",
        transition: "opacity 0.15s ease-in, transform 0.15s ease-in",
      })

      // 2) Links blur/clip out with a 0.06s stagger
      after(160, () => {
        links.forEach((a, i) =>
          style(a, {
            opacity: "0",
            filter: "blur(10px)",
            clipPath: "inset(0 0% 0 100%)",
            transition: `opacity 0.3s ease-in ${i * 0.06}s, filter 0.3s ease-in ${i * 0.06}s, clip-path 0.3s ease-in ${i * 0.06}s`,
          }),
        )
      })

      // 3) Background fades, then resets to the closed blob state
      after(160 + linkCount * 60 + 320, () => {
        style(bg, { opacity: "0", transition: "opacity 0.2s ease-in" })
        after(210, () => {
          style(bg, {
            inset: "0px 0px 100% 100%",
            borderRadius: "0 0 0 500%",
            backdropFilter: "blur(20px)",
            opacity: "0",
            transition: "none",
          })
        })
      })
    }

    return () => timers.forEach((t) => window.clearTimeout(t))
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
    `inline-flex items-center whitespace-nowrap rounded-lg px-3 py-1.5 text-[13px] tracking-[0.02em] transition-colors duration-300 ${
      active
        ? scrolled
          ? "bg-black/15 text-black"
          : "bg-white/15 text-white"
        : scrolled
          ? "text-black/75 hover:bg-black/[0.08] hover:text-black"
          : "text-white/75 hover:bg-white/[0.08] hover:text-white"
    }`

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-[100] flex justify-center px-4 pt-3 lg:pt-4">
      <div className="pointer-events-auto relative">
        <div
          className="
            rounded-xl border border-white/20 bg-white/10
            backdrop-blur-md shadow-[0_4px_14px_rgba(0,0,0,0.12)]
            overflow-hidden w-[min(calc(100vw-2rem),40rem)] min-w-0
          "
        >
          {/* ─── Navbar Row ─── */}
          <div className="flex items-center justify-between w-full px-4 py-1.5 sm:px-5">
            {/* Left group: brand + nav links */}
            <div className="flex items-center gap-1">
              {/* Logo image — mobile only; name shown on tablet/desktop */}
              <Link href="/" className="shrink-0">
                <img
                  src={scrolled ? imgAnuritLogoBlack : imgAnuritLogoWhite}
                  alt="Anurit Innovation"
                  className="h-8 w-auto md:hidden"
                />
                <span
                  className={`hidden whitespace-nowrap font-['Pixelify_Sans:Regular'] text-[19px] leading-none transition-colors duration-300 md:inline ${
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

            {/* Right side: CTA + hamburger (mobile) */}
            <div className="flex items-center gap-2">
              <CtaPill className="inline-flex" dark={scrolled} />

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

        {/* ─── Mobile Menu — full-page overlay with GIC blob reveal ─── */}
        <div
          className={`pointer-events-auto fixed inset-0 z-[110] lg:hidden ${
            mobileOpen ? "pointer-events-auto" : "pointer-events-none"
          }`}
        >
          {/* Blob background — sweeps in from top-left with a curved bottom-left corner */}
          <div
            ref={bgRef}
            className="absolute inset-0 bg-[#FEFFFC]"
            style={{
              opacity: 0,
              inset: "0px 0px 100% 100%",
              borderRadius: "0 0 0 500%",
              backdropFilter: "blur(20px)",
            }}
          />

          {/* Close button — top right */}
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
            className={`absolute top-5 right-5 z-30 grid h-11 w-11 place-items-center rounded-full border border-black/10 bg-[#FEFFFC] text-black shadow-[0_2px_10px_rgba(0,0,0,0.12)] transition-all duration-400 hover:bg-black/5 ${
              mobileOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90 translate-y-2"
            }`}
          >
            <svg viewBox="0 0 16 16" fill="none" className="h-5 w-5" aria-hidden="true">
              <path d="m4 4 8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>

          {/* Centered menu links */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full px-8">
            <nav ref={navRef} aria-label="Mobile" className="flex flex-col items-center gap-5">
              {menuLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block font-['Pixelify_Sans:Regular'] text-[46px] leading-tight ${
                    link.active
                      ? "text-black"
                      : "text-[#8a8a8a] hover:text-black transition-[color] duration-300"
                  }`}
                  style={{ opacity: 0, filter: "blur(10px)", clipPath: "inset(0 100% 0 0)" }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Bottom bar — copyright / contact */}
          <div
            ref={bottomRef}
            className="absolute right-0 left-0 bottom-8 z-20 flex flex-col items-center gap-2 text-center"
            style={{ opacity: 0, transform: "translateY(20px)" }}
          >
            <p className="font-['Plus_Jakarta_Sans:Regular'] text-[13px] tracking-wide text-[#5b5b5b]">
              © 2026 Anurit Innovation. All rights reserved.
            </p>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="font-['Plus_Jakarta_Sans:Regular'] text-[14px] text-black underline-offset-2 hover:underline"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
