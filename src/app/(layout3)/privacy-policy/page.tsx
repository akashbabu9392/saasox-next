import type { Metadata } from "next";
import PrivacyPolicyPage from "@/modules/PrivacyPolicyPage";
import { privacyPolicyDocument } from "@/data/legal/privacy-policy";

export const metadata: Metadata = {
  title: privacyPolicyDocument.title,
  description: privacyPolicyDocument.description,
};

export default function Page() {
  return <PrivacyPolicyPage />;
}

