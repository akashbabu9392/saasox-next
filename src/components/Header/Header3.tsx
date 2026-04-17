'use client';

import { useEffect, useRef, useState } from 'react';
import Link from "next/link";
import { usePathname } from "next/navigation";
import Nav from './Nav';
import MobileNavOverlay from "./MobileNavOverlay";
import { coreQcBrand } from "@/config/coreqc";
import { coreQcNav } from "@/config/coreqc";

const MOBILE_NAV_MQ = "(max-width: 1199px)";

export default function Header3({ variant }:{ variant?: string }) {
  const [mobileNavOpenForPath, setMobileNavOpenForPath] = useState<string | null>(
    null
  );
  const [isSticky, setIsSticky] = useState<string>("");
  const prevScrollRef = useRef(0);
  const [isMobileNav, setIsMobileNav] = useState(false);
  const pathname = usePathname();
  const shouldShowSignIn = pathname === "/";
  const mobileToggle = mobileNavOpenForPath === pathname;

  const setMobileToggle = (value: boolean) => {
    setMobileNavOpenForPath(value ? pathname : null);
  };

  useEffect(() => {
    const mq = window.matchMedia(MOBILE_NAV_MQ);
    const sync = () => setIsMobileNav(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const mobile = window.matchMedia(MOBILE_NAV_MQ).matches;
      if (mobile) {
        setIsSticky(
          currentScrollPos > 0 ? "cs-gescout_show cs-gescout_sticky" : ""
        );
      } else {
        if (currentScrollPos > prevScrollRef.current) {
          setIsSticky("cs-gescout_sticky");
        } else if (currentScrollPos !== 0) {
          setIsSticky("cs-gescout_show cs-gescout_sticky");
        } else {
          setIsSticky("");
        }
      }
      prevScrollRef.current = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!mobileToggle || !isMobileNav) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileToggle, isMobileNav]);

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

    {isMobileNav && (
      <MobileNavOverlay
        open={mobileToggle}
        onClose={() => setMobileToggle(false)}
      />
    )}

    </div>

  );
}
