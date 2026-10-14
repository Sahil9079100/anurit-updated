import Link from "next/link"

export default function ContactCta() {
  return (
    <section className="mx-auto flex max-w-[1600px] flex-col items-center px-4 py-24 text-center lg:px-[24px]">
      <p className="font-['Pixelify_Sans:Regular'] font-normal text-[36px] leading-tight text-black">
        Let's talk about your data
      </p>
      <p className="mt-4 font-['Plus_Jakarta_Sans:Regular'] font-normal text-[20px] text-[#2c2c2c]">
        Have a question or a project in mind? We'd love to hear from you.
      </p>
      <Link
        href="/contact"
        className="group mt-10 inline-flex h-12 items-center gap-3 rounded-full bg-black px-8 font-['Plus_Jakarta_Sans:Regular'] text-[16px] text-white transition-colors duration-300 hover:bg-black/80"
      >
        Talk to Us
        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
      </Link>
    </section>
  )
}
