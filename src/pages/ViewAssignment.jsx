import { Zoom } from "react-awesome-reveal";
import { Link, useLoaderData } from "react-router-dom";
import 'animate.css';
import { AuthContext } from "../Provider/AuthProvider";
import { useContext, useEffect } from "react";

const ViewAssignment = () => {


    // dynamic title
    useEffect((() => {
        document.title = "EduTaskHub | View-Assignment"
    }), [])

    const assignmentDetails = useLoaderData()
    const {_id, title, imageURL, description, date, marks, level } = assignmentDetails;

    const {loading} = useContext(AuthContext);
    if(loading){
        return <div className="flex justify-center items-center h-screen">
            <span>
                <div className="flex flex-col gap-4 w-80">
                <div className="skeleton h-32 w-full"></div>
                <div className="skeleton h-4 w-28"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
                </div>
        </span>
      </div>
    }



    return (
        <div className="mx-auto p-4 lg:p-0 lg:w-[500px]">
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
                    <button className="transition duration-300 ease-in-out transform mb-10 lg:mb-0 py-2 rounded-lg hover:bg-gray-200 hover:text-gray-600 border-none outline-none bg-[#00396a] w-full text-white">Take Assignment</button>
                </Zoom>
            </Link>
        </div>
    );
};

export default ViewAssignment;