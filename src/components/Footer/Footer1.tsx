import Link from 'next/link';
import { coreQcBrand, coreQcContact, coreQcFooter } from "@/config/coreqc";

const Footer1 = () => {

    const bgImage = '/assets/img/footer-bg-2.svg'; 

    return (
 <footer className="cs_footer cs_style_1 cs_type_1 cs_accent_bg cs_bg_filed cs_white_color" style={{ backgroundImage: `url(${bgImage})`}}  >
      <div className="cs_height_130 cs_height_lg_80"></div>
      <div className="container">
        <div className="cs_footer_top position-relative">
          <ul className="cs_location_list cs_mp_0">
            <li>
              <span className="cs_location_icon cs_center cs_theme_color_4 cs_radius_100">
              <i className="bi bi-telephone-fill"></i></span>
              <a href={`tel:${coreQcContact.phoneTel}`} aria-label="Make a call link">{coreQcContact.phone}</a>
            </li>
            <li>
              <span className="cs_location_icon cs_center cs_theme_color_4 cs_radius_100">
             <i className="bi bi-envelope-fill"></i></span>
              <a href={`mailto:${coreQcContact.email}`} aria-label="Send mail link">{coreQcContact.email}</a>
            </li>
            <li>
              <span className="cs_location_icon cs_center cs_theme_color_4 cs_radius_100">
              <i className="bi bi-geo-alt-fill"></i></span>
              <p className="mb-0">{coreQcContact.address}</p>
            </li>
          </ul>
        </div>
        <div className="cs_footer_main">
          <div className="cs_footer_widget_wrapper">
            <div className="cs_footer_widget cs_text_widget">
              <div className="cs_brand cs_mb_32">
                <span className="cs_fs_24 cs_semibold cs_white_color d-block">{coreQcBrand.name} <span className="cs_fs_16 cs_normal">by {coreQcBrand.company}</span></span>
              </div>
              <p className="cs_mb_32">The cloud LIMS for environmental monitoring labs.</p>
              <div className="cs_social_links cs_style_1 cs_heading_color">
                {coreQcFooter.social.map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                    <i className={`bi ${s.icon}`}></i>
                  </a>
                ))}
              </div>
            </div>
            <div className="cs_footer_widget cs_links_widget">
              <h3 className="cs_footer_widget_title cs_fs_24 cs_semibold cs_white_color cs_mb_29">Product</h3>
              <ul className="cs_footer_menu cs_mp_0">
                {coreQcFooter.productLinks.map((item) => (
                  <li key={item.href + item.label}>
                    <Link href={item.href} aria-label={item.label}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="cs_footer_widget cs_help_widget">
              <h3 className="cs_footer_widget_title cs_fs_24 cs_semibold cs_white_color cs_mb_29">Use Cases</h3>
              <ul className="cs_footer_menu cs_mp_0">
                {coreQcFooter.useCaseLinks.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} aria-label={item.label}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="cs_footer_widget cs_contact_widget">
              <h3 className="cs_footer_widget_title cs_fs_24 cs_semibold cs_white_color cs_mb_29">Company</h3>
              <ul className="cs_footer_menu cs_mp_0 cs_mb_24">
                {coreQcFooter.companyLinks.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} aria-label={item.label}>{item.label}</Link>
                  </li>
                ))}
              </ul>
              <h3 className="cs_footer_widget_title cs_fs_24 cs_semibold cs_white_color cs_mb_29">Legal</h3>
              <ul className="cs_footer_menu cs_mp_0">
                {coreQcFooter.legalLinks.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} aria-label={item.label}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="cs_footer_bottom position-relative">
        <div className="container">
          <div className="cs_footer_text cs_white_color text-center">{coreQcBrand.copyright}</div>
        </div>
      </div>
    </footer>
    );
};

export default Footer1;
