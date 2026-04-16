import { coreQcBrand } from "./brand";

export const coreQcFooter = {
  productLinks: [
    { label: "Features", href: "/service" },
    { label: "Integrations", href: "/integrations" },
    { label: coreQcBrand.startFreeNavLabel, href: coreQcBrand.signInHref },
    { label: "Changelog", href: "/contact" },
    { label: "Roadmap", href: "/contact" },
  ],
  useCaseLinks: [
    { label: "Compounding Pharmacies", href: "/use-cases" },
    { label: "Hospital Cleanrooms", href: "/use-cases" },
    { label: "Environmental Labs", href: "/use-cases" },
    { label: "Food Safety Labs", href: "/use-cases" },
  ],
  companyLinks: [
    { label: "About RainerTek", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Careers", href: "/contact" },
    { label: "Contact", href: "/contact" },
  ],
  legalLinks: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms-and-conditions" },
    { label: "Security", href: "/contact" },
    { label: "HIPAA Notice", href: "/contact" },
  ],
  social: [
    { label: "LinkedIn", href: "https://www.linkedin.com", icon: "bi-linkedin" as const },
    { label: "Twitter/X", href: "https://twitter.com", icon: "bi-twitter-x" as const },
    { label: "GitHub", href: "https://github.com", icon: "bi-github" as const },
  ],
} as const;
