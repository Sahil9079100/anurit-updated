import PartnerCard from "../components/PartnerCard"
import { imgImage10, imgImage11 } from "../assets"

export default function OurPartners() {
  return (
    <section className="relative isolate overflow-x-clip max-w-[1600px] mx-auto px-4 lg:px-[24px] py-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute left-[8%] top-[10%] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.45),rgba(139,92,246,0.25)_45%,transparent_70%)] blur-[120px]" />
        <div className="absolute right-[8%] bottom-[5%] h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle_at_center,rgba(79,70,229,0.35),transparent_70%)] blur-[120px]" />
      </div>

      <p className="font-['Pixelify_Sans:Regular'] font-normal text-[36px] text-black text-center mb-4">
        Our Partners
      </p>
      <p className="font-['Plus_Jakarta_Sans:Regular'] font-normal text-[20px] text-[#2c2c2c] text-center mb-12">
        Trusted by teams managing real-world assets
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1120px] mx-auto">
        <PartnerCard
          logo={imgImage10}
          logoAlt="Highmark"
          description={
            <>
              One of the largest U.S. property management firms with{" "}
              <strong className="font-bold">400+ communities</strong> and{" "}
              <strong className="font-bold">30+ years</strong> of experience
              delivering premier residential living.
            </>
          }
          descriptionMaxWidthClass="max-w-[370px]"
        />
        <PartnerCard
          logo={imgImage11}
          logoAlt="Brookfield Properties"
          description={
            <>
              A global real estate developer and operator managing{" "}
              <strong className="font-bold">675+ properties</strong> across{" "}
              <strong className="font-bold">325M+ sq ft</strong> in key gateway
              cities worldwide.
            </>
          }
          descriptionMaxWidthClass="max-w-[347px]"
        />
      </div>
    </section>
  )
}
