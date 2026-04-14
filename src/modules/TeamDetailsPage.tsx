import BreadCumb from "@/components/Common/BreadCumb";
import TeamDetails from "@/components/TeamDetails/TeamDetails";
import { teamDb } from "@/db/team";

const TeamDetailsPage = () => {
    return (
        <div>
            <BreadCumb
                bgimg="/assets/img/page-heading-bg.svg"
                Title="Team Details"
            ></BreadCumb>    
            <TeamDetails data={teamDb[0]}></TeamDetails>           
        </div>
    );
};

export default TeamDetailsPage;