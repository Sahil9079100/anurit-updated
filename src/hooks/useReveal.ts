import { useEffect, useRef } from "react"

/**
 * Reveals an element once it scrolls into view by adding the
 * `is-visible` class (paired with the `.reveal` CSS in globals.css).
 * Respects `prefers-reduced-motion`.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(
  threshold = 0.12,
) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("is-visible")
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add("is-visible")
            observer.unobserve(el)
          }
        })
      },
      { threshold, rootMargin: "0px 0px -10% 0px" },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return ref
}
