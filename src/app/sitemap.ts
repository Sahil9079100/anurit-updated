import type { MetadataRoute } from "next"

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.anuritinnovation.com"

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { url: "", changeFrequency: "weekly", priority: 1 },
    { url: "/about", changeFrequency: "monthly", priority: 0.8 },
    { url: "/service", changeFrequency: "monthly", priority: 0.8 },
    { url: "/products", changeFrequency: "monthly", priority: 0.8 },
    { url: "/contact", changeFrequency: "monthly", priority: 0.8 },
    { url: "/privacy", changeFrequency: "yearly", priority: 0.3 },
    { url: "/terms", changeFrequency: "yearly", priority: 0.3 },
  ]

  return staticRoutes.map((route) => ({
    url: `${SITE_URL}${route.url}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency as MetadataRoute.Sitemap[number]["changeFrequency"],
    priority: route.priority,
  }))
}