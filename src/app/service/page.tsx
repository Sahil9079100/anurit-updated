import type { Metadata } from "next"
import Link from "next/link"
import Navbar from "@/components/Navbar"
import ServiceDetails from "@/components/ServiceDetails"
import ServiceOrbit from "@/components/ServiceOrbit"
import ServiceTile from "@/components/ServiceTile"
import Footer from "@/sections/Footer"
import { services } from "@/data/services"

export const metadata: Metadata = {
  title: "Services",
  description:
    "From raw data to intelligent systems — data engineering, analytics, AI, Power BI, custom software, and managed services.",
}

function ServiceIntro() {
  return (
    <div className="flex flex-col items-center text-center">
      <h1 className="font-['Pixelify_Sans:Regular'] font-normal text-[40px] leading-tight text-black sm:text-[56px]">
        Our Services
      </h1>
      <p className="mt-4 max-w-md font-['Plus_Jakarta_Sans:Regular'] text-[18px] leading-relaxed text-[#474444]">
        From raw data to intelligent systems
      </p>
      <Link
        href="/contact"
        className="pointer-events-auto mt-8 inline-flex h-10 items-center rounded-full bg-black px-6 font-['Plus_Jakarta_Sans:Regular'] text-[14px] text-white transition-colors duration-300 hover:bg-black/80"
      >
        Talk to our team
      </Link>
    </div>
  )
}

export default function ServicesPage() {
  return (
    <div className="bg-[#FEFFFC] min-w-0 w-full">
      <Navbar forceDark />

      <main className="mx-auto max-w-[1400px] px-6 pt-32 pb-16">
        <ServiceOrbit>
          <ServiceIntro />
        </ServiceOrbit>

        <div className="lg:hidden">
          <ServiceIntro />
          <ul className="mt-12 grid list-none grid-cols-1 gap-4 p-0 sm:grid-cols-2">
            {services.map((service, i) => (
              <li key={service.slug}>
                <a
                  href={`#${service.slug}`}
                  className="block rounded-2xl outline-offset-4 focus-visible:outline-2 focus-visible:outline-black"
                >
                  <ServiceTile
                    service={service}
                    index={i}
                    showDescription
                    className="min-h-[168px]"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <ServiceDetails />
      </main>

      <Footer />
    </div>
  )
}