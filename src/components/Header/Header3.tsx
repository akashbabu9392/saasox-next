'use client';

import { useEffect, useState } from 'react';
import Link from "next/link";
import { usePathname } from "next/navigation";
import Nav from './Nav';
import { coreQcBrand } from "@/config/coreqc";
import { coreQcNav } from "@/config/coreqc";
export default function Header3({ variant }:{ variant?: string }) {
  const [mobileToggle, setMobileToggle] = useState(false);
  const [isSticky, setIsSticky] = useState<string>("");
  const [prevScrollPos, setPrevScrollPos] = useState<number>(0);
  const pathname = usePathname();
  const shouldShowSignIn = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos > prevScrollPos) {
        setIsSticky('cs-gescout_sticky'); 
      } else if (currentScrollPos !== 0) {
        setIsSticky('cs-gescout_show cs-gescout_sticky');
      } else {
        setIsSticky('');
      }
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <div>
    <header
      className={`cs_site_header header_style_2 header_style_2_2 cs_style_1 header_sticky_style1 ${
        variant ? variant : ''
      } cs_sticky_header cs_site_header_full_width ${
        mobileToggle ? 'cs_mobile_toggle_active' : ''
      } ${isSticky ? isSticky : ''}`}
    >
      <div className="cs_main_header">
        <div className="container-fluid">
          <div className="cs_main_header_in">

            <div className="cs_header_shape position-absolute">
              <img src="/assets/img/header-shape.svg" alt="Header shape" />
            </div>

            <div className="cs_main_header_left">
            <Link
              className="cs_site_branding d-inline-flex flex-column align-items-start"
              href={coreQcNav.homeVersions[0]?.href ?? "/"}
            >
                <span className="d-flex align-items-center gap-2">
                  <img className="cs_site_logo" src={coreQcBrand.logoLightSrc} alt={coreQcBrand.name} />
                </span>
              </Link>
              </div>
              <div className="cs_main_header_center">
                <div className="cs_nav cs_primary_font fw-medium">
                  <span
                    className={
                      mobileToggle
                        ? 'cs-munu_toggle cs_teggle_active'
                        : 'cs-munu_toggle'
                    }
                    onClick={() => setMobileToggle(!mobileToggle)}
                  >
                    <span></span>
                  </span>
                  <Nav setMobileToggle={setMobileToggle} />
                </div>
            </div>
            {shouldShowSignIn && (
              <div className="cs_main_header_right">
                <div className="header-btn d-flex align-items-center gap-3 flex-wrap">
                  <Link href={coreQcBrand.signInHref} className="cs_fs_14 cs_bold cs_white_color text-uppercase">
                    {coreQcBrand.signInLabel}
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>

    </div>

  );
}
