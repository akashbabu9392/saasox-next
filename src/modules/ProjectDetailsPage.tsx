import BreadCumb from "@/components/Common/BreadCumb";
import ProjectDetails from "@/components/ProjectDetails/ProjectDetails";
import { projectDetailsDb } from "@/db/projects";

const ProjectDetailsPage = () => {
    return (
        <div>
            <BreadCumb
                bgimg="/assets/img/page-heading-bg.svg"
                Title="Project Details"
            ></BreadCumb>         
            <ProjectDetails data={projectDetailsDb[0]}></ProjectDetails>     
        </div>
    );
};

export default ProjectDetailsPage;