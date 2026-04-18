import AnimatedCounter from "@/components/Common/AnimatedCounter";

const Counter1 = () => {

    const bgImage = '/assets/img/counter-bg-2.svg';

    return (
 <div className="cs_counter cs_style_1 cs_type_1 cs_accent_bg" style={{ backgroundImage: `url(${bgImage})`}} >
      <div className="container">
        <div className="row cs_gap_y_30">
          <div className="col-lg-3 col-sm-6">
            <div className="cs_numberbox cs_center_column text-center">
              <div className="cs_counter_number cs_fs_48 cs_semibold cs_white_color cs_mb_10">
                <AnimatedCounter to={50} suffix="%" />
              </div>
              <p className="cs_fs_18 cs_white_color mb-0">Reduction in report <br/> turnaround time</p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="cs_numberbox cs_center_column text-center">
              <div className="cs_counter_number cs_fs_48 cs_semibold cs_white_color cs_mb_10">
                3–5x
              </div>
              <p className="cs_fs_18 cs_white_color mb-0">ROI vs manual <br/> processes</p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="cs_numberbox cs_center_column text-center">
              <div className="cs_counter_number cs_fs_48 cs_semibold cs_white_color cs_mb_10">
                60–70%
              </div>
              <p className="cs_fs_18 cs_white_color mb-0">Lower price vs legacy <br/> LIMS platforms</p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="cs_numberbox cs_center_column text-center">
              <div className="cs_counter_number cs_fs_48 cs_semibold cs_white_color cs_mb_10">
                1 day
              </div>
              <p className="cs_fs_18 cs_white_color mb-0">Average <br/> setup time</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Counter1;
