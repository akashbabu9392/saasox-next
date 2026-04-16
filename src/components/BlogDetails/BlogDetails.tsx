import type { BlogPostRecord } from "@/db/blog";

const BlogDetails = ({ data }: { data: BlogPostRecord }) => {
    const renderContentBlock = (
      block:
        | { type: "paragraph"; text: string }
        | { type: "heading"; text: string }
        | { type: "bullets"; items: string[] }
        | { type: "ordered"; items: string[] }
        | { type: "quote"; text: string }
    ) => {
      if (block.type === "heading") {
        return <h3 className="cs_fs_24 cs_semibold cs_mb_12">{block.text}</h3>;
      }
      if (block.type === "paragraph") {
        return <p>{block.text}</p>;
      }
      if (block.type === "quote") {
        return (
          <div className="cs_quote_wrapper position-relative">
            <blockquote>{block.text}</blockquote>
          </div>
        );
      }
      if (block.type === "bullets") {
        return (
          <ul className="cs_mp_0 ps-4">
            {block.items.map((item) => (
              <li key={item} className="cs_card_desc cs_mb_12">
                {item}
              </li>
            ))}
          </ul>
        );
      }
      return (
        <ol className="cs_mp_0">
          {block.items.map((item) => (
            <li key={item} className="cs_card_desc cs_mb_12">
              {item}
            </li>
          ))}
        </ol>
      );
    };
    return (
 <section>
      <div className="cs_height_120 cs_height_lg_80"></div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-11">
            <div className="cs_post_details">
              <div className="cs_post_banner cs_radius_10 cs_mb_40 position-relative">
                <img src={data.bannerImageSrc} alt={data.bannerImageAlt} />
                <div className="cs_posted_by cs_center_column cs_heading_font cs_radius_8 position-absolute">
                  <span className="cs_fs_24 cs_bold cs_white_color">{data.postedDay}</span>
                  <span className="cs_fs_12 cs_white_color">{data.postedMonth}</span>
                </div>
              </div>
              <div className="cs_post_meta_wrapper cs_mb_17">
                <div className="cs_post_meta">
                  <span className="cs_blue_color"><i className="bi bi-person"></i></span>
                  <span className="cs_heading_color">{data.author}</span>
                </div>
                <div className="cs_post_meta">
                  <span className="cs_blue_color"><i className="bi bi-calendar-check-fill"></i></span>
                  <span className="cs_heading_color">{data.postedMonth} {data.postedDay}, {data.postedYear}</span>
                </div>
                <div className="cs_post_meta">
                  <span className="cs_blue_color"><i className="bi bi-bookmark"></i></span>
                  <span className="cs_heading_color">{data.categoryLabel}</span>
                </div>
              </div>
              <h2>{data.title}</h2>
              <div className="cs_height_10"></div>
              {data.content.map((block, idx) => (
                <div key={`${block.type}-${idx}`} className="cs_mb_20">
                  {renderContentBlock(block)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="cs_height_120 cs_height_lg_80"></div>
    </section>
    );
};

export default BlogDetails;