import PropTypes from "prop-types";
// import { useContext } from "react";
import { Zoom } from "react-awesome-reveal";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
// import { AuthContext } from "../Provider/AuthProvider";

const AssignmentCard = ({ assignment, user, onDelete }) => {
    const { _id, title, description, imageURL, level, marks, email } = assignment || {};

    const handleDelete = id => {
        if (email !== user?.email) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "You don't have permission to delete this assignment!",
            });
            return;
        }
        onDelete(id);
    };

    return (
        <div className="flex flex-col md:flex-row gap-4 p-7 shadow-xl rounded-lg">
            <div className="relative">
                <img src={imageURL} alt="" className="md:max-w-[170px] md:h-[165px] rounded-lg" />
                <p className="md:text-[12px] mt-1 absolute -top-2 -left-6 items-center">
                    <span className={level === 'easy' ? 'text-white bg-green-500 px-2 py-[2px] rounded-2xl' : level === 'medium' ? 'bg-orange-500 text-white px-2 py-[2px] rounded-2xl' : 'bg-red-500 px-2 py-[2px] text-white rounded-2xl'}>
                        {level}
                    </span>
                </p>
            </div>
            <div>
                <h1 className="text-xl font-bold -mt-1">{title}</h1>
                <p className="mt-1">{description.substring(0, 90)}...</p>
                <div className="flex justify-between items-center pt-3 pb-3">
                    <p><span className="font-bold">Marks:</span> {marks}</p>
                    <div className="flex gap-1 justify-end items-center">
                        <button onClick={() => handleDelete(_id)} className="py-1 px-4 rounded-full transition duration-300 ease-in-out transform hover:bg-gray-200 hover:text-gray-700 text-[12px] bg-red-500 text-white outline-none">Delete</button>
                        <Link to={`/update-assignment/${_id}`}>
                            <button className="py-1 px-4 rounded-full text-[12px] hover:bg-gray-200 hover:text-gray-700 transition duration-300 ease-in-out transform mx-2 bg-green-500 text-white outline-none">Update</button>
                        </Link>
                    </div>
                </div>
                <div className="mt-4 lg:mt-0">
                    <Link to={`/view-assignment/${_id}`}>
                        <Zoom>
                            <button className="transition duration-300 ease-in-out transform py-2 rounded-lg hover:bg-gray-200 hover:text-gray-600 border-none outline-none bg-[#00396a] w-full text-white">View Details</button>
                        </Zoom>
                    </Link>
                </div>
            </div>
        </div>
    );
};

AssignmentCard.propTypes = {
    assignment: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default AssignmentCard;
