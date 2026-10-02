interface ServiceCardProps {
  title: string;
  description: string;
  wave1: string;
  wave2: string;
  wave3: string;
}

export default function ServiceCard({ title, description, wave1, wave2, wave3 }: ServiceCardProps) {
  return (
    <div className="relative overflow-hidden rounded-[32px] border border-[rgba(163,163,163,0.27)] bg-[rgba(245,244,240,0.2)] h-[409px] flex flex-col">
      <p className="relative z-10 font-['Pixelify_Sans:Regular'] font-normal text-[32px] text-black text-center pt-[19px] px-4">
        {title}
      </p>
      <p className="relative z-10 font-['Plus_Jakarta_Sans:Regular'] font-normal text-[18px] text-black px-7 pt-2 flex-1">
        {description}
      </p>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute flex items-center justify-center" style={{ width: 536, height: 423, left: -51, top: 106 }}>
          <div className="flex-none" style={{ transform: "rotate(-12.23deg)" }}>
            <div className="relative" style={{ width: 477, height: 330 }}>
              <div className="absolute" style={{ inset: "-20.88% -14.44% -20.89% -14.45%" }}>
                <img alt="" className="block max-w-none size-full" src={wave1} />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex items-center justify-center" style={{ width: 537, height: 423, left: -31, top: 171 }}>
          <div className="flex-none" style={{ transform: "rotate(-12.23deg)" }}>
            <div className="relative" style={{ width: 478, height: 330 }}>
              <div className="absolute" style={{ inset: "-20.73% -14.31%" }}>
                <img alt="" className="block max-w-none size-full" src={wave2} />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex items-center justify-center" style={{ width: 536, height: 423, left: -2, top: 225 }}>
          <div className="flex-none" style={{ transform: "rotate(-12.23deg)" }}>
            <div className="relative" style={{ width: 477, height: 330 }}>
              <div className="absolute" style={{ inset: "-20.73% -14.34%" }}>
                <img alt="" className="block max-w-none size-full" src={wave3} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative z-10 mb-[19px] mx-auto">
        <div className="relative backdrop-blur-[2.45px] bg-[rgba(217,217,217,0.89)] h-[42px] rounded-[12px] w-[154px] flex items-center justify-center">
          <span className="font-['Plus_Jakarta_Sans:Regular'] font-normal text-[18px] text-black whitespace-pre">{`Explore         →`}</span>
        </div>
      </div>
    </div>
  );
}
