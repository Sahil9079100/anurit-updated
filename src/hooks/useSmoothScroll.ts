import { useEffect } from "react"
import Lenis from "lenis"
import "lenis/dist/lenis.css"

/** Inertia-style smooth scrolling for the whole page. */
export default function useSmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const lenis = new Lenis({
      lerp: 0.1,
      anchors: true,
      autoRaf: true,
      // Respect scroll locks (e.g. the mobile menu sets body overflow to hidden).
      prevent: () => document.body.style.overflow === "hidden",
    })

    return () => lenis.destroy()
  }, [])
}
