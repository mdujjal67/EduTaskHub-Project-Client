import { useLoaderData } from "react-router-dom";
import AssignmentCard from "../Components/AssignmentCard";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const Assignments = () => {

    // dynamic title
    useEffect((() => {
        document.title = "EduTaskHub | Assignments"
    }), [])

    const { user, loading } = useContext(AuthContext);
    const initialAssignments = useLoaderData();
    const [assignments, setAssignments] = useState(initialAssignments);
    const [selectedLevel, setSelectedLevel] = useState("");

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <span>
                    <div className="flex flex-col gap-4 w-80">
                        <div className="skeleton h-32 w-full"></div>
                        <div className="skeleton h-4 w-28"></div>
                        <div className="skeleton h-4 w-full"></div>
                        <div className="skeleton h-4 w-full"></div>
                    </div>
                </span>
            </div>
        );
    }

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })
            .then(result => {
                if (result.isConfirmed) {
                    fetch(`${import.meta.env.VITE_API_URL}/createdAssignments/${id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount > 0) {
                                Swal.fire({
                                    title: 'Success!',
                                    text: 'Your assignment has been deleted!',
                                    icon: 'success',
                                    confirmButtonText: 'Cool'
                                });
                                setAssignments(prevAssignments => prevAssignments.filter(assignment => assignment._id !== id));
                            }
                        });
                }
            });
    };

    const filteredAssignments = selectedLevel
        ? assignments.filter(assignment => assignment.level === selectedLevel)
        : assignments;

    return (
        <div>
            <div className="input-bordered cursor-pointer required text-black w-[200px] lg:w-[300px] mx-auto outline-none focus:outline-none focus:ring focus:ring-opacity-50 focus:dark:ring-violet-600 rounded-full lg:mt-10 lg:mb-14">
                <select
                    name="level"
                    className="select rounded-full join-item text-black w-full outline-none focus:outline-none focus:ring focus:ring-opacity-50 py-3 focus:dark:ring-violet-600 bg-gray-200"
                    value={selectedLevel}
                    onChange={(e) => setSelectedLevel(e.target.value)}
                    required
                >
                    <option value="">Filter by Difficulty Level</option>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>
            </div>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-7 mb-20 lg:mb-0">
                {filteredAssignments.map(assignment => (
                    <AssignmentCard key={assignment._id} assignment={assignment} user={user} onDelete={handleDelete} />
                ))}
            </div>
        </div>
    );
};

export default Assignments;
