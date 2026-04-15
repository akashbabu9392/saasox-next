'use client';

import { useRef } from "react";
import Slider from "@/app/_client/SlickSlider";
import type { SlickSliderRef } from "@/app/_client/SlickSlider";

const Testimonial1 = () => {

        const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 4000,        
        responsive: [
          {
            breakpoint: 1399,
            settings: {
              slidesToShow: 1,
            }
          },
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 1,
            }
          },{
            breakpoint: 575,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
      };  

      const sliderRef = useRef<SlickSliderRef | null>(null);

      const next = () => {
        sliderRef.current?.slickNext();
      };
    
    const testimonialContent = [
        {img:'/assets/img/avatar-5.jpg', subtitle:'Lab Director, BioVerify Testing Labs', title:'Dr. Sarah Chen', content:'We went from spending 3 hours writing each monthly report in Word to clicking one button. our platform has genuinely transformed how we run this lab.'},             
        {img:'/assets/img/avatar-6.jpg', subtitle:'Lab Administrator, PharmaGuard Micro', title:'Marcus Webb', content:'The client portal alone is worth it. Our pharmacy clients used to call us 3–4 times a week asking for report updates. Now they just log in themselves.'},             
        {img:'/assets/img/post-img-1.jpg', subtitle:'QC Manager, ClearRoom Labs', title:'Rachel Torres', content:'I was skeptical about switching from our old system, but our platform was set up in a day. The historical trending feature caught an alert-level trend we would have missed.'},             
      ]; 


    return (
<section className="cs_slider cs_style_1 cs_slider_gap_30 position-relative">
      <div className="cs_height_120 cs_height_lg_80"></div>
      <div className="container">
        <div className="cs_testimonial_slider_wrapper cs_radius_20 position-relative">
          <div className="cs_section_heading cs_style_1 cs_mb_20">
            <div className="cs_section_subtitle cs_fs_18 cs_heading_color cs_mb_12">
              <img src="/assets/img/icons/star-1.svg" alt="" />
              <span>What Labs Are Saying</span>
              <img src="/assets/img/icons/star-1.svg" alt="" />
            </div>
            <h2 className="cs_section_title cs_fs_36 cs_semibold mb-0">Built by Lab Scientists, For Lab Scientists</h2>
          </div>
          <div className="cs_slider_container" data-autoplay="0" data-loop="1" data-speed="600" data-center="0" data-variable-width="0" data-slides-per-view="responsive" data-xs-slides="1" data-sm-slides="1" data-md-slides="1" data-lg-slides="1" data-add-slides="1">
            <div className="cs_slider_wrapper">

            <Slider ref={sliderRef} {...settings}>
            {testimonialContent.map((item, i) => (
              <div key={i} className="cs_slide">
                <div className="cs_testimonial cs_style_2">
                  <div className="cs_testimonial_heading cs_mb_10">
                    <span className="cs_quote_icon cs_center cs_white_bg cs_radius_100">
                    <img src="/assets/img/icons/qote.svg" alt="" />
                    </span>
                    <div className="cs_rating" data-rating="5">
                      <div className="cs_rating_percentage"></div>
                    </div>
                  </div>
                  <blockquote>{item.content}</blockquote>
                  <div className="cs_avatar cs_style_1">
                    <span className="cs_avatar_icon cs_center cs_radius_100">
                    <img src={item.img} alt="" />
                    </span>
                    <div className="cs_avatar_info">
                      <h3 className="cs_fs_20 cs_semibold mb-0">{item.title}</h3>
                      <p className="cs_fs_14 mb-0">{item.subtitle}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            </Slider>

            </div>
            <div className="cs_slider_arrows cs_style_1">
              <div onClick={next} className="cs_right_arrow rounded-circle cs_center cs_white_bg cs_theme_color_2 slick-arrow">
                <i className="bi bi-chevron-right"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cs_height_120 cs_height_lg_80"></div>
    </section>
    );
};

export default Testimonial1;
