const IntegrationsCatalog = () => {
  const categories: {
    title: string;
    items: { name: string; description: string; tags: string[] }[];
  }[] = [
    {
      title: "Report Generation",
      items: [
        {
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
          name: "AWS S3",
          description:
            "Plate images, floor plans, and PDF reports stored in AWS S3. Automatic compression. Direct download links on demand.",
          tags: ["Built-in", "Cloud"],
        },
        {
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
          name: "Socket.IO",
          description:
            "Real-time in-app notifications for report uploads, comments, approvals, and status changes. Multi-tenant room architecture.",
          tags: ["Built-in", "Real-time"],
        },
        {
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
          name: "USP 797",
          description:
            "Workflows align with USP 797 environmental monitoring — ISO classification, CFU alert levels, CoC fields, and report formatting.",
          tags: ["Built-in", "Regulatory"],
        },
        {
          name: "21 CFR Part 11",
          description:
            "Electronic signatures, audit trails, and access controls aligned with FDA requirements for electronic records.",
          tags: ["Built-in", "Regulatory"],
        },
        {
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
          name: "REST API",
          description:
            "Full API access on Professional and Enterprise. Create companies, submit CoC forms, retrieve reports. OpenAPI spec included.",
          tags: ["Professional", "API"],
        },
        {
          name: "Webhooks",
          description:
            "HTTP callbacks on report approvals, CoC submissions, and sample updates.",
          tags: ["Professional", "Developer"],
        },
      ],
    },
    {
      title: "Coming Soon",
      items: [
        {
          name: "Template Builder",
          description:
            "Drag-and-drop report designer. Map data variables to sections visually — no developers needed.",
          tags: ["Coming Q3 2026"],
        },
        {
          name: "Instrument Integration",
          description:
            "Direct data ingestion from lab instruments. Eliminate manual entry for air samplers and incubators.",
          tags: ["Coming Q4 2026"],
        },
        {
          name: "Billing & Invoicing",
          description:
            "Invoice generation from completed CoC forms. Track payments and export to accounting software.",
          tags: ["Coming Q3 2026"],
        },
      ],
    },
  ];

  return (
    <section className="position-relative">
      <div className="cs_height_120 cs_height_lg_80"></div>
      <div className="container">
        <div className="cs_section_heading cs_style_1 cs_center_column text-center cs_mb_60">
          <div className="cs_section_subtitle cs_fs_18 cs_heading_color cs_mb_22">
            <img src="/assets/img/icons/star-1.svg" alt="" />
            <span>Integrations</span>
            <img src="/assets/img/icons/star-1.svg" alt="" />
          </div>
          <h1 className="cs_section_title cs_fs_48 cs_semibold mb-0">
            our platform Connects to the Tools Your Lab Relies On
          </h1>
          <p className="cs_card_desc cs_mt_22 mb-0">
            From PDF generation to cloud storage, real-time collaboration to compliance reporting — our platform integrates with the infrastructure that keeps your lab running.
          </p>
        </div>

        {categories.map((cat) => (
          <div key={cat.title} className="cs_mb_60">
            <h2 className="cs_fs_28 cs_semibold cs_mb_30">{cat.title}</h2>
            <div className="row cs_row_gap_30 cs_gap_y_30">
              {cat.items.map((item) => (
                <div key={item.name} className="col-lg-6">
                  <div className="cs_card cs_style_1 cs_gray_bg_2 cs_radius_20 p-4 h-100">
                    <h3 className="cs_fs_22 cs_semibold cs_mb_12">{item.name}</h3>
                    <p className="cs_card_desc cs_mb_16">{item.description}</p>
                    <div className="d-flex flex-wrap gap-2">
                      {item.tags.map((t) => (
                        <span
                          key={t}
                          className="badge rounded-pill cs_fs_12 cs_medium"
                          style={{ background: "var(--bs-secondary-bg)", color: "var(--bs-body-color)" }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="cs_height_120 cs_height_lg_80"></div>
    </section>
  );
};

export default IntegrationsCatalog;
