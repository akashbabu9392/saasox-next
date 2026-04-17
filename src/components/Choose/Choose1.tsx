import Link from 'next/link';

const Choose1 = () => {

    const bgImage = '/assets/img/whychoose-bg-1.svg';

    return (
    <section className="cs_bg_filed position-relative" style={{ backgroundImage: `url(${bgImage})`}}>
      <div className="cs_height_120 cs_height_lg_80"></div>
      <div className="container">
        <div className="cs_card cs_style_1 cs_type_4">
          <div className="row cs_gap_y_50 position-relative z-1">
            <div className="col-lg-6 order-lg-2">
              <div className="cs_card_thumbnail cs_get_started_thumbnail">
                <img
                  src="/webp/research-team-gives-itself-high-five-after-success-2026-04-13-02-07-32-utc.webp"
                  alt="Lab researchers collaborating in a lab"
                />
              </div>
            </div>
            <div className="col-lg-6 order-lg-1">
              <div className="cs_card_content">
                <div className="cs_section_heading cs_style_1 cs_mb_27">
                  <div className="cs_section_subtitle cs_fs_18 cs_white_color cs_mb_22">
                    <img src="/assets/img/icons/star-1.svg" alt="" />
                    <span>Get started</span>
                    <img src="/assets/img/icons/star-1.svg" alt="" />
                  </div>
                  <h2 className="cs_section_title cs_fs_48 cs_semibold cs_white_color wow fadeInDown">Ready to Replace Your Lab&apos;s Spreadsheets?</h2>
                  <p className="cs_card_desc cs_white_color mb-0">Join labs already using our platform to automate reporting, delight clients, and pass every inspection.</p>
                </div>
                <ul className="cs_list cs_style_2 cs_white_color cs_semibold cs_mp_0">
                  <li>
                    <span className="cs_list_icon cs_theme_color_4"><i className="bi bi-check-circle-fill"></i></span>
                    <span>Setup in 1 day</span>
                  </li>
                </ul>
                <div className="cs_btns_group flex-wrap">
                <Link href="/contact" aria-label="Talk to expert" className="cs_btn cs_style_1 cs_outline cs_fs_14 cs_white_color cs_bold text-uppercase border border-light">
                <span>Talk to a Lab Expert</span>
                <span className="cs_btn_icon"><i className="bi bi-arrow-right"></i></span>
                </Link>
                </div>
                <p className="cs_fs_13 cs_white_color mt-1 sm:mt-3 mb-0 opacity-75">Setup in 1 day</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
};

export default Choose1;
