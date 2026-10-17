import Link from "next/link"

interface ServiceCardProps {
  title: string
  description: string
  wave1: string
  wave2: string
  wave3: string
  href?: string
}

export default function ServiceCard({
  title,
  description,
  wave1,
  wave2,
  wave3,
  href,
}: ServiceCardProps) {
  return (
    <div className="relative overflow-hidden rounded-[32px] md:rounded-[32px] border border-[rgba(163,163,163,0.27)] bg-[rgba(245,244,240,0.2)] h-[230px] md:h-[300px] lg:h-[380px] flex flex-col">
      <p className="relative z-10 font-['Pixelify_Sans:Regular'] font-normal text-[22px] md:text-[26px] text-black text-left pt-[14px] md:pt-[19px] px-5 md:px-6">
        {title}
      </p>
      <p className="relative z-10 font-['Plus_Jakarta_Sans:Regular'] font-normal text-[14px] md:text-[16px] text-black px-6 md:px-5 pt-1 md:pt-2 flex-1 break-words">
        {description}
      </p>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute flex items-center justify-center"
          style={{ width: 536, height: 423, left: -51, top: 106 }}
        >
          <div className="flex-none" style={{ transform: "rotate(-12.23deg)" }}>
            <div className="relative" style={{ width: 477, height: 330 }}>
              <div
                className="absolute"
                style={{ inset: "-20.88% -14.44% -20.89% -14.45%" }}
              >
                <img
                  alt=""
                  className="block max-w-none size-full"
                  src={wave1}
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute flex items-center justify-center"
          style={{ width: 537, height: 423, left: -31, top: 171 }}
        >
          <div className="flex-none" style={{ transform: "rotate(-12.23deg)" }}>
            <div className="relative" style={{ width: 478, height: 330 }}>
              <div className="absolute" style={{ inset: "-20.73% -14.31%" }}>
                <img
                  alt=""
                  className="block max-w-none size-full"
                  src={wave2}
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute flex items-center justify-center"
          style={{ width: 536, height: 423, left: -2, top: 225 }}
        >
          <div className="flex-none" style={{ transform: "rotate(-12.23deg)" }}>
            <div className="relative" style={{ width: 477, height: 330 }}>
              <div className="absolute" style={{ inset: "-20.73% -14.34%" }}>
                <img
                  alt=""
                  className="block max-w-none size-full"
                  src={wave3}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative z-10 mb-[22px] md:mb-[19px] mr-[12px] md:mr-[19px] self-end">
        <Link
          href={href ?? "#"}
          className="group relative inline-flex h-7 md:h-8 items-center justify-center gap-1 md:gap-2 rounded-full border border-white/20 bg-black/60 px-3 md:px-4 backdrop-blur-md -mt-2 md:mt-0 transition-colors duration-300 hover:bg-black/75"
        >
          <span className="font-['Plus_Jakarta_Sans:Regular'] font-normal text-[13px] md:text-[14px] leading-none text-white">Explore</span>
          <span className="font-['Plus_Jakarta_Sans:Regular'] font-normal text-[13px] md:text-[14px] leading-none text-white transition-transform duration-300 group-hover:translate-x-1">→</span>
        </Link>
      </div>
    </div>
  )
}
