import BreadCumb from "@/components/Common/BreadCumb";
import { LegalDocument } from "@/components/Common/LegalDocument";
import { termsAndConditionsDocument } from "@/data/legal/terms-and-conditions";

const TermsAndConditionsPage = () => {
  return (
    <div>
      <BreadCumb
        bgimg="/assets/img/page-heading-bg.svg"
        Title={termsAndConditionsDocument.breadcrumbTitle}
        crumbs={[{ label: "Home", href: "/" }, { label: termsAndConditionsDocument.breadcrumbTitle }]}
      />

      <LegalDocument
        doc={termsAndConditionsDocument}
        heading={{
          label: "TERMS AND CONDITIONS",
          productLine: "BioSure Lab Portal — a product of RainerTek LLC",
        }}
        crossLinks={[
          { label: "Privacy Policy", href: "/privacy-policy" },
          { label: "Contact legal@biosurelab.com", href: "mailto:legal@biosurelab.com" },
        ]}
      />
    </div>
  );
};

export default TermsAndConditionsPage;

