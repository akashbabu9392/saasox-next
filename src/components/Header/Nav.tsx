'use client';

import DropDown from './DropDown';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { coreQcNav } from "@/config/coreqc";

export default function Nav({ setMobileToggle }:{setMobileToggle: (value: boolean) => void;}) {
  const pathname = usePathname();
  const homeV1Href = coreQcNav.homeVersions[0]?.href ?? "/";
  const shouldShowHomeMenu = pathname === homeV1Href;

  return (
    <ul className="cs_nav_list fw-medium">
      {shouldShowHomeMenu && (
        <li className="menu-item-has-children">
          <Link href={homeV1Href}>{coreQcNav.homeLabel}</Link>
          <DropDown>
            <ul>
              {coreQcNav.homeVersions.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} onClick={() => setMobileToggle(false)}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </DropDown>
        </li>
      )}

      {coreQcNav.primaryLinks.map((item) => (
        <li key={item.href}>
          <Link href={item.href} onClick={() => setMobileToggle(false)}>
            {item.label}
          </Link>
        </li>
      ))}

      <li>
        <Link href="/about" onClick={() => setMobileToggle(false)}>
          {coreQcNav.aboutLabel}
        </Link>
      </li>

      <li>
        <Link href={coreQcNav.contactHref} onClick={() => setMobileToggle(false)}>
          {coreQcNav.contactLabel}
        </Link>
      </li>
    </ul>
  );
}
