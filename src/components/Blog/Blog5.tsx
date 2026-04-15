import Link from "next/link";
import { blogDb } from "@/db/blog";

const Blog5 = () => {
    return (
        <div>
    <div className="cs_height_120 cs_height_lg_80"></div>
        <div className="container">
        <div className="cs_section_heading cs_style_1 cs_center_column text-center cs_mb_50">
          <div className="cs_section_subtitle cs_fs_18 cs_heading_color cs_mb_22">
            <img src="/assets/img/icons/star-1.svg" alt="" />
            <span>Resources</span>
            <img src="/assets/img/icons/star-1.svg" alt="" />
          </div>
          <h2 className="cs_section_title cs_fs_48 cs_semibold mb-0">Lab Management Insights</h2>
          <p className="cs_card_desc cs_mt_22 mb-0">Guides, compliance updates, and best practices for environmental monitoring labs and compounding pharmacies.</p>
        </div>
        <div className="row cs_row_gap_30 cs_gap_y_30">
                {blogDb.map((post) => {
                    const postHref = `/blog/${post.slug}`;
                    const excerpt = post.bodyParagraphs[0] ?? "";
                    return (
                    <div key={post.slug} className="col-lg-4 col-md-6">
                    <article className="cs_post cs_style_1 cs_radius_20">
                    <Link href={postHref} aria-label="Reading details post link" className="cs_post_thumbnail cs_mb_15 position-relative overflow-hidden">
                    <img src={post.bannerImageSrc} alt="" />
                    <span className="cs_post_category cs_heading_bg cs_fs_14 cs_medium cs_white_color position-absolute">{post.categoryLabel}</span>
                    </Link>
                    <div className="cs_post_content">
                    <div className="cs_post_meta_wrapper cs_mb_12">
                    <div className="cs_post_meta">
                    <span><i className="bi bi-person"></i></span>
                    <span>RainerTek</span>
                    </div>
                    <div className="cs_post_meta">
                    <span><i className="bi bi-calendar-check-fill"></i></span>
                    <span>{post.postedMonth} {post.postedDay}, 2026</span>
                    </div>
                    </div>
                    <h2 className="cs_post_title cs_fs_24 cs_semibold cs_mb_13"><Link href={postHref} aria-label="Reading details post link">{post.title}</Link></h2>
                    <p className="cs_fs_14 cs_mb_16">{excerpt}</p>
                    <Link href={postHref} aria-label="Reading details post link" className="cs_post_btn cs_heading_color">
                    <span>Read More</span>
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
        </div>
    );
};

export default Blog5;
