import BreadCumb from "@/components/Common/BreadCumb";
import Review1 from "@/components/Review/Review1";
import Feature4 from "@/components/Feature/Feature4";
import Analysis1 from "@/components/Analysis/Analysis1";
import Counter1 from "@/components/Counter/Counter1";
import Story1 from "@/components/Story/Story1";
import Team1 from "@/components/Team/Team1";
import Testimonial4 from "@/components/Testimonial/Testimonial4";

const AboutPage = () => {
  return (
    <div>
      <BreadCumb bgimg="/assets/img/page-heading-bg.svg" Title="About Us" />
      <Feature4 />
      <Review1 />
      <Analysis1 />
      <Counter1 />
      <Story1 />
      <Testimonial4 />
      <Team1 />
    </div>
  );
};

export default AboutPage;

