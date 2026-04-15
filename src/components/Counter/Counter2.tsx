const Counter2 = () => {

  const bgImage = '/assets/img/counter-bg-1.svg';

    return (
  <div className="cs_counter cs_style_1">
      <div className="cs_counter_content_wrapper cs_accent_bg cs_radius_30 cs_bg_filed" style={{ backgroundImage: `url(${bgImage})`}} >
        <div className="container">
          <div className="row cs_gap_y_30">
            <div className="col-lg-3 col-sm-6">
              <div className="cs_numberbox">
                <div className="cs_counter_number cs_fs_74 cs_semibold cs_white_color cs_mb_10">
                  50%
                </div>
                <p className="cs_fs_18 cs_white_color mb-0">Faster report <br/> turnaround</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="cs_numberbox">
                <div className="cs_counter_number cs_fs_74 cs_semibold cs_white_color cs_mb_10">
                  $27K+
                </div>
                <p className="cs_fs_18 cs_white_color mb-0">Average annual savings <br/> per lab</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="cs_numberbox">
                <div className="cs_counter_number cs_fs_74 cs_semibold cs_white_color cs_mb_10">
                  1 day
                </div>
                <p className="cs_fs_18 cs_white_color mb-0">Average setup <br/> time</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="cs_numberbox">
                <div className="cs_counter_number cs_fs_74 cs_semibold cs_white_color cs_mb_10">
                  $0
                </div>
                <p className="cs_fs_18 cs_white_color mb-0">Cost of client portal <br/> access</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Counter2;
