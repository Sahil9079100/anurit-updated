export interface AboutService {
  id: string
  number: string
  title: string
  tagline: string
  capabilities: string[]
}

export interface TrustPillar {
  number: string
  title: string
  description: string
}

/** Stories / hero copy for the About page. */
export const aboutStory = {
  eyebrow: "About Us",
  title: "Turning real estate data into AI-powered intelligence.",
  intro: [
    "Anurit Innovation started with the vision to turn real estate data into AI-Powered Intelligence.",
    "As a specialized data studio, our team of agile engineers is dedicated to helping real estate developers, asset managers, and property operators solve complex operational and financial challenges. Through cloud modernization, automated reporting, and predictive AI insights, we bridge the gap between raw property metrics and high-impact strategic decision-making — ensuring your organization stays ahead in an increasingly digital landscape.",
  ],
  trustedBy: [
    "Trusted globally, we proudly serve some of the world's premier real estate and property management companies — including enterprise leaders like",
  ],
  trustedBrands: ["Highmark Residential", "Brookfield Properties"],
} as const

export const aboutServices: AboutService[] = [
  {
    id: "real-estate-analytics-bi",
    number: "01",
    title: "Real Estate Analytics & BI",
    tagline: "Turn property data into strategic decisions.",
    capabilities: [
      "Multifamily Performance & Portfolio Dashboards",
      "Occupancy, Leasing & Resident Lifecycle Analytics",
      "Revenue, NOI & Cash Flow Analytics",
      "Budget vs. Actual Variance Analysis",
      "Concessions, Bad Debt & Delinquency Analytics",
      "Executive & Investor Reporting Solutions",
      "Asset Management Analytics",
      "Custom Power BI Reporting & Data Modeling",
    ],
  },
  {
    id: "data-engineering-cloud-modernization",
    number: "02",
    title: "Data Engineering & Cloud Modernization",
    tagline: "Build a reliable, enterprise-grade data foundation.",
    capabilities: [
      "Modern Data Warehouse & Lakehouse Architecture",
      "Azure Data Engineering & Microsoft Fabric Integration",
      "SQL Database Architecture & Optimization",
      "Automated ETL / ELT Data Pipelines",
      "Seamless Yardi, RealPage & MRI Data Integrations",
      "API & Third-Party System Integrations",
      "Data Governance, Quality & Validation Frameworks",
      "Cloud Migration & Infrastructure Scalability",
    ],
  },
  {
    id: "ai-intelligent-automation",
    number: "03",
    title: "AI & Intelligent Automation",
    tagline: "Move from reporting past performance to predicting future opportunities.",
    capabilities: [
      "Custom AI Agents & Autonomous Workflow Bots",
      "RAG-Based Enterprise Chatbots for Internal Knowledge Base",
      '"Ask Your Data" Natural Language Querying (Chat with Yardi / Financials)',
      "AI-Powered Document Intelligence (Automated Lease Parsing & Invoice Processing)",
      "Predictive NOI, Occupancy & Rent Optimization Models",
      "Real-time Anomaly & Fraud Detection in Property Accounts",
      "Automated Insight Summaries for Executive Dashboards",
      "Private, Secure & Compliance-Ready Enterprise LLM Implementations",
      "Generative AI Integration with Existing Enterprise Data Lakes",
      "AI-Driven Resident Churn Prediction & Retention Analytics",
      "Automated Maintenance Ticket Routing & Categorization via NLP",
    ],
  },
  {
    id: "power-bi-custom-analytics",
    number: "04",
    title: "Power BI & Custom Analytics",
    tagline: "Power BI built precisely around the way your business operates.",
    capabilities: [
      "Enterprise Power BI Dashboard & Report Development",
      "Advanced DAX Development & Complex Business Logic",
      "Financial Reporting & Paginated Reports (PBRS)",
      "Power BI Performance Optimization & Load Balancing",
      "Semantic Models, Dynamic Measures & Custom Navigation",
      "Granular Row-Level Security (RLS) for Multi-Tenant Access",
      "Power BI Embedded for Client & Tenant Portals",
      "Custom Power BI Visuals & AppSource-Ready Development",
    ],
  },
  {
    id: "custom-software-digital-products",
    number: "05",
    title: "Custom Software & Digital Products",
    tagline: "From business idea to scalable production product.",
    capabilities: [
      "Custom SaaS Platforms & Web Applications",
      "Internal Business Operations Applications",
      "Data-Driven Applications & Analytics Dashboards",
      "Customer, Investor & Tenant Portals",
      "Robust APIs & System Integrations",
      "Rapid MVP Development & Modernization",
      "Custom Workflow Automation Tools",
    ],
  },
  {
    id: "managed-data-analytics-services",
    number: "06",
    title: "Managed Data & Analytics Services",
    tagline: "Your dedicated data team, without the overhead.",
    capabilities: [
      "Power BI Support & Dashboard Maintenance",
      "Continuous Data Pipeline Monitoring & Performance Tuning",
      "Ongoing Report Enhancements & Feature Rollouts",
      "Proactive Data Quality & Integrity Audits",
      "Cloud Infrastructure Management & Cost Optimization",
      "Analytics Team Augmentation & Co-Development",
      "24/7 System Monitoring, SLA & Technical Support",
    ],
  },
]

export const trustPillars: TrustPillar[] = [
  {
    number: "1",
    title: "Deep Real Estate Domain Mastery",
    description:
      "We speak fluent property-management language — from Yardi schema mapping to NOI formulas, so our solutions fit your business immediately.",
  },
  {
    number: "2",
    title: "Enterprise-Grade Security & Governance",
    description:
      "We design secure, compliant infrastructure — row-level security, private LLMs, and enterprise cloud protocols — so your data stays isolated and safe.",
  },
  {
    number: "3",
    title: "Agile Execution & Rapid Time-to-Value",
    description:
      "Our agile approach delivers high-impact wins — real-time dashboards or automated workflows — within weeks, not months.",
  },
  {
    number: "4",
    title: "Unifying Fragmented Tech Ecosystems",
    description:
      "We build seamless integration layers that turn disparate property systems into a single source of truth.",
  },
  {
    number: "5",
    title: "Future-Proof Innovation (AI Integration)",
    description:
      "We embed generative AI and predictive modeling into business intelligence, turning static reports into proactive decision engines.",
  },
]
