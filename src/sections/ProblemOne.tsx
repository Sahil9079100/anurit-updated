import { imgImage5 } from "../assets"

export default function ProblemOne() {
  return (
    <section className="max-w-[1600px] mx-auto px-4 lg:px-[24px] py-16 lg:py-24">
      <div className="flex flex-col md:flex-row gap-12 md:gap-8 lg:gap-24 items-center">
        {/* Image size knob: change lg:w-[600px] to make the image larger/smaller. */}
        <div className="flex-shrink-0 w-[80%] mx-auto md:w-[45%] lg:w-[540px] aspect-square relative">
          <img alt="" className="w-full h-full object-cover" src={imgImage5} />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-['Pixelify_Sans:Regular'] font-normal text-[24px] md:text-[26px] text-black leading-normal mb-6 [word-break:break-word]">
            {`Real estate generates enormous amounts`}
            <br />
            {`of data. Making sense of it shouldn't be`}
            <br />
            {`another problem.`}
          </p>
          <div className="font-['Plus_Jakarta_Sans:Regular'] font-normal text-[20px] md:text-[17px] text-black leading-normal space-y-4">
            <p className="text-[15px] lg:text-[22px]">
              Property systems, financial platforms, operational tools,
              spreadsheets, reporting systems and other sources all produce
              information.
            </p>
            <p>{`But information scattered across systems doesn't automatically become useful intelligence.`}</p>
            <p>This is where Anurit enters.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
