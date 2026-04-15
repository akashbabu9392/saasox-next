const Review1 = () => {

    const bgImage = '/assets/img/rating-bg-1.svg';

    return (
    <section className="cs_customer_review cs_bg_filed cs_radius_50" style={{ backgroundImage: `url(${bgImage})`}}>
      <div className="container">
        <div className="cs_section_heading cs_style_1 text-center cs_mb_47">
          <h2 className="cs_fs_48 cs_semibold cs_white_color mb-0 wow fadeInDown">Why labs switch to our platform</h2>
        </div>
        <div className="row cs_row_gap_30 cs_gap_y_30">
          <div className="col-lg-3 col-md-6">
            <div className="cs_review_item cs_center_column cs_radius_20 text-center">
              <div className="cs_rating_container cs_center cs_mb_32">
                <div className="cs_rating" data-rating="0">
                  <div className="cs_rating_percentage"></div>
                </div>
              </div>
              <p className="cs_fs_20 cs_white_color cs_mb_33">&quot;50%&quot; — Reduction in report turnaround</p>
              <p className="cs_fs_14 cs_white_color mb-0">Less time in Word, more time in the lab.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="cs_review_item cs_center_column cs_radius_20 text-center">
              <div className="cs_rating_container cs_center cs_mb_32">
                <div className="cs_rating" data-rating="0">
                  <div className="cs_rating_percentage"></div>
                </div>
              </div>
              <p className="cs_fs_20 cs_white_color cs_mb_33">&quot;3–5x&quot; — ROI vs manual processes</p>
              <p className="cs_fs_14 cs_white_color mb-0">Stop paying staff to re-key the same data.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="cs_review_item cs_center_column cs_radius_20 text-center">
              <div className="cs_rating_container cs_center cs_mb_32">
                <div className="cs_rating" data-rating="0">
                  <div className="cs_rating_percentage"></div>
                </div>
              </div>
              <p className="cs_fs_20 cs_white_color cs_mb_33">&quot;Free plan&quot; — Start without a card</p>
              <p className="cs_fs_14 cs_white_color mb-0">Explore our platform on the house, then scale when you are ready.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="cs_review_item cs_center_column cs_radius_20 text-center">
              <div className="cs_rating_container cs_center cs_mb_32">
                <div className="cs_rating" data-rating="0">
                  <div className="cs_rating_percentage"></div>
                </div>
              </div>
              <p className="cs_fs_20 cs_white_color cs_mb_33">&quot;1 day&quot; — Average setup time</p>
              <p className="cs_fs_14 cs_white_color mb-0">Operational fast — not a 6-month project plan.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
};

export default Review1;
