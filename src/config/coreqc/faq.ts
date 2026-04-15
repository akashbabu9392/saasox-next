export type FaqItem = { question: string; answer: string };

export const coreQcFaqItems: FaqItem[] = [
  {
    question: "What is our platform?",
    answer:
      "our platform is a cloud-native LIMS built specifically for environmental monitoring labs performing USP 797 testing. It manages your entire workflow — from chain-of-custody intake through sample testing, PDF report generation, and client delivery.",
  },
  {
    question: "Do I need to install anything?",
    answer:
      "No. our platform is fully cloud-based. Your lab users and clients access it through any web browser. No software to install, no servers to manage. We handle all updates and infrastructure.",
  },
  {
    question: "How long does setup take?",
    answer:
      "Most labs are fully operational within 1–3 days. We guide you through importing your client companies, configuring your lab settings, and generating your first report. No months-long implementation process.",
  },
  {
    question: "How does our platform compare to QBench or LabWare?",
    answer:
      "our platform is purpose-built for environmental monitoring, includes a free client portal that competitors often charge extra for, and offers a no-cost tier so you can start without a card. Setup takes days instead of months.",
  },
  {
    question: "Is our platform compliant with USP 797 and FDA requirements?",
    answer:
      "our platform is built around USP 797 workflows with full audit trails, electronic signatures (21 CFR Part 11 readiness), role-based access control, and comprehensive activity logging.",
  },
  {
    question: "What happens to my data if I cancel?",
    answer:
      "Your data belongs to you. We provide a full data export in CSV/Excel format before account closure. We retain your data for 30 days post-cancellation.",
  },
];
