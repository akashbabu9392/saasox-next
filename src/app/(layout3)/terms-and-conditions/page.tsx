import type { Metadata } from "next";
import TermsAndConditionsPage from "@/modules/TermsAndConditionsPage";
import { termsAndConditionsDocument } from "@/data/legal/terms-and-conditions";

export const metadata: Metadata = {
  title: termsAndConditionsDocument.title,
  description: termsAndConditionsDocument.description,
};

export default function Page() {
  return <TermsAndConditionsPage />;
}

