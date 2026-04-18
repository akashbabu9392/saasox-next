import Brand1 from "@/components/Brand/Brand1";
import Services1 from "@/components/Services/Services1";
import Work1 from "@/components/Work/Work1";
import Analysis1 from "@/components/Analysis/Analysis1";
import Choose1 from "@/components/Choose/Choose1";
import Counter1 from "@/components/Counter/Counter1";
import Story1 from "@/components/Story/Story1";
import Toolset1 from "@/components/Toolset/Toolset1";
import Blog1 from "@/components/Blog/Blog1";
import Faq1 from "@/components/Faq/Faq1";
import HeroBanner3 from "@/components/HeroBanner/HeroBanner3";
import ScrollReveal from "@/components/Common/ScrollReveal";

const Home = () => {
    return (
        <div className="cs_homepage">
            <HeroBanner3></HeroBanner3>
            <ScrollReveal><Brand1></Brand1></ScrollReveal>
            <ScrollReveal><Services1></Services1></ScrollReveal>
            <ScrollReveal><Work1></Work1></ScrollReveal>
            <ScrollReveal><Analysis1></Analysis1></ScrollReveal>
            <ScrollReveal><Choose1></Choose1></ScrollReveal>
            <ScrollReveal><Counter1></Counter1></ScrollReveal>
            <ScrollReveal><Story1></Story1></ScrollReveal>
            <div className="cs_height_120 cs_height_lg_80"></div>
            <ScrollReveal><Toolset1></Toolset1></ScrollReveal>
            <ScrollReveal><Faq1></Faq1></ScrollReveal>
            <ScrollReveal><Blog1></Blog1></ScrollReveal>
        </div>
    );
};

export default Home;