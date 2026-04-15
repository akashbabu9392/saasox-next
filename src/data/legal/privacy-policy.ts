import type { LegalDocument } from "./legal-types";

export const privacyPolicyDocument: LegalDocument = {
  title: "Privacy Policy | BioSure Lab Portal",
  description:
    "Learn how BioSure Lab Portal collects, uses, and protects your laboratory data. Our commitment to privacy and security in laboratory information management.",
  breadcrumbTitle: "Privacy Policy",
  effectiveDateLabel: "April 15, 2026",
  lastUpdatedLabel: "April 15, 2026",
  toc: [
    { id: "introduction", label: "1. Introduction" },
    { id: "information-we-collect", label: "2. Information We Collect" },
    { id: "how-we-use", label: "3. How We Use Your Information" },
    { id: "storage-and-protection", label: "4. How We Store & Protect Your Information" },
    { id: "data-sharing", label: "5. Data Sharing & Disclosure" },
    { id: "data-retention", label: "6. Data Retention" },
    { id: "rights-and-choices", label: "7. Your Rights & Choices" },
    { id: "cookies", label: "8. Cookies & Tracking Technologies" },
    { id: "children", label: "9. Children's Privacy" },
    { id: "international-transfers", label: "10. International Data Transfers" },
    { id: "changes", label: "11. Changes to This Privacy Policy" },
    { id: "contact", label: "12. Contact Us" },
  ],
  sections: [
    {
      id: "introduction",
      title: "1. Introduction",
      blocks: [
        {
          type: "paragraph",
          text: 'BioSure Lab Portal ("BioSure," "we," "us," or "our") is a cloud-based Laboratory Information Management System (LIMS) developed and operated by RainerTek LLC. We are committed to protecting the privacy of our users — including laboratory administrators, lab technicians, client company administrators, client company employees, and platform visitors.',
        },
        {
          type: "paragraph",
          text: 'This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you access or use the BioSure Lab Portal platform (available at biosurelab.com and associated subdomains), our application programming interfaces (APIs), and any related services (collectively, the "Service").',
        },
        {
          type: "paragraph",
          text: "By accessing or using the Service, you agree to the terms of this Privacy Policy. If you do not agree, please discontinue use of the Service immediately.",
        },
      ],
    },
    {
      id: "information-we-collect",
      title: "2. Information We Collect",
      blocks: [
        { type: "heading", level: 3, text: "2.1 Account & Identity Information" },
        {
          type: "paragraph",
          text: "When you register for or are invited to the Service, we collect:",
        },
        {
          type: "list",
          items: [
            "Personal identifiers: Full name (first and last), email address, phone number",
            "Professional information: Job title/designation, role within the organization (Lab Admin, Lab Employee, Company Admin, Company Employee)",
            "Authentication credentials: Password (stored as a bcrypt hash — we never store plaintext passwords), login attempt records, and session tokens",
            "Profile media: Avatar/profile images you choose to upload",
          ],
        },
        {
          type: "heading",
          level: 3,
          text: "2.2 Information from Third-Party Authentication Providers",
        },
        {
          type: "paragraph",
          text: "If you choose to sign in using a third-party authentication provider, we may receive the following information from that provider:",
        },
        {
          type: "list",
          items: [
            "Google Sign-In: Your name, email address, profile picture, and Google account identifier. We receive only the information you authorize Google to share during the consent screen. We do not receive your Google password.",
            "Microsoft Sign-In: Your name, email address, profile picture, and Microsoft account identifier. We receive only the information you authorize Microsoft to share during the consent screen. We do not receive your Microsoft password.",
          ],
        },
        {
          type: "paragraph",
          text: "We use this information solely to create or authenticate your BioSure account. We do not access your Google Workspace, Microsoft 365, email inbox, calendar, contacts, files, or any other data from these providers beyond what is listed above. We do not post, modify, or act on your behalf through these providers.",
        },
        { type: "heading", level: 3, text: "2.3 Laboratory & Organization Data" },
        {
          type: "paragraph",
          text: "If you are a laboratory user, we collect:",
        },
        {
          type: "list",
          items: [
            "Lab information: Lab name, email, phone number, physical address, lab code",
            "Lab configuration: Report code sequences, lab settings, electronic signature images (lab director, QC manager)",
            "Equipment records: Air sampler serial numbers, calibration dates, and manufacturer details",
            "Organism database entries: Bacterial, yeast, mold, and indicator organism records maintained by the lab",
            "Lookup data: ISO classification records, media types, sample types, and environmental conditions",
          ],
        },
        { type: "heading", level: 3, text: "2.4 Client Company Data" },
        {
          type: "paragraph",
          text: "If your laboratory manages client companies through the Service, we process:",
        },
        {
          type: "list",
          items: [
            "Company details: Company name, email, company code, company type, status, and logo",
            "Contact information: Principal contacts, sampling contacts, and billing contacts (names, phone numbers, email addresses, physical addresses)",
            "Location data: Facility addresses, floor plan images, and sample location mapping configurations",
            "Employee records: Names, email addresses, phone numbers, designations, and notification preferences of company employees registered on the portal",
          ],
        },
        { type: "heading", level: 3, text: "2.5 Chain of Custody & Testing Data" },
        {
          type: "paragraph",
          text: "When you create, submit, or process chain-of-custody (CoC) forms and sample results, we collect:",
        },
        {
          type: "list",
          items: [
            "Customer information: Name, phone, email, and address on CoC forms",
            "Order details: Analysis methods, identification criteria, collection information, and notes",
            "Media lot tracking data: Manufacturer, lot number, and expiry dates",
            "Sample results: Colony-forming unit (CFU) counts, organism identifications, incubation parameters (temperature, start/end times, duration), alert/action level evaluations, and ISO class compliance results",
            "Laboratory images: Bacterial and fungal plate photographs uploaded during sample result entry",
            "Air sampler data: Sampler associations, serial numbers, and calibration records per sample",
          ],
        },
        { type: "heading", level: 3, text: "2.6 Reports & Documents" },
        {
          type: "list",
          items: [
            "Generated PDF reports: Environmental monitoring reports containing sample results, historical trending data (mean, standard deviation, z-scores), floor plan pages, organism identification descriptions, and electronic signatures",
            "Report metadata: Report codes, version history, approval/rejection status, reviewer remarks, and visibility settings",
            "Floor plan uploads: Facility floor plan images uploaded by lab or company users",
          ],
        },
        { type: "heading", level: 3, text: "2.7 Communication & Collaboration Data" },
        {
          type: "list",
          items: [
            "Comments and replies: Threaded comments on reports between lab and client company users",
            "Notification preferences: Your email and in-app notification settings per notification category",
            "Email communications: Transactional emails sent by the system (report notifications, account invitations, password resets, comment alerts)",
          ],
        },
        { type: "heading", level: 3, text: "2.8 Usage & Activity Data" },
        {
          type: "list",
          items: [
            "Activity logs: We maintain a detailed audit trail of all user actions within the platform, including module accessed, action performed, timestamp, and user attribution",
            "Authentication events: Login timestamps, failed login attempts, account lockout events, password change events, and session refresh events",
            "Dashboard analytics: Aggregated usage metrics such as report counts, company statistics, and operational trends",
          ],
        },
        { type: "heading", level: 3, text: "2.9 Technical & Device Data" },
        {
          type: "paragraph",
          text: "When you access the Service, we automatically collect:",
        },
        {
          type: "list",
          items: [
            "Device information: Browser type and version, operating system",
            "Network data: IP address, referring URL",
            "Usage patterns: Pages viewed, features accessed, and time spent on the platform",
            "Real-time connection data: WebSocket connection metadata for real-time notification delivery",
          ],
        },
      ],
    },
    {
      id: "how-we-use",
      title: "3. How We Use Your Information",
      blocks: [
        { type: "heading", level: 3, text: "3.1 Service Delivery & Operations" },
        {
          type: "list",
          items: [
            "Providing and operating the LIMS platform, including multi-tenant lab management, sample tracking, result entry, and PDF report generation",
            "Processing chain-of-custody forms and managing the complete environmental monitoring workflow",
            "Generating, storing, and delivering PDF lab reports through our Report Generator microservice",
            "Facilitating real-time notifications and email alerts for reports, comments, scheduling events, and account changes",
            "Managing user accounts, authentication (including third-party sign-in via Google and Microsoft), and role-based access control (RBAC) with granular per-module permissions",
          ],
        },
        { type: "heading", level: 3, text: "3.2 Security & Compliance" },
        {
          type: "list",
          items: [
            "Authenticating users via JWT-based token verification and third-party OAuth providers (Google, Microsoft)",
            "Enforcing account lockout policies after failed login attempts",
            "Maintaining complete audit trails for regulatory compliance readiness (USP 797, 21 CFR Part 11)",
            "Detecting and preventing unauthorized access, fraud, and security threats through rate limiting, input validation, and SQL injection/XSS protection",
            "Performing data backups for disaster recovery",
          ],
        },
        { type: "heading", level: 3, text: "3.3 Improvement & Analytics" },
        {
          type: "list",
          items: [
            "Analyzing platform usage patterns to improve features and user experience",
            "Generating aggregated, de-identified analytics for internal business insights",
            "Monitoring system performance and infrastructure health",
          ],
        },
        { type: "heading", level: 3, text: "3.4 Communications" },
        {
          type: "list",
          items: [
            "Sending transactional emails (account invitations, password resets, report notifications, comment alerts, scheduling reminders)",
            "Delivering in-app real-time notifications via our WebSocket-based notification system",
            "Responding to support inquiries and user feedback",
          ],
        },
      ],
    },
    {
      id: "storage-and-protection",
      title: "4. How We Store & Protect Your Information",
      blocks: [
        { type: "heading", level: 3, text: "4.1 Infrastructure & Storage" },
        {
          type: "list",
          items: [
            "Database: Your data is stored in PostgreSQL databases hosted on secure cloud infrastructure",
            "File storage: Reports (PDFs), plate images, floor plans, avatars, and logos are stored in Amazon Web Services S3 with encryption at rest",
            "Queue system: Email delivery is processed through Redis-backed message queues (BullMQ) for reliable asynchronous delivery",
            "Real-time: WebSocket connections are managed through Socket.IO for in-app notification delivery",
          ],
        },
        { type: "heading", level: 3, text: "4.2 Security Measures" },
        {
          type: "paragraph",
          text: "We implement a defense-in-depth security architecture:",
        },
        {
          type: "list",
          items: [
            "Encryption in transit: All data transmitted between your browser and our servers is encrypted using TLS 1.2 or higher",
            "Encryption at rest: Data stored in AWS S3 is encrypted using AES-256 encryption",
            "Password security: All passwords are hashed using bcrypt with configurable salt rounds — we never store or have access to your plaintext password",
            "OAuth security: Third-party sign-in tokens (Google, Microsoft) are handled through industry-standard OAuth 2.0 / OpenID Connect protocols. We do not store your third-party provider passwords",
            "Access control: Granular role-based access control (RBAC) ensures users can only access data within their authorized scope; every database query is filtered by tenant (lab) isolation",
            "Network security: CORS is configured for allowed origins only; HTTP security headers are enforced via Helmet; API rate limiting is applied to prevent abuse",
            "Input protection: All user inputs are validated via schema validation (Joi), and protected against SQL injection and cross-site scripting (XSS) attacks",
            "File access: Files stored in S3 are accessed through presigned URLs with time-limited access",
            "Soft deletion: Primary entities are logically deleted (soft delete) rather than permanently removed, preserving audit trail integrity",
          ],
        },
        { type: "heading", level: 3, text: "4.3 Multi-Tenant Isolation" },
        {
          type: "paragraph",
          text: "BioSure Lab Portal operates a logical multi-tenant architecture. Each laboratory is an isolated tenant — data belonging to one lab is never accessible to users of another lab. Every query is filtered by the lab's unique identifier at the service layer. Super Administrators (RainerTek LLC platform operators) may access lab data solely for platform management, support, and monitoring purposes.",
        },
      ],
    },
    {
      id: "data-sharing",
      title: "5. Data Sharing & Disclosure",
      blocks: [
        { type: "heading", level: 3, text: "5.1 Within the Platform" },
        {
          type: "list",
          items: [
            "Lab-to-client sharing: Reports, scheduling data, and CoC form data are shared between lab users and their associated client company users according to the visibility settings configured by the lab",
            "Role-based visibility: Users see only the data their role and permissions authorize; company employees see data scoped to their company; lab employees see data scoped to their lab",
          ],
        },
        { type: "heading", level: 3, text: "5.2 Third-Party Service Providers" },
        {
          type: "paragraph",
          text: "We share limited data with the following categories of service providers who assist in operating the Service:",
        },
        {
          type: "table",
          columns: ["Provider Category", "Purpose", "Data Shared"],
          rows: [
            ["Cloud hosting provider", "Infrastructure and compute", "All platform data (encrypted)"],
            ["AWS S3", "File storage", "Reports, images, floor plans"],
            [
              "Google (OAuth)",
              "Authentication via Google Sign-In",
              "Name, email, profile picture (received from Google, not sent)",
            ],
            [
              "Microsoft (OAuth)",
              "Authentication via Microsoft Sign-In",
              "Name, email, profile picture (received from Microsoft, not sent)",
            ],
            ["SMTP email provider", "Transactional email delivery", "Recipient email addresses, notification content"],
            ["Domain and DNS providers", "Website delivery and SSL", "None (infrastructure only)"],
          ],
        },
        {
          type: "paragraph",
          text: "All third-party providers are bound by contractual obligations to protect your data and use it only for the specific purposes we engage them for.",
        },
        { type: "heading", level: 3, text: "5.3 Legal & Compliance Disclosures" },
        {
          type: "paragraph",
          text: "We may disclose your information if required to do so by law, regulation, legal process, or governmental request, or when we believe disclosure is necessary to protect our rights, your safety, or the safety of others.",
        },
        { type: "heading", level: 3, text: "5.4 Business Transfers" },
        {
          type: "paragraph",
          text: "In the event of a merger, acquisition, reorganization, or sale of assets, your information may be transferred to the successor entity. We will notify you of any such change and any choices you may have regarding your information.",
        },
        { type: "heading", level: 3, text: "5.5 What We Do NOT Do" },
        {
          type: "list",
          items: [
            "We do not sell your personal information to third parties",
            "We do not use your data for advertising or behavioral profiling",
            "We do not share your laboratory testing data, sample results, or client company data with other labs or external parties unless required by law",
            "We do not access your Google Workspace, Microsoft 365, or any data from third-party sign-in providers beyond what is needed for authentication",
          ],
        },
      ],
    },
    {
      id: "data-retention",
      title: "6. Data Retention",
      blocks: [
        {
          type: "list",
          items: [
            "Active account data: We retain your personal information and platform data for as long as your account is active and the Service is in use by your organization",
            "Deleted data: When entities are deleted within the platform, they undergo soft deletion (logical delete with a timestamp). Soft-deleted data may be retained for a period to support audit trail integrity and potential recovery, after which it may be permanently purged",
            "Activity logs: Activity log retention period depends on your subscription plan, as detailed in your service agreement",
            "Authentication tokens: Refresh tokens expire after 1 day; access tokens expire after 30 minutes. Expired tokens are not retained. Third-party OAuth tokens are not stored permanently; they are used only during the authentication flow",
            "Post-termination: Upon account termination or subscription cancellation, we will retain your data for a reasonable period (typically 30 days) to allow for reactivation or data export. After that period, we will delete or de-identify your data, except where retention is required by law or for legitimate audit purposes",
          ],
        },
      ],
    },
    {
      id: "rights-and-choices",
      title: "7. Your Rights & Choices",
      blocks: [
        { type: "heading", level: 3, text: "7.1 Access & Portability" },
        {
          type: "list",
          items: [
            "You can access your profile information, notification preferences, and activity history through the platform interface at any time",
            "Lab Administrators can export report data in CSV/Excel format",
            "You may request a copy of your personal data by contacting us at the email address listed below",
          ],
        },
        { type: "heading", level: 3, text: "7.2 Correction" },
        {
          type: "list",
          items: [
            "You can update your name, phone number, designation, and notification preferences directly in the platform",
            "Lab Administrators can update company and employee information",
            "For corrections to data you cannot modify yourself, contact us",
          ],
        },
        { type: "heading", level: 3, text: "7.3 Deletion" },
        {
          type: "list",
          items: [
            "Lab Administrators can deactivate or archive companies and user accounts",
            "You may request deletion of your personal data by contacting us; we will comply subject to any legal retention obligations or audit trail requirements",
            "Note: Due to the regulatory nature of laboratory data (USP 797 compliance, 21 CFR Part 11), certain records may need to be retained for audit purposes even after a deletion request",
          ],
        },
        { type: "heading", level: 3, text: "7.4 Third-Party Account Unlinking" },
        {
          type: "list",
          items: [
            "If you signed in with Google or Microsoft, you may revoke BioSure's access at any time through your Google Account settings (security → third-party apps) or Microsoft Account settings (privacy → apps and services). Revoking access will prevent future sign-in via that provider but will not delete your BioSure account or data — contact us separately for account deletion",
            "You may also unlink your third-party sign-in from within your BioSure account settings (if available) and switch to email/password authentication",
          ],
        },
        { type: "heading", level: 3, text: "7.5 Notification Preferences" },
        {
          type: "list",
          items: [
            "You can control your email and in-app notification preferences per category through your account settings",
            "You may opt out of non-essential email notifications at any time; transactional emails related to account security (password resets, lockout alerts) cannot be opted out of",
          ],
        },
        { type: "heading", level: 3, text: "7.6 Account Closure" },
        {
          type: "list",
          items: [
            "Contact your Lab Administrator or Company Administrator to request account deactivation",
            "Contact us directly to request complete account deletion",
          ],
        },
      ],
    },
    {
      id: "cookies",
      title: "8. Cookies & Tracking Technologies",
      blocks: [
        {
          type: "paragraph",
          text: "BioSure Lab Portal uses minimal cookies and local storage strictly necessary for the operation of the Service:",
        },
        {
          type: "list",
          items: [
            "Authentication tokens: Access and refresh tokens stored in secure, HTTP-only cookies or browser storage for session management",
            "OAuth state parameters: Temporary tokens used during the Google or Microsoft sign-in flow to prevent cross-site request forgery; these are discarded after authentication completes",
            "Session preferences: UI preferences such as sidebar state and theme selection",
            "We do not use third-party advertising cookies, social media tracking pixels, or behavioral analytics cookies",
          ],
        },
      ],
    },
    {
      id: "children",
      title: "9. Children's Privacy",
      blocks: [
        {
          type: "paragraph",
          text: "BioSure Lab Portal is a professional laboratory information management tool designed for use by laboratory professionals, pharmacy quality managers, and healthcare personnel. The Service is not intended for use by individuals under the age of 18 (or the applicable age of majority in your jurisdiction). We do not knowingly collect personal information from children. If you believe a child has provided us with personal data, please contact us and we will delete such information promptly.",
        },
      ],
    },
    {
      id: "international-transfers",
      title: "10. International Data Transfers",
      blocks: [
        {
          type: "paragraph",
          text: "BioSure Lab Portal infrastructure is currently hosted in the United States. If you access the Service from outside the United States, your information may be transferred to, stored in, and processed in the United States. By using the Service, you consent to the transfer of your information to the United States, which may have data protection laws that differ from those in your country.",
        },
        {
          type: "paragraph",
          text: "When you authenticate via Google or Microsoft, your authentication data is processed in accordance with those providers' own privacy policies and data transfer mechanisms.",
        },
      ],
    },
    {
      id: "changes",
      title: "11. Changes to This Privacy Policy",
      blocks: [
        {
          type: "paragraph",
          text: "We may update this Privacy Policy from time to time to reflect changes in our practices, technologies, legal requirements, or other factors. When we make material changes:",
        },
        {
          type: "list",
          items: [
            'We will update the "Last Updated" date at the top of this policy',
            "We will notify registered users via email or in-app notification for significant changes",
            "Continued use of the Service after the effective date of changes constitutes your acceptance of the revised policy",
          ],
        },
      ],
    },
    {
      id: "contact",
      title: "12. Contact Us",
      blocks: [
        {
          type: "paragraph",
          text: "If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:",
        },
        {
          type: "list",
          items: ["RainerTek LLC", "Email: privacy@biosurelab.com", "Website: https://biosurelab.com"],
        },
        {
          type: "paragraph",
          text: 'For data access, correction, or deletion requests, please email us with the subject line "Privacy Request" and include your full name, email address associated with your account, and a description of your request.',
        },
        {
          type: "paragraph",
          text: "*This Privacy Policy applies to the BioSure Lab Portal platform and all related services operated by RainerTek LLC.*",
        },
      ],
    },
  ],
};

