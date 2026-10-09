import LegalPage, { LegalBody, LegalList, LegalSection } from "../components/LegalPage"

const LAST_UPDATED = "October 10, 2026"
const CONTACT_EMAIL = "amrit@anuritinnovation.com"

export default function PrivacyPolicy() {
  return (
    <LegalPage title="Privacy Policy" lastUpdated={LAST_UPDATED}>
      <LegalBody className="mt-10">
        <p>
          Anurit Innovation ("we", "us", or "our") offers applications, visualizations &amp;
          services in the AI, data analytics, cloud transformation, and Power BI spaces. We are
          committed to protecting your personal information. This Privacy Statement explains the
          personal data we process, how we process it, and for what purpose.
        </p>
        <p>
          This Privacy Statement applies to the applications published by Anurit Innovation via
          Microsoft Azure Marketplace, Microsoft App Source, other Microsoft Office stores, or any
          other means. Visualizations refer to custom Power BI visuals &amp; template apps
          developed and published by Anurit Innovation either to the Office 365 store or Power BI
          gallery.
        </p>
      </LegalBody>

      <LegalSection title="Data We Do Not Collect">
        <LegalList>
          <li>
            Anurit Innovation does not collect any personal information, Customer Data*, or
            anything related to your device when you use any of our applications, including
            visualizations.
          </li>
          <li>
            We do not collect or have access to any information that can identify you when you
            purchase an App or download a trial.
          </li>
          <li>
            We will never sell or share information collected as part of a trial or purchase of any
            of our Apps without your written consent. Information collected by Microsoft as part of
            trial or purchase falls under the Microsoft Privacy Policy.
          </li>
          <li>
            We may collect usage and download statistics, trends, or any other Administrator
            Data** that Office 365 application administrators are provided with, but not the
            specific usage of any user.
          </li>
        </LegalList>

        <div className="space-y-5 border-l border-black/10 pl-5 text-[15px] text-[#474444]">
          <div>
            <p className="text-black/80">* Customer Data</p>
            <p className="mt-1">
              Customer Data is all data, including all text files, sound files, image files, and
              software that you provide to Anurit Innovation through your use of our Services. We
              may use Customer Data to provide Services. This includes troubleshooting aimed at
              preventing, detecting, and repairing problems affecting the operation of the services
              provided.
            </p>
          </div>
          <div>
            <p className="text-black/80">** Administrator Data</p>
            <p className="mt-1">
              Administrator Data is information about administrators (including account contact
              and subscription administrators) provided during sign-up, purchase, or administration
              of the Services. This may include name, address, phone number, and email address,
              whether collected at initial purchase or later during management of the Services.
            </p>
          </div>
        </div>

        <p>
          We will not disclose Customer Data or Administrator Data ("your information") outside of
          Anurit Innovation except as you direct, as described in your agreement(s) or as described
          in this privacy statement.
        </p>
      </LegalSection>

      <LegalSection title="Changes to this Privacy Statement">
        <p>
          We will occasionally update this privacy statement to reflect customer feedback and
          changes in our Services. When we post changes to this statement, we will revise the "last
          updated" date at the top of the statement. We encourage you to periodically review this
          privacy statement to learn how Anurit Innovation is protecting your information.
        </p>
      </LegalSection>

      <LegalSection title="How to Contact Us">
        <p>If you have any questions regarding our privacy policy, please contact us at:</p>
        <p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-black underline decoration-black/20 underline-offset-4 transition-colors duration-200 hover:decoration-black"
          >
            {CONTACT_EMAIL}
          </a>
        </p>
      </LegalSection>
    </LegalPage>
  )
}
