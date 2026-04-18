import BlogDetails from "@/components/BlogDetails/BlogDetails";
import BreadCumb from "@/components/Common/BreadCumb";
import ScrollReveal from "@/components/Common/ScrollReveal";
import { blogDb } from "@/db/blog";

const BlogDetailsPage = () => {
    return (
        <div>
             <BreadCumb
                bgimg="/assets/img/page-heading-bg.svg"
                Title="Blog Details"
            ></BreadCumb>
            <ScrollReveal><BlogDetails data={blogDb[0]}></BlogDetails></ScrollReveal>
        </div>
    );
};

export default BlogDetailsPage;