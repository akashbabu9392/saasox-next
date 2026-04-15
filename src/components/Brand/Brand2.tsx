
const Brand2 = () => {

    const chooseContent = [
        {img:'/assets/img/brand-11.svg', alt:'Lab client'},                         
        {img:'/assets/img/brand-12.svg', alt:'Lab client'},                         
        {img:'/assets/img/brand-13.svg', alt:'Lab client'},                         
        {img:'/assets/img/brand-14.svg', alt:'Lab client'},                         
        {img:'/assets/img/brand-15.svg', alt:'Lab client'},                         
        {img:'/assets/img/brand-13.svg', alt:'Lab client'},                         
      ]; 

    return (
  <section>
      <div className="cs_height_144 cs_height_lg_80"></div>
      <div className="container">
        <div className="cs_brands_wrapper cs_radius_10 position-relative z-1">
          <h2 className="cs_brand_title cs_fs_18 cs_normal cs_white_bg cs_body_color cs_radius_50">
            <img src="/assets/img/icons/star-4.svg" alt="" />
            Trusted by compounding pharmacies and independent testing labs
            <img src="/assets/img/icons/star-4.svg" alt="" />
          </h2>
          <div className="cs_horizontal_slider_wrapper">
            <div className="cs_slider_in">
              <div className="cs_brands_list">
                {chooseContent.map((item, i) => (
              <div key={i} className="cs_center">
                <img src={item.img} alt={item.alt} />
              </div>
                ))}
              </div>
              <div className="cs_brands_list">
                    {chooseContent.map((item, i) => (
                    <div key={`d-${i}`} className="cs_center">
                        <img src={item.img} alt={item.alt} />
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

export default Brand2;
