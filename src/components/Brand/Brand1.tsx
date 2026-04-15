
const Brand1 = () => {

    const labels = [
        "Compounding Pharmacies",
        "503B Outsourcing Facilities",
        "Hospital Pharmacy Cleanrooms",
        "Independent Micro Labs",
        "Environmental Testing Labs",
      ]; 

    return (
 <section>
      <div className="cs_height_120 cs_height_lg_80"></div>
      <div className="container">
        <div className="cs_mb_31">
          <h2 className="cs_fs_20 cs_normal mb-0">Trusted by labs serving</h2>
        </div>
        <div className="cs_horizontal_slider_wrapper">
          <div className="cs_slider_in">
            <div className="cs_brands_list">
            {labels.map((label, i) => (
              <div key={i} className="cs_center px-3">
                <span className="cs_fs_16 cs_semibold text-center d-block">{label}</span>
              </div>
                ))}
            </div>
            <div className="cs_brands_list">
            {labels.map((label, i) => (
              <div key={`dup-${i}`} className="cs_center px-3">
               <span className="cs_fs_16 cs_semibold text-center d-block">{label}</span>
              </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
    );
};

export default Brand1;
