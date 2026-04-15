export type FeatureModule = {
  title: string;
  tagline: string;
  description: string;
  iconSrc: string;
  bullets: string[];
};

export const featureModules: FeatureModule[] = [
  {
    title: "Chain of Custody (CoC)",
    tagline: "Digital intake from the first sample",
    description:
      "Replace paper CoC forms with a structured digital workflow. Clients submit their own forms, or your lab creates them.",
    iconSrc: "/assets/img/icons/code-icon.svg",
    bullets: [
      "Digital CoC creation and submission workflow",
      "Draft → Submitted status lifecycle",
      "Media lot tracking and air sampler registry",
      "Automated sample ID generation",
      "CoC PDF generation on demand",
    ],
  },
  {
    title: "Sample Testing & Results",
    tagline: "Every result, precisely recorded",
    description:
      "Enter CFU counts, organism identifications, plate images, and incubation parameters for bench technicians.",
    iconSrc: "/assets/img/icons/quality-assurance.svg",
    bullets: [
      "Per-sample result entry",
      "Bacterial and fungal organism ID",
      "Plate image upload with compression",
      "Alert/Action level auto-evaluation",
      "Incubation parameter tracking",
    ],
  },
  {
    title: "One-Click PDF Report Generator",
    tagline: "Professional reports in seconds",
    description:
      "Generate full lab reports from CoC and result data — e-signatures, trending, floor plans, and organism descriptions.",
    iconSrc: "/assets/img/icons/products.svg",
    bullets: [
      "Automated PDF generation",
      "Report versioning with history",
      "Approval workflow (Under Review → Approved)",
      "Bulk ZIP download",
      "CSV/Excel export of report data",
    ],
  },
  {
    title: "Free Client Portal",
    tagline: "Always free. Always included.",
    description:
      "Pharmacy clients access reports, schedules, CoC submission, and trending without extra licensing.",
    iconSrc: "/assets/img/icons/mail.svg",
    bullets: [
      "Self-service report access",
      "Real-time notifications",
      "Threaded comments on reports",
      "Historical trending by location",
    ],
  },
  {
    title: "Scheduling & Calendar",
    tagline: "Never miss a submission deadline",
    description:
      "Recurring schedules with occurrence tracking and calendar views for lab and client visibility.",
    iconSrc: "/assets/img/icons/advanced-tracking.svg",
    bullets: [
      "Weekly, biweekly, monthly, or custom recurrence",
      "Occurrence status with user attribution",
      "Client-visible schedule in portal",
    ],
  },
  {
    title: "Role-Based Access Control",
    tagline: "Security built for regulated environments",
    description:
      "Granular permissions with per-user overrides and comprehensive audit logging.",
    iconSrc: "/assets/img/icons/security.svg",
    bullets: [
      "Five user roles with per-module actions",
      "Per-user permission overrides",
      "Full audit trail for mutations",
      "Activity log with filtering",
    ],
  },
];

