import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, useLoaderData } from "react-router-dom";
import noResultGif from "../assets/no_result_found.gif";
import PendingAssignmentCard from "../Components/PendingAssignmentCard";

const PendingAssignment = () => {
    useEffect(() => {
        document.title = "EduTaskHub | PendingAssignment";
    }, []);

    const { user } = useContext(AuthContext);
    const pendingAssignments = useLoaderData();
    console.log(user, pendingAssignments);

    const [openModal, setOpenModal] = useState(false);

    const handleOpenModal = () => {
        setOpenModal(true);
    };

    // Filter pending assignments
    const pendingAssignmentsFiltered = pendingAssignments.filter(
        assignment => assignment.status === "pending"
    );

    return (
        <div>
            <h2 className="mb-4 text-2xl font-semibold leading-tight text-center">Pending Assignments</h2>
            <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
                <div className="overflow-none">
                    <table className="min-w-full text-xs">
                        <colgroup>
                            <col />
                            <col />
                            <col />
                            <col />
                        </colgroup>
                        <thead className="dark:bg-gray-300">
                            <tr className="text-left">
                                <th className="p-2 md:p-3">Assignment Title</th>
                                <th className="p-2 md:p-3">Examinee Name</th>
                                <th className="p-2 md:p-3">Marks</th>
                                <th className="p-2 md:p-3">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pendingAssignmentsFiltered.map(pendingAssignment => (
                                <PendingAssignmentCard key={pendingAssignment.id} pendingAssignment={pendingAssignment} />
                            ))}
                        </tbody>
                    </table>
                    {pendingAssignmentsFiltered.length === 0 && (
                        <div className="text-center mt-10 text-[18px]">
                            <p className="dark:text-gray-500">No pending assignments found</p>
                            <button onClick={handleOpenModal} className="hover:text-blue-600 hover:underline text-[12px] lg:pb-0 pb-5 gray-on-dark-mode">Click here for more information</button>
                        </div>
                    )}
                    {/* Modal Component */}
                    {openModal && (
                        <div className="fixed inset-0 flex items-center justify-center z-50 overflow-hidden bg-black bg-opacity-50">
                            <div className="relative flex flex-col items-center max-w-lg gap-4 p-6 rounded-md shadow-md bg-white dark:bg-gray-50 dark:text-gray-800">
                                <button onClick={() => setOpenModal(false)} className="absolute top-2 right-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                                        <polygon points="427.314 107.313 404.686 84.687 256 233.373 107.314 84.687 84.686 107.313 233.373 256 84.686 404.687 107.314 427.313 256 278.627 404.686 427.313 427.314 404.687 278.627 256 427.314 107.313"></polygon>
                                    </svg>
                                </button>
                                <div>
                                    <img src={noResultGif} alt="" className="lg:w-[350px]" />
                                </div>
                                <h2 className="text-2xl font-semibold leading-tight tracking-wide">You did not submit any assignment yet.</h2>
                                <p className="flex-1 text-center dark:text-gray-600">To submit an assignment go to the <Link to="/assignment"><span className="underline hover:text-blue-500">assignments</span></Link> page then take an assignment.</p>
                                <button onClick={() => setOpenModal(false)} type="button" className="px-6 py-2 hover:bg-gray-200 hover:text-gray-400 font-semibold rounded-full dark:bg-violet-600 dark:text-gray-50">Close</button>
                            </div>
                        </div>
                    )}
                    {/* End Modal Component */}
                </div>
            </div>
        </div>
    );
};

export default PendingAssignment;
