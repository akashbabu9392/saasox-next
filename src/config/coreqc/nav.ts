export const coreQcNav = {
  homeLabel: "Home",
  homeVersions: [{ label: "Home", href: "/" }],
  primaryLinks: [
    { label: "Features", href: "/features" },
    { label: "Integrations", href: "/integrations" },
    { label: "Blog", href: "/blog" },
    { label: "Use Cases", href: "/use-cases" },
  ],
  aboutLabel: "About",
  contactLabel: "Contact",
  contactHref: "/contact",
} as const;

export function getCoreQcNavLinkItems(): { href: string; label: string }[] {
  return [
    { href: coreQcNav.homeVersions[0]?.href ?? "/", label: coreQcNav.homeLabel },
    ...coreQcNav.primaryLinks.map((item) => ({ href: item.href, label: item.label })),
    { href: "/about", label: coreQcNav.aboutLabel },
    { href: coreQcNav.contactHref, label: coreQcNav.contactLabel },
  ];
}
