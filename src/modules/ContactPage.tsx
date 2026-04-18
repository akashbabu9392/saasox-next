import BreadCumb from "@/components/Common/BreadCumb";
import Contact from "@/components/Contact/Contact";
import ScrollReveal from "@/components/Common/ScrollReveal";

const ContactPage = () => {
    return (
        <div>
            <BreadCumb
                bgimg="/assets/img/page-heading-bg.svg"
                Title="Contact Us"
            ></BreadCumb>
            <ScrollReveal><Contact></Contact></ScrollReveal>
        </div>
    );
};

export default ContactPage;