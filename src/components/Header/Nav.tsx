'use client';

import Link from "next/link";
import { getCoreQcNavLinkItems } from "@/config/coreqc/nav";

export default function Nav({ setMobileToggle }:{setMobileToggle: (value: boolean) => void;}) {
  const items = getCoreQcNavLinkItems();
  return (
    <ul className="cs_nav_list fw-medium">
      {items.map((item) => (
        <li key={`${item.href}-${item.label}`}>
          <Link href={item.href} onClick={() => setMobileToggle(false)}>
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
