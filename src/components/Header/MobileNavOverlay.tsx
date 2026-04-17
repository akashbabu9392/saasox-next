'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { coreQcBrand, coreQcNav } from "@/config/coreqc";
import { getCoreQcNavLinkItems } from "@/config/coreqc/nav";
import "./mobile-nav-overlay.css";

type Props = {
  open: boolean;
  onClose: () => void;
};

function isActivePath(pathname: string, href: string): boolean {
  if (href === "/") {
    return pathname === "/";
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function MobileNavOverlay({ open, onClose }: Props) {
  const pathname = usePathname();
  const items = getCoreQcNavLinkItems();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="mobile-nav-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
    >
      <div className="mobile-nav-overlay__top">
        <Link
          href={coreQcNav.homeVersions[0]?.href ?? "/"}
          className="mobile-nav-overlay__brand"
          onClick={onClose}
        >
          <img
            src={coreQcBrand.logoLightSrc}
            alt={coreQcBrand.name}
            className="mobile-nav-overlay__logo"
          />
        </Link>
        <div className="mobile-nav-overlay__actions">
          <button
            type="button"
            className="mobile-nav-overlay__icon-btn"
            onClick={onClose}
            aria-label="Close menu"
          >
            <i className="bi bi-x-lg" aria-hidden />
          </button>
        </div>
      </div>

      <nav className="mobile-nav-overlay__nav" aria-label="Primary">
        <ul className="mobile-nav-overlay__list">
          {items.map((item) => {
            const active = isActivePath(pathname, item.href);
            return (
              <li key={`${item.href}-${item.label}`}>
                <Link
                  href={item.href}
                  className={
                    active
                      ? "mobile-nav-overlay__link mobile-nav-overlay__link--active"
                      : "mobile-nav-overlay__link"
                  }
                  onClick={onClose}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
