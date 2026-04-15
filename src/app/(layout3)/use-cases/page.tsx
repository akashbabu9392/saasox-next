import BreadCumb from "@/components/Common/BreadCumb";
import Link from "next/link";
import { useCaseDetailsDb } from "@/db/use-cases";

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
            {useCaseDetailsDb.map((uc) => (
              <div key={uc.slug} className="col-lg-6">
                <article className="cs_card cs_style_1 cs_gray_bg_2 cs_radius_20 p-4 h-100">
                  <h2 className="cs_fs_24 cs_semibold cs_mb_12">{uc.heroTitle}</h2>
                  <p className="cs_card_desc cs_mb_16">{uc.overview}</p>
                  <p className="cs_fs_14 cs_mb_20 mb-0">
                    <span className="cs_semibold">Who it&apos;s for:</span> {uc.whoItsFor}
                  </p>
                  <Link
                    href={`/use-cases/${uc.slug}`}
                    className="cs_text_btn cs_fs_14 cs_bold text-uppercase"
                  >
                    <span>Learn More</span>
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
