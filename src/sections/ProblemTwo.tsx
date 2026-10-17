import { imgImage6 } from "../assets"

export default function ProblemTwo() {
  return (
    <section className="max-w-[1600px] mx-auto px-4 lg:px-[24px] py-16 lg:py-24">
      <div className="flex flex-col md:flex-row gap-12 md:gap-8 lg:gap-24 items-center">
        <div className="flex-1 min-w-0">
          <p className="font-['Pixelify_Sans:Regular'] font-normal text-[24px] md:text-[26px] text-black leading-normal mb-6 [word-break:break-word]">
            {`Data and AI together turn scattered real estate information into clear, confident decisions.`}
          </p>
          <div className="font-['Plus_Jakarta_Sans:Regular'] font-normal text-[18px] md:text-[16px] text-black leading-normal space-y-3">
            <p className="text-[14px] lg:text-[20px]">{`Data from property systems, financial platforms and operational tools flows in constantly, but raw numbers alone don't reveal what matters.`}</p>
            <p>{`AI sifts through that noise, spots the patterns and turns scattered data into decisions you can act on with confidence.`}</p>
          </div>
        </div>
        <div className="flex-shrink-0 w-[80%] mx-auto md:w-[45%] lg:w-[620px] aspect-[16/10] relative overflow-hidden rounded-lg">
          <img alt="" className="w-full h-full object-cover" src={imgImage6} />
        </div>
      </div>
    </section>
  )
}
