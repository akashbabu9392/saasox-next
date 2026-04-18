import BreadCumb from "@/components/Common/BreadCumb";
import Review1 from "@/components/Review/Review1";
import Feature4 from "@/components/Feature/Feature4";
import Analysis1 from "@/components/Analysis/Analysis1";
import Counter1 from "@/components/Counter/Counter1";
import Story1 from "@/components/Story/Story1";
import ScrollReveal from "@/components/Common/ScrollReveal";

const AboutPage = () => {
  return (
    <div>
      <BreadCumb bgimg="/assets/img/page-heading-bg.svg" Title="About RainerTek" />
      <ScrollReveal><Feature4 /></ScrollReveal>
      <ScrollReveal><Review1 /></ScrollReveal>
      <ScrollReveal><Analysis1 /></ScrollReveal>
      <ScrollReveal><Counter1 /></ScrollReveal>
      <ScrollReveal><Story1 /></ScrollReveal>
      <div className="cs_height_120 cs_height_lg_80"></div>
    </div>
  );
};

export default AboutPage;
