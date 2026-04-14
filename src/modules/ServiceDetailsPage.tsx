import BreadCumb from "@/components/Common/BreadCumb";
import ServiceDetails from "@/components/SerciceDetails/ServiceDetails";
import { serviceDetailsDb } from "@/db/services";

const ServiceDetailsPage = () => {
    return (
        <div>
             <BreadCumb
                bgimg="/assets/img/page-heading-bg.svg"
                Title="Service Details"
            ></BreadCumb>
            <ServiceDetails data={serviceDetailsDb[0]}></ServiceDetails>            
        </div>
    );
};

export default ServiceDetailsPage;