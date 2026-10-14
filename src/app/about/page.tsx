import type { Metadata } from "next"
import AboutView from "@/views/AboutView"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Anurit Innovation turns real estate data into AI-powered intelligence — a full-stack data, analytics, and AI partner for property firms.",
}

export default function AboutPage() {
  return <AboutView />
}