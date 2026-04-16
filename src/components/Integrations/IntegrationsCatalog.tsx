import { integrationsCatalogContent } from "@/config/integrations-catalog";

const IntegrationsCatalog = () => {
  const { categories, heading } = integrationsCatalogContent;

  return (
    <section className="position-relative">
      <div className="cs_height_120 cs_height_lg_80"></div>
      <div className="container">
        <div className="cs_section_heading cs_style_1 cs_center_column text-center cs_mb_60">
          <div className="cs_section_subtitle cs_fs_18 cs_heading_color cs_mb_22">
            <img src="/assets/img/icons/star-1.svg" alt="Star icon" />
            <span>{heading.eyebrow}</span>
            <img src="/assets/img/icons/star-1.svg" alt="Star icon" />
          </div>
          <h1 className="cs_section_title cs_fs_48 cs_semibold mb-0">
            {heading.title}
          </h1>
          <p className="cs_card_desc cs_mt_22 mb-0">
            {heading.description}
          </p>
        </div>

        {categories.map((cat) => (
          <div key={cat.title} className="cs_mb_60">
            <div className="cs_integration_category_header cs_mb_30">
              <span className="cs_integration_category_line"></span>
              <h2 className="cs_fs_28 cs_semibold mb-0">{cat.title}</h2>
            </div>
            <div className="row cs_row_gap_30 cs_gap_y_30">
              {cat.items.map((item) => (
                <div key={item.name} className="col-lg-6">
                  <article className="cs_card cs_style_1 cs_integration_card cs_radius_20 p-4 h-100">
                    <div className="d-flex align-items-start gap-3 cs_mb_20 position-relative z-1">
                      <span className="cs_integration_icon cs_center cs_radius_12">
                        <img src={item.iconSrc} alt={item.iconAlt} />
                      </span>
                      <div className="flex-grow-1">
                        <div className="cs_integration_overline cs_fs_12 cs_semibold text-uppercase cs_mb_8">
                          {item.tags[0]}
                        </div>
                        <h3 className="cs_fs_22 cs_semibold cs_mb_8">{item.name}</h3>
                        <div className="d-flex flex-wrap gap-2">
                          {item.tags.slice(1).map((t) => (
                            <span key={t} className="cs_integration_tag cs_fs_12 cs_medium">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="cs_card_desc mb-0 position-relative z-1">{item.description}</p>
                  </article>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="cs_height_120 cs_height_lg_80"></div>
    </section>
  );
};

export default IntegrationsCatalog;
