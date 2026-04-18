import Analysis1 from "@/components/Analysis/Analysis1";
import BreadCumb from "@/components/Common/BreadCumb";
import Services3 from "@/components/Services/Services3";
import ScrollReveal from "@/components/Common/ScrollReveal";


const ServicePage = () => {
    return (
        <div>
            <BreadCumb
                bgimg="/assets/img/page-heading-bg.svg"
                Title="Features"
            ></BreadCumb>
             <ScrollReveal><Services3></Services3></ScrollReveal>
             <ScrollReveal><Analysis1></Analysis1></ScrollReveal>
        </div>
    );
};

export default ServicePage;