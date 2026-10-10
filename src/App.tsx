import Hero from "./sections/Hero"
import Navbar from "./components/Navbar"
import ProblemOne from "./sections/ProblemOne"
import ProblemTwo from "./sections/ProblemTwo"
import GenericAi from "./sections/GenericAi"
import WhatWeBuild from "./sections/WhatWeBuild"
import OurVision from "./sections/OurVision"
import OurPartners from "./sections/OurPartners"
import ContactCta from "./sections/ContactCta"
import Footer from "./sections/Footer"
import PrivacyPolicy from "./pages/PrivacyPolicy"
import TermsOfService from "./pages/TermsOfService"
import ServicesPage from "./pages/ServicesPage"
import ContactPage from "./pages/ContactPage"
import useSmoothScroll from "./hooks/useSmoothScroll"

export default function App() {
  useSmoothScroll()

  const path = window.location.pathname.replace(/\/+$/, "") || "/"

  if (path === "/privacy") return <PrivacyPolicy />
  if (path === "/terms") return <TermsOfService />
  if (path === "/service" || path === "/services") return <ServicesPage />
  if (path === "/contact") return <ContactPage />

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
