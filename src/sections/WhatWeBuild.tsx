import ServiceCard from "../components/ServiceCard"
import {
  imgVector1,
  imgVector2,
  imgVector3,
  imgVector4,
  imgVector5,
  imgVector6,
  imgVector7,
  imgVector8,
  imgVector9,
  imgVector10,
  imgVector11,
  imgVector12,
  imgVector13,
  imgVector14,
  imgVector15,
  imgVector16,
  imgVector17,
  imgVector18,
} from "../assets"

export default function WhatWeBuild() {
  return (
    <section className="max-w-[1600px] mx-auto px-4 lg:px-[24px] py-16">
      <p className="font-['Pixelify_Sans:Regular'] font-normal text-[36px] text-black text-center mb-2">
        WHAT WE BUILD
      </p>
      <p className="font-['Plus_Jakarta_Sans:Regular'] font-normal text-[18px] text-[#474444] text-center mb-10">
        From raw data to intelligent systems
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5 lg:max-w-[1440px] lg:mx-auto lg:gap-[30px]">
        <ServiceCard
          href="/service#real-estate-analytics-bi"
          title="Analytics"
          description="Turn property data into decisions."
          wave1={imgVector2}
          wave2={imgVector1}
          wave3={imgVector3}
        />
        <ServiceCard
          href="/service#data-engineering-cloud"
          title="Data Engineering"
          description="Build the foundation your data depends on."
          wave1={imgVector4}
          wave2={imgVector5}
          wave3={imgVector6}
        />
        <ServiceCard
          href="/service#ai-intelligent-automation"
          title="AI"
          description="Turn business data into intelligent action."
          wave1={imgVector7}
          wave2={imgVector8}
          wave3={imgVector9}
        />
        <ServiceCard
          href="/service#power-bi-custom-analytics"
          title="Power BI"
          description="Power BI built around your business."
          wave1={imgVector10}
          wave2={imgVector11}
          wave3={imgVector12}
        />
        <ServiceCard
          href="/service#custom-software-digital-products"
          title="Software"
          description="Turn business ideas into working products."
          wave1={imgVector13}
          wave2={imgVector14}
          wave3={imgVector15}
        />
        <ServiceCard
          href="/service#managed-data-analytics-services"
          title="Managed Services"
          description="Keep your data systems running."
          wave1={imgVector16}
          wave2={imgVector17}
          wave3={imgVector18}
        />
      </div>
    </section>
  )
}
