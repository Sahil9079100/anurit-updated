const assetPathPrefix = "/assets";

const imgImage4 = `${assetPathPrefix}/864bf.png`;
const imgImage5 = `${assetPathPrefix}/1e40f.png`;
const imgImage6 = `${assetPathPrefix}/bf192.png`;
const imgImage9 = `${assetPathPrefix}/08916.png`;
const imgImageRemovebgPreview1 = `${assetPathPrefix}/3f602.png`;
const imgImage10 = `${assetPathPrefix}/df04a.png`;
const imgImage11 = `${assetPathPrefix}/7be03.png`;
const imgImage12 = `${assetPathPrefix}/5a9e4.png`;
const imgVector2 = `${assetPathPrefix}/afd8f.svg`;
const imgVector1 = `${assetPathPrefix}/4c86b.svg`;
const imgVector3 = `${assetPathPrefix}/0eb4d.svg`;
const imgVector4 = `${assetPathPrefix}/7fd99.svg`;
const imgVector5 = `${assetPathPrefix}/33559.svg`;
const imgVector6 = `${assetPathPrefix}/86e41.svg`;
const imgVector7 = `${assetPathPrefix}/aa918.svg`;
const imgVector8 = `${assetPathPrefix}/21602.svg`;
const imgVector9 = `${assetPathPrefix}/98288.svg`;
const imgVector10 = `${assetPathPrefix}/14e52.svg`;
const imgVector11 = `${assetPathPrefix}/2a628.svg`;
const imgVector12 = `${assetPathPrefix}/ff13a.svg`;
const imgVector13 = `${assetPathPrefix}/1bf83.svg`;
const imgVector14 = `${assetPathPrefix}/ae0d8.svg`;
const imgVector15 = `${assetPathPrefix}/897c1.svg`;
const imgVector16 = `${assetPathPrefix}/d3d95.svg`;
const imgVector17 = `${assetPathPrefix}/55e5e.svg`;
const imgVector18 = `${assetPathPrefix}/1156b.svg`;
const imgFrame9 = `${assetPathPrefix}/e37c7.svg`;
const imgFrame10 = `${assetPathPrefix}/3686a.svg`;
const imgFrame11 = `${assetPathPrefix}/f522e.svg`;
const imgFrame12 = `${assetPathPrefix}/249d6.svg`;
const imgFrame13 = `${assetPathPrefix}/9a002.svg`;
const imgFrame14 = `${assetPathPrefix}/e2aba.svg`;
const imgLine1 = `${assetPathPrefix}/6d0b8.svg`;
const imgLine3 = `${assetPathPrefix}/70547.svg`;
const imgVector19 = `${assetPathPrefix}/96d12.svg`;
const imgVector20 = `${assetPathPrefix}/65f44.svg`;
const imgVector21 = `${assetPathPrefix}/02eb2.svg`;

interface ServiceCardProps {
  title: string;
  description: string;
  wave1: string;
  wave2: string;
  wave3: string;
}

function ServiceCard({ title, description, wave1, wave2, wave3 }: ServiceCardProps) {
  return (
    <div className="relative overflow-hidden rounded-[32px] border border-[rgba(163,163,163,0.27)] bg-[rgba(245,244,240,0.2)] h-[409px] flex flex-col">
      <p className="relative z-10 font-['Pixelify_Sans:Regular'] font-normal text-[32px] text-black text-center pt-[19px] px-4">
        {title}
      </p>
      <p className="relative z-10 font-['Plus_Jakarta_Sans:Regular'] font-normal text-[18px] text-black px-7 pt-2 flex-1">
        {description}
      </p>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute flex items-center justify-center" style={{ width: 536, height: 423, left: -51, top: 106 }}>
          <div className="flex-none" style={{ transform: "rotate(-12.23deg)" }}>
            <div className="relative" style={{ width: 477, height: 330 }}>
              <div className="absolute" style={{ inset: "-20.88% -14.44% -20.89% -14.45%" }}>
                <img alt="" className="block max-w-none size-full" src={wave1} />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex items-center justify-center" style={{ width: 537, height: 423, left: -31, top: 171 }}>
          <div className="flex-none" style={{ transform: "rotate(-12.23deg)" }}>
            <div className="relative" style={{ width: 478, height: 330 }}>
              <div className="absolute" style={{ inset: "-20.73% -14.31%" }}>
                <img alt="" className="block max-w-none size-full" src={wave2} />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex items-center justify-center" style={{ width: 536, height: 423, left: -2, top: 225 }}>
          <div className="flex-none" style={{ transform: "rotate(-12.23deg)" }}>
            <div className="relative" style={{ width: 477, height: 330 }}>
              <div className="absolute" style={{ inset: "-20.73% -14.34%" }}>
                <img alt="" className="block max-w-none size-full" src={wave3} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative z-10 mb-[19px] mx-auto">
        <div className="relative backdrop-blur-[2.45px] bg-[rgba(217,217,217,0.89)] h-[42px] rounded-[12px] w-[154px] flex items-center justify-center">
          <span className="font-['Plus_Jakarta_Sans:Regular'] font-normal text-[18px] text-black whitespace-pre">{`Explore         →`}</span>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="bg-[#f4f4f1] min-w-0 w-full">

      {/* Hero */}
      <section
        className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${imgImage4})` }}
      >
        <div className="relative z-10 px-8 lg:px-[89px] pt-[171px] pb-24 max-w-[1440px] mx-auto">
          <h1
            className="font-['Plus_Jakarta_Sans:Regular'] font-normal text-white text-[48px] leading-normal mb-8 max-w-[560px] [word-break:break-word]"
          >
            {`Turning `}
            <span className="font-['Pixelify_Sans:Regular'] font-normal">Real Estate</span>
            {`\ndata into better\ndecisions.`}
          </h1>

          <div className="backdrop-blur-[7.55px] bg-[rgba(92,92,92,0.3)] border border-[rgba(0,0,0,0.46)] border-solid rounded-[10px] p-8 max-w-[455px]">
            <p className="font-['Plus_Jakarta_Sans:Regular'] font-normal text-[20px] text-white leading-normal">
              We build data, analytics, and intelligent technology that help real estate teams
              <br />
              understand their business and move faster.
            </p>
          </div>
        </div>
      </section>

      {/* Problem Section 1 — illustration left, text right */}
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

      {/* Problem Section 2 — text left, illustration right */}
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

      {/* Generic AI Section — illustration left, text right */}
      <section className="max-w-[1440px] mx-auto px-8 lg:px-[89px] py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
          <div className="flex-shrink-0 w-full lg:w-[683px] h-[427px] relative">
            <img alt="" className="w-full h-full object-cover" src={imgImage9} />
          </div>
          <div className="flex-1 min-w-0 text-right">
            <p className="font-['Pixelify_Sans:Regular'] font-normal text-[32px] text-black leading-normal mb-6 [word-break:break-word]">
              {`Generic AI knows a lot. It doesn't know your business.`}
            </p>
            <p className="font-['Plus_Jakarta_Sans:Regular'] font-normal text-[18px] text-black leading-normal">
              {`Every organization has its own data, processes, terminology, and way of working. Generic AI models aren't built around that context.`}
            </p>
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section className="max-w-[1440px] mx-auto px-8 lg:px-[89px] py-16">
        <p className="font-['Pixelify_Sans:Regular'] font-normal text-[36px] text-black text-center mb-2">
          WHAT WE BUILD
        </p>
        <p className="font-['Plus_Jakarta_Sans:Regular'] font-normal text-[18px] text-[#474444] text-center mb-10">
          From raw data to intelligent systems
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard
            title="Analytics"
            description="Turn property data into decisions."
            wave1={imgVector2}
            wave2={imgVector1}
            wave3={imgVector3}
          />
          <ServiceCard
            title="Data Engineering"
            description="Build the foundation your data depends on."
            wave1={imgVector4}
            wave2={imgVector5}
            wave3={imgVector6}
          />
          <ServiceCard
            title="AI"
            description="Turn business data into intelligent action."
            wave1={imgVector7}
            wave2={imgVector8}
            wave3={imgVector9}
          />
          <ServiceCard
            title="Power BI"
            description="Power BI built around your business."
            wave1={imgVector10}
            wave2={imgVector11}
            wave3={imgVector12}
          />
          <ServiceCard
            title="Software"
            description="Turn business ideas into working products."
            wave1={imgVector13}
            wave2={imgVector14}
            wave3={imgVector15}
          />
          <ServiceCard
            title="Managed Services"
            description="Keep your data systems running."
            wave1={imgVector16}
            wave2={imgVector17}
            wave3={imgVector18}
          />
        </div>
      </section>

      {/* Our Vision */}
      <section className="relative py-24 overflow-hidden">
        {/* blur orbs */}
        <div className="absolute left-[-335px] top-0 w-[526px] h-[574px] rounded-[225px] bg-[rgba(130,137,216,0.5)] blur-[22.35px] pointer-events-none" />
        <div className="absolute left-[-285px] top-[69px] w-[426px] h-[453px] rounded-[192px] bg-[rgba(97,71,213,0.5)] blur-[22.35px] pointer-events-none" />
        <div className="absolute left-[-237px] top-[115px] w-[345px] h-[363px] rounded-[192px] bg-[rgba(31,67,212,0.5)] blur-[22.35px] pointer-events-none" />
        <div className="absolute right-[-335px] top-0 w-[526px] h-[574px] rounded-[225px] bg-[rgba(130,216,143,0.5)] blur-[22.35px] pointer-events-none" />
        <div className="absolute right-[-285px] top-[69px] w-[426px] h-[453px] rounded-[192px] bg-[rgba(83,213,71,0.5)] blur-[22.35px] pointer-events-none" />
        <div className="absolute right-[-237px] top-[115px] w-[345px] h-[363px] rounded-[192px] bg-[rgba(31,212,70,0.5)] blur-[22.35px] pointer-events-none" />

        <div className="relative z-10 max-w-[1440px] mx-auto px-8 text-center">
          <p className="font-['Pixelify_Sans:Regular'] font-normal text-[36px] text-black mb-4">
            Our Vision
          </p>
          <p className="font-['Plus_Jakarta_Sans:Regular'] font-normal text-[20px] text-[#2c2c2c] mb-12">
            Enabling partners to make decisions
          </p>
          <div className="relative w-full max-w-[1440px] mx-auto" style={{ aspectRatio: "1460/330" }}>
            <img
              alt=""
              className="w-full h-full object-cover"
              src={imgImageRemovebgPreview1}
            />
          </div>
        </div>
      </section>

      {/* Our Partners */}
      <section className="max-w-[1440px] mx-auto px-8 lg:px-[89px] py-16">
        <p className="font-['Pixelify_Sans:Regular'] font-normal text-[36px] text-black text-center mb-4">
          Our Partners
        </p>
        <p className="font-['Plus_Jakarta_Sans:Regular'] font-normal text-[20px] text-[#2c2c2c] text-center mb-12">
          Trusted by teams managing real-world assets
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Highmark */}
          <div className="bg-white rounded-[31px] overflow-hidden relative" style={{ minHeight: 637 }}>
            <div className="absolute bottom-0 left-0 right-0 h-[523px] pointer-events-none overflow-hidden">
              <div className="absolute" style={{ inset: "-16.37% -20.16% -24.77% -9.91%" }}>
                <img alt="" className="block max-w-none size-full" src={imgFrame9} />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-[428px] pointer-events-none overflow-hidden">
              <div className="absolute" style={{ inset: "-20% -26.31% -52.46% -10.41%" }}>
                <img alt="" className="block max-w-none size-full" src={imgFrame10} />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-[372px] pointer-events-none overflow-hidden">
              <div className="absolute" style={{ inset: "-23.01% -20.03% -75.41% -9.9%" }}>
                <img alt="" className="block max-w-none size-full" src={imgFrame11} />
              </div>
            </div>
            <div className="relative z-10 p-8 flex flex-col items-center">
              <img alt="Highmark" className="h-[163px] object-contain mb-6" src={imgImage10} />
              <p className="font-['Plus_Jakarta_Sans:Regular'] font-normal text-[24px] text-black text-center leading-normal max-w-[370px]">
                One of the largest U.S. property management firms with 400+ communities and 30+ years of experience delivering premier residential living.
              </p>
            </div>
          </div>

          {/* Brookfield */}
          <div className="bg-white rounded-[31px] overflow-hidden relative" style={{ minHeight: 637 }}>
            <div className="absolute bottom-0 left-0 right-0 h-[523px] pointer-events-none overflow-hidden">
              <div className="absolute" style={{ inset: "-16.37% -20.16% -24.77% -9.91%" }}>
                <img alt="" className="block max-w-none size-full" src={imgFrame12} />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-[428px] pointer-events-none overflow-hidden">
              <div className="absolute" style={{ inset: "-20% -26.31% -52.46% -10.41%" }}>
                <img alt="" className="block max-w-none size-full" src={imgFrame13} />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-[372px] pointer-events-none overflow-hidden">
              <div className="absolute" style={{ inset: "-23.01% -20.03% -75.41% -9.9%" }}>
                <img alt="" className="block max-w-none size-full" src={imgFrame14} />
              </div>
            </div>
            <div className="relative z-10 p-8 flex flex-col items-center">
              <img alt="Brookfield Properties" className="h-[163px] object-contain mb-6" src={imgImage11} />
              <p className="font-['Plus_Jakarta_Sans:Regular'] font-normal text-[24px] text-black text-center leading-normal max-w-[347px]">
                A global real estate developer and operator managing 675+ properties across 325M+ sq ft in key gateway cities worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section className="max-w-[1440px] mx-auto px-8 lg:px-[89px] py-16">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="flex-shrink-0">
            <p className="font-['Pixelify_Sans:Regular'] font-normal text-[36px] text-black mb-4">
              Contact Us
            </p>
            <p className="font-['Plus_Jakarta_Sans:Regular'] font-normal text-[20px] text-[#2c2c2c]">
              Ask any query to us!
            </p>
          </div>
          <div className="flex-1 min-w-0 max-w-[363px]">
            <div className="mb-6">
              <p className="font-['Plus_Jakarta_Sans:Regular'] font-normal text-[20px] text-[#878787] mb-1">Name</p>
              <div className="relative h-0">
                <img alt="" className="block" style={{ width: 363, height: 1 }} src={imgLine1} />
              </div>
            </div>
            <div className="mb-6 mt-8">
              <p className="font-['Plus_Jakarta_Sans:Regular'] font-normal text-[20px] text-[#878787] mb-1">Email</p>
              <div className="relative h-0">
                <img alt="" className="block" style={{ width: 363, height: 1 }} src={imgLine1} />
              </div>
            </div>
            <div className="mb-8 mt-8">
              <p className="font-['Plus_Jakarta_Sans:Regular'] font-normal text-[20px] text-[#878787] mb-1">Message</p>
              <div className="relative h-0">
                <img alt="" className="block" style={{ width: 359, height: 1 }} src={imgLine3} />
              </div>
            </div>
            <div className="mt-12">
              <div className="relative bg-black rounded-[8px] overflow-hidden w-[355px] h-[52px] flex items-center cursor-pointer">
                <div className="absolute flex items-center justify-center pointer-events-none overflow-hidden" style={{ width: 255, height: 134, left: 129, top: -32 }}>
                  <div style={{ transform: "rotate(-4.04deg) skewX(0.04deg)" }}>
                    <div className="relative" style={{ width: 248, height: 117 }}>
                      <div className="absolute" style={{ inset: "-17.15% -8.1% -17.16% -8.1%" }}>
                        <img alt="" className="block max-w-none size-full" src={imgVector19} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute flex items-center justify-center pointer-events-none overflow-hidden" style={{ width: 256, height: 134, left: 148, top: -15 }}>
                  <div style={{ transform: "rotate(-4.04deg) skewX(0.04deg)" }}>
                    <div className="relative" style={{ width: 249, height: 117 }}>
                      <div className="absolute" style={{ inset: "-17.15% -8.06% -17.16% -8.06%" }}>
                        <img alt="" className="block max-w-none size-full" src={imgVector20} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute flex items-center justify-center pointer-events-none overflow-hidden" style={{ width: 255, height: 134, left: 170, top: 7 }}>
                  <div style={{ transform: "rotate(-4.04deg) skewX(0.04deg)" }}>
                    <div className="relative" style={{ width: 248, height: 117 }}>
                      <div className="absolute" style={{ inset: "-17.15% -8.1% -17.16% -8.1%" }}>
                        <img alt="" className="block max-w-none size-full" src={imgVector21} />
                      </div>
                    </div>
                  </div>
                </div>
                <span className="relative z-10 font-['Plus_Jakarta_Sans:Regular'] font-normal text-[16px] text-white ml-5">Submit </span>
                <span className="relative z-10 font-['Plus_Jakarta_Sans:Regular'] font-normal text-[24px] text-white ml-auto mr-4">→</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="relative w-full overflow-hidden" style={{ height: 504 }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            className="absolute max-w-none w-full"
            style={{ height: "160.91%", top: "-60.91%", left: "-0.01%" }}
            src={imgImage12}
          />
        </div>
      </div>
    </div>
  );
}
