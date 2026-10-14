import type { Metadata } from "next"
import ProductsView from "@/views/ProductsView"

export const metadata: Metadata = {
  title: "Products",
  description:
    "Power BI visuals and AI products from Anurit Innovation — built for the way you work.",
}

export default function ProductsPage() {
  return <ProductsView />
}