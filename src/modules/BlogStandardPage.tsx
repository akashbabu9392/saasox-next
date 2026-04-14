import Blog4 from "@/components/Blog/Blog4";
import BreadCumb from "@/components/Common/BreadCumb";

const BlogStandardPage = () => {
    return (
        <div>
             <BreadCumb
                bgimg="/assets/img/page-heading-bg.svg"
                Title="Blog Standard"
            ></BreadCumb>     
            <Blog4></Blog4>       
        </div>
    );
};

export default BlogStandardPage;