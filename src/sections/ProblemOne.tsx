import { imgImage5 } from "../assets";

export default function ProblemOne() {
  return (
    <section className="max-w-[1440px] mx-auto px-8 lg:px-[89px] py-16 lg:py-24">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
        <div className="flex-shrink-0 w-full lg:w-[435px] h-[435px] relative">
          <img alt="" className="w-full h-full object-cover" src={imgImage5} />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-['Pixelify_Sans:Regular'] font-normal text-[32px] text-black leading-normal mb-6 [word-break:break-word]">
            {`Real estate generates enormous amounts of data. Making sense of it shouldn't be another problem.`}
          </p>
          <div className="font-['Plus_Jakarta_Sans:Regular'] font-normal text-[20px] text-black leading-normal space-y-4">
            <p>Property systems, financial platforms, operational tools, spreadsheets, reporting systems and other sources all produce information.</p>
            <p>{`But information scattered across systems doesn't automatically become useful intelligence.`}</p>
            <p>This is where Anurit enters.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
