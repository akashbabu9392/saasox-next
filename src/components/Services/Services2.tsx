 "use client";

import Link from "next/link";
import { useState } from "react";
import { serviceDetailsDb } from "@/db/services";

const Services2 = () => {

        const teamContent = [
        {img:'/assets/img/services-icon1.svg', title:'Chain of Custody', content:'Digital intake forms with sample tracking, media lots, and air sampler data — auto sample IDs included.'},
        {img:'/assets/img/services-icon2.svg', title:'Sample Testing & Results', content:'CFU entry, organism ID, plate images, and incubation parameters on one structured screen.'},
        {img:'/assets/img/services-icon3.svg', title:'PDF Report Generator', content:'One-click USP 797 lab reports with e-signatures, trending, and floor plans.'},
        {img:'/assets/img/services-icon4.svg', title:'Client Portal', content:'Always-free portal for pharmacy clients: reports, CoC, schedules, and comments.'},
        {img:'/assets/img/services-icon5.svg', title:'Historical Trending', content:'Z-scores and statistics to catch excursions before action levels.'},
        {img:'/assets/img/services-icon6.svg', title:'Scheduling & Notifications', content:'Recurring schedules plus Socket.IO and email alerts your team can trust.'},
      ];
      const detailsHref = `/service/${serviceDetailsDb[0]?.slug ?? "service-details"}`;

      const [activeIndex, setActiveIndex] = useState<number>(0);

    return (
<section className="position-relative">
      <div className="cs_height_120 cs_height_lg_80"></div>
      <div className="container">
        <div className="cs_section_heading cs_style_1 cs_center_column cs_mb_47 text-center position-relative z-1">
          <div className="cs_section_subtitle cs_fs_18 cs_heading_color cs_mb_22">
            <img src="/assets/img/icons/star-1.svg" alt="" />
            <span>Platform</span>
            <img src="/assets/img/icons/star-1.svg" alt="" />
          </div>
          <h2 className="cs_section_title cs_fs_48 cs_semibold wow fadeInUp">Core modules for EM labs</h2>
          <p className="mb-0">Everything in one cloud LIMS — from intake to signed PDF to client delivery.</p>
        </div>
        <div className="row cs_row_gap_30 cs_gap_y_30 position-relative z-2">

        {teamContent.map((item, i) => (
          <div key={i} className="col-xl-4 col-md-6">
            <div
              className={`cs_iconbox cs_style_4 cs_radius_15 position-relative overflow-hidden ${i === activeIndex ? "is-active" : ""}`}
              role="button"
              tabIndex={0}
              onClick={() => setActiveIndex(i)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setActiveIndex(i);
                }
              }}
            >
              <div className="cs_iconbox_content cs_radius_15 position-relative">
                <div className="cs_iconbox_header cs_mb_17">
                  <span className="cs_iconbox_icon cs_heading_color">
                   <img src={item.img} alt="" />
                  </span>
                  <h3 className="cs_iconbox_title cs_fs_24 cs_semibold mb-0"><Link href={detailsHref} aria-label="Service details page link">{item.title}</Link></h3>
                </div>
                <div className="cs_iconbox_info">
                  <p className="cs_mb_25">{item.content}</p>
                  <Link href={detailsHref} aria-label="Service details page link" className="cs_btn cs_style_1 cs_fs_14 cs_bold cs_heading_color text-uppercase">
                  <span>READ MORE</span>
                  <span className="cs_btn_icon"><i className="bi bi-arrow-right"></i></span>
                  </Link>
                </div>
              </div>
              <div className="cs_service_shape position-absolute">
                <img src="/assets/img/service-shape-2.svg" alt="" />
              </div>
            </div>
          </div>
           ))}

        </div>
        <div className="cs_service_shape_1 position-absolute start-0 bottom-0">
          <img src="/assets/img/service-shape-1.svg" alt="" />
        </div>
      </div>
      <div className="cs_height_120 cs_height_lg_80"></div>
    </section>
    );
};

export default Services2;
