import { integrationsCatalogContent } from "@/config/integrations-catalog";

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const IntegrationsCatalog = () => {
  const { categories, heading } = integrationsCatalogContent;

  const totalIntegrations = categories.reduce((acc, c) => acc + c.items.length, 0);
  const builtInCount = categories.reduce(
    (acc, c) => acc + c.items.filter((i) => i.tags.some((t) => t.toLowerCase().includes("built"))).length,
    0,
  );

  return (
    <section className="position-relative">
      <div className="cs_height_120 cs_height_lg_80"></div>
      <div className="container">
        <div className="cs_section_heading cs_style_1 cs_center_column text-center cs_mb_40">
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

        {/* Stat strip */}
        <div className="tp-integrations-hero">
          <div className="tp-stat-pill">
            <span className="tp-stat-pill-value">{totalIntegrations}+</span>
            <span className="tp-stat-pill-label">Integrations</span>
          </div>
          <div className="tp-stat-pill">
            <span className="tp-stat-pill-value">{categories.length}</span>
            <span className="tp-stat-pill-label">Categories</span>
          </div>
          <div className="tp-stat-pill">
            <span className="tp-stat-pill-value">{builtInCount}</span>
            <span className="tp-stat-pill-label">Built-in</span>
          </div>
          <div className="tp-stat-pill">
            <span className="tp-stat-pill-value">24/7</span>
            <span className="tp-stat-pill-label">Live sync</span>
          </div>
        </div>

        {/* Category jump nav */}
        <nav className="tp-category-nav" aria-label="Integration categories">
          {categories.map((cat) => (
            <a key={cat.title} href={`#${slugify(cat.title)}`}>
              <span>{cat.title}</span>
              <span className="tp-count">{cat.items.length}</span>
            </a>
          ))}
        </nav>

        {categories.map((cat) => (
          <div key={cat.title} id={slugify(cat.title)} className="cs_mb_60" style={{ scrollMarginTop: "120px" }}>
            <div className="cs_integration_category_header cs_mb_30">
              <span className="cs_integration_category_line"></span>
              <h2 className="cs_fs_28 cs_semibold mb-0">{cat.title}</h2>
              <span className="tp-count ms-2" style={{
                display: "inline-flex",
                minWidth: 26,
                height: 26,
                padding: "0 8px",
                borderRadius: 999,
                background: "rgba(115, 65, 241, 0.12)",
                color: "var(--theme-color-2, #7341F1)",
                fontSize: 12,
                fontWeight: 700,
                alignItems: "center",
                justifyContent: "center",
              }}>
                {cat.items.length}
              </span>
            </div>
            <div className="row cs_row_gap_30 cs_gap_y_30 tp-integration-grid">
              {cat.items.map((item) => {
                const primaryTag = item.tags[0] ?? "";
                const isBuiltIn = primaryTag.toLowerCase().includes("built");
                return (
                  <div key={item.name} className="col-md-6 col-lg-4">
                    <article className="cs_card cs_style_1 cs_integration_card cs_radius_20 p-4 h-100 d-flex flex-column">
                      <div className="d-flex align-items-start gap-3 cs_mb_20 position-relative z-1">
                        <span className="cs_integration_icon cs_center cs_radius_12">
                          <img src={item.iconSrc} alt={item.iconAlt} />
                        </span>
                        <div className="flex-grow-1">
                          <div className="cs_integration_overline cs_fs_12 cs_semibold text-uppercase cs_mb_8">
                            {primaryTag}
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
                      <p className="cs_card_desc mb-0 position-relative z-1 flex-grow-1">{item.description}</p>
                      <div className="tp-integration-footer">
                        <span className="tp-integration-status">
                          {isBuiltIn ? "Ready out of the box" : "Available now"}
                        </span>
                        <a href="/contact" className="tp-integration-connect" aria-label={`Learn more about ${item.name}`}>
                          <span>Learn more</span>
                          <i className="bi bi-arrow-right"></i>
                        </a>
                      </div>
                    </article>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      <div className="cs_height_120 cs_height_lg_80"></div>
    </section>
  );
};

export default IntegrationsCatalog;
