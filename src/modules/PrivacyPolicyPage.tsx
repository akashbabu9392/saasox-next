import BreadCumb from "@/components/Common/BreadCumb";
import { LegalDocument } from "@/components/Common/LegalDocument";
import { privacyPolicyDocument } from "@/data/legal/privacy-policy";

const PrivacyPolicyPage = () => {
  return (
    <div>
      <BreadCumb
        bgimg="/assets/img/page-heading-bg.svg"
        Title={privacyPolicyDocument.breadcrumbTitle}
        crumbs={[{ label: "Home", href: "/" }, { label: privacyPolicyDocument.breadcrumbTitle }]}
      />

      <LegalDocument
        doc={privacyPolicyDocument}
        heading={{
          label: "PRIVACY POLICY",
          productLine: "BioSure Lab Portal — a product of RainerTek LLC",
        }}
        crossLinks={[
          { label: "Terms & Conditions", href: "/terms-and-conditions" },
          { label: "Contact privacy@biosurelab.com", href: "mailto:privacy@biosurelab.com" },
        ]}
      />
    </div>
  );
};

export default PrivacyPolicyPage;

