export type ServiceDetailsRecord = {
  slug: string;
  breadcrumbTitle: string;
  metaTitle: string;
  metaDescription: string;
  bannerImageSrc: string;
  bannerImageAlt: string;
  introParagraphs: string[];
  sectionHeading: string;
  sectionParagraph: string;
  bulletPoints: string[];
  outroParagraphs: string[];
};

export const serviceDetailsDb: ServiceDetailsRecord[] = [
  {
    slug: "chain-of-custody",
    breadcrumbTitle: "Chain of Custody",
    metaTitle: "Chain of Custody | Sample to Report",
    metaDescription:
      "Digital chain-of-custody forms with sample locations, media lot tracking, and configurable sample ID patterns.",
    bannerImageSrc: "/pexels-pavel-danilyuk-8442264.jpg",
    bannerImageAlt: "Chain of custody workflow",
    introParagraphs: [
      "Move chain-of-custody from paper, email threads, and spreadsheets into one structured workflow built for environmental monitoring labs.",
      "Capture sample locations, required fields, and submission details once — then carry the same data through testing, reporting, and client delivery with a complete audit trail.",
    ],
    sectionHeading: "Digital CoC intake that stays connected to results.",
    sectionParagraph:
      "Create and manage CoC forms digitally so technicians and reviewers always work from the same source of truth — no re-typing, no mismatched spreadsheets, no missing fields.",
    bulletPoints: [
      "Digital CoC forms with sample locations",
      "Media lot tracking and air sampler data",
      "Auto sample IDs with configurable patterns",
      "Clear status progression from intake through completion",
      "Consistent records for internal QA and inspections",
    ],
    outroParagraphs: [
      "When CoC is digital and structured, everything downstream becomes faster: results entry, approvals, reporting, and client delivery.",
      "Standardize intake across your team while keeping patterns and identifiers flexible for how your lab operates.",
    ],
  },
  {
    slug: "sample-results-organism-id",
    breadcrumbTitle: "Sample Results & Organism ID",
    metaTitle: "Sample Results & Organism ID | Structured Lab Entry",
    metaDescription:
      "One structured screen for CFU counts, incubation parameters, plate images, and organism identification.",
    bannerImageSrc:
      "/asian-male-and-female-scientis-work-together-in-th-2026-01-09-11-45-05-utc.jpg",
    bannerImageAlt: "Sample results entry",
    introParagraphs: [
      "Technicians need a fast, consistent way to enter results without jumping between documents or disconnected tools.",
      "Capture CFU counts, incubation parameters, and organism identification alongside plate images — all tied to the original CoC and sampling context.",
    ],
    sectionHeading: "A single structured screen for technicians.",
    sectionParagraph:
      "Reduce errors and rework by standardizing how results are entered, reviewed, and tracked across sampling events.",
    bulletPoints: [
      "CFU counts and incubation parameters",
      "Plate images and organism identification",
      "One structured screen for technicians",
      "Results stay linked to the originating CoC and sample ID",
      "Ready-to-report data with minimal formatting overhead",
    ],
    outroParagraphs: [
      "Standardized result capture makes trending and reporting reliable — because the data is consistent from day one.",
      "Keep your workflow focused on lab work, not document management.",
    ],
  },
  {
    slug: "one-click-pdf-reports",
    breadcrumbTitle: "One-Click PDF Reports",
    metaTitle: "One-Click PDF Reports | USP 797",
    metaDescription:
      "Generate professional USP 797 lab reports instantly with e-signatures, trending, and floor plans.",
    bannerImageSrc: "/pexels-thisisengineering-19895787.jpg",
    bannerImageAlt: "PDF report preview",
    introParagraphs: [
      "Stop rebuilding reports manually in Word. Generate professional PDF reports directly from your CoC and results data.",
      "Deliver consistent formatting, audit-ready outputs, and faster turnaround times without sacrificing review quality.",
    ],
    sectionHeading: "Professional reports instantly — without manual copy/paste.",
    sectionParagraph:
      "Turn completed sampling events into polished PDF reports in one click, including the supporting context reviewers and clients expect.",
    bulletPoints: [
      "Professional USP 797 lab reports instantly",
      "E-signatures for approvals and accountability",
      "Trending and floor plans included where needed",
      "Consistent structure across all clients",
      "Faster review cycles and fewer formatting errors",
    ],
    outroParagraphs: [
      "When reporting is generated from structured data, your team spends time validating results — not formatting documents.",
      "Send clients the same high-quality output every time, even as your volume grows.",
    ],
  },
  {
    slug: "free-client-portal",
    breadcrumbTitle: "Free Client Portal",
    metaTitle: "Free Client Portal | Self-Service Access",
    metaDescription:
      "Give pharmacy clients self-service access to reports, CoC, and trends with no extra fee.",
    bannerImageSrc: "/pexels-silverkblack-36712839.jpg",
    bannerImageAlt: "Client portal",
    introParagraphs: [
      "Reduce back-and-forth emails by giving clients a secure portal for everything they need — always available, always up to date.",
      "Clients can view CoC submissions, download reports, and review trends without waiting on your team.",
    ],
    sectionHeading: "Self-service for pharmacy clients — included.",
    sectionParagraph:
      "Make delivery and communication easier with a portal designed for clarity, accountability, and quick access to historical data.",
    bulletPoints: [
      "Self-service for pharmacy clients",
      "Reports, CoC, and trends — no extra fee",
      "Less email, fewer interruptions for your team",
      "Clear history across sampling events",
      "Faster client response times",
    ],
    outroParagraphs: [
      "A client portal scales with your lab. As you onboard more clients, self-service keeps support overhead low.",
      "Deliver a modern client experience without adding another paid module.",
    ],
  },
  {
    slug: "historical-trending",
    breadcrumbTitle: "Historical Trending",
    metaTitle: "Historical Trending | Catch Excursions Early",
    metaDescription:
      "Track Z-scores across sampling events and catch excursions before action levels.",
    bannerImageSrc:
      "/knitting-and-weaving-machines-2026-01-08-23-54-03-utc.jpg",
    bannerImageAlt: "Historical trending",
    introParagraphs: [
      "Trending is only as good as the underlying data. With structured CoC and results, you can reliably track patterns over time.",
      "Spot changes early, investigate quickly, and reduce the risk of surprises during audits and reviews.",
    ],
    sectionHeading: "See the signal before it becomes an excursion.",
    sectionParagraph:
      "Use historical trending to understand baseline behavior and identify anomalies across sampling events.",
    bulletPoints: [
      "Z-scores across sampling events",
      "Catch excursions before action levels",
      "Consistent trending built from structured results",
      "Faster investigations with complete context",
      "Better visibility for QA and management",
    ],
    outroParagraphs: [
      "When trending is integrated into the workflow, it becomes a daily tool — not a quarterly spreadsheet project.",
      "Make decisions with confidence using consistent, audit-friendly history.",
    ],
  },
  {
    slug: "real-time-notifications",
    breadcrumbTitle: "Real-Time Notifications",
    metaTitle: "Real-Time Notifications | Alerts That Matter",
    metaDescription:
      "Get Socket.IO and email alerts with per-user notification preferences.",
    bannerImageSrc: "/pexels-ketut-subiyanto-4428994.jpg",
    bannerImageAlt: "Real-time notifications",
    introParagraphs: [
      "Stay ahead of critical updates without living in your inbox. Get timely alerts when submissions, results, or reviews need attention.",
      "Support both real-time in-app notifications and email delivery so each team member can work the way they prefer.",
    ],
    sectionHeading: "Notifications built for lab workflows.",
    sectionParagraph:
      "Route the right updates to the right people with per-user preferences — so urgent items surface fast and routine noise stays minimal.",
    bulletPoints: [
      "Socket.IO and email alerts",
      "Per-user notification preferences",
      "Faster handoffs between intake, testing, and review",
      "Less status-chasing across teams",
      "More predictable turnaround times",
    ],
    outroParagraphs: [
      "Real-time updates reduce bottlenecks and keep your workflow moving — especially when volume increases.",
      "Pair notifications with structured statuses to make progress visible without extra meetings or spreadsheets.",
    ],
  },
  {
    slug: "service-details",
    breadcrumbTitle: "Service Details",
    metaTitle: "Service Details",
    metaDescription: "Service details",
    bannerImageSrc: "/assets/img/service_img-1.jpg",
    bannerImageAlt: "Service details banner",
    introParagraphs: [
      "Our UI/UX design services are crafted to elevate your digital presence with precision and creativity. We begin by understanding your goals and your audience, ensuring that every design decision aligns with your brand’s vision. Our approach integrates user research, wireframing, and prototyping to create intuitive and engaging interfaces.",
      "We focus on delivering seamless user experiences that drive engagement and satisfaction. From concept to launch, our team is dedicated to design solutions that are not only visually appealing but also functionally robust. We continuously test and refine our designs to meet the highest standards of usability.",
    ],
    sectionHeading:
      "Boost your brand with the help of our creative agency's UX design.",
    sectionParagraph:
      "Enhance your brand’s impact with our creative agency's expert UX design services. We’ll craft engaging and intuitive user experiences that elevate your brand and captivate your audience.",
    bulletPoints: [
      "consectetur placerat augue vestibulum",
      " adipiscing elit Etiam aliquam, enim vitae",
      "Mauris tincidunt a eget facilisis  Quisque",
      "Donec at augue ante Nam posuere mauris",
      "Lorem ipsum dolor sit amet, consectetur",
      "quis pretium elit placerat id Fusce egestas",
    ],
    outroParagraphs: [
      "Nam posuere mauris enim, quis pretium elit placerat id  Fusce egestas nisi vel ipsum vehicula facilisis In pulvinar imperdiet venenatis  className aptent taciti sociosqu ad litora torent per conubia nostra, per inceptos himenaeos. Donec eu pulvinar lorem. Etiam vestibulum ligula quis nisl feugiat, consectetur placerat augue vestibulum  Nulla aliquam elit eu diam pharetra.Nam posuere mauris enim, ",
      "Nam posuere mauris enim, quis pretium elit placerat id  Fusce egestas nisi vel ipsum vehicula facilisis In pulvinar imperdiet venenatis  className aptent taciti sociosqu ad litora torent per conubia nostra, per inceptos himenaeos. Donec eu pulvinar lorem. ",
    ],
  },
];

export function getServiceDetailsBySlug(slug: string) {
  return serviceDetailsDb.find((s) => s.slug === slug) ?? null;
}

