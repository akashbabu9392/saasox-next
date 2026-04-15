import BreadCumb from "@/components/Common/BreadCumb";
import Link from "next/link";
import { coreQcBrand } from "@/config/coreqc";

const benefits = [
  "Eliminate 2–3 hours of manual report writing per client per month",
  "Onboard more pharmacy clients without proportionally more staff",
  "Full audit trail for FDA and USP inspections — always ready",
  "Client self-service portal reduces phone calls and emails by 80%",
  "Historical trending catches contamination patterns early",
  "Set up in 1–3 days — not months",
];

export default function LabsLandingPage() {
  return (
    <div>
      <BreadCumb bgimg="/assets/img/page-heading-bg.svg" Title="For Lab Directors" />
      <section className="position-relative">
        <div className="cs_height_80 cs_height_lg_60"></div>
        <div className="container">
          <div className="cs_section_heading cs_style_1 cs_center_column text-center cs_mb_50">
            <h1 className="cs_section_title cs_fs_48 cs_semibold mb-0">
              For Environmental Monitoring Lab Owners
            </h1>
            <p className="cs_fs_28 cs_semibold cs_mt_20 mb-0">
              Stop Managing Your Lab in Spreadsheets.
            </p>
            <p className="cs_card_desc cs_mt_24 mb-0">
              our platform gives lab directors a complete digital workflow — CoC intake, results entry, PDF reports, client portal, and audit trail — for a fraction of the cost of enterprise LIMS.
            </p>
          </div>
          <ul className="cs_list cs_style_1 cs_mp_0 cs_mb_40">
            {benefits.map((b) => (
              <li key={b} className="cs_mb_16">
                <img src="/assets/img/icons/checkbox.svg" alt="" />
                <h3 className="cs_fs_18 cs_semibold mb-0">{b}</h3>
              </li>
            ))}
          </ul>
          <div className="text-center">
            <Link href="/contact" className="cs_btn cs_style_1 cs_bg_1 cs_fs_14 cs_bold cs_white_color text-uppercase">
              <span>{coreQcBrand.secondaryCta}</span>
              <span className="cs_btn_icon"><i className="bi bi-arrow-right"></i></span>
            </Link>
          </div>
        </div>
        <div className="cs_height_120 cs_height_lg_80"></div>
      </section>
    </div>
  );
}
