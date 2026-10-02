import ContactField from "../components/ContactField";
import SubmitButton from "../components/SubmitButton";
import { imgLine1, imgLine3 } from "../assets";

export default function ContactUs() {
  return (
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
          <ContactField label="Name" line={imgLine1} lineWidth={363} className="mb-6" />
          <ContactField label="Email" line={imgLine1} lineWidth={363} className="mb-6 mt-8" />
          <ContactField label="Message" line={imgLine3} lineWidth={359} className="mb-8 mt-8" />
          <div className="mt-12">
            <SubmitButton />
          </div>
        </div>
      </div>
    </section>
  );
}
