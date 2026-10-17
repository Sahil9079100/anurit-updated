import Link from "next/link"
import { imgImage12 } from "../assets"

const linkClass =
  "transition-colors duration-200 hover:text-white"

export default function Footer() {
  return (
    <div className="relative w-full overflow-hidden" style={{ height: 504 }}>
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{
          maskImage: "linear-gradient(to bottom, transparent 0, #000 160px)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent 0, #000 160px)",
        }}
      >
        <img
          alt=""
          className="absolute max-w-none w-full object-cover"
          style={{ height: "160.91%", top: "-60.91%", left: "-0.01%" }}
          src={imgImage12}
        />
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-black/25 to-transparent" />

      <footer className="absolute bottom-6 left-0 right-0 z-10 w-full px-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 font-['Plus_Jakarta_Sans:Regular'] text-[13px] tracking-wider text-white/95 [text-shadow:0_1px_4px_rgba(0,0,0,0.5)]">
          <p className="text-center break-words">© 2026 Anurit Innovation. All rights reserved.</p>
          <span aria-hidden="true" className="hidden sm:inline">
            •
          </span>
          <nav aria-label="Legal" className="flex items-center gap-4 sm:gap-6">
            <Link href="/privacy" className={linkClass}>
              Privacy Policy
            </Link>
            <span aria-hidden="true">•</span>
            <Link href="/terms" className={linkClass}>
              Terms &amp; Conditions
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
