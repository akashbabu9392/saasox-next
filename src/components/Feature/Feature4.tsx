import Link from "next/link";
import { coreQcBrand } from "@/config/coreqc";

const Feature4 = () => {
    return (
 <section className="position-relative">
      <div className="cs_height_120 cs_height_lg_80"></div>
      <div className="container">
        <div className="cs_card cs_style_2 position-relative z-1">
          <div className="row cs_gap_y_40">
            <div className="col-lg-6 order-lg-2">
              <div className="cs_card_thumbnail">
                <img src="/assets/img/dashboard-2.png" alt="our platform" />
              </div>
            </div>
            <div className="col-lg-6 order-lg-1">
              <div className="cs_card_content">
                <div className="cs_section_heading cs_style_1 cs_mb_34">
                  <div className="cs_section_subtitle cs_fs_18 cs_heading_color cs_mb_22">
                    <img src="/assets/img/icons/star-1.svg" alt="" />
                    <span>Our Story</span>
                    <img src="/assets/img/icons/star-1.svg" alt="" />
                  </div>
                  <h2 className="cs_section_title cs_fs_48 cs_semibold wow fadeInUp">Built by Lab Scientists Who Got Tired of Spreadsheets</h2>
                  <p className="mb-0">{coreQcBrand.company} was founded to solve the LIMS problem for small-to-mid-sized environmental monitoring labs — the ones legacy software vendors ignore.</p>
                </div>
                <div className="cs_service_item cs_radius_15 cs_gray_bg_2 cs_mb_24 cs_active">
                  <h3 className="cs_service_title cs_fs_24 cs_semibold cs_mb_8">Mission</h3>
                  <p className="mb-0">To democratize laboratory information management by delivering a modern, affordable, and intuitive LIMS that empowers small-to-mid-sized labs to achieve regulatory compliance and operational efficiency — without six-figure price tags and 12-month implementations.</p>
                </div>
                <div className="cs_service_item cs_radius_15 cs_mb_48">
                  <h3 className="cs_service_title cs_fs_24 cs_semibold cs_mb_8">Vision</h3>
                  <p className="mb-0">Transform {coreQcBrand.name} from a specialized USP 797 tool into a universal, multi-discipline LIMS through a configurable, template-driven architecture.</p>
                </div>
                <div className="cs_btns_group">
                  <Link href="/contact" aria-label="Get started" className="cs_btn cs_style_1 cs_bg_1 cs_fs_14 cs_bold cs_white_color text-uppercase">
                  <span>Join Us in Building the Future of Lab Management</span>
                  <span className="cs_btn_icon"><i className="bi bi-arrow-right"></i></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cs_height_120 cs_height_lg_80"></div>
    </section>

    );
};

export default Feature4;
