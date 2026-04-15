import Link from "next/link";
import { blogDb } from "@/db/blog";

const Blog3 = () => {
    const blogContent = blogDb.slice(0, 3).map((post) => ({
      slug: post.slug,
      img: post.bannerImageSrc,
      title: post.title,
      category: post.categoryLabel,
      date: `${post.postedMonth} ${post.postedDay}, 2026`,
    }));

    return (
 <section>
      <div className="cs_height_120 cs_height_lg_80"></div>
      <div className="container">
        <div className="cs_section_heading cs_style_1 cs_center_column cs_mb_40 text-center">
          <div className="cs_section_subtitle cs_fs_18 cs_heading_color cs_mb_22">
            <img src="/assets/img/icons/star-3.svg" alt="" />
            <span>Resources</span>
            <img src="/assets/img/icons/star-3.svg" alt="" />
          </div>
          <h2 className="cs_section_title cs_fs_48 cs_semibold mb-0 wow fadeInUp">Lab Management Insights</h2>
        </div>
        <div className="row cs_row_gap_30 cs_gap_y_30">
         {blogContent.map((item, i) => {
          const postHref = `/blog/${item.slug}`;
          return (
          <div key={i} className="col-lg-4">
            <article className="cs_post cs_style_1 cs_radius_20">
              <Link href={postHref} aria-label="Reading details post link" className="cs_post_thumbnail cs_mb_15 position-relative overflow-hidden">
              <img src={item.img} alt="" />
              <span className="cs_post_category cs_heading_bg cs_fs_14 cs_medium cs_white_color position-absolute">{item.category}</span>
              </Link>
              <div className="cs_post_content">
                <div className="cs_post_meta_wrapper cs_mb_12">
                  <div className="cs_post_meta">
                    <span><i className="bi bi-person"></i></span>
                    <span>RainerTek</span>
                  </div>
                  <div className="cs_post_meta">
                    <span><i className="bi bi-calendar-check"></i></span>
                    <span>{item.date}</span>
                  </div>
                </div>
                <h3 className="cs_post_title cs_fs_24 cs_semibold cs_mb_13"><Link href={postHref} aria-label="Reading details post link">{item.title}</Link></h3>
                <Link href={postHref} aria-label="Reading details post link" className="cs_post_btn cs_heading_color">
                <span>Learn More</span>
                <span>
                <i className="bi bi-arrow-right"></i>
                </span>
                </Link>
              </div>
            </article>
          </div>
          );
         })}

        </div>
      </div>
      <div className="cs_height_120 cs_height_lg_80"></div>
    </section>
    );
};

export default Blog3;
