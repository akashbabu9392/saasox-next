export type LabServiceCard = {
  slug: string;
  addClass: string;
  iconSrc: string;
  title: string;
  featureList: string[];
};

export const labServiceCards: LabServiceCard[] = [
  {
    slug: "chain-of-custody",
    addClass: "cs_bg_00",
    iconSrc: "/assets/img/icons/code-icon.svg",
    title: "Chain of Custody",
    featureList: [
      "Digital CoC forms with sample locations",
      "Media lot tracking and air sampler data",
      "Auto sample IDs with configurable patterns",
    ],
  },
  {
    slug: "sample-testing-results",
    addClass: "cs_bg_1",
    iconSrc: "/assets/img/icons/cloud-computing.svg",
    title: "Sample Results & Organism ID",
    featureList: [
      "CFU counts and incubation parameters",
      "Plate images and organism identification",
      "One structured screen for technicians",
    ],
  },
  {
    slug: "pdf-report-generator",
    addClass: "cs_bg_2",
    iconSrc: "/assets/img/icons/quality-assurance.svg",
    title: "One-Click PDF Reports",
    featureList: [
      "Professional USP 797 lab reports instantly",
      "E-signatures, trending, floor plans",
    ],
  },
  {
    slug: "client-portal",
    addClass: "cs_bg_3",
    iconSrc: "/assets/img/icons/security.svg",
    title: "Free Client Portal",
    featureList: [
      "Self-service for pharmacy clients",
      "Reports, CoC, and trends — no extra fee",
    ],
  },
  {
    slug: "scheduling-calendar",
    addClass: "cs_bg_00",
    iconSrc: "/assets/img/icons/advanced-tracking.svg",
    title: "Historical Trending",
    featureList: ["Z-scores across sampling events", "Catch excursions before action levels"],
  },
  {
    slug: "role-based-access-control",
    addClass: "cs_bg_1",
    iconSrc: "/assets/img/icons/analytics.svg",
    title: "Real-Time Notifications",
    featureList: ["Socket.IO and email alerts", "Per-user notification preferences"],
  },
];

