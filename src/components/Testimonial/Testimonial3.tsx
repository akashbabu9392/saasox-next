'use client';

import Slider from "@/app/_client/SlickSlider";

const Testimonial3 = () => {

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


        const testimonialContent = [
        {subtitle:'Lab Director, BioVerify Testing Labs', title:'Dr. Sarah Chen', content:'We went from spending 3 hours writing each monthly report in Word to clicking one button. our platform has genuinely transformed how we run this lab.'},             
        {subtitle:'Lab Administrator, PharmaGuard Micro', title:'Marcus Webb', content:'The client portal alone is worth it. Our pharmacy clients used to call us 3–4 times a week asking for report updates. Now they just log in themselves.'},             
        {subtitle:'QC Manager, ClearRoom Labs', title:'Rachel Torres', content:'our platform was set up in a day. The historical trending feature caught an alert-level trend we would have missed.'},             
      ]; 

    return (
<section className="cs_testimonial cs_style_1 position-relative">
      <div className="cs_height_120 cs_height_lg_80"></div>
      <div className="container">
        <div className="cs_section_heading cs_style_1 cs_center_column cs_mb_47 position-relative z-1">
          <div className="cs_section_subtitle cs_fs_18 cs_heading_color cs_mb_22">
            <img src="/assets/img/icons/star-1.svg" alt="Star icon" />
            <span>What Labs Are Saying</span>
            <img src="/assets/img/icons/star-1.svg" alt="Star icon" />
          </div>
          <h2 className="cs_section_title cs_fs_48 cs_semibold mb-0 wow fadeInUp">Built by Lab Scientists, For Lab Scientists</h2>
        </div>
        <div className="testimonial_slider_content cs_slider position-relative">
          <div className="cs_testimonial_shape_1 position-absolute">
            <img src="/assets/img/testimonial-shape-1.svg" alt="Testimonial shape" />
          </div>
          <div className="cs_single_product_nav">

          </div>
          <div className="cs_height_40 cs_height_lg_40"></div>
          <div className="cs_single_product_thumb">

            <Slider  {...settings}>
            {testimonialContent.map((item, i) => (
            <div key={i} className="cs_slide">
              <div className="testimonial_content text-center">
                <div className="cs_testimonial_heading cs_mb_27 cs_mt_20">
                  <h3 className="cs_fs_24 cs_semibold cs_mb_4">{item.title}</h3>
                  <p className="cs_fs_14 mb-0">{item.subtitle}</p>
                </div>
                <blockquote>
                  {item.content} 
                </blockquote>
                <div className="cs_rating" data-rating="5">
                  <div className="cs_rating_percentage"></div>
                </div>
              </div>
            </div>
            ))}
            </Slider>


          </div>
        </div>
        <div className="cs_testimonial_shape_2 position-absolute">
          <img src="/assets/img/trash-group.svg" alt="Vector shape" />
        </div>
        <div className="cs_testimonial_shape_3 position-absolute">
          <img src="/assets/img/vector-4.svg" alt="Vector shape" />
        </div>
        <div className="cs_bubble_1 cs_radius_100 cs_theme_bg_5 position-absolute"></div>
        <div className="cs_bubble_2 cs_radius_100 cs_theme_bg_2 position-absolute"></div>
        <div className="cs_bubble_3 cs_radius_100 cs_theme_bg_3 position-absolute"></div>
      </div>
      <div className="cs_height_120 cs_height_lg_80"></div>
    </section>
    );
};

export default Testimonial3;