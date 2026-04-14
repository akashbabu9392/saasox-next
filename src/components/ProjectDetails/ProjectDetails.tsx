import Link from "next/link";
import type { ProjectDetailsRecord } from "@/db/projects";

const ProjectDetails = ({ data }: { data: ProjectDetailsRecord }) => {
    return (
<section>
      <div className="cs_height_120 cs_height_lg_80"></div>
      <div className="container">
        <div className="cs_project_details">
          <div className="cs_banner cs_radius_50">
            <img src={data.bannerImageSrc} alt={data.bannerImageAlt} />
          </div>
          <div className="row cs_gap_y_30">
            <div className="col-lg-4 order-lg-2">
              <div className="cs_project_info_wrapper cs_radius_15">
                <div className="cs_project_info_inner cs_white_bg cs_radius_15">
                  <h3 className="cs_fs_22 cs_bold cs_mb_22">Project Info: </h3>
                  <ul className="cs_project_info_list cs_mp_0">
                    <li>
                      <span className="cs_medium">Client:</span>
                      <span className="cs_medium cs_heading_color">{data.info.clientLabel}</span>
                    </li>
                    <li>
                      <span className="cs_medium">Category:</span>
                      <span className="cs_medium cs_heading_color">{data.info.categoryLabel}</span>
                    </li>
                    <li>
                      <span className="cs_medium">Location:</span>
                      <span className="cs_medium cs_heading_color">{data.info.locationLabel}</span>
                    </li>
                    <li>
                      <span className="cs_medium">Share:</span>
                      <div className="cs_social_links cs_style_2 cs_heading_color">
                        <a href="#" aria-label="Social link"><i className="bi bi-facebook"></i></a>
                        <a href="#" aria-label="Social link"><i className="bi bi-twitter-x"></i></a>           
                        <a href="#" aria-label="Social link"><i className="bi bi-linkedin"></i></a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-8 order-lg-1">
              <div className="cs_project_desc">
                <h2>{data.mainHeading}</h2>
                <p>{data.mainParagraphs[0]}</p>
                <p>{data.mainParagraphs[1]}</p>
              </div>
            </div>
          </div>
          <h2>{data.challengesHeading}</h2>
          <p>{data.challengesParagraph}</p>
          <ul>
            {data.challengeBullets.map((item, index) => (
              <li key={index}>
                <b>{item.title}</b>
                {item.content}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="cs_height_120 cs_height_lg_80"></div>
      <div className="cs_projects_wrapper">
        <div className="container">
            <div className="row cs_row_gap_30 cs_gap_y_30 justify-content-center">
                
                {data.relatedProjects.map((item) => (
                  <div key={item.slug} className="col-lg-4 cs_isotop_item">
                      <div className="cs_project_item cs_radius_10 position-relative">
                      <img src={item.imageSrc} alt="Project image" />
                      <div className="cs_project_info cs_radius_5 position-absolute">
                          <h3 className="cs_fs_24 cs_semibold cs_mb_6"><Link href={`/project/${item.slug}`}>{item.title}</Link></h3>
                          <Link href={`/project/${item.slug}`} className="cs_project_btn cs_fs_18 cs_theme_color_2">View Project</Link>
                      </div>
                      </div>
                  </div>
                ))}

            </div>

        </div>
      </div>
      <div className="cs_height_120 cs_height_lg_80"></div>
    </section>
    );
};

export default ProjectDetails;