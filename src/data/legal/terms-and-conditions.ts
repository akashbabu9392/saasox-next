import type { LegalDocument } from "./legal-types";

export const termsAndConditionsDocument: LegalDocument = {
  title: "Terms and Conditions | BioSure Lab Portal",
  description:
    "Terms and Conditions for using BioSure Lab Portal — the cloud LIMS for environmental monitoring laboratories. Operated by RainerTek LLC.",
  breadcrumbTitle: "Terms and Conditions",
  effectiveDateLabel: "April 15, 2026",
  lastUpdatedLabel: "April 15, 2026",
  toc: [
    { id: "agreement", label: "1. Agreement to Terms" },
    { id: "description", label: "2. Description of Service" },
    { id: "user-accounts", label: "3. User Accounts" },
    { id: "subscription", label: "4. Subscription and Access" },
    { id: "acceptable-use", label: "5. Acceptable Use" },
    { id: "ownership", label: "6. Data Ownership and Intellectual Property" },
    { id: "reports-and-signatures", label: "7. Report Generation and Electronic Signatures" },
    { id: "availability", label: "8. Service Availability and Support" },
    { id: "third-party", label: "9. Third-Party Services" },
    { id: "liability", label: "10. Limitation of Liability" },
    { id: "indemnification", label: "11. Indemnification" },
    { id: "termination", label: "12. Termination" },
    { id: "data-protection", label: "13. Data Protection and Security" },
    { id: "general", label: "14. General Provisions" },
    { id: "contact", label: "15. Contact Us" },
  ],
  sections: [
    {
      id: "agreement",
      title: "1. Agreement to Terms",
      blocks: [
        {
          type: "paragraph",
          text: 'These Terms and Conditions ("Terms") constitute a legally binding agreement between you ("User," "you," or "your") and RainerTek LLC ("Company," "we," "us," or "our"), governing your access to and use of the BioSure Lab Portal platform, including the website at biosurelab.com and associated subdomains, application programming interfaces (APIs), report generation services, client portal, and any related services (collectively, the "Service").',
        },
        {
          type: "paragraph",
          text: 'By creating an account, accessing, or using the Service, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy (/privacy-policy). If you are accepting these Terms on behalf of an organization (laboratory, company, pharmacy, or other entity), you represent and warrant that you have the authority to bind that organization to these Terms.',
        },
        {
          type: "paragraph",
          text: "If you do not agree to these Terms, you must not access or use the Service.",
        },
      ],
    },
    {
      id: "description",
      title: "2. Description of Service",
      blocks: [
        {
          type: "paragraph",
          text: "BioSure Lab Portal is a cloud-based Laboratory Information Management System (LIMS) developed and operated by RainerTek LLC. The platform is designed to digitize and streamline the end-to-end workflow of environmental monitoring laboratories, with an initial focus on USP 797 compliance testing for compounding pharmacy cleanrooms.",
        },
        {
          type: "paragraph",
          text: "The Service includes, but is not limited to:",
        },
        {
          type: "list",
          items: [
            "Laboratory management: Multi-tenant lab configuration, employee management, equipment tracking, organism databases, and signature management",
            "Client company management: Client organization onboarding, facility location management with floor plan uploads, sample location mapping, and employee access management",
            "Chain of custody (CoC) management: Digital creation, submission, and tracking of chain-of-custody forms for sample intake",
            "Sample result entry: CFU count recording, organism identification, plate image upload, incubation tracking, and alert/action level evaluation",
            "Report generation: Automated PDF lab report generation with historical trending analysis, electronic signatures, and version control",
            "Report management: Review and approval workflows, version history, client visibility controls, and bulk download capabilities",
            "Scheduling: Recurring sample submission scheduling with calendar views and occurrence tracking",
            "Client portal: Self-service portal for client companies to access reports, submit CoC forms, comment on reports, and manage their employees",
            "Notifications: Real-time in-app notifications and email alerts for key platform events",
            "Analytics and audit trails: Dashboard analytics, activity logging, and global search",
          ],
        },
      ],
    },
    {
      id: "user-accounts",
      title: "3. User Accounts",
      blocks: [
        { type: "heading", level: 3, text: "3.1 Account Creation" },
        {
          type: "paragraph",
          text: "Accounts on BioSure Lab Portal are created through one of the following methods:",
        },
        {
          type: "list",
          items: [
            "Lab tenant creation: A Super Administrator provisions a new laboratory tenant and creates the initial Lab Administrator account",
            "Lab employee invitation: A Lab Administrator creates employee accounts, which triggers an invitation email to the new user",
            "Client company onboarding: A Lab Administrator creates a Company Administrator account during client onboarding, which triggers an invitation email",
            "Client employee creation: A Company Administrator creates employee accounts for their organization",
          ],
        },
        {
          type: "paragraph",
          text: "You may not create an account using false or misleading information. Each user must have a unique, valid email address.",
        },
        { type: "heading", level: 3, text: "3.2 Third-Party Authentication" },
        {
          type: "paragraph",
          text: "The Service supports sign-in via third-party authentication providers, including Google and Microsoft. By choosing to sign in through a third-party provider:",
        },
        {
          type: "list",
          items: [
            "You authorize us to receive your name, email address, profile picture, and account identifier from that provider for the purpose of creating or authenticating your BioSure account",
            "You acknowledge that your use of the third-party provider is also governed by that provider's own terms of service and privacy policy",
            "You are responsible for maintaining the security of your third-party account; if your Google or Microsoft account is compromised, your BioSure account may also be at risk",
            "You may revoke BioSure's access to your third-party account at any time through the provider's settings; this will prevent future sign-in via that method but will not automatically delete your BioSure account",
          ],
        },
        { type: "heading", level: 3, text: "3.3 Account Security" },
        {
          type: "paragraph",
          text: "You are responsible for:",
        },
        {
          type: "list",
          items: [
            "Maintaining the confidentiality of your login credentials (whether email/password or third-party sign-in)",
            "Changing your password upon first login when required by the system",
            "All activities that occur under your account",
            "Immediately notifying us of any unauthorized use of your account",
          ],
        },
        {
          type: "paragraph",
          text: "We implement the following security measures to protect your account:",
        },
        {
          type: "list",
          items: [
            "Passwords are hashed using bcrypt and are never stored in plaintext",
            "Account lockout is automatically activated after a configurable number of failed login attempts",
            "Sessions are managed through JWT-based access tokens and refresh tokens with defined expiry periods",
            "Third-party sign-in uses industry-standard OAuth 2.0 / OpenID Connect protocols",
            "Rate limiting is applied to prevent brute-force attacks",
          ],
        },
        { type: "heading", level: 3, text: "3.4 User Roles and Permissions" },
        {
          type: "paragraph",
          text: "The Service operates with a hierarchical permission model consisting of five user roles:",
        },
        {
          type: "list",
          items: [
            "Super Admin: Platform-level administrators (RainerTek LLC) with oversight across all lab tenants",
            "Lab Admin: Laboratory owners/directors with full control over their lab tenant, including employee management, company onboarding, and report approval",
            "Lab Employee: Laboratory technicians and staff with access to sample processing, result entry, and report generation as permitted by their assigned role",
            "Company Admin: Client organization managers with access to reports, CoC submission, employee management, and scheduling for their company",
            "Company Employee: Client organization staff with access to view reports and notifications for their company",
          ],
        },
        {
          type: "paragraph",
          text: "Access is further controlled through granular role-based access control (RBAC), which allows per-module and per-action permission configuration, as well as per-user permission overrides. You agree to use the Service only within the scope of the permissions assigned to your account.",
        },
      ],
    },
    {
      id: "subscription",
      title: "4. Subscription and Access",
      blocks: [
        { type: "heading", level: 3, text: "4.1 Service Plans" },
        {
          type: "paragraph",
          text: "BioSure Lab Portal is offered as a Software-as-a-Service (SaaS) subscription. We offer multiple plan tiers to accommodate laboratories of different sizes and requirements. Current plan details, features, and pricing are available on our website or by contacting our sales team.",
        },
        {
          type: "paragraph",
          text: "Client portal users (Company Admins and Company Employees) are provided free access on all plans and are never charged.",
        },
        { type: "heading", level: 3, text: "4.2 Payment" },
        {
          type: "list",
          items: [
            "Subscription fees are charged on a per-lab-user basis according to the billing cycle of your chosen plan",
            "Annual billing may be available at a discounted rate",
            "Payment is due at the beginning of each billing cycle",
            "All fees are quoted in United States Dollars (USD) unless otherwise specified",
            "Prices are exclusive of applicable taxes, which will be added where required by law",
          ],
        },
        { type: "heading", level: 3, text: "4.3 Plan Changes" },
        {
          type: "list",
          items: [
            "You may upgrade your plan at any time; upgrades take effect immediately, and fees are prorated for the remainder of the current billing cycle",
            "You may downgrade your plan at the end of the current billing cycle, provided your usage falls within the limits of the target plan",
            "If your usage exceeds the limits of your current plan, you may be required to upgrade or reduce usage",
          ],
        },
        { type: "heading", level: 3, text: "4.4 Free Trial" },
        {
          type: "list",
          items: [
            "We may offer free trial periods at our discretion",
            "During a free trial, you will have access to the Service's features as specified in the trial offer",
            "At the end of the trial period, you may select a paid plan to continue with full access",
            "We reserve the right to modify or discontinue trial offers at any time",
          ],
        },
        { type: "heading", level: 3, text: "4.5 Refunds" },
        {
          type: "list",
          items: [
            "Subscription fees are generally non-refundable",
            "If you cancel a paid subscription before the end of a billing cycle, you will retain access until the end of that cycle; no partial refunds will be issued",
            "Refund exceptions may be granted at our sole discretion for billing errors or service disruptions covered under our uptime commitments",
          ],
        },
      ],
    },
    {
      id: "acceptable-use",
      title: "5. Acceptable Use",
      blocks: [
        { type: "heading", level: 3, text: "5.1 Permitted Use" },
        {
          type: "paragraph",
          text: "You may use the Service solely for its intended purpose: managing laboratory information, environmental monitoring workflows, sample tracking, report generation, and client communication within a professional laboratory context.",
        },
        { type: "heading", level: 3, text: "5.2 Prohibited Conduct" },
        {
          type: "paragraph",
          text: "You agree not to:",
        },
        {
          type: "list",
          items: [
            "Use the Service for any unlawful purpose or in violation of any applicable local, state, national, or international law or regulation",
            "Access or attempt to access any other user's account, or any lab tenant's data that you are not authorized to view",
            "Circumvent, disable, or interfere with security features of the Service, including the role-based access control system, rate limiting, or tenant isolation mechanisms",
            "Attempt to reverse engineer, decompile, or disassemble any portion of the Service",
            "Upload, transmit, or distribute any malicious code, viruses, or harmful software through the Service",
            "Use the Service to store or transmit content that infringes the intellectual property rights of any third party",
            "Scrape, crawl, or use automated tools to extract data from the Service without our written consent",
            "Resell, sublicense, or commercially distribute the Service or any portion thereof without our express written permission",
            "Intentionally enter false, misleading, or fabricated laboratory data, sample results, or reports",
            "Use the Service in any manner that could damage, disable, overburden, or impair our servers or interfere with any other party's use of the Service",
            "Share login credentials or allow unauthorized individuals to access your account",
            "Use third-party sign-in (Google, Microsoft) with an account you are not authorized to use",
          ],
        },
        { type: "heading", level: 3, text: "5.3 Data Accuracy" },
        {
          type: "paragraph",
          text: "Given the regulated nature of laboratory testing and environmental monitoring (USP 797 compliance), you acknowledge your responsibility to:",
        },
        {
          type: "list",
          items: [
            "Enter accurate and truthful data for all sample results, organism identifications, and CoC forms",
            "Ensure that generated reports accurately reflect the underlying test data",
            "Maintain proper chain-of-custody documentation standards",
            "Review and verify report content before approving and publishing to client companies",
          ],
        },
        {
          type: "paragraph",
          text: "The Service provides tools to facilitate accuracy (alert/action level calculations, historical trending, ISO class evaluations), but the accuracy and validity of the underlying data remains your responsibility.",
        },
      ],
    },
    {
      id: "ownership",
      title: "6. Data Ownership and Intellectual Property",
      blocks: [
        { type: "heading", level: 3, text: "6.1 Your Data" },
        {
          type: "paragraph",
          text: "You retain full ownership of all data you enter, upload, or generate through the Service, including but not limited to:",
        },
        {
          type: "list",
          items: [
            "Laboratory configurations and settings",
            "Client company and employee information",
            "Chain-of-custody form data",
            "Sample results, organism identifications, and plate images",
            "Generated PDF reports and their contents",
            "Floor plan images and sample location mappings",
            "Comments and communications",
            "Scheduling configurations",
          ],
        },
        { type: "heading", level: 3, text: "6.2 License to Us" },
        {
          type: "paragraph",
          text: "By uploading or entering data into the Service, you grant us a non-exclusive, worldwide, royalty-free license to host, store, process, and transmit your data solely for the purpose of providing the Service to you. This license terminates when you delete your data or close your account, subject to any legal retention obligations.",
        },
        { type: "heading", level: 3, text: "6.3 Our Intellectual Property" },
        {
          type: "paragraph",
          text: "The Service — including its software, architecture, design, user interface, documentation, branding, logos, and all related intellectual property — is and remains the exclusive property of RainerTek LLC. These Terms do not grant you any rights to our intellectual property except the limited right to use the Service as permitted herein.",
        },
        {
          type: "paragraph",
          text: "You may not:",
        },
        {
          type: "list",
          items: [
            "Copy, modify, or create derivative works of the Service",
            "Use our trademarks, logos, or branding without our written consent",
            "Remove or alter any copyright, trademark, or proprietary notices from the Service",
          ],
        },
        { type: "heading", level: 3, text: "6.4 Feedback" },
        {
          type: "paragraph",
          text: "If you provide us with suggestions, ideas, or feedback regarding the Service, you grant us an unrestricted, perpetual, irrevocable, royalty-free license to use such feedback for any purpose without compensation or attribution to you.",
        },
      ],
    },
    {
      id: "reports-and-signatures",
      title: "7. Report Generation and Electronic Signatures",
      blocks: [
        { type: "heading", level: 3, text: "7.1 Report Generation" },
        {
          type: "paragraph",
          text: "The Service includes an automated Report Generator that produces PDF lab reports from your CoC and sample result data. You acknowledge that:",
        },
        {
          type: "list",
          items: [
            "The Report Generator processes the data you have entered and produces reports based on that data",
            "The accuracy of generated reports is dependent on the accuracy of the input data",
            "Reports include historical trending analysis (mean, standard deviation, z-scores) calculated from previously entered data; the correctness of trending depends on the completeness and accuracy of historical records",
            "You are responsible for reviewing all generated reports before approving and publishing them to client companies",
          ],
        },
        { type: "heading", level: 3, text: "7.2 Electronic Signatures" },
        {
          type: "paragraph",
          text: "The Service supports electronic signatures on lab reports (lab director, QC manager). By uploading and using electronic signatures:",
        },
        {
          type: "list",
          items: [
            "You represent that you are authorized to use the signature and that the signature is a valid representation of your or the signatory's intent to approve the report",
            "You acknowledge that electronic signatures on reports constitute approval of the report's content",
            "You understand that the Service maintains version history and audit trails of all report approvals for compliance purposes",
          ],
        },
        { type: "heading", level: 3, text: "7.3 Regulatory Compliance Readiness" },
        {
          type: "paragraph",
          text: "While the Service is designed with regulatory compliance in mind (USP 797 workflows, audit trails, electronic signature support, 21 CFR Part 11 readiness), the Service does not itself constitute regulatory compliance. You remain solely responsible for ensuring that your laboratory operations, testing procedures, and reporting practices comply with all applicable regulations, standards, and guidelines, including USP 797, USP 800, ISO 17025, 21 CFR Part 11, and any state or federal requirements.",
        },
      ],
    },
    {
      id: "availability",
      title: "8. Service Availability and Support",
      blocks: [
        { type: "heading", level: 3, text: "8.1 Uptime" },
        {
          type: "paragraph",
          text: "We will use commercially reasonable efforts to maintain the availability of the Service. Our target uptime is 99.9% measured on a monthly basis, excluding scheduled maintenance windows. Customers on certain plans may negotiate custom Service Level Agreements (SLAs) with specific uptime commitments.",
        },
        {
          type: "paragraph",
          text: "Planned maintenance will be scheduled during low-usage periods where possible, and we will provide advance notice of significant maintenance windows.",
        },
        { type: "heading", level: 3, text: "8.2 Support" },
        {
          type: "paragraph",
          text: "Support availability and response times vary by subscription plan. Details of the support included with your plan are provided in your service agreement and on our website.",
        },
        { type: "heading", level: 3, text: "8.3 Modifications to the Service" },
        {
          type: "paragraph",
          text: "We reserve the right to modify, update, or discontinue any feature or aspect of the Service at any time. For material changes that reduce functionality available on your current plan, we will provide at least 30 days' advance notice and, where possible, offer alternatives or migration paths.",
        },
      ],
    },
    {
      id: "third-party",
      title: "9. Third-Party Services",
      blocks: [
        {
          type: "paragraph",
          text: "The Service integrates with or relies upon the following categories of third-party services:",
        },
        {
          type: "list",
          items: [
            "Cloud infrastructure providers for hosting and compute",
            "Amazon Web Services (AWS) S3 for file storage (reports, images, floor plans)",
            "Google OAuth and Microsoft OAuth for third-party authentication",
            "SMTP email providers for transactional email delivery",
            "Redis for message queue management",
          ],
        },
        {
          type: "paragraph",
          text: "Your use of the Service is also subject to the terms and policies of these third-party providers where applicable. In particular, if you choose to sign in via Google or Microsoft, your authentication is additionally governed by Google's Terms of Service / Privacy Policy and Microsoft's Services Agreement / Privacy Statement, respectively. We are not responsible for the practices, availability, or security of third-party services beyond our contractual obligations with them.",
        },
      ],
    },
    {
      id: "liability",
      title: "10. Limitation of Liability",
      blocks: [
        { type: "heading", level: 3, text: "10.1 Disclaimer of Warranties" },
        {
          type: "callout",
          variant: "secondary",
          lines: [
            'THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE. TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, AND ACCURACY.',
            "WE DO NOT WARRANT THAT:",
          ],
        },
        {
          type: "list",
          items: [
            "THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, OR COMPLETELY SECURE",
            "THE RESULTS OBTAINED FROM THE SERVICE WILL BE ACCURATE OR RELIABLE",
            "THE SERVICE WILL MEET YOUR SPECIFIC REQUIREMENTS OR REGULATORY OBLIGATIONS",
            "ANY DEFECTS IN THE SERVICE WILL BE CORRECTED",
            "THIRD-PARTY AUTHENTICATION PROVIDERS (GOOGLE, MICROSOFT) WILL BE CONTINUOUSLY AVAILABLE",
          ],
        },
        { type: "heading", level: 3, text: "10.2 Limitation of Liability" },
        {
          type: "callout",
          variant: "warning",
          lines: [
            "TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL RAINERTEK LLC, ITS OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, OR AFFILIATES BE LIABLE FOR:",
          ],
        },
        {
          type: "list",
          items: [
            "ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES",
            "ANY LOSS OF PROFITS, REVENUE, DATA, GOODWILL, OR BUSINESS OPPORTUNITY",
            "DAMAGES ARISING FROM YOUR USE OR INABILITY TO USE THE SERVICE",
            "DAMAGES ARISING FROM ERRORS, INACCURACIES, OR OMISSIONS IN REPORT GENERATION OR DATA PROCESSING",
            "DAMAGES RESULTING FROM UNAUTHORIZED ACCESS TO OR ALTERATION OF YOUR DATA",
            "DAMAGES ARISING FROM UNAVAILABILITY OF THIRD-PARTY AUTHENTICATION PROVIDERS",
            "ANY AMOUNT EXCEEDING THE TOTAL FEES PAID BY YOU TO US IN THE TWELVE (12) MONTHS IMMEDIATELY PRECEDING THE EVENT GIVING RISE TO THE CLAIM",
          ],
        },
        { type: "heading", level: 3, text: "10.3 Acknowledgment of Risk" },
        {
          type: "paragraph",
          text: "You acknowledge that:",
        },
        {
          type: "list",
          items: [
            "Laboratory testing, environmental monitoring, and regulatory compliance involve inherent risks and professional judgment that the Service cannot replace",
            "The Service is a tool to facilitate your laboratory workflows; it is not a substitute for qualified laboratory personnel, professional judgment, or regulatory compliance expertise",
            "You are solely responsible for the accuracy, legality, and appropriateness of all data entered into and reports generated from the Service",
          ],
        },
      ],
    },
    {
      id: "indemnification",
      title: "11. Indemnification",
      blocks: [
        {
          type: "paragraph",
          text: "You agree to indemnify, defend, and hold harmless RainerTek LLC, its officers, directors, employees, agents, and affiliates from and against any claims, damages, losses, liabilities, costs, and expenses (including reasonable attorney's fees) arising from:",
        },
        {
          type: "list",
          items: [
            "Your use of the Service in violation of these Terms",
            "Your violation of any applicable law, regulation, or third-party rights",
            "The content, accuracy, or legality of the data you enter into the Service",
            "Laboratory reports generated from your data",
            "Any dispute between you and your laboratory clients, employees, or regulators",
            "Your failure to maintain adequate account security, including the security of third-party sign-in accounts used to access the Service",
          ],
        },
      ],
    },
    {
      id: "termination",
      title: "12. Termination",
      blocks: [
        { type: "heading", level: 3, text: "12.1 Termination by You" },
        {
          type: "list",
          items: [
            "You may cancel your subscription at any time through your account settings or by contacting us",
            "Cancellation takes effect at the end of the current billing cycle",
            "Upon cancellation, you will retain access to the Service until the end of the paid period, after which your account will be deactivated",
          ],
        },
        { type: "heading", level: 3, text: "12.2 Termination by Us" },
        {
          type: "paragraph",
          text: "We may suspend or terminate your access to the Service, with or without notice, if:",
        },
        {
          type: "list",
          items: [
            "You breach any provision of these Terms",
            "Your subscription payment fails and is not resolved within a reasonable grace period",
            "You engage in conduct that we reasonably believe is harmful to the Service, other users, or our business interests",
            "We are required to do so by law or regulatory authority",
            "We discontinue the Service entirely (with at least 90 days' notice)",
          ],
        },
        { type: "heading", level: 3, text: "12.3 Effect of Termination" },
        {
          type: "paragraph",
          text: "Upon termination:",
        },
        {
          type: "list",
          items: [
            "Your right to access the Service ceases immediately (or at the end of your paid period, in the case of voluntary cancellation)",
            "We will retain your data for a period of 30 days following termination to allow for data export or reactivation",
            "After the 30-day retention period, we will delete or de-identify your data, except where retention is required by law or for audit trail purposes",
            "You may request an export of your data during the retention period by contacting us",
            "Provisions of these Terms that by their nature should survive termination (including Sections 6, 10, 11, and 14) will continue to apply",
          ],
        },
      ],
    },
    {
      id: "data-protection",
      title: "13. Data Protection and Security",
      blocks: [
        {
          type: "paragraph",
          text: "Please refer to our Privacy Policy (/privacy-policy) for comprehensive details on how we collect, use, store, and protect your data.",
        },
        {
          type: "paragraph",
          text: "Key security commitments include:",
        },
        {
          type: "list",
          items: [
            "All data encrypted in transit (TLS 1.2+) and at rest (AES-256 for stored files)",
            "Password hashing with bcrypt",
            "Third-party authentication via OAuth 2.0 / OpenID Connect (Google, Microsoft)",
            "Role-based access control with per-user permission overrides",
            "Multi-tenant data isolation at the database query level",
            "Complete audit trails for all data mutations",
            "Automated database backups",
            "Rate limiting and input validation on all API endpoints",
            "SQL injection and XSS protection",
            "CORS restrictions to allowed origins",
          ],
        },
      ],
    },
    {
      id: "general",
      title: "14. General Provisions",
      blocks: [
        { type: "heading", level: 3, text: "14.1 Governing Law" },
        {
          type: "paragraph",
          text: "These Terms shall be governed by and construed in accordance with the laws of the United States and the State of Delaware, without regard to its conflict of law provisions. Any disputes arising from these Terms or the Service shall be subject to the exclusive jurisdiction of the state and federal courts located in Delaware.",
        },
        { type: "heading", level: 3, text: "14.2 Entire Agreement" },
        {
          type: "paragraph",
          text: "These Terms, together with our Privacy Policy (/privacy-policy) and any plan-specific terms or order forms, constitute the entire agreement between you and RainerTek LLC regarding the Service and supersede all prior agreements, communications, and understandings.",
        },
        { type: "heading", level: 3, text: "14.3 Severability" },
        {
          type: "paragraph",
          text: "If any provision of these Terms is held to be invalid or unenforceable, the remaining provisions shall continue in full force and effect. The invalid or unenforceable provision shall be modified to the minimum extent necessary to make it valid and enforceable.",
        },
        { type: "heading", level: 3, text: "14.4 Waiver" },
        {
          type: "paragraph",
          text: "Our failure to enforce any right or provision of these Terms shall not constitute a waiver of that right or provision. Any waiver must be in writing and signed by an authorized representative of RainerTek LLC.",
        },
        { type: "heading", level: 3, text: "14.5 Assignment" },
        {
          type: "paragraph",
          text: "You may not assign or transfer your rights or obligations under these Terms without our prior written consent. We may assign our rights and obligations without restriction.",
        },
        { type: "heading", level: 3, text: "14.6 Force Majeure" },
        {
          type: "paragraph",
          text: "We shall not be liable for any failure or delay in performing our obligations under these Terms due to causes beyond our reasonable control, including natural disasters, acts of government, internet or infrastructure failures, pandemics, third-party service outages (including Google or Microsoft authentication services), or force majeure events.",
        },
        { type: "heading", level: 3, text: "14.7 Notices" },
        {
          type: "paragraph",
          text: "Notices to you may be sent to the email address associated with your account. Notices to us should be sent to the contact information listed below. Notices are deemed received upon delivery for email communications.",
        },
      ],
    },
    {
      id: "contact",
      title: "15. Contact Us",
      blocks: [
        {
          type: "paragraph",
          text: "If you have questions about these Terms, please contact us:",
        },
        {
          type: "list",
          items: ["RainerTek LLC", "Email: legal@biosurelab.com", "Website: https://biosurelab.com"],
        },
        {
          type: "paragraph",
          text: "*These Terms and Conditions apply to the BioSure Lab Portal platform and all related services operated by RainerTek LLC.*",
        },
      ],
    },
  ],
};

