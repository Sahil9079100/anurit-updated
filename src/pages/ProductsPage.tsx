import type { ReactNode } from "react"
import Navbar from "../components/Navbar"
import Footer from "../sections/Footer"
import { useReveal } from "../hooks/useReveal"
import { products, type Product } from "../data/products"

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
   Hero
   ────────────────────────────────────────────── */

function ProductsHero() {
  return (
    <section className="bg-[#FEFFFC]">
      <div className="mx-auto max-w-[1080px] px-6 pb-16 pt-[150px] text-center md:pt-[170px]">
        <Reveal delay={80}>
          <h1
            className={`${pixel} mx-auto mt-6 max-w-[22ch] text-[34px] leading-[1.12] tracking-[-0.5px] text-neutral-900 sm:text-[50px] lg:text-[58px]`}
          >
            Our Products, built for the way you work.
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p
            className={`${body} mx-auto mt-6 max-w-[620px] text-[16px] leading-[1.6] tracking-[-0.15px] text-neutral-600`}
          >
            From intelligent document AI to powerful Power BI visuals —
            delivering enterprise-grade solutions.
          </p>
        </Reveal>
      </div>
    </section>
  )
}

/* ──────────────────────────────────────────────
   Mini product visuals (CSS-drawn)
   ────────────────────────────────────────────── */

function VisualAskData({ accent }: { accent: string }) {
  return (
    <div className="space-y-3">
      <div className="ml-auto w-fit max-w-[70%] rounded-xl rounded-br-md bg-neutral-900 px-3.5 py-2.5 text-[12.5px] leading-snug text-white">
        What's our Q3 occupancy?
      </div>
      <div className="flex w-fit max-w-[88%] items-start gap-2.5 rounded-xl rounded-bl-md bg-neutral-100 px-3.5 py-2.5">
        <span className={`mt-1 h-1.5 w-1.5 shrink-0 rounded-full ${accent}`} />
        <span className="text-[12.5px] leading-snug text-neutral-700">
          Occupancy is <strong className="font-semibold text-neutral-900">94.2%</strong> — up 1.8
          pts quarter over quarter.
        </span>
      </div>
      <div className="ml-6 flex w-fit max-w-[60%] flex-col gap-1.5 rounded-xl rounded-bl-md border border-neutral-200 bg-white px-3.5 py-2.5">
        <span className="text-[11px] uppercase tracking-[0.12em] text-neutral-400">
          Sources
        </span>
        <span className="flex flex-wrap gap-1">
          <span className={`rounded-full px-2 py-0.5 text-[10.5px] ${accent.replace("text", "bg")}/10 text-neutral-700`}>
            Yardi
          </span>
          <span className="rounded-full bg-neutral-100 px-2 py-0.5 text-[10.5px] text-neutral-600">
            Financials
          </span>
        </span>
      </div>
    </div>
  )
}

function VisualRowNote({ accent }: { accent: string }) {
  return (
    <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white text-[12px]">
      <div className="flex justify-between border-b border-neutral-100 bg-neutral-50 px-3 py-2 text-[11px] text-neutral-500">
        <span>Unit</span>
        <span>Status</span>
        <span>NOI</span>
      </div>
      <div className="flex justify-between px-3 py-2 text-neutral-400">
        <span>A-101</span>
        <span>Occupied</span>
        <span>12.4k</span>
      </div>
      <div className="relative flex justify-between bg-[#6366f1]/5 px-3 py-2 ring-1 ring-inset ring-[#6366f1]/40">
        <span className="font-medium text-neutral-800">A-102</span>
        <span className="text-neutral-800">Vacant</span>
        <span className="text-neutral-800">9.8k</span>
        <span className="absolute -right-2 -top-2.5 grid h-5 w-5 place-items-center rounded-full bg-[#6366f1] text-white shadow-sm">
          <svg viewBox="0 0 16 16" fill="none" className="h-3 w-3">
            <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </span>
      </div>
      <div className="flex justify-between px-3 py-2 text-neutral-400">
        <span>A-103</span>
        <span>Occupied</span>
        <span>11.2k</span>
      </div>
      <div className="relative mx-3 mb-3 rounded-lg bg-neutral-50 px-3 py-2 text-[11.5px] text-neutral-600">
        <span className={`${accent} font-medium`}>@analyst</span> Flagged — needs a
        renewal follow-up.
      </div>
    </div>
  )
}

function VisualPageTracker({ accent }: { accent: string }) {
  const bars = [34, 52, 40, 78, 58, 64, 46]
  return (
    <div className="flex flex-col gap-3 rounded-xl border border-neutral-200 bg-white p-4">
      <div className="flex items-center justify-between">
        <span className="text-[11px] uppercase tracking-[0.12em] text-neutral-400">
          Sessions / page
        </span>
        <span className={`rounded-full px-2 py-0.5 text-[10.5px] ${accent.replace("text", "bg")}/10 text-neutral-700`}>
          +18% ▲
        </span>
      </div>
      <div className="flex h-20 items-end gap-2">
        {bars.map((h, i) => (
          <div
            key={i}
            className={`flex-1 rounded-t-md ${i === 3 ? "bg-[#f59e0b]" : "bg-neutral-100"}`}
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
      <div className="flex justify-between text-[10.5px] text-neutral-400">
        <span>Overview</span>
        <span>Portfolio</span>
        <span>Cash flow</span>
        <span>Leasing</span>
      </div>
    </div>
  )
}

function VisualDynamicUrl({ accent }: { accent: string }) {
  return (
    <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white">
      <div className="grid aspect-[3/2] place-items-center bg-neutral-100">
        <div className="relative h-14 w-14 rotate-3">
          <div className="absolute inset-0 rounded-lg bg-[#f43f5e]/15 ring-1 ring-inset ring-[#f43f5e]/30" />
          <div className="absolute inset-3 rounded-md bg-[#f43f5e]/25" />
          <div className="absolute inset-6 rounded bg-[#f43f5e]/30" />
          <span className="absolute -top-1 left-1/2 h-3 w-3 -translate-x-1/2 rounded-t-sm bg-[#f43f5e]/60" />
        </div>
      </div>
      <div className="flex items-center gap-2 px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-emerald-400" />
        <span className="truncate text-[11px] text-neutral-500">
          https://cdn.anurit.com/logo.png
        </span>
      </div>
    </div>
  )
}

function ProductVisual({ product }: { product: Product }) {
  switch (product.id) {
    case "ask-data":
      return <VisualAskData accent={product.accent} />
    case "row-note":
      return <VisualRowNote accent={product.accent} />
    case "page-tracker":
      return <VisualPageTracker accent={product.accent} />
    case "dynamic-url-image":
      return <VisualDynamicUrl accent={product.accent} />
    default:
      return null
  }
}

/* ──────────────────────────────────────────────
   Product card
   ────────────────────────────────────────────── */

function ProductCard({
  product,
  featured = false,
}: {
  product: Product
  featured?: boolean
}) {
  const num = product.num
  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border bg-white p-6 transition-all duration-300 sm:p-8 ${
        featured
          ? "border-neutral-300 md:grid md:grid-cols-2 md:items-center md:gap-10"
          : "border-neutral-200"
      }`}
    >
      {/* Faint watermark number — glows gently on hover */}
      <span
        aria-hidden="true"
        className={`${pixel} product-num pointer-events-none absolute -top-3 right-4 text-[96px] leading-none tracking-[-2px] text-neutral-200`}
      >
        {num}
      </span>

      <div className="relative flex min-w-0 flex-col">
        <div className="flex flex-wrap items-center gap-1.5">
          {product.tags.map((tag) => (
            <span
              key={tag}
              className={`rounded-full border px-2.5 py-0.5 text-[11px] font-medium tracking-[0.02em] text-neutral-600 ${product.accentBorder} ${product.accentSoft}`}
            >
              {tag}
            </span>
          ))}
        </div>

        <h2
          className={`${pixel} mt-5 text-[26px] leading-[1.08] tracking-[-0.5px] text-neutral-900 sm:text-[30px]`}
        >
          {product.title}
        </h2>

        <p
          className={`${body} mt-1.5 text-[14px] font-medium tracking-[-0.15px] text-neutral-500`}
        >
          {product.flavor}
        </p>

        <p
          className={`${body} mt-4 text-[15px] leading-[1.55] tracking-[-0.15px] text-neutral-600`}
        >
          {product.description}
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
          <a
            href={product.primaryHref}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-1.5 border-b border-neutral-300 text-[14.5px] font-medium tracking-[-0.15px] text-neutral-800 transition-colors duration-200 hover:border-neutral-900 hover:text-neutral-900`}
          >
            {product.primaryCta}
            <span className="transition-transform duration-200 group-hover:translate-x-0.5">
              →
            </span>
          </a>
          <a
            href={product.secondaryHref}
            target={product.secondaryHref.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            className={`inline-flex h-9 items-center rounded-full border border-neutral-300 px-4 text-[13.5px] font-medium tracking-[-0.15px] text-neutral-700 transition-colors duration-200 hover:border-neutral-900 hover:text-neutral-900`}
          >
            {product.secondaryCta}
          </a>
        </div>
      </div>

      {/* Visual */}
      <div className="relative mt-8 min-w-0 md:mt-0">
        <ProductVisual product={product} />
      </div>
    </article>
  )
}

function ProductsSection() {
  const [featured, ...rest] = products
  return (
    <section className="border-t border-neutral-200 bg-[#FEFFFC]">
      <div className="mx-auto max-w-[1200px] px-6 py-20 md:py-28">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <Reveal className="lg:col-span-3">
            <ProductCard product={featured} featured />
          </Reveal>

          {rest.map((product, i) => (
            <Reveal key={product.id} delay={(i % 3) * 90}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ──────────────────────────────────────────────
   CTA
   ────────────────────────────────────────────── */

function ProductsCta() {
  return (
    <section className="border-t border-neutral-200 bg-[#FEFFFC]">
      <div className="mx-auto max-w-[760px] px-6 py-24 text-center md:py-[120px]">
        <Reveal>
          <p
            className={`${pixel} text-[28px] leading-[1.15] tracking-[-0.5px] text-neutral-900 sm:text-[36px]`}
          >
            Ready to transform your data?
          </p>
          <p
            className={`${body} mx-auto mt-4 max-w-[480px] text-[16px] leading-[1.6] text-neutral-600`}
          >
            Book a demo for Ask Data or get support for our Power BI visuals.
          </p>
          <a
            href="/contact"
            className={`${body} group mt-9 inline-flex h-12 items-center gap-3 rounded-full bg-neutral-900 px-8 text-[15px] font-medium text-white transition-colors duration-300 hover:bg-neutral-800`}
          >
            Get in touch
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  )
}

/* ──────────────────────────────────────────────
   Page
   ────────────────────────────────────────────── */

export default function ProductsPage() {
  return (
    <div className="min-w-0 w-full bg-[#FEFFFC] text-neutral-900">
      <Navbar forceDark />
      <main>
        <ProductsHero />
        <ProductsSection />
        <ProductsCta />
      </main>
      <Footer />
    </div>
  )
}
