import type { TeamMemberRecord } from "@/db/team";

const TeamDetails = ({ data }: { data: TeamMemberRecord }) => {
    return (
    <section>
      <div className="cs_height_120 cs_height_lg_80"></div>
      <div className="container">
        <div className="cs_team_details">
          <div className="cs_team_info_wrapper cs_gray_bg_2 cs_radius_50">
            <div className="row cs_gap_y_40">
              <div className="col-lg-5">
                <div className="cs_team_thumbnail cs_radius_30">
                  <img src={data.imageSrc} alt={data.imageAlt} />
                </div>
              </div>
              <div className="col-lg-7">
                <div className="cs_team_info">
                  <div className="cs_team_header cs_mb_26">
                    <div className="cs_team_heading">
                      <h3 className="cs_fs_48 cs_semibold">{data.name}</h3>
                      <p className="mb-0">{data.role}</p>
                    </div>
                    <div className="cs_social_links cs_style_1">
                      <a href="#" className="cs_center cs_radius_50">
                     <i className="bi bi-facebook"></i>
                      </a>
                      <a href="#" className="cs_center cs_radius_50">
                      <i className="bi bi-twitter-x"></i>
                      </a>
                      <a href="#" className="cs_center cs_radius_50">
                      <i className="bi bi-linkedin"></i>
                      </a>
                      <a href="#" className="cs_center cs_radius_50">
                      <i className="bi bi-youtube"></i>
                      </a>
                    </div>
                  </div>
                  <p>{data.bioParagraphs[0]}</p>
                  <p>{data.bioParagraphs[1]}</p>
                  <ul className="cs_contact_list cs_mp_0">
                    <li>
                      <span className="cs_contact_icon cs_center cs_radius_100 cs_white_bg"><i className="bi bi-telephone-fill"></i></span>
                      <a href={data.phoneHref}>{data.phoneLabel}</a>
                    </li>
                    <li>
                      <span className="cs_contact_icon cs_center cs_radius_100 cs_white_bg"><i className="bi bi-envelope-fill"></i></span>
                      <a href={data.emailHref}>{data.emailLabel}</a>
                    </li>
                    <li>
                      <span className="cs_contact_icon cs_center cs_radius_100 cs_white_bg"><i className="bi bi-geo-alt-fill"></i></span>
                      <span className="mb-0">{data.locationLabel}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="cs_team_about">
            <h2>{data.aboutHeading}</h2>
            <p>{data.aboutParagraphs[0]}</p>
            <p>{data.aboutParagraphs[1]}</p>
            <ul>
              {data.aboutBulletPoints.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <p>{data.aboutParagraphs[2]}</p>
          </div>
        </div>
      </div>
      <div className="cs_height_120 cs_height_lg_80"></div>
    </section>
    );
};

export default TeamDetails;