import Link from 'next/link';

const HeroBanner1 = () => {

      const bgImage = '/assets/img/hero-bg-2.jpg';

    return (
        <div>
            <section className="cs_hero cs_style_2 cs_bg_filed position-relative" style={{ backgroundImage: `url(${bgImage})`}}>
            <div className="container">
                <div className="cs_hero_text text-center position-relative">
                <p className="cs_hero_subtitle cs_heading_color cs_heading_font cs_mb_18 text-center">
                    <span className="cs_theme_color_4">
                    <img src="/assets/img/icons/star-1.svg" alt="" />                            
                    </span>
                    <span>Now in Early Access — Join 10+ Labs</span>
                    <span className="cs_theme_color_4">
                    <img src="/assets/img/icons/star-1.svg" alt="" />  
                    </span>
                </p>
                <h1 className="cs_hero_title cs_fs_64 cs_mb_20 wow fadeInDown">The Lab OS Built for <br/><span className="cs_theme_color_4">Environmental Monitoring</span></h1>
                <p className="cs_hero_desc cs_mb_26">our platform digitizes your entire USP 797 workflow — from chain-of-custody intake through sample testing, PDF report generation, and client delivery. Replace spreadsheets and Word docs with one modern platform.</p>
                <div className="cs_btns_group">
                    <Link href="/contact" aria-label="Watch demo" className="cs_btn cs_style_1 cs_outline cs_ cs_fs_14 cs_bold cs_heading_color text-uppercase">
                    <span>Watch 3-min Demo →</span>
                    <span className="cs_btn_icon"><i className="bi bi-arrow-right"></i></span>
                    </Link>
                </div>
                <p className="cs_fs_14 cs_heading_color cs_mt_20 mb-0">
                  ✓ No credit card required &nbsp; ✓ Setup in 1 day &nbsp; ✓ Client portal always free &nbsp; ✓ USP 797 aligned
                </p>
                <div className="cs_hero_shape_1 position-absolute">
                    <img src="/assets/img/hero-shape-1.svg" alt="" />
                </div>
                </div>
                <div className="cs_hero_shape_2 position-absolute">
                <img src="/assets/img/hero-shape-2.svg" alt="" />
                </div>
            </div>
            </section>   

            <div className="cs_banner cs_style_1 position-relative">
                <div className="container">
                    <div className="cs_banner_thumbnail_wrapper">
                    <div className="cs_banner_thumbnail">
                        <img src="/assets/img/banner-img-1.png" alt="our platform dashboard showing sample results, report status, and client portal" />
                    </div>
                    <div className="cs_banner_thumbnail">
                        <img src="/assets/img/phone-img-1.png" alt="our platform mobile view" />
                    </div>
                    </div>
                </div>
            </div>           

        </div>
    );
};

export default HeroBanner1;
