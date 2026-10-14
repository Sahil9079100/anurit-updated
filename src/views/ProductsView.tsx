"use client"

import type { ReactNode } from "react"
import Link from "next/link"
import Navbar from "@/components/Navbar"
import Footer from "@/sections/Footer"
import { useReveal } from "@/hooks/useReveal"
import { products, type Product } from "@/data/products"
import {
  imgProductAskData,
  imgProductRowNote,
  imgProductDynamicUrl,
} from "@/assets"

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
   Mini product visual (CSS-drawn — Page Tracker only)
   ────────────────────────────────────────────── */

function VisualPageTracker({ accent }: { accent: string }) {
  const bars = [34, 52, 40, 78, 58, 64, 46]
  return (
    <div className="mt-8 flex flex-col gap-3 rounded-xl border border-neutral-200 bg-white p-4">
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

function ProductVisual({ product }: { product: Product }) {
  const image = (() => {
    switch (product.id) {
      case "ask-data":
        return imgProductAskData
      case "row-note":
        return imgProductRowNote
      case "dynamic-url-image":
        return imgProductDynamicUrl
      default:
        return ""
    }
  })()

  // Products with a dedicated screenshot image
  if (image) {
    return (
      <div className="mx-auto mt-8 w-[96%] max-w-[600px] overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50 shadow-[0_10px_30px_-18px_rgba(0,0,0,0.25)] sm:mt-10">
        <img
          src={image}
          alt={product.title}
          loading="lazy"
          className="h-auto w-full object-cover"
        />
      </div>
    )
  }

  // Page Tracker has no image yet — keep the CSS-drawn visual
  return <VisualPageTracker accent={product.accent} />
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
        className={`${pixel} product-num pointer-events-none absolute right-4 top-0 text-[72px] leading-none tracking-[-2px] text-neutral-300`}
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
          <Link
            href="/contact"
            className={`${body} group mt-9 inline-flex h-12 items-center gap-3 rounded-full bg-neutral-900 px-8 text-[15px] font-medium text-white transition-colors duration-300 hover:bg-neutral-800`}
          >
            Get in touch
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </Reveal>
      </div>
    </section>
  )
}

/* ──────────────────────────────────────────────
   View
   ────────────────────────────────────────────── */

export default function ProductsView() {
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