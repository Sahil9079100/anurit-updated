import Hero from "./sections/Hero";
import ProblemOne from "./sections/ProblemOne";
import ProblemTwo from "./sections/ProblemTwo";
import GenericAi from "./sections/GenericAi";
import WhatWeBuild from "./sections/WhatWeBuild";
import OurVision from "./sections/OurVision";
import OurPartners from "./sections/OurPartners";
import ContactUs from "./sections/ContactUs";
import Footer from "./sections/Footer";

export default function App() {
  return (
    <div className="bg-[#f4f4f1] min-w-0 w-full">
      <Hero />
      <ProblemOne />
      <ProblemTwo />
      <GenericAi />
      <WhatWeBuild />
      <OurVision />
      <OurPartners />
      <ContactUs />
      <Footer />
    </div>
  );
}
