import BreadCumb from "@/components/Common/BreadCumb";
import Faq1 from "@/components/Faq/Faq1";

const FaqPage = () => {
    return (
        <div>
            <BreadCumb
                bgimg="/assets/img/page-heading-bg.svg"
                Title="FAQs"
            ></BreadCumb>    
            <Faq1></Faq1>         
        </div>
    );
};

export default FaqPage;