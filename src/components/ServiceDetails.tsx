import { services } from "../data/services"

export default function ServiceDetails() {
  return (
    <section aria-label="Service details" className="mx-auto mt-24 max-w-6xl border-t border-black/10">
      {services.map((service, i) => (
        <article
          key={service.slug}
          id={service.slug}
          className="grid scroll-mt-28 grid-cols-1 gap-8 border-b border-black/10 py-14 md:grid-cols-12 md:gap-12"
        >
          <div className="md:col-span-5">
            <span
              className={`grid h-8 w-8 place-items-center rounded-lg font-['Pixelify_Sans:Regular'] text-[13px] text-white ${service.gradient}`}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <h2 className="mt-5 font-['Pixelify_Sans:Regular'] font-normal text-[28px] leading-tight text-black">
              {service.title}
            </h2>
            <p className="mt-3 max-w-sm font-['Plus_Jakarta_Sans:Regular'] text-[17px] leading-relaxed text-[#474444]">
              {service.tagline}
            </p>
          </div>

          <ul className="grid list-none grid-cols-1 gap-x-8 gap-y-3 p-0 sm:grid-cols-2 md:col-span-7">
            {service.capabilities.map((capability) => (
              <li
                key={capability}
                className="flex items-start gap-3 font-['Plus_Jakarta_Sans:Regular'] text-[16px] leading-snug text-[#2c2c2c]"
              >
                <span className={`mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full ${service.gradient}`} />
                {capability}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  )
}
