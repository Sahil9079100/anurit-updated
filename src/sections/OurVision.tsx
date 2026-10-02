import { imgImageRemovebgPreview1 } from "../assets";

export default function OurVision() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* blur orbs */}
      <div className="absolute left-[-335px] top-0 w-[526px] h-[574px] rounded-[225px] bg-[rgba(130,137,216,0.5)] blur-[22.35px] pointer-events-none" />
      <div className="absolute left-[-285px] top-[69px] w-[426px] h-[453px] rounded-[192px] bg-[rgba(97,71,213,0.5)] blur-[22.35px] pointer-events-none" />
      <div className="absolute left-[-237px] top-[115px] w-[345px] h-[363px] rounded-[192px] bg-[rgba(31,67,212,0.5)] blur-[22.35px] pointer-events-none" />
      <div className="absolute right-[-335px] top-0 w-[526px] h-[574px] rounded-[225px] bg-[rgba(130,216,143,0.5)] blur-[22.35px] pointer-events-none" />
      <div className="absolute right-[-285px] top-[69px] w-[426px] h-[453px] rounded-[192px] bg-[rgba(83,213,71,0.5)] blur-[22.35px] pointer-events-none" />
      <div className="absolute right-[-237px] top-[115px] w-[345px] h-[363px] rounded-[192px] bg-[rgba(31,212,70,0.5)] blur-[22.35px] pointer-events-none" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-8 text-center">
        <p className="font-['Pixelify_Sans:Regular'] font-normal text-[36px] text-black mb-4">
          Our Vision
        </p>
        <p className="font-['Plus_Jakarta_Sans:Regular'] font-normal text-[20px] text-[#2c2c2c] mb-12">
          Enabling partners to make decisions
        </p>
        <div className="relative w-full max-w-[1440px] mx-auto" style={{ aspectRatio: "1460/330" }}>
          <img alt="" className="w-full h-full object-cover" src={imgImageRemovebgPreview1} />
        </div>
      </div>
    </section>
  );
}
