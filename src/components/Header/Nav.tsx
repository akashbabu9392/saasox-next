'use client';

import DropDown from './DropDown';
import Link from "next/link";
import { blogDb } from "@/db/blog";
import { projectDetailsDb } from "@/db/projects";
import { serviceDetailsDb } from "@/db/services";
import { teamDb } from "@/db/team";

export default function Nav({ setMobileToggle }:{setMobileToggle: (value: boolean) => void;}) {
  const serviceDetailsHref = `/service/${serviceDetailsDb[0]?.slug ?? "service-details"}`;
  const teamDetailsHref = `/team/${teamDb[0]?.slug ?? "olivia-martinez"}`;
  const projectDetailsHref = `/project/${projectDetailsDb[0]?.slug ?? "project-details"}`;
  const blogDetailsHref = `/blog/${blogDb[0]?.slug ?? "blog-details"}`;
  return (
    <ul className="cs_nav_list fw-medium">
      <li className="menu-item-has-children">
        <Link href="/">Home</Link>
        <DropDown>
          <ul>
            <li>
              <Link href="/" onClick={() => setMobileToggle(false)}>
              Home Version 1
              </Link>
            </li>
            <li>
              <Link href="/home2" onClick={() => setMobileToggle(false)}>
              Home Version 2
              </Link>
            </li>
            <li>
              <Link href="/home3" onClick={() => setMobileToggle(false)}>
                Home Version 3
              </Link>
            </li>            
          </ul>
        </DropDown>
      </li>

      <li>
        <Link href="/about" onClick={() => setMobileToggle(false)}>
        About Us
        </Link>
      </li>

      <li className="menu-item-has-children">
        <Link href="/service" onClick={() => setMobileToggle(false)}>
        Services
        </Link>
        <DropDown>
          <ul>
            <li>
              <Link href="/service" onClick={() => setMobileToggle(false)}>
              Services
              </Link>
            </li>
            <li>
              <Link href={serviceDetailsHref} onClick={() => setMobileToggle(false)}>
              Services Details
              </Link>
            </li>
          </ul>
        </DropDown>
      </li>


      <li className="menu-item-has-children">
        <Link href="#">Pages</Link>
        <DropDown>
          <ul>
            <li>
              <Link href="/team" onClick={() => setMobileToggle(false)}>
               Our Team
              </Link>
            </li>            
            <li>
              <Link href={teamDetailsHref} onClick={() => setMobileToggle(false)}>
                Team Details
              </Link>
            </li>             
            <li>
              <Link href="/project" onClick={() => setMobileToggle(false)}>
              Our Projects
              </Link>
            </li> 
            <li>
              <Link href={projectDetailsHref} onClick={() => setMobileToggle(false)}>
              Project Details
              </Link>
            </li>    
            <li>
              <Link href="/pricing" onClick={() => setMobileToggle(false)}>
             Our Pricing
              </Link>
            </li>   
            <li>
              <Link href="/integrations" onClick={() => setMobileToggle(false)}>
             Integrations
              </Link>
            </li>                                             
            <li>
              <Link href="/faq" onClick={() => setMobileToggle(false)}>
              Our Faq
              </Link>
            </li>                         
          </ul>
        </DropDown>
      </li>        

      <li className="menu-item-has-children">
        <Link href="/blog" onClick={() => setMobileToggle(false)}>
          Blog
        </Link>
        <DropDown>
          <ul>
            <li>
              <Link href="/blog" onClick={() => setMobileToggle(false)}>
                Blog
              </Link>
            </li>
            <li>
              <Link href="/blog-sidebar" onClick={() => setMobileToggle(false)}>
                Blog With Sidebar
              </Link>
            </li>                         
            <li>
              <Link
                href={blogDetailsHref}
                onClick={() => setMobileToggle(false)}
              >
                Blog Details
              </Link>
            </li>
          </ul>
        </DropDown>
      </li>
      <li>
        <Link href="/contact" onClick={() => setMobileToggle(false)}>
          Contact
        </Link>
      </li>
    </ul>
  );
}
