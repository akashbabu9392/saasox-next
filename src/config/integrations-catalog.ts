export type IntegrationCatalogItem = {
  iconSrc: string;
  iconAlt: string;
  name: string;
  description: string;
  tags: string[];
};

export type IntegrationCatalogCategory = {
  title: string;
  items: IntegrationCatalogItem[];
};

export const integrationsCatalogContent = {
  heading: {
    eyebrow: "Our Toolset",
    title: "Our platform connects to the tools your lab relies on",
    description:
      "From PDF generation to cloud storage, real-time collaboration to compliance reporting — our platform integrates with the infrastructure that keeps your lab running.",
  },
  categories: [
    {
      title: "Report Generation",
      items: [
        {
          iconSrc: "/assets/img/integrations/file-type-pdf.svg",
          iconAlt: "PDF file icon",
          name: "PDF Report Engine",
          description:
            "Python (FastAPI) microservice powered by WeasyPrint. Generates pixel-perfect, USP 797-formatted lab reports. PDFs are stored to cloud storage automatically.",
          tags: ["Built-in", "No setup required"],
        },
      ],
    },
    {
      title: "Cloud Storage",
      items: [
        {
          iconSrc: "/assets/img/integrations/brand-aws.svg",
          iconAlt: "AWS logo",
          name: "AWS S3",
          description:
            "Plate images, floor plans, and PDF reports stored in AWS S3. Automatic compression. Direct download links on demand.",
          tags: ["Built-in", "Cloud"],
        },
        {
          iconSrc: "/assets/img/integrations/photo.svg",
          iconAlt: "Photo icon",
          name: "Cloudinary",
          description:
            "Image hosting and transformation for plate images and floor plans. Automatic compression reduces costs without quality loss.",
          tags: ["Built-in", "Optional"],
        },
      ],
    },
    {
      title: "Real-Time & Notifications",
      items: [
        {
          iconSrc: "/assets/img/integrations/brand-socket-io.svg",
          iconAlt: "Socket.IO logo",
          name: "Socket.IO",
          description:
            "Real-time in-app notifications for report uploads, comments, approvals, and status changes. Multi-tenant room architecture.",
          tags: ["Built-in", "Real-time"],
        },
        {
          iconSrc: "/assets/img/integrations/stack-2.svg",
          iconAlt: "Queue icon",
          name: "BullMQ + Redis",
          description:
            "Queue-based email delivery with retry logic and fallback direct send.",
          tags: ["Built-in", "Queue"],
        },
      ],
    },
    {
      title: "Compliance Standards",
      items: [
        {
          iconSrc: "/assets/img/integrations/shield-check.svg",
          iconAlt: "Shield check icon",
          name: "USP 797",
          description:
            "Workflows align with USP 797 environmental monitoring — ISO classification, CFU alert levels, CoC fields, and report formatting.",
          tags: ["Built-in", "Regulatory"],
        },
        {
          iconSrc: "/assets/img/integrations/gavel.svg",
          iconAlt: "Gavel icon",
          name: "21 CFR Part 11",
          description:
            "Electronic signatures, audit trails, and access controls aligned with FDA requirements for electronic records.",
          tags: ["Built-in", "Regulatory"],
        },
        {
          iconSrc: "/assets/img/integrations/certificate.svg",
          iconAlt: "Certificate icon",
          name: "ISO 17025",
          description:
            "Compliance package for Enterprise plans. Competency tracking, calibration records, and traceability documentation.",
          tags: ["Enterprise"],
        },
      ],
    },
    {
      title: "Developer / API",
      items: [
        {
          iconSrc: "/assets/img/integrations/api.svg",
          iconAlt: "API icon",
          name: "REST API",
          description:
            "Full API access on Professional and Enterprise. Create companies, submit CoC forms, retrieve reports. OpenAPI spec included.",
          tags: ["Professional", "API"],
        },
        {
          iconSrc: "/assets/img/integrations/webhook.svg",
          iconAlt: "Webhook icon",
          name: "Webhooks",
          description:
            "HTTP callbacks on report approvals, CoC submissions, and sample updates.",
          tags: ["Professional", "Developer"],
        },
      ],
    },
    {
      title: "Reshape",
      items: [
        {
          iconSrc: "/assets/img/integrations/transform.svg",
          iconAlt: "Transform icon",
          name: "Plate Imaging",
          description:
            "Automated, high-resolution plate imaging with consistent capture across experiments and environments.",
          tags: ["Built-in"],
        },
        {
          iconSrc: "/assets/img/integrations/transform.svg",
          iconAlt: "Transform icon",
          name: "Colony Counting",
          description:
            "AI-powered colony detection and accurate counting to reduce manual errors and save time.",
          tags: ["Built-in"],
        },
        {
          iconSrc: "/assets/img/integrations/transform.svg",
          iconAlt: "Transform icon",
          name: "Real-Time Analysis",
          description:
            "Process images instantly and generate insights without delays or manual intervention.",
          tags: ["Built-in"],
        },
        {
          iconSrc: "/assets/img/integrations/transform.svg",
          iconAlt: "Transform icon",
          name: "Data & Reporting",
          description:
            "Structured outputs with export-ready reports for analysis, compliance, and sharing.",
          tags: ["Built-in"],
        },
        {
          iconSrc: "/assets/img/integrations/api.svg",
          iconAlt: "API icon",
          name: "API Access",
          description:
            "Retrieve images, counts, and metadata programmatically for seamless workflow integration.",
          tags: ["Built-in"],
        },
        {
          iconSrc: "/assets/img/integrations/certificate.svg",
          iconAlt: "Certificate icon",
          name: "Experiment Traceability",
          description:
            "Track plates, wells, and results with full traceability across experiments.",
          tags: ["Built-in"],
        },
      ],
    },
    {
      title: "Coming Soon",
      items: [
        {
          iconSrc: "/assets/img/integrations/stack-2.svg",
          iconAlt: "Stack icon",
          name: "Template Builder",
          description:
            "Drag-and-drop report designer. Map data variables to sections visually — no developers needed.",
          tags: ["Coming Q3 2026"],
        },
        {
          iconSrc: "/assets/img/integrations/database.svg",
          iconAlt: "Database icon",
          name: "Instrument Integration",
          description:
            "Direct data ingestion from lab instruments. Eliminate manual entry for air samplers and incubators.",
          tags: ["Coming Q4 2026"],
        },
        {
          iconSrc: "/assets/img/integrations/stack-2.svg",
          iconAlt: "Billing icon",
          name: "Billing & Invoicing",
          description:
            "Invoice generation from completed CoC forms. Track payments and export to accounting software.",
          tags: ["Coming Q3 2026"],
        },
      ],
    },
  ] satisfies IntegrationCatalogCategory[],
} as const;

