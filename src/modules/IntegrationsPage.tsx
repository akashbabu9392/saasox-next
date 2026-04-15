import BreadCumb from "@/components/Common/BreadCumb";
import IntegrationsCatalog from "@/components/Integrations/IntegrationsCatalog";

const IntegrationsPage = () => {
    return (
        <div>
            <BreadCumb
                bgimg="/assets/img/page-heading-bg.svg"
                Title="Integrations"
            ></BreadCumb>
            <IntegrationsCatalog></IntegrationsCatalog>
        </div>
    );
};

export default IntegrationsPage;
