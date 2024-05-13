import { Zoom } from "react-awesome-reveal";
import { Link, useLoaderData } from "react-router-dom";
import 'animate.css';

const ViewAssignment = () => {

    const assignmentDetails = useLoaderData()
    const {_id, title, imageURL, description, date, marks, level } = assignmentDetails



    return (
        <div className="mx-auto w-[500px]">
            <div className="animate__animated animate__fadeInLeft">
                <img src={imageURL} alt="" className="w- lg:w-[500px] rounded-lg" />
            </div>
            <div className="animate__animated animate__fadeInRight">
                <h1 className="py-3"><span className="font-bold">Title:</span> {title}</h1>
                <p><span className="font-bold">Description:</span> {description}</p>
                <p className="py-3"><span className="font-bold">Due Date:</span> {date}</p>
                <p><span className="font-bold">marks:</span> {marks}</p>
                <p className="py-3"><span className="font-bold">Level:</span> <span className={level === 'easy' ? 'text-green-500  px-2 py-[2px] rounded-2xl font-semibold' : level === 'medium' ? ' text-orange-500 px-2 py-[2px] rounded-2xl font-semibold' : ' px-2 py-[2px] text-red-500 rounded-2xl font-semibold'}>{level}</span></p>
            </div>
            <Link to={`/take-assignment/${_id}`}>
                <Zoom>
                    <button className="transition duration-300 ease-in-out transform  py-2 rounded-lg hover:bg-gray-200 hover:text-gray-600 border-none outline-none bg-[#00396a] w-full text-white">Take Assignment</button>
                </Zoom>
            </Link>
        </div>
    );
};

export default ViewAssignment;