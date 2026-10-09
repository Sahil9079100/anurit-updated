import { imgImage4 } from "../assets"

export default function Hero() {
  return (
    <section
      className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${imgImage4})` }}
    >
      <div className="relative z-10 px-4 lg:px-[24px] pt-[171px] pb-24 max-w-[1600px] mx-auto">
        {/* Title offset — translate(x, y): x = right/left, y = down/up */}
        <h1
          className="font-['Plus_Jakarta_Sans:Regular'] font-normal text-white text-[48px] leading-normal mb-8 max-w-[560px] [word-break:break-word]"
          style={{ transform: "translate(40px, 40px)" }}
        >
          {`Turning `}
          <span className="font-['Pixelify_Sans:Regular'] font-normal">
            Real Estate
          </span>
          {`\ndata into better\ndecisions.`}
        </h1>

        {/* Paragraph box offset — translate(x, y): x = right/left, y = down/up */}
        <div
          className="backdrop-blur-[7.55px] bg-[rgba(92,92,92,0.3)] border border-[rgba(0,0,0,0.46)] border-solid rounded-[10px] p-8 max-w-[455px]"
          style={{ transform: "translate(20px, 160px)" }}
        >
          <p className="font-['Plus_Jakarta_Sans:Regular'] font-normal text-[20px] text-white leading-normal">
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
