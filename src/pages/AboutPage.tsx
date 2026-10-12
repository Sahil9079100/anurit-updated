import { useState, type ReactNode } from "react"
import Navbar from "../components/Navbar"
import Footer from "../sections/Footer"
import ContactCta from "../sections/ContactCta"
import { useReveal } from "../hooks/useReveal"
import { aboutServices, aboutStory, trustPillars } from "../data/about"
import { imgRetroStamp } from "../assets"

const pixel = "font-['Pixelify_Sans:Regular'] font-normal"
const body = "font-['Plus_Jakarta_Sans:Regular'] font-normal"

/* ──────────────────────────────────────────────
   Reveal wrapper
   ────────────────────────────────────────────── */

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  const ref = useReveal<HTMLDivElement>()
  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  )
}

/* ──────────────────────────────────────────────
   Editorial section heading
   ────────────────────────────────────────────── */

function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string
  title: string
  subtitle?: string
}) {
  return (
    <Reveal className="mx-auto max-w-[760px] text-center">
      <p className={`${body} text-[14px] font-normal tracking-[0.02em] text-neutral-500`}>
        {eyebrow}
      </p>
      <h2
        className={`${pixel} mt-5 text-[30px] leading-[1.12] tracking-[-0.4px] text-neutral-900 sm:text-[40px]`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`${body} mx-auto mt-5 max-w-[640px] text-[16px] leading-[1.6] text-neutral-600`}>
          {subtitle}
        </p>
      )}
    </Reveal>
  )
}

/* ──────────────────────────────────────────────
   Hero — editorial "letter"
   ────────────────────────────────────────────── */

function AboutHero() {
  return (
    <section className="overflow-x-clip bg-[#FEFFFC]">
      <div className="mx-auto max-w-[880px] px-6 pb-24 pt-[150px] text-center md:pb-[180px]">
        <Reveal>
          <p
            className={`${body} mx-auto max-w-[560px] text-[15px] leading-[1.5] tracking-[-0.15px] text-neutral-700`}
          >
            {aboutStory.intro[0]}
          </p>
        </Reveal>

        <Reveal delay={80}>
          <h1
            className={`${pixel} mx-auto mt-8 max-w-[24ch] text-[34px] leading-[1.12] tracking-[-0.5px] text-neutral-900 sm:text-[48px] lg:text-[54px]`}
          >
            Turning{" "}
            <span className={`${body} font-normal tracking-[-0.2px]`}>
              real estate data
            </span>{" "}
            into AI-powered intelligence.
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <div className="relative mx-auto mt-14 max-w-[560px] overflow-visible rounded-2xl border border-neutral-300 bg-white p-6 pb-24 text-left shadow-[0_2px_6px_0_rgba(0,0,0,0.06)] md:p-10 md:pb-36">
            <p
              className={`${body} text-[16.5px] leading-[1.45] tracking-[-0.2px] text-neutral-800`}
            >
              {aboutStory.intro[1]}
            </p>
            <p
              className={`${body} mt-7 max-w-[400px] text-[15px] leading-[1.5] tracking-[-0.15px] text-neutral-600`}
            >
              {aboutStory.trustedBy[0]}{" "}
              <span className="border-b border-neutral-400 text-neutral-800 transition-colors duration-200 hover:border-neutral-900">
                {aboutStory.trustedBrands[0]}
              </span>{" "}
              and{" "}
              <span className="border-b border-neutral-400 text-neutral-800 transition-colors duration-200 hover:border-neutral-900">
                {aboutStory.trustedBrands[1]}
              </span>
              .
            </p>

            <img
              src={imgRetroStamp}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-10 -right-6 w-44 rotate-[7deg] select-none sm:w-52 md:-bottom-14 md:-right-12 md:w-60"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ──────────────────────────────────────────────
   Services — neutral accordion
   ────────────────────────────────────────────── */

function ServiceItem({
  service,
  expanded,
  onToggle,
}: {
  service: (typeof aboutServices)[number]
  expanded: boolean
  onToggle: () => void
}) {
  const id = `about-service-${service.id}`
  return (
    <div
      className={`overflow-hidden rounded-2xl border bg-white transition-colors duration-300 ${
        expanded
          ? "border-neutral-300"
          : "border-neutral-200 hover:border-neutral-300"
      }`}
    >
      <button
        type="button"
        aria-expanded={expanded}
        aria-controls={id}
        onClick={onToggle}
        className="flex w-full items-center gap-4 px-6 py-6 text-left md:gap-6 md:px-8"
      >
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-neutral-300 text-[14px] tracking-[-0.2px] text-neutral-700">
          {service.number}
        </span>
        <span className="min-w-0 flex-1">
          <span
            className={`${pixel} block text-[21px] leading-snug tracking-[-0.4px] text-neutral-900 md:text-[24px]`}
          >
            {service.title}
          </span>
          <span
            className={`${body} mt-1 block text-[15px] leading-snug text-neutral-500`}
          >
            {service.tagline}
          </span>
        </span>
        <span
          className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border text-neutral-900 transition-all duration-300 ${
            expanded
              ? "rotate-45 border-neutral-900 bg-neutral-900 text-white"
              : "border-neutral-300"
          }`}
          aria-hidden="true"
        >
          <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4">
            <path
              d="M8 3v10M3 8h10"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </button>

      <div
        id={id}
        className={`grid transition-[grid-template-rows] duration-500 ease-out ${
          expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="grid grid-cols-1 gap-x-8 gap-y-3 border-t border-neutral-200 px-6 py-6 md:grid-cols-2 md:px-8">
            {service.capabilities.map((capability) => (
              <div key={capability} className="flex items-start gap-3">
                <span className="mt-[8px] h-1 w-1 shrink-0 rounded-full bg-neutral-400" />
                <span
                  className={`${body} text-[15.5px] leading-snug text-neutral-700`}
                >
                  {capability}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function ServicesSection() {
  const [openId, setOpenId] = useState<string | null>(
    aboutServices[0]?.id ?? null,
  )

  return (
    <section className="bg-[#FEFFFC] border-t border-neutral-200">
      <div className="mx-auto max-w-[1000px] px-6 py-24 md:py-[120px]">
        <SectionHeading
          eyebrow="Our Core Services & AI Capabilities"
          title="A full-stack data, analytics, and AI partner"
          subtitle="Everything you need to move from raw property metrics to high-impact strategic decisions — engineered around the way real estate businesses actually operate."
        />

        <div className="mt-14 space-y-4">
          {aboutServices.map((service) => (
            <Reveal key={service.id}>
              <ServiceItem
                service={service}
                expanded={openId === service.id}
                onToggle={() =>
                  setOpenId((current) =>
                    current === service.id ? null : service.id,
                  )
                }
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ──────────────────────────────────────────────
   Trust pillars — neutral cards
   ────────────────────────────────────────────── */

function TrustPillarCard({
  pillar,
  featured = false,
}: {
  pillar: (typeof trustPillars)[number]
  featured?: boolean
}) {
  return (
    <article
      className={`flex h-full flex-col rounded-2xl border border-neutral-200 bg-white p-7 md:p-8 ${
        featured ? "border-neutral-300" : ""
      }`}
    >
      <span
        className={`${pixel} tracking-[-0.5px] text-neutral-300 ${
          featured ? "text-[56px]" : "text-[44px]"
        } leading-none`}
      >
        {pillar.number}
      </span>
      <h3
        className={`${pixel} mt-6 text-[21px] leading-snug tracking-[-0.4px] text-neutral-900 md:text-[23px]`}
      >
        {pillar.title}
      </h3>
      <p className={`${body} mt-3 text-[15.5px] leading-[1.55] text-neutral-600`}>
        {pillar.description}
      </p>
    </article>
  )
}

function TrustSection() {
  const [first, ...rest] = trustPillars
  return (
    <section className="bg-[#FEFFFC] border-t border-neutral-200">
      <div className="mx-auto max-w-[1000px] px-6 py-24 md:py-[120px]">
        <SectionHeading
          eyebrow="Why Anurit"
          title="Why world-leading property firms trust Anurit Innovation"
          subtitle="Connecting with and retaining industry leaders like Highmark Residential and Brookfield Properties requires more than basic technical skills — it's built on these foundational strengths."
        />

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2">
          <Reveal className="md:col-span-2">
            <TrustPillarCard pillar={first} featured />
          </Reveal>
          {rest.map((pillar, i) => (
            <Reveal key={pillar.number} delay={(i % 2) * 90}>
              <TrustPillarCard pillar={pillar} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ──────────────────────────────────────────────
   Page
   ────────────────────────────────────────────── */

export default function AboutPage() {
  return (
    <div className="bg-[#FEFFFC] min-w-0 w-full text-neutral-900">
      <Navbar forceDark />

      <main>
        <AboutHero />
        <ServicesSection />
        <TrustSection />
        <ContactCta />
      </main>

      <Footer />
    </div>
  )
}
