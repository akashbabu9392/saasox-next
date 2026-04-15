
const Feature5 = () => {
    const modules: { title: string; tagline: string; description: string; bullets: string[] }[] = [
      {
        title: "Chain of Custody (CoC)",
        tagline: "Digital intake from the first sample",
        description: "Replace paper CoC forms with a structured digital workflow. Clients submit their own forms, or your lab creates them.",
        bullets: [
          "Digital CoC creation and submission workflow",
          "Draft → Submitted status lifecycle",
          "Media lot tracking and air sampler registry",
          "Automated sample ID generation",
          "CoC PDF generation on demand",
        ],
      },
      {
        title: "Sample Testing & Results",
        tagline: "Every result, precisely recorded",
        description: "Enter CFU counts, organism identifications, plate images, and incubation parameters for bench technicians.",
        bullets: [
          "Per-sample result entry",
          "Bacterial and fungal organism ID",
          "Plate image upload with compression",
          "Alert/Action level auto-evaluation",
          "Incubation parameter tracking",
        ],
      },
      {
        title: "One-Click PDF Report Generator",
        tagline: "Professional reports in seconds",
        description: "Generate full lab reports from CoC and result data — e-signatures, trending, floor plans, and organism descriptions.",
        bullets: [
          "Automated PDF generation",
          "Report versioning with history",
          "Approval workflow (Under Review → Approved)",
          "Bulk ZIP download",
          "CSV/Excel export of report data",
        ],
      },
      {
        title: "Free Client Portal",
        tagline: "Always free. Always included.",
        description: "Pharmacy clients access reports, schedules, CoC submission, and trending without extra licensing.",
        bullets: [
          "Self-service report access",
          "Real-time notifications",
          "Threaded comments on reports",
          "Historical trending by location",
        ],
      },
      {
        title: "Scheduling & Calendar",
        tagline: "Never miss a submission deadline",
        description: "Recurring schedules with occurrence tracking and calendar views for lab and client visibility.",
        bullets: [
          "Weekly, biweekly, monthly, or custom recurrence",
          "Occurrence status with user attribution",
          "Client-visible schedule in portal",
        ],
      },
      {
        title: "Role-Based Access Control",
        tagline: "Security built for regulated environments",
        description: "Granular permissions with per-user overrides and comprehensive audit logging.",
        bullets: [
          "Five user roles with per-module actions",
          "Per-user permission overrides",
          "Full audit trail for mutations",
          "Activity log with filtering",
        ],
      },
    ];

    return (
 <section>
      <div className="cs_height_120 cs_height_lg_80"></div>
      <div className="container">
        <div className="row cs_gap_y_40">
          {modules.map((m) => (
            <div key={m.title} className="col-lg-6">
              <div className="cs_card cs_style_1 cs_gray_bg_2 cs_radius_20 p-4 h-100">
                <p className="cs_fs_14 cs_heading_color text-uppercase cs_mb_8 mb-0">{m.tagline}</p>
                <h3 className="cs_fs_28 cs_semibold cs_mb_15">{m.title}</h3>
                <p className="cs_card_desc cs_mb_20">{m.description}</p>
                <ul className="cs_mp_0 ps-3 mb-0">
                  {m.bullets.map((b) => (
                    <li key={b} className="cs_mb_8">{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="cs_height_120 cs_height_lg_80"></div>
    </section>
    );
};

export default Feature5;
