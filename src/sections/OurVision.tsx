import { imgImageRemovebgPreview1 } from "../assets"

export default function OurVision() {
  return (
    <section className="relative py-24 overflow-x-clip">
      {/* blur orbs — wrapped so they can overlap the next section and stay above it */}
      <div className="pointer-events-none absolute inset-0 z-[5]">
      <div className="absolute left-[-120px] md:left-[-220px] top-[205px] md:top-[250px] w-[150px] md:w-[350px] h-[165px] md:h-[380px] rounded-[70px] md:rounded-[155px] bg-[rgba(130,137,216,0.5)] blur-[14px] md:blur-[22.35px]" />
      <div className="absolute left-[-100px] md:left-[-185px] top-[230px] md:top-[300px] w-[125px] md:w-[285px] h-[130px] md:h-[300px] rounded-[60px] md:rounded-[127px] bg-[rgba(97,71,213,0.5)] blur-[14px] md:blur-[22.35px]" />
      <div className="absolute left-[-85px] md:left-[-155px] top-[255px] md:top-[340px] w-[100px] md:w-[230px] h-[105px] md:h-[240px] rounded-[55px] md:rounded-[137px] bg-[rgba(31,67,212,0.5)] blur-[14px] md:blur-[22.35px]" />
      <div className="absolute right-[-120px] md:right-[-220px] top-[205px] md:top-[250px] w-[150px] md:w-[350px] h-[165px] md:h-[380px] rounded-[70px] md:rounded-[155px] bg-[rgba(130,216,143,0.5)] blur-[14px] md:blur-[22.35px]" />
      <div className="absolute right-[-100px] md:right-[-185px] top-[230px] md:top-[300px] w-[125px] md:w-[285px] h-[130px] md:h-[300px] rounded-[60px] md:rounded-[127px] bg-[rgba(83,213,71,0.5)] blur-[14px] md:blur-[22.35px]" />
      <div className="absolute right-[-85px] md:right-[-155px] top-[255px] md:top-[340px] w-[100px] md:w-[230px] h-[105px] md:h-[240px] rounded-[55px] md:rounded-[137px] bg-[rgba(31,212,70,0.5)] blur-[14px] md:blur-[22.35px]" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-4 lg:px-[24px] text-center">
        <p className="font-['Pixelify_Sans:Regular'] font-normal text-[36px] text-black mb-4">
          Our Vision
        </p>
        <p className="font-['Plus_Jakarta_Sans:Regular'] font-normal text-[20px] text-[#2c2c2c] mb-12">
          Enabling partners to make decisions
        </p>
      </div>
      {/* Full-bleed image: spans the entire viewport width with no side margin. */}
      {/* Position knobs: scale(Z) zooms (1 = full image, >1 zooms in), translate(x, y) nudges — */}
      {/* negative x shifts the image left (to recenter the fingers), positive y shifts down. Tune below. */}
      <div
        className="relative z-10 w-full overflow-hidden"
        style={{ aspectRatio: "1460/330" }}
      >
        <img
          alt=""
          className="w-full h-full object-cover scale-[1.18] md:scale-[1.06] translate-x-[-5px] md:translate-x-[-25px]"
          src={imgImageRemovebgPreview1}
        />
      </div>
    </section>
  )
}
