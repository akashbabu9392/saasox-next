export type IntegrationItem = {
  iconSrc: string;
  title: string;
  subtitle: string;
};

export const integrations: IntegrationItem[] = [
  { subtitle: "PDF report engine", title: "PDF Engine", iconSrc: "/assets/img/integrations/file-type-pdf.svg" },
  { subtitle: "Cloud storage", title: "AWS S3", iconSrc: "/assets/img/integrations/brand-aws.svg" },
  { subtitle: "Real-time", title: "Socket.IO", iconSrc: "/assets/img/integrations/brand-socket-io.svg" },
  { subtitle: "Email queue", title: "BullMQ + Redis", iconSrc: "/assets/img/integrations/stack-2.svg" },
  { subtitle: "Compliance", title: "USP 797", iconSrc: "/assets/img/integrations/shield-check.svg" },
  { subtitle: "Regulatory", title: "21 CFR Part 11", iconSrc: "/assets/img/integrations/gavel.svg" },
  { subtitle: "API", title: "REST API", iconSrc: "/assets/img/integrations/api.svg" },
  { subtitle: "Webhooks", title: "Webhooks", iconSrc: "/assets/img/integrations/webhook.svg" },
  { subtitle: "ISO", title: "ISO 17025", iconSrc: "/assets/img/integrations/certificate.svg" },
  { subtitle: "Images", title: "Cloudinary", iconSrc: "/assets/img/integrations/photo.svg" },
  { subtitle: "PDF", title: "WeasyPrint", iconSrc: "/assets/img/integrations/printer.svg" },
  { subtitle: "Database", title: "PostgreSQL", iconSrc: "/assets/img/integrations/database.svg" },
  { subtitle: "Reshape", title: "Reshape", iconSrc: "/assets/img/integrations/transform.svg" },
];

