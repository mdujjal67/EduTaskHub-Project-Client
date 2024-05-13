import { useLoaderData } from "react-router-dom";
import AssignmentCard from "../Components/AssignmentCard";


const Assignments = () => {
    const assignments = useLoaderData()


    return (
        <div>
            <h1></h1>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
                {
                    assignments.map((assignment) => <AssignmentCard key={assignment.id} assignment={assignment}></AssignmentCard>)
                }
            </div>

        </div>
    );
};

export default Assignments;