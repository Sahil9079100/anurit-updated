import { useEffect, useRef, useState } from "react"

/* ──────────────────────────────────────────────
   Data
   ────────────────────────────────────────────── */

const SERVICES = [
  { label: "Real Estate Analytics & BI" },
  { label: "Data Engineering & Cloud" },
  { label: "AI & Intelligent Automation" },
  { label: "Power BI & Custom Analytics" },
  { label: "Custom Software & Digital Products" },
  { label: "Managed Data & Analytics Services" },
] as const

/* ──────────────────────────────────────────────
   Icons
   ────────────────────────────────────────────── */

function Chevron({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 12 12"
      fill="none"
      className={`h-3 w-3 ${className}`}
      aria-hidden="true"
    >
      <path
        d="M2.5 4.5 6 8l3.5-3.5"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

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

function DotGrid({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      className={`h-4 w-4 ${className}`}
      aria-hidden="true"
    >
      <circle cx="4" cy="4" r="1" fill="currentColor" />
      <circle cx="8" cy="4" r="1" fill="currentColor" />
      <circle cx="12" cy="4" r="1" fill="currentColor" />
      <circle cx="4" cy="8" r="1" fill="currentColor" />
      <circle cx="8" cy="8" r="1" fill="currentColor" />
      <circle cx="12" cy="8" r="1" fill="currentColor" />
      <circle cx="4" cy="12" r="1" fill="currentColor" />
      <circle cx="8" cy="12" r="1" fill="currentColor" />
      <circle cx="12" cy="12" r="1" fill="currentColor" />
    </svg>
  )
}

/* ──────────────────────────────────────────────
   CTA button
   ────────────────────────────────────────────── */

function CtaPill({ className = "" }: { className?: string }) {
  return (
    <a
      href="#"
      className={`group inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-5 py-2 text-[13.5px] text-[#0d0e15] shadow-[0_8px_24px_rgba(255,255,255,0.16)] transition-all duration-300 hover:bg-gray-200 ${className}`}
    >
      Talk to Our Team
      <ArrowIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
    </a>
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
  const [expanded, setExpanded] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [pastHero, setPastHero] = useState(false)
  const scrolled = pastHero || forceDark
  const wrapperRef = useRef<HTMLDivElement | null>(null)

  /* ── Close on Escape ── */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setExpanded(false)
        setMobileOpen(false)
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  /* ── Close on outside click ── */
  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setExpanded(false)
      }
    }
    document.addEventListener("mousedown", onDown)
    return () => document.removeEventListener("mousedown", onDown)
  }, [])

  /* ── Lock scroll on mobile menu ── */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [mobileOpen])

  /* ── Scroll-aware text color ──
       The hero section occupies ≥100 vh of the viewport.
       Once the user scrolls past ~75 % of the viewport height the
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

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-[100] flex justify-center px-4 pt-5 lg:pt-6">
      {/* ── Event boundary (pointer-tracking wrapper) ── */}
      <div
        ref={wrapperRef}
        className="pointer-events-auto relative"
        onMouseLeave={() => setExpanded(false)}
      >
        {/* ════════════════════════════════════════════════════════
             DUAL-AXIS MORPHING GLASS CONTAINER
             Width + height transition with a custom cubic-bezier
             for a silky ease-in / ease-out feel — the panel
             accelerates smoothly, then decelerates into its
             resting dimension.
             ════════════════════════════════════════════════════════ */}
        <div
          className={`
            rounded-xl border border-white/20 bg-white/10
            backdrop-blur-md shadow-[0_4px_14px_rgba(0,0,0,0.12)]
            overflow-hidden min-w-[480px]
            ${expanded
              ? "max-w-[960px] max-h-[50rem]"
              : "max-w-[600px] max-h-[56px]"
            }
          `}
          style={{
            transition:
              "max-width 0.65s cubic-bezier(0.25, 0.08, 0.25, 1), max-height 0.65s cubic-bezier(0.25, 0.08, 0.25, 1)",
          }}
        >
          {/* ─── Top Navbar Row ─── */}
          {/*
              justify-between  →  logo + links lock to left,
              CTA snaps to right inner padding edge.
              No dead space remains on either side because
              the container's max-width hugs the content.
          */}
          <div className="flex items-center justify-between w-full px-5 py-2">
            {/* Left group: brand + nav links */}
            <div className="flex items-center gap-1">
              {/* Logo — text switches white/black with scroll */}
              <a href="/" className="shrink-0">
                <span
                  className={`font-['Pixelify_Sans:Regular'] text-[19px] leading-none transition-colors duration-300 ${
                    scrolled ? "text-black" : "text-white"
                  }`}
                >
                  Anurit Innovation
                </span>
              </a>

              {/* Desktop links */}
              <ul className="ml-2 hidden list-none items-center gap-1 lg:flex">
                {/* Services */}
                <li className="list-none">
                  <button
                    type="button"
                    aria-expanded={expanded}
                    aria-haspopup="true"
                    onMouseEnter={() => setExpanded(true)}
                    onClick={() => setExpanded((v) => !v)}
                    className={`flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-[14px] tracking-[0.02em] transition-colors duration-300 ${
                      expanded
                        ? scrolled
                          ? "bg-black/15 text-black"
                          : "bg-white/15 text-white"
                        : scrolled
                          ? "text-black/75 hover:bg-black/[0.08] hover:text-black"
                          : "text-white/75 hover:bg-white/[0.08] hover:text-white"
                    }`}
                  >
                    Services
                    <Chevron
                      className={`transition-transform duration-200 ${
                        expanded ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </li>

                {/* About Us — direct link; hovering closes the panel */}
                <li className="list-none">
                  <a
                    href="/about"
                    onMouseEnter={() => setExpanded(false)}
                    className={`inline-flex items-center rounded-lg px-3.5 py-2 text-[14px] tracking-[0.02em] transition-colors duration-300 ${
                      scrolled
                        ? "text-black/75 hover:bg-black/[0.08] hover:text-black"
                        : "text-white/75 hover:bg-white/[0.08] hover:text-white"
                    }`}
                  >
                    About Us
                  </a>
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

          {/* ─── Services Grid (fades in with a gentle stagger) ─── */}
          <div
            className="px-6 pb-5 pt-4"
            style={{
              transition:
                "opacity 0.45s cubic-bezier(0.25, 0.08, 0.25, 1) 0.15s",
              opacity: expanded ? 1 : 0,
            }}
          >
            <p className={`mb-3 pl-1 text-[11px] uppercase tracking-[0.16em] transition-colors duration-300 ${
              scrolled ? "text-black/50" : "text-white/50"
            }`}>
              Our Services
            </p>
            <div className="grid grid-cols-1 gap-x-8 gap-y-1 sm:grid-cols-2">
              {SERVICES.map((svc) => (
                <button
                  key={svc.label}
                  type="button"
                  className={`group flex items-center gap-2 rounded-lg px-3 py-2.5 text-left text-[14.5px] transition-colors duration-300 ${
                    scrolled
                      ? "text-black/85 hover:bg-black/10 hover:text-black"
                      : "text-white/85 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <DotGrid className={`shrink-0 transition-colors duration-300 ${
                    scrolled
                      ? "text-black/30 group-hover:text-black/60"
                      : "text-white/30 group-hover:text-white/60"
                  }`} />
                  <span>{svc.label}</span>
                </button>
              ))}
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
            onClick={() => { setMobileOpen(false); setExpanded(false) }}
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
                onClick={() => { setMobileOpen(false); setExpanded(false) }}
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
              <p className="mb-2 pl-1 text-[11px] uppercase tracking-[0.16em] text-white/50">
                Services
              </p>
              <ul className="mb-6 space-y-1">
                {SERVICES.map((svc) => (
                  <li key={svc.label}>
                    <button
                      type="button"
                      onClick={() => setMobileOpen(false)}
                      className="flex w-full items-center gap-2 rounded-lg px-3 py-2.5 text-left text-[15px] text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                    >
                      <DotGrid className="shrink-0 text-white/30" />
                      <span>{svc.label}</span>
                    </button>
                  </li>
                ))}
              </ul>

              <div className="border-t border-white/15 pt-4">
                <a
                  href="/about"
                  onClick={() => setMobileOpen(false)}
                  className="flex w-full items-center gap-2 rounded-lg px-3 py-2.5 text-[15px] text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                >
                  About Us
                </a>
              </div>
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