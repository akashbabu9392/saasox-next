import BreadCumb from "@/components/Common/BreadCumb";
import Review1 from "@/components/Review/Review1";
import Feature4 from "@/components/Feature/Feature4";
import Analysis1 from "@/components/Analysis/Analysis1";
import Counter1 from "@/components/Counter/Counter1";
import Story1 from "@/components/Story/Story1";

const AboutPage = () => {
  return (
    <div>
      <BreadCumb bgimg="/assets/img/page-heading-bg.svg" Title="About RainerTek" />
      <Feature4 />
      <Review1 />
      <Analysis1 />
      <Counter1 />
      <Story1 />
      <div className="cs_height_120 cs_height_lg_80"></div>
    </div>
  );
};

export default AboutPage;
