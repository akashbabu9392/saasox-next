import Blog5 from "@/components/Blog/Blog5";
import BreadCumb from "@/components/Common/BreadCumb";
import ScrollReveal from "@/components/Common/ScrollReveal";

const BlogPage = () => {
    return (
        <div>
              <BreadCumb
                bgimg="/assets/img/page-heading-bg.svg"
                Title="Resources"
            ></BreadCumb>
            <ScrollReveal><Blog5></Blog5></ScrollReveal>
        </div>
    );
};

export default BlogPage;