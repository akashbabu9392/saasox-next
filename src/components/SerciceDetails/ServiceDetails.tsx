import type { ServiceDetailsRecord } from "@/db/services";

const ServiceDetails = ({ data }: { data: ServiceDetailsRecord }) => {
    return (
 <section>
      <div className="cs_height_120 cs_height_lg_80"></div>
      <div className="container">
        <div className="cs_service_details">
          <div className="cs_banner cs_radius_50">
            <img src={data.bannerImageSrc} alt={data.bannerImageAlt} />
          </div>
          <p>{data.introParagraphs[0]}</p>
          <p>{data.introParagraphs[1]}</p>
          <h2>{data.sectionHeading}</h2>
          <p>{data.sectionParagraph}</p>
          <ul>
            {data.bulletPoints.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <div className="row cs_row_gap_30 cs_gap_y_30 cs_mb_32">
            <div className="col-md-6">
              <div className="cs_radius_20">
                <img src={data.galleryImages[0].src} alt={data.galleryImages[0].alt} />
              </div>
            </div>
            <div className="col-md-6">
              <div className="cs_radius_20">
                <img src={data.galleryImages[1].src} alt={data.galleryImages[1].alt} />
              </div>
            </div>
          </div>
          <p>{data.outroParagraphs[0]}</p>
          <p>{data.outroParagraphs[1]}</p>
        </div>
      </div>
      <div className="cs_height_120 cs_height_lg_80"></div>
    </section>
    );
};

export default ServiceDetails;