import Link from "next/link";
import { coreQcBrand, coreQcFooter } from "@/config/coreqc";

const Footer3 = () => {

    const bgImage = 'assets/img/footer-bg-1.svg';

    return (
    <footer className="cs_footer cs_style_1 cs_bg_filed cs_heading_color" style={{ backgroundImage: `url(${bgImage})`}} >
      <div className="cs_height_130 cs_height_lg_80"></div>
      <div className="container">
        <div className="cs_footer_top position-relative">
          <div className="cs_newsletter cs_style_1">
            <div className="cs_newsletter_text">
              <h2 className="cs_fs_48 cs_semibold cs_mb_20 wow fadeInDown">Stay current on lab compliance</h2>
              <p className="cs_heading_color mb-0">Product updates, USP 797 insights, and best practices for environmental monitoring labs.</p>
            </div>
            <form className="cs_newsletter_form cs_fs_14">
              <div className="cs_input_wrapper position-relative">
                <span className="cs_input_icon">
                <img src="/assets/img/icons/mail.svg" alt="Mail icon" />
                </span>
                <input type="email" name="email" placeholder="Your Email Address" />
              </div>
              <button type="submit" aria-label="Subscribe button" className="cs_btn cs_style_1 cs_bg_1 cs_fs_14 cs_bold cs_white_color text-uppercase">Subscribe Now</button>
            </form>
          </div>
        </div>
        <div className="cs_footer_main">
          <div className="cs_footer_widget_wrapper">
            <div className="cs_footer_widget cs_text_widget">
              <div className="cs_brand cs_mb_32">
                <img className="cs_brand_logo" src={coreQcBrand.logoDarkSrc} alt={coreQcBrand.name} />
              </div>
              <p className="cs_mb_32">{coreQcBrand.productDescriptionOneLine}</p>
              <div className="cs_social_links cs_style_1 cs_heading_color">
                {coreQcFooter.social.map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}><i className={`bi ${s.icon}`}></i></a>
                ))}
              </div>
            </div>
            <div className="cs_footer_widget cs_links_widget">
              <h3 className="cs_footer_widget_title cs_fs_24 cs_semibold cs_mb_29">Product</h3>
              <ul className="cs_footer_menu cs_mp_0">
              <li><Link href="/" aria-label="Home page link">Home</Link></li>
              <li><Link href="/about" aria-label="About page link">About</Link></li>
              <li><Link href="/service" aria-label="Features page link">Features</Link></li>
              <li><Link href="/use-cases" aria-label="Use cases page link">Use Cases</Link></li>
              <li><Link href="/blog" aria-label="Blog page link">Blog</Link></li>
              </ul>
            </div>
            <div className="cs_footer_widget cs_help_widget">
              <h3 className="cs_footer_widget_title cs_fs_24 cs_semibold cs_mb_29">Legal</h3>
              <ul className="cs_footer_menu cs_mp_0">
                {coreQcFooter.legalLinks.map((item) => (
                  <li key={item.label}><Link href={item.href} aria-label={item.label}>{item.label}</Link></li>
                ))}
                <li><Link href="/faq" aria-label="FAQ page link">FAQ</Link></li>
              </ul>
            </div>
            <div className="cs_footer_widget cs_contact_widget">
              <h3 className="cs_footer_widget_title cs_fs_24 cs_semibold cs_mb_29">Get started</h3>
              <div className="cs_cta_btns">
                <Link href="/contact" aria-label="Book demo" className="cs_cta_btn cs_heading_bg cs_white_color d-inline-flex align-items-center gap-2 px-4 py-3 cs_radius_10 text-decoration-none">
                  <span className="cs_btn_text">
                    <p className="cs_fs_18 cs_medium mb-0">{coreQcBrand.secondaryCta}</p>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cs_footer_bottom cs_accent_bg">
        <div className="container">
          <div className="cs_footer_text cs_white_color text-center">{coreQcBrand.copyright}</div>
        </div>
      </div>
    </footer>
    );
};

export default Footer3;
