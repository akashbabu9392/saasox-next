import Link from 'next/link';
import { coreQcBrand, coreQcContact, coreQcFooter } from "@/config/coreqc";

const Footer2 = () => {
    return (
 <footer className="cs_footer cs_style_1 cs_type_2 cs_accent_bg cs_bg_filed" data-src="assets/img/footer-bg-3.svg">
      <div className="cs_height_130 cs_height_lg_80"></div>
      <div className="container">
        <div className="cs_footer_top position-relative">
          <ul className="cs_location_list cs_mp_0">
            <li>
              <span className="cs_location_icon cs_center cs_heading_color cs_radius_100">
              <i className="bi bi-geo-alt-fill"></i></span>
              <div className="cs_location_info cs_fs_18">
                <p className="cs_fs_14 cs_theme_color_4 mb-0">ADDRESS</p>
                <p className="cs_white_color mb-0">{coreQcContact.address}</p>
              </div>
            </li>
            <li>
              <span className="cs_location_icon cs_center cs_heading_color cs_radius_100">
              <i className="bi bi-envelope-fill"></i></span>
              <div className="cs_location_info cs_fs_18">
                <p className="cs_fs_14 cs_theme_color_4 mb-0">EMAIL</p>
                <a href={`mailto:${coreQcContact.email}`} aria-label="Send mail link">{coreQcContact.email}</a>
              </div>
            </li>
            <li>
              <span className="cs_location_icon cs_center cs_heading_color cs_radius_100">
              <i className="bi bi-telephone-fill"></i></span>
              <div className="cs_location_info cs_fs_18">
                <p className="cs_fs_14 cs_theme_color_4 mb-0">CALL</p>
                <a href={`tel:${coreQcContact.phoneTel}`} aria-label="Make a call link">{coreQcContact.phone}</a>
              </div>
            </li>
          </ul>
        </div>
        <div className="cs_footer_main cs_radius_30">
          <div className="cs_footer_desc">
            <div className="cs_brand">
              <span className="cs_fs_24 cs_semibold cs_white_color">{coreQcBrand.name}</span>
            </div>
            <div className="cs_footer_desc_text">The cloud LIMS for environmental monitoring labs. {coreQcBrand.productDescriptionOneLine}</div>
          </div>
          <div className="cs_footer_header cs_radius_30">
            <ul className="cs_footer_menu cs_semibold cs_white_color cs_mp_0">
              <li><Link href="/" aria-label="Home page link">Home</Link></li>
              <li><Link href="/about" aria-label="About page link">About</Link></li>
              <li><Link href="/service" aria-label="Features page link">Features</Link></li>
              <li><Link href="/use-cases" aria-label="Use cases page link">Use Cases</Link></li>
              <li><Link href="/blog" aria-label="Blog page link">Blog</Link></li>
              <li><Link href="/contact" aria-label="Contact page link">Contact</Link></li>
            </ul>
            <div className="cs_social_links cs_style_1 cs_heading_color">
                {coreQcFooter.social.map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}><i className={`bi ${s.icon}`}></i></a>
                ))}
            </div>
          </div>
        </div>
        <div className="cs_footer_bottom position-relative">
          <div className="cs_footer_text cs_white_color text-center">{coreQcBrand.copyright}</div>
        </div>
      </div>
    </footer>
    );
};

export default Footer2;
