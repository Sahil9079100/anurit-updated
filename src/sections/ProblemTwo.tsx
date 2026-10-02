import { imgImage6 } from "../assets";

export default function ProblemTwo() {
  return (
    <section className="max-w-[1440px] mx-auto px-8 lg:px-[89px] py-16 lg:py-24">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
        <div className="flex-1 min-w-0">
          <p className="font-['Pixelify_Sans:Regular'] font-normal text-[32px] text-black leading-normal mb-6 [word-break:break-word]">
            {`Real estate generates enormous amounts of data. Making sense of it shouldn't be another problem.`}
          </p>
          <div className="font-['Plus_Jakarta_Sans:Regular'] font-normal text-[18px] text-black leading-normal space-y-3">
            <p>{`Property systems, financial platforms, operational tools and other sources all produce information.`}</p>
            <p>{`But information scattered across systems doesn't automatically become useful intelligence`}</p>
          </div>
        </div>
        <div className="flex-shrink-0 w-full lg:w-[724px] h-[453px] relative overflow-hidden rounded-lg">
          <img alt="" className="w-full h-full object-cover" src={imgImage6} />
        </div>
      </div>
    </section>
  );
}
