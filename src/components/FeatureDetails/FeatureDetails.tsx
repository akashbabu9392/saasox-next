import Link from "next/link";
import type { FeatureDetailsRecord } from "@/db/features";

const FeatureDetails = ({ data }: { data: FeatureDetailsRecord }) => {
  return (
    <section>
      <div className="cs_height_120 cs_height_lg_80"></div>
      <div className="container">
        <div className="row cs_row_gap_30 cs_gap_y_60">
          <aside className="col-xl-4 col-lg-5">
            <div className="cs_sidebar cs_style_1 cs_type_1">
              <div className="cs_sidebar_widget cs_gray_bg cs_radius_10">
                <h3 className="cs_sidebar_widget_title cs_fs_22 cs_semibold cs_mb_22">
                  Feature
                </h3>
                <div>
                  <div>
                    <div className="cs_fs_14 cs_heading_color">BiosureLab</div>
                    <div className="cs_fs_18 cs_semibold">{data.heroTitle}</div>
                  </div>
                </div>
              </div>
              <div className="cs_sidebar_widget cs_gray_bg cs_radius_10">
                <h3 className="cs_sidebar_widget_title cs_fs_22 cs_semibold cs_mb_22">
                  Navigation
                </h3>
                <div className="d-flex flex-column gap-2">
                  <Link
                    href="/features"
                    className="cs_text_btn cs_fs_14 cs_bold text-uppercase"
                    aria-label="Back to features"
                  >
                    <span>Back to Features</span>
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
              {data.complianceNote ? (
                <div className="cs_sidebar_widget cs_gray_bg cs_radius_10">
                  <h3 className="cs_sidebar_widget_title cs_fs_22 cs_semibold cs_mb_22">
                    Compliance Note
                  </h3>
                  <p className="mb-0">{data.complianceNote}</p>
                </div>
              ) : null}
            </div>
          </aside>
          <div className="col-xl-8 col-lg-7">
            <div className="cs_post_details">
              <div className="cs_post_banner cs_radius_10 cs_mb_40 position-relative cs_gray_bg_2 p-4">
                <div className="d-flex align-items-center gap-3">
                  <span className="cs_feature_icon cs_center cs_radius_12 cs_mb_0 cs_bg_1">
                    <img src={data.iconSrc} alt={data.iconAlt} />
                  </span>
                  <div>
                    <h2 className="mb-2">{data.heroTitle}</h2>
                    <p className="mb-0">{data.heroSubtitle}</p>
                  </div>
                </div>
              </div>

              <div className="cs_post_share_wrapper cs_mb_30">
                <Link href="/features" className="cs_post_btn cs_heading_color" aria-label="Back to features">
                  <span>Back to Features</span>
                  <span>
                    <i className="bi bi-arrow-right"></i>
                  </span>
                </Link>
              </div>

              <h3 className="cs_fs_24 cs_semibold cs_mb_12">Overview</h3>
              <p>{data.overview}</p>

              <div className="cs_height_20"></div>
              <h3 className="cs_fs_24 cs_semibold cs_mb_12">Key Capabilities</h3>
              <div className="d-flex flex-column gap-3">
                {data.keyCapabilities.map((cap) => (
                  <div key={cap.title} className="cs_service_item cs_radius_15 cs_gray_bg_2 p-4">
                    <h4 className="cs_service_title cs_fs_20 cs_semibold cs_mb_8">{cap.title}</h4>
                    <p className="mb-0">{cap.description}</p>
                  </div>
                ))}
              </div>

              <div className="cs_height_30"></div>
              <h3 className="cs_fs_24 cs_semibold cs_mb_12">Who Benefits</h3>
              <div className="row cs_row_gap_30 cs_gap_y_30">
                {data.whoBenefits.map((b) => (
                  <div key={b.label} className="col-md-6">
                    <div className="cs_card cs_style_1 cs_gray_bg_2 cs_radius_20 p-4 h-100">
                      <h4 className="cs_fs_18 cs_semibold cs_mb_10">{b.label}</h4>
                      <p className="mb-0">{b.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cs_height_120 cs_height_lg_80"></div>
    </section>
  );
};

export default FeatureDetails;

