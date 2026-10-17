import type { ReactNode } from "react"

interface PartnerCardProps {
  logo: string
  logoAlt: string
  description: ReactNode
  descriptionMaxWidthClass: string
}

export default function PartnerCard({
  logo,
  logoAlt,
  description,
  descriptionMaxWidthClass,
}: PartnerCardProps) {
  return (
    <article
      className="relative overflow-hidden rounded-2xl border border-white/10 backdrop-blur-[16px]"
      style={{
        minHeight: 360,
        background:
          "linear-gradient(135deg, rgba(255, 255, 255, 0.07) 0%, rgba(255, 255, 255, 0.03) 100%)",
      }}
    >
      <div className="relative p-6 flex flex-col items-center">
        <img
          alt={logoAlt}
          className="h-[74px] object-contain mb-3"
          src={logo}
        />
        <p
          className={`font-['Plus_Jakarta_Sans:Regular'] font-normal text-[16px] text-black text-center leading-normal ${descriptionMaxWidthClass}`}
        >
          {description}
        </p>
      </div>
    </article>
  )
}
