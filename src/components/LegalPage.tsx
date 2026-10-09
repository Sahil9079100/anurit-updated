import type { ReactNode } from "react"
import Navbar from "./Navbar"
import Footer from "../sections/Footer"

const bodyFont = "font-['Plus_Jakarta_Sans:Regular'] font-normal"

interface LegalPageProps {
  title: string
  lastUpdated: string
  children: ReactNode
}

export default function LegalPage({ title, lastUpdated, children }: LegalPageProps) {
  return (
    <div className="bg-[#FEFFFC] min-w-0 w-full">
      <Navbar forceDark />

      <main className="max-w-3xl mx-auto px-6 pt-36 pb-24">
        <h1 className="font-['Pixelify_Sans:Regular'] font-normal text-[36px] text-black mb-3">
          {title}
        </h1>
        <p className={`${bodyFont} text-[15px] text-[#474444]`}>
          Last updated: {lastUpdated}
        </p>
        {children}
      </main>

      <Footer />
    </div>
  )
}

export function LegalBody({
  children,
  className = "",
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className={`${bodyFont} space-y-4 text-[16px] leading-relaxed text-[#2c2c2c] ${className}`}>
      {children}
    </div>
  )
}

export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mt-14">
      <h2 className="font-['Pixelify_Sans:Regular'] font-normal text-[24px] text-black mb-4">
        {title}
      </h2>
      <LegalBody>{children}</LegalBody>
    </section>
  )
}

export function LegalList({ children }: { children: ReactNode }) {
  return <ul className="list-disc space-y-3 pl-5 marker:text-black/30">{children}</ul>
}
