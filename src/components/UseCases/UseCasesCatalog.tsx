"use client";

import Link from "next/link";
import { useState } from "react";
import type { UseCaseDetailsRecord } from "@/db/use-cases";
import { uiText } from "@/constants/ui";
import { useCasesCardIcons } from "@/config/use-cases-card-icons";

type Props = {
  useCases: UseCaseDetailsRecord[];
};

const UseCasesCatalog = ({ useCases }: Props) => {
  const [activeIndex, setActiveIndex] = useState<number>(-1);

  return (
    <div className="row cs_row_gap_30 cs_gap_y_30 position-relative z-2">
      {useCases.map((uc, i) => {
        const icon = useCasesCardIcons[i % useCasesCardIcons.length];
        const isActive = i === activeIndex;

        return (
          <div key={uc.slug} className="col-xl-4 col-md-6">
            <div
              className={`cs_iconbox cs_style_4 cs_radius_15 position-relative overflow-hidden ${
                isActive ? "is-active" : ""
              }`}
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
                    <img src={icon.src} alt={icon.alt} />
                  </span>

                  <h3 className="cs_iconbox_title cs_fs_24 cs_semibold mb-0">
                    <Link href={`/use-cases/${uc.slug}`} aria-label={`Use case: ${uc.heroTitle}`}>
                      {uc.heroTitle}
                    </Link>
                  </h3>
                </div>

                <div className="cs_iconbox_info">
                  <p className="cs_use_case_card_desc cs_mb_25">
                    {uc.overview}
                  </p>

                  <Link
                    href={`/use-cases/${uc.slug}`}
                    aria-label={`Learn more about ${uc.heroTitle}`}
                    className="cs_btn cs_style_1 cs_fs_14 cs_bold cs_heading_color text-uppercase"
                    onClick={() => setActiveIndex(i)}
                  >
                    <span>{uiText.actions.readMore}</span>
                    <span className="cs_btn_icon">
                      <i className="bi bi-arrow-right"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UseCasesCatalog;

