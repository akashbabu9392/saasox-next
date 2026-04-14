import Analysis1 from "@/components/Analysis/Analysis1";
import BreadCumb from "@/components/Common/BreadCumb";
import Feature5 from "@/components/Feature/Feature5";
import Services3 from "@/components/Services/Services3";


const ServicePage = () => {
    return (
        <div>
            <BreadCumb
                bgimg="/assets/img/page-heading-bg.svg"
                Title="Our Services"
            ></BreadCumb>  
             <Services3></Services3>
             <Feature5></Feature5> 
             <Analysis1></Analysis1>     
        </div>
    );
};

export default ServicePage;