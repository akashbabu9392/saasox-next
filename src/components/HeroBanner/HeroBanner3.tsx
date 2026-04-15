import Link from "next/link";

const HeroBanner3 = () => {

      const bgImage = '/assets/img/hero-bg-1.svg';

    return (
    <section className="cs_hero cs_style_1">
      <div className="cs_hero_content cs_accent_bg cs_bg_filed cs_radius_50 position-relative" style={{ backgroundImage: `url(${bgImage})`}}>
        <div className="container">
          <div className="row cs_gap_y_40 align-items-center">
            <div className="col-lg-5 order-lg-2">
              <div className="cs_hero_thumbnail">
                <div className="cs_hero_lab_card" aria-hidden="true">
                  <img
                    className="cs_hero_lab_card_img"
                    src="/male-researcher-focuses-experiment-data-research-study-laboratory-equipment-chemical.jpg"
                    alt="Scientist using tablet in lab"
                  />
                  <div className="cs_hero_lab_card_overlay" />
                </div>
              </div>
            </div>
            <div className="col-lg-7 order-lg-1">
              <div className="cs_hero_text cs_section_heading cs_style_1 position-relative z-2 cs_hero_text_shift">
                <p className="cs_hero_subtitle cs_white_color cs_heading_font cs_mb_22 text-center text-lg-start">
                  <span className="cs_theme_color_4">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.5 0L9.52568 5.47432L15 7.5L9.52568 9.52568L7.5 15L5.47432 9.52568L0 7.5L5.47432 5.47432L7.5 0Z" fill="currentColor"/>
                    </svg>
                  </span>
                  <span>LIMS for Environmental Monitoring Labs</span>
                  <span className="cs_theme_color_4">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.5 0L9.52568 5.47432L15 7.5L9.52568 9.52568L7.5 15L5.47432 9.52568L0 7.5L5.47432 5.47432L7.5 0Z" fill="currentColor"/>
                    </svg>
                  </span>
                </p>
                <h1 className="cs_hero_title cs_fs_64 cs_white_color cs_mb_15 wow fadeInUp">Sample to Report.<br/><span className="cs_theme_color_4">In Minutes, Not Hours.</span></h1>
                <p className="cs_hero_desc cs_white_color cs_mb_28">our platform is the cloud LIMS purpose-built for USP 797 compounding pharmacy testing. Automated reports, a free client portal, and full audit trails — from $99/user/month.</p>
                <div className="cs_btns_group">
                  <Link href="/contact" aria-label="Book demo" className="cs_btn cs_style_1 cs_outline border border-light cs_fs_14 cs_bold cs_white_color text-uppercase">
                  <span>Book a 30-Minute Demo</span>
                  <span className="cs_btn_icon"><i className="bi bi-arrow-right"></i></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
};

export default HeroBanner3;
