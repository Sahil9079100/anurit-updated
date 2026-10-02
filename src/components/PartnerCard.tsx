interface PartnerCardProps {
  logo: string;
  logoAlt: string;
  description: string;
  descriptionMaxWidthClass: string;
  frame1: string;
  frame2: string;
  frame3: string;
}

export default function PartnerCard({
  logo,
  logoAlt,
  description,
  descriptionMaxWidthClass,
  frame1,
  frame2,
  frame3,
}: PartnerCardProps) {
  return (
    <div className="bg-white rounded-[31px] overflow-hidden relative" style={{ minHeight: 637 }}>
      <div className="absolute bottom-0 left-0 right-0 h-[523px] pointer-events-none overflow-hidden">
        <div className="absolute" style={{ inset: "-16.37% -20.16% -24.77% -9.91%" }}>
          <img alt="" className="block max-w-none size-full" src={frame1} />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-[428px] pointer-events-none overflow-hidden">
        <div className="absolute" style={{ inset: "-20% -26.31% -52.46% -10.41%" }}>
          <img alt="" className="block max-w-none size-full" src={frame2} />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-[372px] pointer-events-none overflow-hidden">
        <div className="absolute" style={{ inset: "-23.01% -20.03% -75.41% -9.9%" }}>
          <img alt="" className="block max-w-none size-full" src={frame3} />
        </div>
      </div>
      <div className="relative z-10 p-8 flex flex-col items-center">
        <img alt={logoAlt} className="h-[163px] object-contain mb-6" src={logo} />
        <p
          className={`font-['Plus_Jakarta_Sans:Regular'] font-normal text-[24px] text-black text-center leading-normal ${descriptionMaxWidthClass}`}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
