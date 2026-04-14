import BreadCumb from "@/components/Common/BreadCumb";
import Contact from "@/components/Contact/Contact";

const ContactPage = () => {
    return (
        <div>
            <BreadCumb
                bgimg="/assets/img/page-heading-bg.svg"
                Title="Contact Us"
            ></BreadCumb>  
            <Contact></Contact>           
        </div>
    );
};

export default ContactPage;