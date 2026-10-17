import { imgImage4 } from "../assets"

export default function Hero() {
  return (
    <section
      className="relative w-full min-h-screen overflow-x-clip bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${imgImage4})` }}
    >
      <div className="relative z-10 px-4 lg:px-[24px] pt-[171px] pb-24 max-w-[1600px] mx-auto">
        {/* Title offset — translate(x, y): x = right/left, y = down/up */}
        <h1
          className="font-['Plus_Jakarta_Sans:Regular'] font-normal text-white leading-normal mb-8 max-w-[380px] [word-break:break-word] text-[24px] sm:max-w-[520px] translate-x-4 translate-y-6 [text-shadow:0_1px_14px_rgba(255,255,255,0.45)] md:text-[42px] md:max-w-[520px] md:translate-x-10 md:translate-y-10"
        >
          {`Turning `}
          <span className="font-['Pixelify_Sans:Regular'] font-normal">
            Real Estate
          </span>
          {`\ndata into better\ndecisions.`}
        </h1>

        {/* Paragraph box — pushed down with a margin so the hero section grows to contain it (no overflow/cut). Horizontal offset kept via transform. On mobile it centers horizontally. */}
        <div
          className="backdrop-blur-[7.55px] bg-[rgba(92,92,92,0.3)] border border-[rgba(0,0,0,0.46)] border-solid rounded-[10px] p-4 max-w-[400px] mt-20 mx-auto md:mx-0 md:p-6 md:mt-[150px] md:translate-x-5 md:max-w-[420px] lg:max-w-[470px] lg:p-8"
        >
          <p className="font-['Plus_Jakarta_Sans:Regular'] font-normal text-[14px] text-white leading-normal md:text-[18px] lg:text-[20px]">
            We build data, analytics, and intelligent technology that help real
            estate teams
            <br />
            understand their business and move faster.
          </p>
        </div>
      </div>
    </section>
  )
}
