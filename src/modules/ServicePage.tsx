import Analysis1 from "@/components/Analysis/Analysis1";
import BreadCumb from "@/components/Common/BreadCumb";
import Services3 from "@/components/Services/Services3";


const ServicePage = () => {
    return (
        <div>
            <BreadCumb
                bgimg="/assets/img/page-heading-bg.svg"
                Title="Features"
            ></BreadCumb>  
             <Services3></Services3>
             <Analysis1></Analysis1>     
        </div>
    );
};

export default ServicePage;