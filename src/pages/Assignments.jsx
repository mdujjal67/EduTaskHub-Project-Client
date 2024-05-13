import { useLoaderData } from "react-router-dom";
import AssignmentCard from "../Components/AssignmentCard";
import { useState } from "react";

const Assignments = () => {
    const assignments = useLoaderData();
    const [selectedLevel, setSelectedLevel] = useState("");

    // Filter assignments based on selected level
    const filteredAssignments = selectedLevel ? assignments.filter(assignment => assignment.level === selectedLevel) : assignments;

    return (
        <div>
            <div className="input-bordered cursor-pointer required text-black w-[200px] lg:w-[300px] mx-auto outline-none focus:outline-none focus:ring focus:ring-opacity-50 focus:dark:ring-violet-600 rounded-full lg:mt-10 lg:mb-14">
                <select 
                    name="level"
                    className="select rounded-full join-item text-black w-full outline-none focus:outline-none focus:ring focus:ring-opacity-50 py-3 focus:dark:ring-violet-600 bg-gray-100"
                    value={selectedLevel}
                    onChange={(e) => setSelectedLevel(e.target.value)}
                    required // Ensures that the select element is required
                >
                    <option className="" value="">Filter by Difficulty Level</option>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>
            </div>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-7 mb-20 lg:mb-0">
                {filteredAssignments.map((assignment) => (
                    <AssignmentCard key={assignment.id} assignment={assignment} />
                ))}
            </div>
        </div>
    );
};

export default Assignments;
