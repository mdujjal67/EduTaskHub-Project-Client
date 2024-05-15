import { useLoaderData } from "react-router-dom";

const GiveMark = () => {

    const submittedAssignment = useLoaderData();

    const {marks, link, note, status} = submittedAssignment


    return (
        <div>
           <iframe src={link} width="100%" height="600px"></iframe>

        </div>
    );
};

export default GiveMark;