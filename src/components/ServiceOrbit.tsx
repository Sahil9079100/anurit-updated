"use client"

import { useEffect, useRef } from "react"
import type { ReactNode } from "react"
import { services } from "../data/services"
import ServiceTile from "./ServiceTile"

/** Seconds for one full revolution. */
const ORBIT_SECONDS = 50

/** Tilt of the orbit plane in degrees (negative = right side rises). */
const TILT_DEG = -16
/** Milliseconds to ease the orbit to a stop (and back to full speed). */
const SPEED_EASE_MS = 900

const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2

const TILT_COS = Math.cos((TILT_DEG * Math.PI) / 180)
const TILT_SIN = Math.sin((TILT_DEG * Math.PI) / 180)

interface ServiceOrbitProps {
  children: ReactNode
}

export default function ServiceOrbit({ children }: ServiceOrbitProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<(HTMLLIElement | null)[]>([])
  // Eased speed multiplier: tweens between 1 (moving) and 0 (stopped).
  const speedRef = useRef({ from: 1, to: 1, start: 0, current: 1 })

  const setMoving = (moving: boolean) => {
    const s = speedRef.current
    const to = moving ? 1 : 0
    if (s.to === to) return
    s.from = s.current
    s.to = to
    s.start = performance.now()
  }
  const angleRef = useRef(Math.PI / 2)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const speed = (Math.PI * 2) / ORBIT_SECONDS
    let width = container.clientWidth
    let height = container.clientHeight
    let frame = 0
    let last = performance.now()

    const render = () => {
      // On mobile the orbit is zoomed in so only the middle of the oval shows;
      // the left/right ends scroll off-screen intentionally.
      const isCompact = width < 768
      const rx = isCompact ? width * 0.68 : Math.min(width * 0.42, 560)
      const ry = isCompact ? height * 0.36 : height * 0.34
      const scaleMin = isCompact ? 0.4 : 0.62
      const scaleMax = isCompact ? 0.66 : 1.12
      const count = services.length

      itemRefs.current.forEach((el, i) => {
        if (!el) return
        const theta = angleRef.current + (i * Math.PI * 2) / count
        // 0 = far side (top of the ellipse), 1 = near side (bottom).
        const depth = (Math.sin(theta) + 1) / 2
        const scale = scaleMin + depth * (scaleMax - scaleMin)
        const ex = Math.cos(theta) * rx
        const ey = Math.sin(theta) * ry
        const x = ex * TILT_COS - ey * TILT_SIN
        const y = ex * TILT_SIN + ey * TILT_COS

        el.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%) scale(${scale})`
        el.style.opacity = String(0.5 + depth * 0.5)
        el.style.zIndex = String(Math.round(depth * 40))
      })
    }

    const tick = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05)
      last = now
      const s = speedRef.current
      const t = Math.min(Math.max((now - s.start) / SPEED_EASE_MS, 0), 1)
      s.current = s.from + (s.to - s.from) * easeInOutCubic(t)
      angleRef.current += speed * s.current * dt
      render()
      frame = requestAnimationFrame(tick)
    }

    const observer = new ResizeObserver(() => {
      width = container.clientWidth
      height = container.clientHeight
      render()
    })
    observer.observe(container)

    render()
    if (!reduceMotion) frame = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(frame)
      observer.disconnect()
    }
  }, [])

  return (
    <div ref={containerRef} className="relative -mx-6 md:mx-0 h-[420px] w-[calc(100%+48px)] md:w-full overflow-x-clip md:h-[520px] lg:h-[680px]">
      <ul aria-label="Our services" className="absolute inset-0 m-0 list-none p-0">
        {services.map((service, i) => (
          <li
            key={service.title}
            ref={(el) => {
              itemRefs.current[i] = el
            }}
            onMouseEnter={() => setMoving(false)}
            onMouseLeave={() => setMoving(true)}
            onFocus={() => setMoving(false)}
            onBlur={() => setMoving(true)}
            className="absolute left-1/2 top-1/2 will-change-transform"
          >
            <a
              href={`#${service.slug}`}
              aria-label={`${service.title} — view details`}
              className="block rounded-xl outline-offset-4 focus-visible:outline-2 focus-visible:outline-black"
            >
              <ServiceTile service={service} index={i} className="h-[120px] w-[120px] md:h-[116px] md:w-[116px] lg:h-[168px] lg:w-[168px]" />
            </a>
          </li>
        ))}
      </ul>

      <div className="pointer-events-none absolute inset-0 z-[50] flex items-center justify-center">
        {children}
      </div>
    </div>
  )
}
