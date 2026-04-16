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
          <p>{data.outroParagraphs[0]}</p>
          <p>{data.outroParagraphs[1]}</p>
        </div>
      </div>
      <div className="cs_height_120 cs_height_lg_80"></div>
    </section>
    );
};

export default ServiceDetails;