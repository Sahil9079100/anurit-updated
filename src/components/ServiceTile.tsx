import type { Service } from "../data/services"

interface ServiceTileProps {
  service: Service
  index: number
  showDescription?: boolean
  className?: string
}

export default function ServiceTile({
  service,
  index,
  showDescription = false,
  className = "",
}: ServiceTileProps) {
  return (
    <div
      className={`relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/20 p-4 text-white shadow-[0_10px_30px_-12px_rgba(0,0,0,0.35)] ${service.gradient} ${className}`}
    >
      <span className="font-['Pixelify_Sans:Regular'] text-[13px] leading-none text-white/70">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div>
        <p className="font-['Plus_Jakarta_Sans:Regular'] text-[15px] leading-snug">
          {service.title}
        </p>
        {showDescription && (
          <p className="mt-2 font-['Plus_Jakarta_Sans:Regular'] text-[13px] leading-snug text-white/75">
            {service.tagline}
          </p>
        )}
      </div>
    </div>
  )
}
