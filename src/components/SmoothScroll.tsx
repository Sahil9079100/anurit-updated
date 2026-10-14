"use client"

import type { ReactNode } from "react"
import useSmoothScroll from "@/hooks/useSmoothScroll"

/**
 * Client-only wrapper that enables Lenis smooth scrolling for the whole app
 * while keeping the root layout a server component.
 */
export default function SmoothScroll({ children }: { children: ReactNode }) {
  useSmoothScroll()
  return <>{children}</>
}
