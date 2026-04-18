import BreadCumb from "@/components/Common/BreadCumb";
import IntegrationsCatalog from "@/components/Integrations/IntegrationsCatalog";
import ScrollReveal from "@/components/Common/ScrollReveal";

const IntegrationsPage = () => {
    return (
        <div>
            <BreadCumb
                bgimg="/assets/img/page-heading-bg.svg"
                Title="Integrations"
            ></BreadCumb>
            <ScrollReveal><IntegrationsCatalog></IntegrationsCatalog></ScrollReveal>
        </div>
    );
};

export default IntegrationsPage;
