import ServiceCard1 from '../Card/ServiceCard1';
import { uiText } from '@/constants/ui';
import { labServiceCards } from '@/data/lab-service-cards';

const Services1 = () => {

      const bgImage = '/assets/img/feature-item-bg.svg';

    return (
 <section className="position-relative">
      <div className="cs_height_120 cs_height_lg_80"></div>
      <div className="container">
        <div className="cs_section_heading cs_style_1 cs_mb_47 cs_center_column text-center position-relative z-1">
          <div className="cs_section_subtitle cs_fs_18 cs_heading_color cs_mb_22">
            <img src="/assets/img/icons/star-1.svg" alt="" />
            <span>Everything Your Lab Needs</span>
            <img src="/assets/img/icons/star-1.svg" alt="" />
          </div>
          <h2 className="cs_section_title cs_fs_48 cs_semibold mb-0 wow fadeInUp">One Platform. Sample to Report.</h2>
          <p className="cs_card_desc cs_mt_22 mb-0">Stop duct-taping together spreadsheets, Word docs, and email threads. our platform handles your entire environmental monitoring workflow in one place.</p>
        </div>
        <div className="cs_features_items_wrapper position-relative z-1">
          <div className="cs_feature_item cs_radius_20 cs_bg_filed" style={{ backgroundImage: `url(${bgImage})`}}>
            <h3 className="cs_fs_36 cs_semibold cs_white_color cs_mb_40">Digitize CoC through <br/> signed PDF delivery</h3>
          </div>

          {labServiceCards.map((card) => (
            <ServiceCard1
              key={card.slug}
              addclass={card.addClass}
              serviceicon={card.iconSrc}
              title={card.title}
              featureList={card.featureList}
              btnname={uiText.actions.readMore}
              btnurl={`/service/${card.slug}`}
            />
          ))}

        </div>
      </div>
      <div className="cs_feature_shape_1 position-absolute">
        <img src="/assets/img/3d-shape.png" alt="" />
      </div>
      <div className="cs_feature_shape_2 position-absolute">
        <img src="/assets/img/spring-shape.png" alt="" />
      </div>
      <div className="cs_height_120 cs_height_lg_80"></div>
    </section>
    );
};

export default Services1;
