import { imgImage9 } from "../assets"

export default function GenericAi() {
  return (
    <section className="max-w-[1600px] mx-auto px-4 lg:px-[24px] py-16 lg:py-24">
      <div className="flex flex-col md:flex-row gap-12 md:gap-8 lg:gap-24 items-center">
        <div className="flex-shrink-0 w-[80%] mx-auto md:w-[45%] lg:w-[620px] aspect-[16/10] relative">
          <img alt="" className="w-full h-full object-cover" src={imgImage9} />
        </div>
        <div className="flex-1 min-w-0 text-right">
          <p className="font-['Pixelify_Sans:Regular'] font-normal text-[24px] md:text-[26px] text-black leading-normal mb-6 [word-break:break-word]">
            {`Generic AI knows a lot. It doesn't know your business.`}
          </p>
          <p className="font-['Plus_Jakarta_Sans:Regular'] font-normal text-[14px] md:text-[15px] lg:text-[20px] text-black leading-normal">
            {`Every organization has its own data, processes, terminology, and way of working. Generic AI models aren't built around that context.`}
          </p>
        </div>
      </div>
    </section>
  )
}
