export const coreQcBrand = {
  name: "BioSure",
  company: "RainerTek",
  tagline: "The Lab OS for Environmental Monitoring",
  domain: "biosure.io",
  logoLightSrc: "/BiosureLab-logo.svg",
  logoDarkSrc: "/BiosureLab-logo-dark.svg",
  footerDescription:
    "Laboratory information management that respects both compliance and velocity.",
  productDescriptionOneLine:
    "Cloud LIMS purpose-built for USP 797 environmental monitoring labs.",
  productDescriptionShort:
    "BioSure digitizes the complete sample-to-report workflow for microbiology labs. Chain of custody, results entry, PDF reporting, and a free client portal — in one platform.",
  /** Nav/footer link replacing former “Pricing” — same destination as trial signup */
  startFreeNavLabel: "Start free",
  /** Breadcrumb title for `/pricing` route (now a get-started page, not a price list) */
  startFreePageTitle: "Start free",
  secondaryCta: "Book a Demo",
  signInLabel: "Sign In",
  signInHref: "/contact",
  copyright: "© 2026 RainerTek Inc. All rights reserved.",
} as const;

export const coreQcContact = {
  phone: "+208-555-0112",
  phoneTel: "+2085550112",
  email: "info@biosure.com",
  address: "United States",
} as const;
