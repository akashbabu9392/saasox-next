import Link from "next/link";
import type { UseCaseDetailsRecord, UseCaseSection } from "@/db/use-cases";

function SectionRenderer({ section }: { section: UseCaseSection }) {
  if (section.type === "heading") {
    return <h3 className="cs_fs_24 cs_semibold cs_mb_12">{section.text}</h3>;
  }
  if (section.type === "paragraph") {
    return <p>{section.text}</p>;
  }
  if (section.type === "bullets") {
    return (
      <ul className="cs_features_list cs_mp_0">
        {section.items.map((item) => (
          <li key={item}>
            <img src="/assets/img/icons/caret-icon.svg" alt="Caret icon" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    );
  }
  return (
    <ol className="cs_mp_0">
      {section.items.map((item) => (
        <li key={item} className="cs_card_desc cs_mb_12">
          {item}
        </li>
      ))}
    </ol>
  );
}

const UseCaseDetails = ({ data }: { data: UseCaseDetailsRecord }) => {
  return (
    <section>
      <div className="cs_height_120 cs_height_lg_80"></div>
      <div className="container">
        <div className="row cs_row_gap_30 cs_gap_y_60">
          <aside className="col-xl-4 col-lg-5">
            <div className="cs_sidebar cs_style_1 cs_type_1">
              <div className="cs_sidebar_widget cs_gray_bg cs_radius_10">
                <h3 className="cs_sidebar_widget_title cs_fs_22 cs_semibold cs_mb_22">
                  Who It&apos;s For
                </h3>
                <p className="mb-0">{data.whoItsFor}</p>
              </div>
              <div className="cs_sidebar_widget cs_gray_bg cs_radius_10">
                <h3 className="cs_sidebar_widget_title cs_fs_22 cs_semibold cs_mb_22">
                  Navigation
                </h3>
                <div className="d-flex flex-column gap-2">
                  <Link
                    href="/use-cases"
                    className="cs_text_btn cs_fs_14 cs_bold text-uppercase"
                    aria-label="Back to use cases"
                  >
                    <span>Back to Use Cases</span>
                    <span className="cs_btn_icon">
                      <i className="bi bi-arrow-right"></i>
                    </span>
                  </Link>
                  <Link
                    href="/contact"
                    className="cs_text_btn cs_fs_14 cs_bold text-uppercase"
                    aria-label="Contact"
                  >
                    <span>Book a Demo</span>
                    <span className="cs_btn_icon">
                      <i className="bi bi-arrow-right"></i>
                    </span>
                  </Link>
                </div>
              </div>
              {data.complianceCoverage?.length ? (
                <div className="cs_sidebar_widget cs_gray_bg cs_radius_10">
                  <h3 className="cs_sidebar_widget_title cs_fs_22 cs_semibold cs_mb_22">
                    Compliance Coverage
                  </h3>
                  <ul className="cs_features_list cs_mp_0">
                    {data.complianceCoverage.map((item) => (
                      <li key={item}>
                        <img src="/assets/img/icons/caret-icon.svg" alt="Caret icon" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </aside>
          <div className="col-xl-8 col-lg-7">
            <div className="cs_post_details">
              <div className="cs_post_banner cs_radius_10 cs_mb_40 position-relative cs_gray_bg_2 p-4">
                <h2 className="mb-2">{data.heroTitle}</h2>
                <p className="mb-0">{data.heroSubtitle}</p>
              </div>

              <div className="cs_post_share_wrapper cs_mb_30">
                <Link
                  href="/use-cases"
                  className="cs_post_btn cs_heading_color"
                  aria-label="Back to use cases"
                >
                  <span>Back to Use Cases</span>
                  <span>
                    <i className="bi bi-arrow-right"></i>
                  </span>
                </Link>
              </div>

              <h3 className="cs_fs_24 cs_semibold cs_mb_12">Overview</h3>
              <p>{data.overview}</p>

              <div className="cs_height_20"></div>
              {data.body.map((section, idx) => (
                <div key={`${section.type}-${idx}`} className="cs_mb_20">
                  <SectionRenderer section={section} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="cs_height_120 cs_height_lg_80"></div>
    </section>
  );
};

export default UseCaseDetails;

