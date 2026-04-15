import BreadCumb from "@/components/Common/BreadCumb";
import Link from "next/link";

const useCases = [
  {
    title: "USP 797 Compounding Pharmacy Testing",
    description:
      "Full digital workflow for 503A and 503B compounding pharmacies — from CoC intake through microbial testing, organism identification, and USP 797-formatted PDF report delivery.",
    who: "Independent micro labs, hospital pharmacy cleanrooms, 503B outsourcing facilities",
  },
  {
    title: "Hospital Pharmacy Cleanroom Programs",
    description:
      "Hospital in-house testing programs managing environmental monitoring for ISO 5, 7, and 8 cleanrooms. Maintain full audit trails for accreditation and inspection readiness across multiple facilities.",
    who: "Hospital pharmacy departments, health system QA teams",
  },
  {
    title: "Multi-Client Lab Networks",
    description:
      "Serve dozens of pharmacy or facility clients from a single lab tenant. Unlimited client portal access, segregated data per company, and bulk reporting for high-volume labs.",
    who: "Regional EM testing labs, contract testing organizations",
  },
  {
    title: "Environmental Testing Labs (Expanding)",
    description:
      "our Template Builder (coming Q3 2026) will allow environmental testing labs to define custom test parameters, intake forms, and report templates for non-USP workflows.",
    who: "Environmental labs, food safety labs, water quality programs",
  },
  {
    title: "Cannabis Testing Labs (Coming)",
    description:
      "State-regulated cannabis testing requires rigorous chain-of-custody and reporting. our configurable template system will support cannabis microbiology and chemistry test types.",
    who: "Cannabis testing labs, dispensary QC programs",
  },
];

export default function UseCasesPage() {
  return (
    <div>
      <BreadCumb bgimg="/assets/img/page-heading-bg.svg" Title="Use Cases" />
      <section className="position-relative">
        <div className="cs_height_120 cs_height_lg_80"></div>
        <div className="container">
          <div className="cs_section_heading cs_style_1 cs_center_column text-center cs_mb_60">
            <div className="cs_section_subtitle cs_fs_18 cs_heading_color cs_mb_22">
              <img src="/assets/img/icons/star-1.svg" alt="" />
              <span>Use Cases</span>
              <img src="/assets/img/icons/star-1.svg" alt="" />
            </div>
            <h1 className="cs_section_title cs_fs_48 cs_semibold mb-0">
              our platform for Every Environmental Monitoring Scenario
            </h1>
            <p className="cs_card_desc cs_mt_22 mb-0">
              Whether you&apos;re a small independent micro lab or a large hospital pharmacy program, our platform adapts to your specific testing workflow.
            </p>
          </div>
          <div className="row cs_row_gap_30 cs_gap_y_30">
            {useCases.map((uc) => (
              <div key={uc.title} className="col-lg-6">
                <article className="cs_card cs_style_1 cs_gray_bg_2 cs_radius_20 p-4 h-100">
                  <h2 className="cs_fs_24 cs_semibold cs_mb_12">{uc.title}</h2>
                  <p className="cs_card_desc cs_mb_16">{uc.description}</p>
                  <p className="cs_fs_14 cs_mb_20 mb-0">
                    <span className="cs_semibold">Who it&apos;s for:</span> {uc.who}
                  </p>
                  <Link href="/contact" className="cs_text_btn cs_fs_14 cs_bold text-uppercase">
                    <span>Learn more</span>
                    <span className="cs_btn_icon"><i className="bi bi-arrow-right"></i></span>
                  </Link>
                </article>
              </div>
            ))}
          </div>
        </div>
        <div className="cs_height_120 cs_height_lg_80"></div>
      </section>
    </div>
  );
}
