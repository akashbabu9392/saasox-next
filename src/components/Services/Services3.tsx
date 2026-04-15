import ServiceCard1 from '../Card/ServiceCard1';
import { featureDetailsDb } from '@/db/features';

const Services3 = () => {

           const bgImage = '/assets/img/feature-item-bg.svg';
           const featureHrefBySlug = (slug: string) => `/features/${slug}`;

    return (
 <section className="position-relative">
      <div className="cs_height_120 cs_height_lg_80"></div>
      <div className="container">
        <div className="cs_section_heading cs_style_1 cs_mb_47 cs_center_column text-center position-relative z-1">
          <div className="cs_section_subtitle cs_fs_18 cs_heading_color cs_mb_22">
            <img src="/assets/img/icons/star-1.svg" alt="" />
            <span>Product</span>
            <img src="/assets/img/icons/star-1.svg" alt="" />
          </div>
          <h2 className="cs_section_title cs_fs_48 cs_semibold mb-0 wow fadeInUp">Every Feature Your Lab Needs to Go Paperless</h2>
          <p className="cs_card_desc cs_mt_22 mb-0">our platform is purpose-built for environmental monitoring labs. Here&apos;s everything you get out of the box — no configuration wizards, no consultants required.</p>
        </div>

        <div className="cs_features_items_wrapper position-relative z-1">
          <div className="cs_feature_item cs_radius_20 cs_bg_filed" style={{ backgroundImage: `url(${bgImage})`}}>
            <h3 className="cs_fs_36 cs_semibold cs_white_color cs_mb_40">One platform: CoC → results → <br/> PDF → portal</h3>
          </div>

          <ServiceCard1
            addclass="cs_bg_00"
            serviceicon="/assets/img/icons/code-icon.svg"
            title="Chain of Custody (CoC)"
            featureList={[
                "Digital CoC creation and submission",
                "Draft → Submitted lifecycle",
                "Sample locations & media lot tracking",
            ]}
            btnname="Read More"
            btnurl={featureHrefBySlug(featureDetailsDb[0]?.slug ?? "chain-of-custody")}
          ></ServiceCard1>

          <ServiceCard1
            addclass="cs_bg_1"
            serviceicon="/assets/img/icons/cloud-computing.svg"
            title="Sample Testing & Results"
            featureList={[
                "CFU entry and organism identification",
                "Plate images and incubation parameters",
                "Alert/action evaluation per sample",
            ]}
            btnname="Read More"
            btnurl={featureHrefBySlug("sample-testing-results")}
          ></ServiceCard1>

          <ServiceCard1
            addclass="cs_bg_2"
            serviceicon="/assets/img/icons/quality-assurance.svg"
            title="One-Click PDF Report Generator"
            featureList={[
                "Automated PDF from CoC + results",
                "Versioning and approval workflow",
                "Historical trending and floor plans",
            ]}
            btnname="Read More"
            btnurl={featureHrefBySlug("pdf-report-generator")}
          ></ServiceCard1>

          <ServiceCard1
            addclass="cs_bg_3"
            serviceicon="/assets/img/icons/security.svg"
            title="Free Client Portal"
            featureList={[
                "Self-service report access",
                "Threaded comments and notifications",
                "Always free on all plans",
            ]}
            btnname="Read More"
            btnurl={featureHrefBySlug("client-portal")}
          ></ServiceCard1>

          <ServiceCard1
            addclass="cs_bg_00"
            serviceicon="/assets/img/icons/advanced-tracking.svg"
            title="Scheduling & Calendar"
            featureList={[
                "Recurring submission schedules",
                "Calendar view and status history",
                "Client-visible schedules",
            ]}
            btnname="Read More"
            btnurl={featureHrefBySlug("scheduling-calendar")}
          ></ServiceCard1>

          <ServiceCard1
            addclass="cs_bg_1"
            serviceicon="/assets/img/icons/analytics.svg"
            title="Role-Based Access Control"
            featureList={[
                "Five roles with granular permissions",
                "Audit trail and activity logs",
                "Encryption in transit and at rest",
            ]}
            btnname="Read More"
            btnurl={featureHrefBySlug("role-based-access-control")}
          ></ServiceCard1>

        </div>
      </div>
      <div className="cs_feature_shape_1 position-absolute">
        <img src="/assets/img/3d-shape.png" alt="" />
      </div>
      <div className="cs_feature_shape_2 position-absolute">
        <img src="/assets/img/spring-shape.png" alt="" />
      </div>
    </section>
    );
};

export default Services3;
