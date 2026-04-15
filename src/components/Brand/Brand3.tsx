
const Brand3 = () => {

        const chooseContent = [
        {img:'/assets/img/brand-1.svg', title:'Cut report time from 3 hours to 5 minutes — Dr. S. Chen, Lab Director'},                         
        {img:'/assets/img/brand-2.svg', title:'Our pharmacies love the self-service portal — M. Webb, PharmaGuard'},                         
        {img:'/assets/img/brand-3.svg', title:'Set up in one day. Not one month. — R. Torres, ClearRoom Labs'},                         
        {img:'/assets/img/brand-4.svg', title:'Finally a LIMS that understands environmental monitoring — J. Park, MicroSafe Lab'},                         
        {img:'/assets/img/brand-5.svg', title:'The trending analysis caught an excursion we would have missed — A. Patel, CleanAir Testing'},                         
        {img:'/assets/img/brand-6.svg', title:'Labs replacing spreadsheets and Word docs with our platform'},                         
      ]; 

    return (
<section className="cs_brands_slider">
      <div className="cs_height_120 cs_height_lg_80"></div>
      <div className="container">
        <div className="cs_section_heading cs_center cs_mb_25">
          <h3 className="cs_brand_title cs_fs_20 text-capitalize mb-0">Labs replacing spreadsheets and Word docs with our platform</h3>
        </div>
        <div className="cs_horizontal_slider_wrapper">
          <div className="cs_slider_in">
            <div className="cs_brands_list">
            {chooseContent.map((item, i) => (
              <div key={i} className="cs_center px-2" style={{ minWidth: '220px' }}>
               <img src={item.img} alt={item.title} title={item.title} />
              </div>
                ))}
            </div>
            <div className="cs_brands_list">
            {chooseContent.map((item, i) => (
              <div key={`d-${i}`} className="cs_center px-2" style={{ minWidth: '220px' }}>
               <img src={item.img} alt={item.title} title={item.title} />
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

export default Brand3;
