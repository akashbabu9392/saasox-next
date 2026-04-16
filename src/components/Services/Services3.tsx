import ServiceCard1 from "../Card/ServiceCard1";
import { featureDetailsDb, getFeatureDetailsBySlug } from "@/db/features";
import { uiText } from "@/constants/ui";

const Services3 = () => {
  const bgImage = "/assets/img/feature-item-bg.svg";

  const bgBySlug: Record<string, string> = {
    "chain-of-custody": "cs_bg_1",
    "sample-testing-results": "cs_bg_2",
    "pdf-report-generator": "cs_bg_3",
    "client-portal": "cs_bg_1",
    "scheduling-calendar": "cs_bg_2",
    "role-based-access-control": "cs_bg_3",
  };

  const featureSlugs = [
    "chain-of-custody",
    "sample-testing-results",
    "pdf-report-generator",
    "client-portal",
    "scheduling-calendar",
    "role-based-access-control",
  ] as const;

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

          {featureSlugs.map((slug) => {
            const data =
              getFeatureDetailsBySlug(slug) ??
              featureDetailsDb.find((f) => f.slug === slug) ??
              null;
            if (!data) return null;

            const shortBullets = data.keyCapabilities.slice(0, 3).map((cap) => cap.title);

            return (
              <ServiceCard1
                key={data.slug}
                addclass={bgBySlug[slug] ?? ""}
                serviceicon={data.iconSrc}
                title={data.heroTitle}
                featureList={shortBullets}
                btnname={uiText.actions.readMore}
                btnurl={`/features/${data.slug}`}
              />
            );
          })}

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
