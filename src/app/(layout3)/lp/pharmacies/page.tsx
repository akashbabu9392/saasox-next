import BreadCumb from "@/components/Common/BreadCumb";
import Link from "next/link";

const benefits = [
  "View all lab reports the moment they're approved — no waiting",
  "Track historical trends across all sampling locations",
  "Submit digital Chain of Custody forms — no paper",
  "Comment and collaborate directly on reports",
  "Manage your facility locations and sample points",
  "Real-time notifications when new reports are uploaded",
];

export default function PharmaciesLandingPage() {
  return (
    <div>
      <BreadCumb bgimg="/assets/img/page-heading-bg.svg" Title="For Pharmacy QA" />
      <section className="position-relative">
        <div className="cs_height_80 cs_height_lg_60"></div>
        <div className="container">
          <div className="cs_section_heading cs_style_1 cs_center_column text-center cs_mb_50">
            <h1 className="cs_section_title cs_fs_48 cs_semibold mb-0">
              For Compounding Pharmacy QA Managers
            </h1>
            <p className="cs_fs_28 cs_semibold cs_mt_20 mb-0">
              Access Your Environmental Monitoring Reports Instantly.
            </p>
            <p className="cs_card_desc cs_mt_24 mb-0">
              Stop waiting for phone calls and email attachments. our platform gives pharmacy teams a dedicated portal to view reports, track sampling schedules, and submit chain-of-custody forms — for free.
            </p>
          </div>
          <ul className="cs_list cs_style_1 cs_mp_0 cs_mb_32">
            {benefits.map((b) => (
              <li key={b} className="cs_mb_16">
                <img src="/assets/img/icons/checkbox.svg" alt="" />
                <h3 className="cs_fs_18 cs_semibold mb-0">{b}</h3>
              </li>
            ))}
          </ul>
          <div className="text-center d-flex flex-column flex-md-row align-items-center justify-content-center gap-3">
            <Link href="/contact" className="cs_btn cs_style_1 cs_bg_1 cs_fs_14 cs_bold cs_white_color text-uppercase">
              <span>Access Your Portal →</span>
              <span className="cs_btn_icon"><i className="bi bi-arrow-right"></i></span>
            </Link>
            <p className="mb-0 cs_fs_14">Ask your lab to invite you</p>
          </div>
        </div>
        <div className="cs_height_120 cs_height_lg_80"></div>
      </section>
    </div>
  );
}
