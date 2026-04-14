import BlogDetails from "@/components/BlogDetails/BlogDetails";
import BreadCumb from "@/components/Common/BreadCumb";
import { blogDb } from "@/db/blog";

const BlogDetailsPage = () => {
    return (
        <div>
             <BreadCumb
                bgimg="/assets/img/page-heading-bg.svg"
                Title="Blog Details"
            ></BreadCumb>      
            <BlogDetails data={blogDb[0]}></BlogDetails>         
        </div>
    );
};

export default BlogDetailsPage;