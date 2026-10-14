import type { Metadata } from "next"
import Navbar from "@/components/Navbar"
import Hero from "@/sections/Hero"
import ProblemOne from "@/sections/ProblemOne"
import ProblemTwo from "@/sections/ProblemTwo"
import GenericAi from "@/sections/GenericAi"
import WhatWeBuild from "@/sections/WhatWeBuild"
import OurVision from "@/sections/OurVision"
import OurPartners from "@/sections/OurPartners"
import ContactCta from "@/sections/ContactCta"
import Footer from "@/sections/Footer"

export const metadata: Metadata = {
  title: "Anurit Innovation — Real Estate Data, Analytics & AI",
  description:
    "We build data, analytics, and intelligent technology that help real estate teams understand their business and move faster.",
}

export default function Home() {
  return (
    <div className="bg-[#FEFFFC] min-w-0 w-full">
      <Navbar />
      <Hero />
      <ProblemOne />
      <ProblemTwo />
      <GenericAi />
      <WhatWeBuild />
      <OurVision />
      <OurPartners />
      <ContactCta />
      <Footer />
    </div>
  )
}
