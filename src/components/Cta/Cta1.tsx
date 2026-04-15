import Link from "next/link";
import { coreQcBrand } from "@/config/coreqc";

const Cta1 = () => {
    return (
<section className="cs_cta cs_style_1">
      <div className="cs_cta_content_wrapper cs_accent_bg cs_radius_30 cs_bg_filed" data-src="assets/img/cta-bg-1.svg">
        <div className="cs_height_60 cs_height_lg_60"></div>
        <div className="container">
          <div className="row cs_gap_y_40 align-items-center">
            <div className="col-lg-6 order-lg-2">
              <div className="cs_cta_thumbnail">
                <img src="/assets/img/cta-img-1.png" alt="" />
              </div>
            </div>
            <div className="col-lg-6 order-lg-1">
              <div className="cs_cta_text">
                <h2 className="cs_fs_48 cs_semibold cs_white_color cs_mb_20 text-capitalize wow fadeInDown">Ready to modernize your lab workflow?</h2>
                <p className="cs_white_color cs_mb_33">Book a walkthrough with our team. No credit card required on the Free plan.</p>
                <div className="cs_cta_btns d-flex flex-wrap gap-3">
                  <Link href="/contact" aria-label="Book demo" className="cs_cta_btn cs_white_color text-decoration-none border border-light rounded px-4 py-3">
                    <span className="cs_btn_text">
                      <p className="cs_fs_18 cs_medium mb-0">{coreQcBrand.secondaryCta}</p>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cs_height_60 cs_height_lg_60"></div>
      </div>
    </section>
    );
};

export default Cta1;
