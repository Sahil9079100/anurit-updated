import type { Metadata } from "next"
import type { ReactNode } from "react"
import "./globals.css"
import SmoothScroll from "@/components/SmoothScroll"

export const metadata: Metadata = {
  title: {
    default: "Anurit Innovation",
    template: "%s | Anurit Innovation",
  },
  description:
    "Anurit Innovation turns real estate data into AI-powered intelligence — data engineering, analytics, Power BI, and intelligent automation.",
  icons: {
    icon: "/assets/7be03.png",
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-[#FEFFFC]" suppressHydrationWarning>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  )
}
