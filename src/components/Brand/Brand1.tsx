import { trustedByLogos, trustedByTitle } from "@/config/trusted-by";

const Brand1 = () => {

    return (
 <section>
      <div className="cs_height_120 cs_height_lg_80"></div>
      <div className="container">
        <div className="cs_brands_wrapper cs_radius_10 position-relative z-1">
          <h2 className="cs_brand_title cs_fs_18 cs_normal cs_white_bg cs_body_color cs_radius_50">
            <img src="/assets/img/icons/star-4.svg" alt="" />
            {trustedByTitle}
            <img src="/assets/img/icons/star-4.svg" alt="" />
          </h2>
          <div className="cs_horizontal_slider_wrapper cs_type_1">
            <div className="cs_slider_in">
              <div className="cs_brands_list">
                {trustedByLogos.map((item, i) => (
                  <div key={i} className="cs_center cs_trusted_by_item">
                    <img src={item.imgSrc} alt={item.alt} />
                    <span className="cs_trusted_by_label cs_fs_14 cs_semibold text-center d-block">
                      {item.alt}
                    </span>
                  </div>
                ))}
              </div>
              <div className="cs_brands_list">
                {trustedByLogos.map((item, i) => (
                  <div key={`dup-${i}`} className="cs_center cs_trusted_by_item">
                    <img src={item.imgSrc} alt={item.alt} />
                    <span className="cs_trusted_by_label cs_fs_14 cs_semibold text-center d-block">
                      {item.alt}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
};

export default Brand1;
