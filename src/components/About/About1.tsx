
const About1 = () => {
    return (
<section className="position-relative">
      <div className="cs_height_120 cs_height_lg_80"></div>
      <div className="container">
        <div className="cs_card cs_style_1">
          <div className="row cs_gap_y_50 position-relative z-1">
            <div className="col-lg-5">
              <div className="cs_card_thumbnail position-relative">
                <img src="/assets/img/about-img-1.png" alt="" />
                <div className="cs_about_mask_shape_1 position-absolute">
                  <img src="/assets/img/about-shape-1.png" alt="" />
                </div>
                <div className="cs_elipse_1 cs_radius_100 position-absolute"></div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="cs_card_content">
                <div className="cs_section_heading cs_style_1 cs_mb_28">
                  <div className="cs_section_subtitle cs_fs_18 cs_heading_color cs_mb_22">
                    <img src="/assets/img/icons/star-1.svg" alt="" />
                    <span>Why our platform</span>
                    <img src="/assets/img/icons/star-1.svg" alt="" />
                  </div>
                  <h2 className="cs_section_title cs_fs_48 cs_semibold mb-0 wow fadeInUp">Purpose-built for USP 797 environmental monitoring</h2>
                </div>
                <p className="cs_card_desc cs_mb_22">Cloud LIMS that digitizes chain of custody, results entry, PDF reporting, and client delivery — without enterprise cost or months-long implementations.</p>
                <ul className="cs_list cs_style_1 cs_mp_0">
                  <li>
                    <img src="/assets/img/icons/checkbox.svg" alt="" />
                    <h3 className="cs_fs_18 cs_semibold mb-0">Free client portal on every plan — competitors charge extra.</h3>
                  </li>
                  <li>
                    <img src="/assets/img/icons/checkbox.svg" alt="" /> 
                    <h3 className="cs_fs_18 cs_semibold mb-0">Full audit trails and RBAC for inspection readiness.</h3>
                  </li>
                  <li>
                    <img src="/assets/img/icons/checkbox.svg" alt="" />
                    <h3 className="cs_fs_18 cs_semibold mb-0">Go live in days with guided onboarding — not quarters.</h3>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="cs_star_shape_1 position-absolute">
          <img src="/assets/img/star-shape.svg" alt="" />
        </div>
        <div className="cs_vector_shape_1 position-absolute">
          <img src="/assets/img/dna-shape.png" alt="" />
        </div>
      </div>
      <div className="cs_height_46 cs_height_lg_40"></div>
    </section>
    );
};

export default About1;
