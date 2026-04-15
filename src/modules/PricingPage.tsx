import BreadCumb from "@/components/Common/BreadCumb";
import Cta1 from "@/components/Cta/Cta1";
import { coreQcBrand } from "@/config/coreqc";

const PricingPage = () => {
    return (
        <div>
            <BreadCumb
                bgimg="/assets/img/page-heading-bg.svg"
                Title={coreQcBrand.startFreePageTitle}
            ></BreadCumb>
            <Cta1></Cta1>
        </div>
    );
};

export default PricingPage;