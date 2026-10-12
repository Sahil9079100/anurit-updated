export interface Product {
  id: string
  num: string
  title: string
  flavor: string
  tags: string[]
  description: string
  primaryCta: string
  primaryHref: string
  secondaryCta: string
  secondaryHref: string
  /** Solid accent color (no gradients) used for tags, icons and highlights. */
  accent: string
  accentSoft: string
  accentBorder: string
}

export const products: Product[] = [
  {
    id: "ask-data",
    num: "01",
    title: "Ask Data",
    flavor: "Adaptive RAG Chatbot",
    tags: ["New", "Power BI Visual"],
    description:
      "Enterprise-grade Adaptive Agentic RAG Chatbot. Turn your documents into intelligent, context-aware answers with Power BI integration.",
    primaryCta: "Learn more",
    primaryHref: "https://www.anuritinnovation.com/products/ask-data",
    secondaryCta: "Download PBIVIZ",
    secondaryHref: "https://www.anuritinnovation.com/pbiviz/askdata.pbiviz",
    accent: "text-[#0ea5e9]",
    accentSoft: "bg-[#0ea5e9]/10",
    accentBorder: "border-[#0ea5e9]/30",
  },
  {
    id: "row-note",
    num: "02",
    title: "Row Note",
    flavor: "Auto Comments & Annotations",
    tags: ["New", "Power BI Visual"],
    description:
      "Enterprise-grade Row Note AI commenting platform with intelligent, row-level insights and contextual collaboration. Contact us for advanced Power BI integration.",
    primaryCta: "Learn more",
    primaryHref: "https://www.anuritinnovation.com/products/row-note",
    secondaryCta: "Contact us",
    secondaryHref: "/contact",
    accent: "text-[#6366f1]",
    accentSoft: "bg-[#6366f1]/10",
    accentBorder: "border-[#6366f1]/30",
  },
  {
    id: "page-tracker",
    num: "03",
    title: "Page Tracker",
    flavor: "Page Analytics",
    tags: ["New", "Power BI Visual"],
    description:
      "Monitor page-level activity and navigation patterns within your Power BI reports. Gain actionable usage insights to optimise report design and user experience.",
    primaryCta: "Learn more",
    primaryHref: "https://www.anuritinnovation.com/products/page-tracker",
    secondaryCta: "Download PBIVIZ",
    secondaryHref: "https://www.anuritinnovation.com/pbiviz/pagetracker.pbiviz",
    accent: "text-[#f59e0b]",
    accentSoft: "bg-[#f59e0b]/10",
    accentBorder: "border-[#f59e0b]/30",
  },
  {
    id: "dynamic-url-image",
    num: "04",
    title: "Dynamic URL Image Visual",
    flavor: "Power BI Certified",
    tags: ["Power BI Visual", "Certified"],
    description:
      "Display images from dynamic URLs in your Power BI reports. Perfect for thumbnails, logos, and rich data visualizations.",
    primaryCta: "Learn more",
    primaryHref: "https://www.anuritinnovation.com/products/power-bi",
    secondaryCta: "Get from Marketplace",
    secondaryHref:
      "https://marketplace.microsoft.com/en-us/product/power-bi-visuals/anurit2106.dynamic-url-image-visual",
    accent: "text-[#f43f5e]",
    accentSoft: "bg-[#f43f5e]/10",
    accentBorder: "border-[#f43f5e]/30",
  },
]
