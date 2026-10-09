import { imgImage6 } from "../assets"

export default function ProblemTwo() {
  return (
    <section className="max-w-[1600px] mx-auto px-4 lg:px-[24px] py-16 lg:py-24">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
        <div className="flex-1 min-w-0">
          <p className="font-['Pixelify_Sans:Regular'] font-normal text-[32px] text-black leading-normal mb-6 [word-break:break-word]">
            {`Data and AI together turn scattered real estate information into clear, confident decisions.`}
          </p>
          <div className="font-['Plus_Jakarta_Sans:Regular'] font-normal text-[18px] text-black leading-normal space-y-3">
            <p>{`Data from property systems, financial platforms and operational tools flows in constantly, but raw numbers alone don't reveal what matters.`}</p>
            <p>{`AI sifts through that noise, spots the patterns and turns scattered data into decisions you can act on with confidence.`}</p>
          </div>
        </div>
        <div className="flex-shrink-0 w-full lg:w-[724px] h-[453px] relative overflow-hidden rounded-lg">
          <img alt="" className="w-full h-full object-cover" src={imgImage6} />
        </div>
      </div>
    </section>
  )
}
