import ServiceCard1 from '../Card/ServiceCard1';
import { serviceDetailsDb } from '@/db/services';

const Services1 = () => {

      const bgImage = '/assets/img/feature-item-bg.svg';
      const detailsHref = `/service/${serviceDetailsDb[0]?.slug ?? "service-details"}`;

    return (
 <section className="position-relative">
      <div className="cs_height_120 cs_height_lg_80"></div>
      <div className="container">
        <div className="cs_section_heading cs_style_1 cs_mb_47 cs_center_column text-center position-relative z-1">
          <div className="cs_section_subtitle cs_fs_18 cs_heading_color cs_mb_22">
            <img src="/assets/img/icons/star-1.svg" alt="" />
            <span>Everything Your Lab Needs</span>
            <img src="/assets/img/icons/star-1.svg" alt="" />
          </div>
          <h2 className="cs_section_title cs_fs_48 cs_semibold mb-0 wow fadeInUp">One Platform. Sample to Report.</h2>
          <p className="cs_card_desc cs_mt_22 mb-0">Stop duct-taping together spreadsheets, Word docs, and email threads. our platform handles your entire environmental monitoring workflow in one place.</p>
        </div>
        <div className="cs_features_items_wrapper position-relative z-1">
          <div className="cs_feature_item cs_radius_20 cs_bg_filed" style={{ backgroundImage: `url(${bgImage})`}}>
            <h3 className="cs_fs_36 cs_semibold cs_white_color cs_mb_40">Digitize CoC through <br/> signed PDF delivery</h3>
          </div>

          <ServiceCard1
            addclass="cs_bg_00"
            serviceicon="/assets/img/icons/code-icon.svg"
            title="Chain of Custody"
            featureList={[
                "Digital CoC forms with sample locations",
                "Media lot tracking and air sampler data",
                "Auto sample IDs with configurable patterns",
            ]}
            btnname="Read More"
            btnurl={detailsHref}
          ></ServiceCard1>

          <ServiceCard1
            addclass="cs_bg_1"
            serviceicon="/assets/img/icons/cloud-computing.svg"
            title="Sample Results & Organism ID"
            featureList={[
                "CFU counts and incubation parameters",
                "Plate images and organism identification",
                "One structured screen for technicians",
            ]}
            btnname="Read More"
            btnurl={detailsHref}
          ></ServiceCard1>

          <ServiceCard1
            addclass="cs_bg_2"
            serviceicon="/assets/img/icons/quality-assurance.svg"
            title="One-Click PDF Reports"
            featureList={[
                "Professional USP 797 lab reports instantly",
                "E-signatures, trending, floor plans",
            ]}
            btnname="Read More"
            btnurl={detailsHref}
          ></ServiceCard1>

          <ServiceCard1
            addclass="cs_bg_3"
            serviceicon="/assets/img/icons/security.svg"
            title="Free Client Portal"
            featureList={[
                "Self-service for pharmacy clients",
                "Reports, CoC, and trends — no extra fee",
            ]}
            btnname="Read More"
            btnurl={detailsHref}
          ></ServiceCard1>

          <ServiceCard1
            addclass="cs_bg_00"
            serviceicon="/assets/img/icons/advanced-tracking.svg"
            title="Historical Trending"
            featureList={[
                "Z-scores across sampling events",
                "Catch excursions before action levels",
            ]}
            btnname="Read More"
            btnurl={detailsHref}
          ></ServiceCard1>

          <ServiceCard1
            addclass="cs_bg_1"
            serviceicon="/assets/img/icons/analytics.svg"
            title="Real-Time Notifications"
            featureList={[
                "Socket.IO and email alerts",
                "Per-user notification preferences",
            ]}
            btnname="Read More"
            btnurl={detailsHref}
          ></ServiceCard1>

        </div>
      </div>
      <div className="cs_feature_shape_1 position-absolute">
        <img src="/assets/img/3d-shape.png" alt="" />
      </div>
      <div className="cs_feature_shape_2 position-absolute">
        <img src="/assets/img/spring-shape.png" alt="" />
      </div>
      <div className="cs_height_120 cs_height_lg_80"></div>
    </section>
    );
};

export default Services1;
