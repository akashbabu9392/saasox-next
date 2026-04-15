export type BlogPostRecord = {
  slug: string;
  breadcrumbTitle: string;
  metaTitle: string;
  metaDescription: string;
  bannerImageSrc: string;
  bannerImageAlt: string;
  postedDay: string;
  postedMonth: string;
  title: string;
  categoryLabel: string;
  bodyParagraphs: string[];
};

export const blogDb: BlogPostRecord[] = [
  {
    slug: "usp-797-revised-standards-2026",
    breadcrumbTitle: "USP 797 Revised Standards",
    metaTitle: "USP 797 Revised Standards: What Your Lab Needs to Know in 2026",
    metaDescription:
      "The 2023 revision to USP Chapter 797 significantly expanded environmental monitoring requirements.",
    bannerImageSrc: "/assets/img/post-img-10.jpg",
    bannerImageAlt: "Lab compliance",
    postedDay: "15",
    postedMonth: "Mar",
    title: "USP 797 Revised Standards: What Your Lab Needs to Know in 2026",
    categoryLabel: "Compliance",
    bodyParagraphs: [
      "The 2023 revision to USP Chapter 797 significantly expanded environmental monitoring requirements. We break down what changed, what stayed the same, and how to stay compliant.",
      "our platform aligns CoC, results, trending, and PDF reporting with USP 797 workflows so your documentation matches what inspectors expect to see.",
    ],
  },
  {
    slug: "why-pharmacy-clients-keep-calling",
    breadcrumbTitle: "Pharmacy Client Calls",
    metaTitle: "Why Your Pharmacy Clients Keep Calling (And How to Fix It)",
    metaDescription:
      "The average environmental monitoring lab fields 15–20 status inquiry calls per week from pharmacy QA managers.",
    bannerImageSrc: "/assets/img/post-img-4.jpg",
    bannerImageAlt: "Client communication",
    postedDay: "28",
    postedMonth: "Feb",
    title: "Why Your Pharmacy Clients Keep Calling (And How to Fix It)",
    categoryLabel: "Lab Operations",
    bodyParagraphs: [
      "The average environmental monitoring lab fields 15–20 status inquiry calls per week from pharmacy QA managers. Here's why it happens and how a client portal eliminates it.",
      "With our platform, approved reports and schedules are visible the moment they are published — no inbox chasing required.",
    ],
  },
  {
    slug: "chain-of-custody-best-practices-usp-797",
    breadcrumbTitle: "Chain of Custody",
    metaTitle: "Chain of Custody Best Practices for USP 797 Labs",
    metaDescription:
      "A proper chain of custody is the foundation of defensible test results.",
    bannerImageSrc: "/assets/img/post-img-5.jpg",
    bannerImageAlt: "Chain of custody",
    postedDay: "12",
    postedMonth: "Feb",
    title: "Chain of Custody Best Practices for USP 797 Labs",
    categoryLabel: "Best Practices",
    bodyParagraphs: [
      "A proper chain of custody isn't just a compliance checkbox — it's the foundation of defensible test results. Here's what a complete CoC should include.",
      "Digital CoC in our platform ties sampling locations, media lots, air samplers, and lab results into one traceable record.",
    ],
  },
  {
    slug: "hidden-cost-spreadsheets-lab",
    breadcrumbTitle: "Spreadsheet Cost",
    metaTitle: "The Hidden Cost of Running Your Lab on Spreadsheets",
    metaDescription:
      "Excel feels free until you factor labor, rework, and compliance risk.",
    bannerImageSrc: "/assets/img/post-img-6.jpg",
    bannerImageAlt: "Spreadsheets",
    postedDay: "30",
    postedMonth: "Jan",
    title: "The Hidden Cost of Running Your Lab on Spreadsheets",
    categoryLabel: "Lab Operations",
    bodyParagraphs: [
      "Excel feels free. But when you factor in labor hours, rework, compliance risk, and client satisfaction, the true cost of manual lab management can exceed $30K/year for a 5-person lab.",
      "our platform replaces fragmented tools with one workflow so labor shifts from data re-entry to value-added review.",
    ],
  },
  {
    slug: "how-to-read-historical-trending-em",
    breadcrumbTitle: "Historical Trending",
    metaTitle: "How to Read Historical Trending in Environmental Monitoring",
    metaDescription:
      "Z-scores, action levels, alert levels, and trending charts explained.",
    bannerImageSrc: "/assets/img/post-img-1.jpg",
    bannerImageAlt: "Trending charts",
    postedDay: "15",
    postedMonth: "Jan",
    title: "How to Read Historical Trending in Environmental Monitoring",
    categoryLabel: "Technical",
    bodyParagraphs: [
      "Z-scores, action levels, alert levels, and trending charts — we explain what each metric means for your cleanroom monitoring program and when to act.",
      "our platform surfaces trending alongside every report so excursions surface before they become recurring failures.",
    ],
  },
];

export function getBlogPostBySlug(slug: string) {
  return blogDb.find((p) => p.slug === slug) ?? null;
}
