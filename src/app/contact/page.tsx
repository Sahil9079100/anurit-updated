import type { Metadata } from "next"
import ContactForm from "@/components/ContactForm"
import Navbar from "@/components/Navbar"
import Footer from "@/sections/Footer"
import { company } from "@/data/company"

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Ask any question, book a demo, or get support from the Anurit Innovation team.",
}

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/anurit/posts/?feedView=all" },
]

export default function ContactPage() {
  return (
    <div className="bg-[#FEFFFC] min-w-0 w-full">
      <Navbar forceDark />

      <main>
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 pb-24 pt-36 md:grid-cols-2 md:gap-16 lg:gap-24">
          <div className="flex flex-col">
            <p className="font-['Plus_Jakarta_Sans:Regular'] text-[13px] uppercase tracking-[0.18em] text-black/40">
              Contact
            </p>
            <h1 className="mt-4 font-['Pixelify_Sans:Regular'] font-normal text-[44px] leading-tight text-black sm:text-[56px]">
              Contact Us
            </h1>
            <p className="mt-4 font-['Plus_Jakarta_Sans:Regular'] text-[20px] leading-relaxed text-[#2c2c2c]">
              Ask any query to us!
            </p>

            <dl className="mt-12 space-y-6 font-['Plus_Jakarta_Sans:Regular']">
              <div>
                <dt className="text-[13px] uppercase tracking-[0.18em] text-black/40">Email</dt>
                <dd className="mt-1 text-[18px] text-[#2c2c2c]">
                  <a href={`mailto:${company.email}`} className="transition-colors hover:text-black">
                    {company.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[13px] uppercase tracking-[0.18em] text-black/40">Phone</dt>
                <dd className="mt-1 text-[18px] text-[#2c2c2c]">
                  <a href={company.phoneHref} className="transition-colors hover:text-black">
                    {company.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[13px] uppercase tracking-[0.18em] text-black/40">Address</dt>
                <dd className="mt-1 text-[18px] leading-relaxed text-[#2c2c2c]">
                  <address className="not-italic">
                    {company.address.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </address>
                </dd>
              </div>
            </dl>

            <nav aria-label="Social links" className="mt-10">
              <ul className="flex flex-wrap gap-6 font-['Plus_Jakarta_Sans:Regular'] text-[15px]">
                {socialLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black/40 transition-colors duration-300 hover:text-black"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <ContactForm />
        </div>
      </main>

      <Footer />
    </div>
  )
}