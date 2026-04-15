import type { Metadata } from "next";
import { coreQcBrand } from "@/config/coreqc";

export const siteMetadata: Metadata = {
  metadataBase: new URL("https://biosure.io"),
  title: {
    default: `${coreQcBrand.name} | ${coreQcBrand.tagline}`,
    template: `%s | ${coreQcBrand.name}`,
  },
  description: coreQcBrand.productDescriptionOneLine,
};

