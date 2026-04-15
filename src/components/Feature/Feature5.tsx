
"use client";

import { useState } from "react";
import { featureModules } from "@/config/feature-modules";

const Feature5 = () => {
    const [activeIndex, setActiveIndex] = useState<number>(0);

    return (
 <section>
      <div className="cs_height_120 cs_height_lg_80"></div>
      <div className="container">
        <div className="row cs_row_gap_30 cs_gap_y_30 position-relative z-2">
          {featureModules.map((m, i) => (
            <div key={m.title} className="col-xl-4 col-md-6">
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
                      <img src={m.iconSrc} alt="" />
                    </span>
                    <h3 className="cs_iconbox_title cs_fs_24 cs_semibold mb-0">
                      {m.title}
                    </h3>
                  </div>

                  <div className="cs_iconbox_info">
                    <p className="cs_mb_25">{m.description}</p>

                    <ul className="cs_features_list cs_mp_0">
                      {m.bullets.map((b) => (
                        <li key={b}>
                          <img src="/assets/img/icons/caret-icon.svg" alt="" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="cs_height_120 cs_height_lg_80"></div>
    </section>
    );
};

export default Feature5;
