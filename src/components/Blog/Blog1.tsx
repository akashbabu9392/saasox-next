'use client';

import Slider from "@/app/_client/SlickSlider";
import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { blogDb } from "@/db/blog";
import type { SlickSliderRef } from "@/app/_client/SlickSlider";
import "./blog-insights.css";

const Blog1 = () => {
        const [sliderKey, setSliderKey] = useState(0);
        useEffect(() => {
          setSliderKey((k) => k + 1);
        }, []);

        const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        swipeToSlide: true,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 4000,
        mobileFirst: true,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              adaptiveHeight: true,
            }
          },
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              adaptiveHeight: true,
            }
          }
        ]
      };  

      const sliderRef = useRef<SlickSliderRef | null>(null);

      const next = () => {
        sliderRef.current?.slickNext();
      };

      const previous = () => {
        sliderRef.current?.slickPrev();
      };
    const blogContent = useMemo(() => {
      return blogDb.slice(0, 4).map((post) => {
        const excerptBlock = post.content.find((b) => b.type === "paragraph");
        const excerpt = excerptBlock?.type === "paragraph" ? excerptBlock.text : "";
        return {
          slug: post.slug,
          img: post.bannerImageSrc,
          title: post.title,
          category: post.categoryLabel,
          date: `${post.postedMonth} ${post.postedDay}, ${post.postedYear}`,
          author: post.author,
          excerpt,
        };
      });
    }, []);


    return (
 <section className="cs_slider cs_style_1 cs_slider_gap_30 position-relative insights-blog-slider">
      <div className="cs_height_120 cs_height_lg_80"></div>
      <div className="container">
        <div className="cs_section_heading cs_style_1 cs_type_1 cs_mb_60">
          <div className="cs_section_heading_left">
            <div className="cs_section_subtitle cs_fs_18 cs_heading_color cs_mb_22">
              <img src="/assets/img/icons/star-1.svg" alt="" />
              <span>Resources</span>
              <img src="/assets/img/icons/star-1.svg" alt="" />
            </div>
            <h2 className="cs_section_title cs_fs_48 cs_semibold mb-0 wow fadeInDown">Lab Management Insights</h2>
          </div>
          <div className="cs_section_heading_right">
            <div className="cs_slider_arrows cs_style_1 cs_type_1">
              <div onClick={previous} className="cs_left_arrow rounded-circle cs_center cs_white_bg cs_heading_color slick-arrow">
                <i className="bi bi-arrow-left"></i>
              </div>
              <div onClick={next} className="cs_right_arrow rounded-circle cs_center cs_white_bg cs_heading_color slick-arrow">
                <i className="bi bi-arrow-right"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="cs_slider_container" data-autoplay="0" data-loop="1" data-speed="600" data-center="0" data-variable-width="0" data-slides-per-view="responsive" data-xs-slides="1" data-sm-slides="1" data-md-slides="2" data-lg-slides="3" data-add-slides="3">
          <div className="cs_slider_wrapper cs_slider_gap_301">
            <Slider key={sliderKey} ref={sliderRef} {...settings}>
            {blogContent.map((item, i) => {
            const postHref = `/blog/${item.slug}`;
            return (
            <div key={i} className="cs_slide">
              <article className="cs_post cs_style_1 cs_radius_20">
                <Link href={postHref} aria-label="Reading details post link" className="cs_post_thumbnail cs_mb_15 position-relative overflow-hidden">
                <img src={item.img} alt="" />
                <span className="cs_post_category cs_fs_14 cs_medium cs_heading_bg cs_white_color position-absolute">{item.category}</span>
                </Link>
                <div className="cs_post_content">
                  <div className="cs_post_meta_wrapper cs_mb_12">
                    <div className="cs_post_meta">
                      <span><i className="bi bi-person"></i></span>
                      <span>{item.author}</span>
                    </div>
                    <div className="cs_post_meta">
                      <span><i className="bi bi-calendar-check-fill"></i></span>
                      <span>{item.date}</span>
                    </div>
                  </div>
                  <h3 className="cs_post_title cs_fs_24 cs_semibold cs_mb_13"><Link href={postHref} aria-label="Reading details post link">{item.title}</Link></h3>
                  <p className="cs_fs_14 cs_mb_16">{item.excerpt}</p>
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
             </Slider>



          </div>
        </div>
      </div>
      <div className="cs_height_120 cs_height_lg_80"></div>
    </section>
    );
};

export default Blog1;