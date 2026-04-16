export type UseCaseSection =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "ordered"; items: string[] }
  | { type: "bullets"; items: string[] };

export type UseCaseDetailsRecord = {
  slug: string;
  breadcrumbTitle: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  overview: string;
  whoItsFor: string;
  body: UseCaseSection[];
  complianceCoverage?: string[];
};

export const useCaseDetailsDb: UseCaseDetailsRecord[] = [
  {
    slug: "usp-797-compounding-pharmacy",
    breadcrumbTitle: "USP 797 Compounding Pharmacy",
    metaTitle: "USP 797 Compounding Pharmacy Testing | BiosureLab",
    metaDescription:
      "The complete digital workflow for 503A and 503B compounding pharmacies.",
    heroTitle: "USP 797 Compounding Pharmacy Testing",
    heroSubtitle:
      "The complete digital workflow for 503A and 503B compounding pharmacies.",
    overview:
      "USP Chapter 797 environmental monitoring is the core use case BiosureLab was built for. From the moment a chain-of-custody form is initiated through microbial result entry, organism identification, and final report delivery — the entire workflow is digital, traceable, and structured around what USP 797 compliance requires.",
    whoItsFor:
      "Independent microbiology testing labs, hospital pharmacy cleanrooms, 503B outsourcing facilities, and contract testing organizations serving compounding pharmacies.",
    body: [
      { type: "heading", text: "The Full Workflow" },
      {
        type: "ordered",
        items: [
          "Client Onboarding — Each pharmacy client is set up as a company in BiosureLab with their facility locations, cleanroom floor plans, and sample location maps. ISO class assignments are configured per sample location. Monitoring schedules (weekly, biweekly, monthly) are set up for each location, generating a 12-month occurrence calendar automatically.",
          "Chain of Custody — When a sampling event is due, the pharmacy client's QA manager creates and submits a CoC form digitally from their portal. Customer information auto-populates. Sample locations are selected from the mapped floor plan — no free-text entry. Media lot information and air sampler calibration data are captured per the USP 797 documentation requirements.",
          "Sample Receipt and Processing — Lab staff receive a notification when the CoC is submitted. The lab-side view of the CoC includes additional fields for internal documentation. As samples are processed, technicians enter CFU counts, incubation parameters (temperature range, start/end times), and organism identifications for any samples showing growth. Plate images are uploaded directly to the sample record.",
          "Alert/Action Level Evaluation — For every sample, the system automatically evaluates the result against the configured alert and action level thresholds for that location's ISO class. Results are flagged in real time — no manual threshold lookup required.",
          "Report Generation — When all sample results are complete, one click generates the full PDF report. The report includes: results summary table with alert/action level status, organism identification descriptions, plate images, historical trending section with z-scores and charts, facility floor plan, and electronic signatures from the lab director and QC manager.",
          "Review and Approval — Reports enter Under Review status. A lab director or authorized reviewer approves the report with their electronic signature. If corrections are needed, the report is rejected back to the technician. Full version history is maintained.",
          "Client Report Access — When a report is approved and published, the pharmacy client receives an instant notification. They log into their portal, view the report, download it, and can leave comments if they have questions.",
        ],
      },
    ],
    complianceCoverage: [
      "USP 797 aligned ISO classifications and alert/action thresholds",
      "21 CFR Part 11 readiness: electronic signatures, audit trails, data integrity controls",
      "Complete media lot and air sampler documentation per sampling event",
      "Historical trending with z-scores for trend analysis",
      "Full audit trail on every record",
    ],
  },
  {
    slug: "hospital-pharmacy-cleanroom",
    breadcrumbTitle: "Hospital Pharmacy Cleanroom",
    metaTitle: "Hospital Pharmacy Cleanroom Programs | BiosureLab",
    metaDescription:
      "Multi-location environmental monitoring with full audit trail for accreditation.",
    heroTitle: "Hospital Pharmacy Cleanroom Programs",
    heroSubtitle:
      "Multi-location environmental monitoring with full audit trail for accreditation.",
    overview:
      "Hospital pharmacy cleanroom programs operate under significant scrutiny. USP 797 compliance, Joint Commission accreditation, and state board oversight mean documentation must be complete, accessible, and defensible. BiosureLab manages environmental monitoring programs for hospital pharmacy departments operating ISO 5, 7, and 8 cleanrooms across single or multiple facilities.",
    whoItsFor:
      "Hospital pharmacy departments, health system QA teams, and in-house microbiology labs that manage environmental monitoring for pharmacy operations.",
    body: [
      { type: "heading", text: "Key Capabilities for Hospital Programs" },
      { type: "heading", text: "Multi-Location Management" },
      {
        type: "paragraph",
        text: "Hospital health systems often operate pharmacy compounding suites across multiple hospital campuses. Each facility is set up as a separate location within the same client company — with its own floor plan, sample location map, ISO class assignments, and monitoring schedule. All locations are visible in a single client portal view.",
      },
      { type: "heading", text: "Segregated Data, Unified Reporting" },
      {
        type: "paragraph",
        text: "Each facility location maintains its own historical trending baseline. Reports are generated per sampling event per location, but the lab and hospital QA team can view cross-location data to identify patterns across the system.",
      },
      { type: "heading", text: "Accreditation-Ready Documentation" },
      {
        type: "paragraph",
        text: "Joint Commission and state board inspections require complete chain-of-custody documentation, result records with organism identification, and evidence of trending analysis with appropriate response to excursions. Every record in BiosureLab is timestamped, user-attributed, and stored with full version history — ready to produce on demand.",
      },
      { type: "heading", text: "Audit Trail for Every Action" },
      {
        type: "paragraph",
        text: "Every action in BiosureLab — form creation, result entry, report generation, approval, comment — is logged with the acting user and timestamp. The activity log is filterable by user, module, and date range. This level of traceability is what inspectors expect from a compliant monitoring program.",
      },
      { type: "heading", text: "Role-Based Access for Hospital Teams" },
      {
        type: "paragraph",
        text: "Hospital QA teams typically include a pharmacy director, QA manager, and multiple technicians with different levels of access. BiosureLab's role-based access system allows the lab to configure exactly what each hospital staff member can see and do in the portal.",
      },
      { type: "heading", text: "Scheduling Integration" },
      {
        type: "paragraph",
        text: "USP 797 requires documented monitoring frequency appropriate to the ISO classification of each zone. BiosureLab's scheduling system tracks compliance with these frequency requirements and makes the schedule visible to the hospital client — eliminating coordination gaps between the lab and the pharmacy operations team.",
      },
    ],
  },
  {
    slug: "multi-client-lab-networks",
    breadcrumbTitle: "Multi-Client Lab Networks",
    metaTitle: "Multi-Client Lab Networks | BiosureLab",
    metaDescription: "Serve dozens of pharmacy clients from a single lab tenant.",
    heroTitle: "Multi-Client Lab Networks",
    heroSubtitle: "Serve dozens of pharmacy clients from a single lab tenant.",
    overview:
      "Regional environmental monitoring labs and contract testing organizations serve anywhere from a handful to hundreds of pharmacy clients. BiosureLab's multi-tenant architecture is designed for this: unlimited client companies, fully segregated data, and bulk reporting capabilities — all managed from a single lab account.",
    whoItsFor:
      "Regional EM testing labs, contract testing organizations (CTOs), and 503B outsourcing facilities managing environmental monitoring programs for multiple pharmacy clients.",
    body: [
      { type: "heading", text: "How Multi-Client Management Works" },
      { type: "heading", text: "Unlimited Client Companies" },
      {
        type: "paragraph",
        text: "There is no per-client charge for the lab side of BiosureLab. Add as many pharmacy clients as your lab serves — each with their own company profile, locations, sample maps, and scheduling configuration.",
      },
      { type: "heading", text: "Fully Segregated Client Data" },
      {
        type: "paragraph",
        text: "Each client company sees only their own data in their portal. Lab staff see all clients from the lab view. There is no risk of one client's data being visible to another.",
      },
      { type: "heading", text: "Scalable Scheduling" },
      {
        type: "paragraph",
        text: "Set up recurring monitoring schedules for every client location. BiosureLab generates occurrence calendars 12 months in advance, giving lab administrators visibility into the full upcoming workload across all clients in a single calendar view — essential for staffing and capacity planning.",
      },
      { type: "heading", text: "Bulk Report Operations" },
      {
        type: "paragraph",
        text: "When a batch of reports for multiple clients is ready, lab staff can manage approval and visibility toggles in bulk. Clients receive instant notifications when their reports are published, without requiring manual email delivery.",
      },
      { type: "heading", text: "Activity and Analytics" },
      {
        type: "paragraph",
        text: "Lab administrators have a dashboard view of activity across all clients: pending CoC forms, reports awaiting review, recent submissions, and historical report counts. This high-level visibility is essential when managing a large client roster.",
      },
      { type: "heading", text: "Client Self-Service" },
      {
        type: "paragraph",
        text: "Every client gets their own portal access at no extra charge. The average multi-client lab fields 15–20 status inquiry calls per week. A client portal eliminates the majority of these calls — freeing up lab staff to focus on testing rather than fielding phone inquiries.",
      },
    ],
  },
  {
    slug: "environmental-testing-labs-expanding",
    breadcrumbTitle: "Environmental Testing Labs",
    metaTitle: "Environmental Testing Labs (Expanding) | BiosureLab",
    metaDescription:
      "A configurable platform growing beyond USP 797 — coming Q3 2026.",
    heroTitle: "Environmental Testing Labs (Expanding)",
    heroSubtitle: "A configurable platform growing beyond USP 797 — coming Q3 2026.",
    overview:
      "BiosureLab's Template Builder — launching Q3 2026 — will allow environmental testing labs to define custom test parameters, create intake forms, and design report templates for test types beyond USP 797 microbiology. Water quality, food safety, and general environmental testing labs will be able to configure their own workflows without developer involvement.",
    whoItsFor:
      "Environmental testing labs, food safety labs, water quality programs, and any lab type that needs configurable test workflows beyond USP 797 environmental monitoring.",
    body: [
      { type: "heading", text: "What the Template Builder Will Enable" },
      { type: "heading", text: "Custom Test Parameter Definition" },
      {
        type: "paragraph",
        text: "Lab admins will define their own test variables: name, data type (numeric, text, dropdown, date, image, file), validation rules, and units of measurement. These variables form the basis for intake forms and report templates.",
      },
      { type: "heading", text: "Dynamic Test Intake Forms" },
      {
        type: "paragraph",
        text: "Based on defined variables, the system auto-generates the appropriate data entry form for technicians. A water chemistry test type would generate a form with pH, turbidity, and coliform fields. A food safety micro test would generate a different form entirely. Each test type has its own intake form, generated from its variable definitions.",
      },
      { type: "heading", text: "Custom Report Templates" },
      {
        type: "paragraph",
        text: "A drag-and-drop report template designer will allow lab admins to define report layouts, map data variables to report sections, and preview populated outputs. The first template in the new system will be the existing USP 797 report — proving the framework works and maintaining backward compatibility.",
      },
      { type: "heading", text: "Test Type Registry" },
      {
        type: "paragraph",
        text: 'Labs create named test types (e.g., "USP 797 EM", "Potable Water Chemistry", "Surface Micro — Food Contact") each with its own variable set, intake form, and report template. Different clients can be assigned different test types within the same lab account.',
      },
      { type: "heading", text: "Current Status" },
      {
        type: "paragraph",
        text: "The core USP 797 workflow is fully available today. The Template Builder is on the Phase 2 roadmap, targeting Q3 2026. Labs interested in early access can contact the BiosureLab team to discuss their use case and be added to the beta program.",
      },
    ],
  },
];

export function getUseCaseDetailsBySlug(slug: string) {
  return useCaseDetailsDb.find((u) => u.slug === slug) ?? null;
}

