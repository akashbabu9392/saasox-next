export type FeatureCapability = {
  title: string;
  description: string;
};

export type FeatureDetailsRecord = {
  slug: string;
  breadcrumbTitle: string;
  metaTitle: string;
  metaDescription: string;
  iconSrc: string;
  iconAlt: string;
  heroTitle: string;
  heroSubtitle: string;
  overview: string;
  keyCapabilities: FeatureCapability[];
  whoBenefits: Array<{ label: string; description: string }>;
  complianceNote?: string;
};

export const featureDetailsDb: FeatureDetailsRecord[] = [
  {
    slug: "chain-of-custody",
    breadcrumbTitle: "Chain of Custody",
    metaTitle: "Chain of Custody (CoC) | BiosureLab",
    metaDescription:
      "From sample intake to submission — fully digital, fully traceable.",
    iconSrc: "/assets/img/icons/code-icon.svg",
    iconAlt: "Chain of Custody icon",
    heroTitle: "Chain of Custody (CoC)",
    heroSubtitle: "From sample intake to submission — fully digital, fully traceable.",
    overview:
      "The Chain of Custody form is the foundation of every environmental monitoring event. BiosureLab digitizes the entire CoC workflow — eliminating handwritten forms, misplaced paperwork, and manual data re-entry. From the moment a sample collection event is initiated to the moment results are reported, every action is timestamped and attributed.",
    keyCapabilities: [
      {
        title: "Digital CoC Creation & Submission",
        description:
          "Create CoC forms directly in the portal. Client-side company admins can initiate CoC forms themselves, pre-populating customer information from their company profile. Lab staff can also create CoC forms on behalf of clients. Once complete, a single click submits the form — triggering an automatic notification to the lab and generating a lab-side copy with additional lab-only fields.",
      },
      {
        title: "Draft → Submitted Lifecycle",
        description:
          "CoC forms follow a structured status lifecycle: Draft → Submitted. In Draft, the form can be edited freely. Once submitted, the form is locked for the client and becomes the official record of the sampling event. Lab staff work from the submitted version, adding internal data like equipment serial numbers and calibration expiry dates without altering the client-facing record.",
      },
      {
        title: "Sample Locations & Media Lot Tracking",
        description:
          "Each CoC captures the precise sample locations drawn from the client's mapped floor plan — no free-text guessing. Media lot information (manufacturer, lot number, expiry date) is tracked per CoC, giving your lab a complete record for every culture media batch used. Air sampler equipment is also logged per sample, including serial number and calibration expiry, satisfying USP 797 documentation requirements.",
      },
      {
        title: "Automated Sample ID Generation",
        description:
          "Sample IDs are generated automatically using configurable patterns based on your lab's code sequences. No more manually assigning IDs or worrying about duplicates.",
      },
    ],
    whoBenefits: [
      {
        label: "Lab Technicians",
        description:
          "No more transcribing handwritten forms. All data is entered once and flows through to results and reports.",
      },
      {
        label: "Pharmacy QA Managers",
        description:
          "Submit CoC forms digitally from anywhere. No faxing, no emailing PDF attachments.",
      },
      {
        label: "Lab Directors",
        description:
          "Complete audit trail of every CoC, who created it, when it was submitted, and every change made.",
      },
    ],
    complianceNote:
      "All CoC records are stored with full audit trails, supporting USP 797, 21 CFR Part 11 readiness, and ISO 17025 documentation requirements.",
  },
  {
    slug: "sample-testing-results",
    breadcrumbTitle: "Sample Testing & Results",
    metaTitle: "Sample Testing & Results | BiosureLab",
    metaDescription: "Enter results once. Everything else flows automatically.",
    iconSrc: "/assets/img/icons/cloud-computing.svg",
    iconAlt: "Sample testing icon",
    heroTitle: "Sample Testing & Results",
    heroSubtitle: "Enter results once. Everything else flows automatically.",
    overview:
      "BiosureLab's sample result entry system is purpose-built for environmental monitoring microbiology. From CFU counts to organism identification to plate image uploads, every data point you need for a USP 797-compliant report is captured in a single structured workflow — no spreadsheets, no copy-paste.",
    keyCapabilities: [
      {
        title: "CFU Entry & Organism Identification",
        description:
          "Enter colony-forming unit (CFU) counts per sample with full context: analysis type, sample type, conditions (temperature, humidity), and media used. For each sample showing growth, identify organisms down to genus and species level. The system maintains your lab's organism database — bacteria, yeast, mold, and indicator organisms — so identification is a selection, not a freehand entry.",
      },
      {
        title: "Plate Images & Incubation Parameters",
        description:
          "Upload bacterial and fungal plate images directly from the result entry screen. Images are compressed and stored securely, linked to the specific sample record and included in the final PDF report. Incubation parameters — temperature range, incubation start time, end time, and calculated duration — are recorded per sample, giving inspectors the full environmental context for each culture.",
      },
      {
        title: "Alert/Action Level Evaluation Per Sample",
        description:
          "BiosureLab automatically evaluates each sample result against your configured ISO class alert and action levels. Results are flagged as Pass, Alert, or Action in real time as you enter CFU counts — no manual lookup tables. The final report displays this classification for every sample location, satisfying USP 797 reporting expectations.",
      },
      {
        title: "ISO Class-Based Result Classification",
        description:
          "Sample locations are pre-mapped to ISO classes in your client's floor plan. When results are entered, the system applies the correct alert and action level thresholds for that classification automatically.",
      },
      {
        title: "Resampling Support",
        description:
          "For samples requiring resampling, the system supports custom incubation parameters on a per-sample basis, keeping your records accurate even when deviations from standard protocol occur.",
      },
    ],
    whoBenefits: [
      {
        label: "Lab Technicians",
        description:
          "Structured entry screens eliminate transcription errors. Images, counts, and organism IDs are captured in one place.",
      },
      {
        label: "Lab Directors",
        description:
          "Every result is traceable to a specific technician, timestamp, and sample event. Audit-ready from day one.",
      },
      {
        label: "Quality Reviewers",
        description:
          "Alert/action level flags are calculated automatically, reducing the risk of missed excursions.",
      },
    ],
  },
  {
    slug: "pdf-report-generator",
    breadcrumbTitle: "PDF Report Generator",
    metaTitle: "One-Click PDF Report Generator | BiosureLab",
    metaDescription: "Professional lab reports, generated in seconds, not hours.",
    iconSrc: "/assets/img/icons/quality-assurance.svg",
    iconAlt: "PDF report icon",
    heroTitle: "One-Click PDF Report Generator",
    heroSubtitle: "Professional lab reports, generated in seconds, not hours.",
    overview:
      "Report generation is one of the most time-consuming tasks in an environmental monitoring lab. BiosureLab eliminates this bottleneck with an automated PDF engine that assembles your complete lab report — results, trending, floor plan, organism descriptions, and electronic signatures — in a single click.",
    keyCapabilities: [
      {
        title: "Automated PDF from CoC + Results",
        description:
          "When your sample results are complete, one click triggers the Report Generator. The system pulls all CoC data, sample results, organism identifications, plate images, incubation parameters, and historical trending data — and assembles them into a professional, USP 797-formatted PDF report. No copy-paste, no Word templates, no manual formatting.",
      },
      {
        title: "Versioning & Approval Workflow",
        description:
          "Reports follow a structured review lifecycle: Draft → Under Review → Approved (or Rejected). Every generated PDF is versioned — if a report is rejected and regenerated after corrections, the full version history is preserved. Lab admins and authorized employees can approve reports with electronic signatures, adding their name and credentials to the official record.",
      },
      {
        title: "Historical Trending & Floor Plans",
        description:
          "Every report automatically includes a historical trending section, showing mean CFU counts, standard deviation, and z-scores for each sample location across previous sampling events. This gives your pharmacy clients the environmental trend data they need for USP 797 compliance — without you building a single chart manually. Floor plan pages are included automatically when a floor plan has been uploaded for the client location.",
      },
      {
        title: "Organism Identification Descriptions",
        description:
          "When organisms are identified, the report automatically includes standardized descriptions of each organism — its characteristics, clinical significance, and common environmental sources — drawing from your lab's organism database.",
      },
      {
        title: "Electronic Signatures",
        description:
          "Lab director and QC manager signatures are embedded in the report using signature images uploaded to your lab profile. No wet signatures, no scanning.",
      },
      {
        title: "Report Visibility Control",
        description:
          "Reports are invisible to clients until you toggle them visible. This lets your lab review and approve reports before clients can access them — preventing premature disclosure of results under review.",
      },
    ],
    whoBenefits: [
      {
        label: "Lab Technicians",
        description:
          "What used to take 2–3 hours per report now takes seconds.",
      },
      {
        label: "Lab Directors",
        description:
          "Electronic approvals, version history, and signature controls satisfy 21 CFR Part 11 requirements.",
      },
      {
        label: "Pharmacy QA Managers",
        description:
          "Receive notification the moment a report is approved. No more calling the lab for status updates.",
      },
    ],
  },
  {
    slug: "client-portal",
    breadcrumbTitle: "Client Portal",
    metaTitle: "Free Client Portal | BiosureLab",
    metaDescription:
      "Give your pharmacy clients self-service access. Reduce phone calls by 80%.",
    iconSrc: "/assets/img/icons/security.svg",
    iconAlt: "Client portal icon",
    heroTitle: "Free Client Portal",
    heroSubtitle: "Give your pharmacy clients self-service access. Reduce phone calls by 80%.",
    overview:
      "Most LIMS platforms are lab-only tools. BiosureLab includes a full client-facing portal at no extra cost on any plan. Your pharmacy and facility clients get their own login, their own report library, and the ability to submit CoC forms — all without any additional setup on your end.",
    keyCapabilities: [
      {
        title: "Self-Service Report Access",
        description:
          "Client company admins and employees log in to their own portal view and see only their reports. They can filter by location, date range, or status. Every approved report is available for preview and download as a PDF. Need to share multiple reports at once? Clients can bulk-download a ZIP archive of selected reports.",
      },
      {
        title: "Threaded Comments & Notifications",
        description:
          "Clients can leave comments directly on reports — questions about a result, requests for clarification, or notes for the lab. Comments support threaded replies, so conversations stay organized on the relevant record. Lab staff are notified of new comments in real time (in-app and email), and clients are notified when the lab replies.",
      },
      {
        title: "Always Free on All Plans",
        description:
          "Unlike competing platforms that charge per client seat or treat client access as an add-on module, BiosureLab's client portal is included on every plan at no extra charge. Add unlimited client companies and their employees without worrying about per-seat costs for your pharmacy clients.",
      },
      {
        title: "CoC Submission from the Portal",
        description:
          "Client company admins can initiate and submit Chain of Custody forms directly from their portal. Customer information and sample location data auto-populate from their company profile — reducing entry time and errors. The lab receives an instant notification upon submission.",
      },
      {
        title: "Notification Preferences",
        description:
          "Clients can configure their notification preferences — choosing to receive email alerts, in-app notifications, or both — for events like new reports, report updates, and comment replies.",
      },
    ],
    whoBenefits: [
      {
        label: "Pharmacy QA Managers",
        description:
          "Access reports immediately when published. No more waiting on email attachments or making status inquiry calls.",
      },
      {
        label: "Lab Directors",
        description:
          "Reduce client communication overhead by giving clients a self-service home for their data.",
      },
      {
        label: "Lab Staff",
        description:
          "Fewer interruptions from client phone calls and email requests for report copies.",
      },
    ],
  },
  {
    slug: "scheduling-calendar",
    breadcrumbTitle: "Scheduling & Calendar",
    metaTitle: "Scheduling & Calendar | BiosureLab",
    metaDescription:
      "Never miss a sampling event. Keep clients informed automatically.",
    iconSrc: "/assets/img/icons/advanced-tracking.svg",
    iconAlt: "Scheduling icon",
    heroTitle: "Scheduling & Calendar",
    heroSubtitle: "Never miss a sampling event. Keep clients informed automatically.",
    overview:
      "Environmental monitoring programs run on recurring schedules — weekly, biweekly, monthly, or custom intervals. BiosureLab's scheduling system tracks every sampling commitment in a shared calendar that lab staff and client contacts can both see, keeping everyone aligned without a single spreadsheet.",
    keyCapabilities: [
      {
        title: "Recurring Submission Schedules",
        description:
          "Create sampling schedules for any client location with flexible recurrence options: weekly (specific days), biweekly, monthly (specific day of month), or fully custom date patterns. The system generates a 12-month occurrence cache automatically when a schedule is created, so the calendar is always populated.",
      },
      {
        title: "Calendar View & Status History",
        description:
          "All scheduled occurrences appear in a calendar view — filterable by company, location, or date range. Each occurrence moves through a status workflow: Scheduled → Collected → Testing → Completed. Status changes are logged with user attribution, giving you a full history of when each step occurred and who updated it.",
      },
      {
        title: "Client-Visible Schedules",
        description:
          "Schedules are visible to client company admins in their portal. Your pharmacy clients can see exactly when their next sampling event is due, what the status of the current event is, and the history of past events — without calling the lab.",
      },
      {
        title: "On-Demand Occurrence Creation",
        description:
          "Need to add a one-time sampling event outside of a recurring schedule? Create ad-hoc occurrences directly from the calendar without modifying the underlying schedule.",
      },
    ],
    whoBenefits: [
      {
        label: "Lab Administrators",
        description:
          "Full visibility into all upcoming client commitments in one view.",
      },
      {
        label: "Pharmacy QA Managers",
        description:
          "Know your sampling schedule at a glance. Receive proactive visibility rather than chasing updates.",
      },
      {
        label: "Lab Technicians",
        description:
          "See exactly what is coming up and plan workload accordingly.",
      },
    ],
  },
  {
    slug: "role-based-access-control",
    breadcrumbTitle: "Role-Based Access Control",
    metaTitle: "Role-Based Access Control | BiosureLab",
    metaDescription: "Five roles. Granular permissions. Complete audit trail.",
    iconSrc: "/assets/img/icons/analytics.svg",
    iconAlt: "RBAC icon",
    heroTitle: "Role-Based Access Control",
    heroSubtitle: "Five roles. Granular permissions. Complete audit trail.",
    overview:
      "Not everyone in your lab needs access to everything — and not every pharmacy client employee should see every record. BiosureLab's role-based access control system gives you precise control over what each user can see and do, with a complete audit trail of every permission change.",
    keyCapabilities: [
      {
        title: "Five Roles with Granular Permissions",
        description:
          "BiosureLab defines five distinct user roles across two organizational tiers: Lab Admin (full access), Lab Employee (configurable access), Company Admin (client) (manages portal access and can submit CoC forms), Company Employee (client) (view and download reports), and Super Admin (platform-level oversight). Each role comes with a default permission set across every module and action in the system. Lab admins can further customize permissions at the role level — enabling or disabling specific capabilities per module.",
      },
      {
        title: "Per-User Permission Overrides",
        description:
          "Need to give one specific technician access to a feature outside their role, or restrict a particular user more tightly? BiosureLab supports per-user permission overrides layered on top of their role. Override a single permission without changing the role for everyone.",
      },
      {
        title: "Audit Trail & Activity Logs",
        description:
          "Every permission change — role assignments, role modifications, and per-user overrides — is logged with the acting user, timestamp, and before/after state. The activity log captures all user actions across the system, giving you the documentation you need for compliance reviews and inspections.",
      },
      {
        title: "Encryption in Transit and at Rest",
        description:
          "All data is encrypted in transit using TLS 1.2+ and encrypted at rest using AES-256. API endpoints are rate-limited to prevent abuse. Role and permission data is enforced server-side — no client-side permission bypass is possible.",
      },
    ],
    whoBenefits: [
      {
        label: "Lab Directors",
        description:
          "Set up roles once. Control who can approve reports, manage clients, or export data without managing individual permissions for every employee.",
      },
      {
        label: "Compliance Officers",
        description:
          "Full audit trail of all access changes supports 21 CFR Part 11 and ISO 17025 requirements.",
      },
      {
        label: "IT / Security",
        description:
          "Encryption at rest and in transit, account lockout policies, and rate limiting reduce your attack surface.",
      },
    ],
  },
];

export function getFeatureDetailsBySlug(slug: string) {
  return featureDetailsDb.find((f) => f.slug === slug) ?? null;
}

