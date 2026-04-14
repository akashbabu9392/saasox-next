import BreadCumb from "@/components/Common/BreadCumb";
import Project1 from "@/components/Project/Project1";

const ProjectPage = () => {
    return (
        <div>
            <BreadCumb
                bgimg="/assets/img/page-heading-bg.svg"
                Title="Our Projects"
            ></BreadCumb>     
            <Project1></Project1>         
        </div>
    );
};

export default ProjectPage;