import PartnerCard from "../components/PartnerCard";
import {
  imgImage10,
  imgImage11,
  imgFrame9,
  imgFrame10,
  imgFrame11,
  imgFrame12,
  imgFrame13,
  imgFrame14,
} from "../assets";

export default function OurPartners() {
  return (
    <section className="max-w-[1440px] mx-auto px-8 lg:px-[89px] py-16">
      <p className="font-['Pixelify_Sans:Regular'] font-normal text-[36px] text-black text-center mb-4">
        Our Partners
      </p>
      <p className="font-['Plus_Jakarta_Sans:Regular'] font-normal text-[20px] text-[#2c2c2c] text-center mb-12">
        Trusted by teams managing real-world assets
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <PartnerCard
          logo={imgImage10}
          logoAlt="Highmark"
          description="One of the largest U.S. property management firms with 400+ communities and 30+ years of experience delivering premier residential living."
          descriptionMaxWidthClass="max-w-[370px]"
          frame1={imgFrame9}
          frame2={imgFrame10}
          frame3={imgFrame11}
        />
        <PartnerCard
          logo={imgImage11}
          logoAlt="Brookfield Properties"
          description="A global real estate developer and operator managing 675+ properties across 325M+ sq ft in key gateway cities worldwide."
          descriptionMaxWidthClass="max-w-[347px]"
          frame1={imgFrame12}
          frame2={imgFrame13}
          frame3={imgFrame14}
        />
      </div>
    </section>
  );
}
