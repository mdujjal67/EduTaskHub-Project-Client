import PropTypes from "prop-types"
import { Zoom } from "react-awesome-reveal";

const AssignmentCard = ({ assignment }) => {

    const { title, description, imageURL, level, marks } = assignment || {}
    return (
        <div className="flex gap-3 p-7">
            <div className="relative">
                <img src={imageURL} alt="" className="max-w-40 h-[160px] rounded-lg" />
                <p className="text-[12px] mt-1 absolute -top-2 -left-6  items-center "><span className={level === 'easy' ? 'text-white bg-green-500 px-2 py-[2px] rounded-2xl' : level === 'medium' ? 'bg-orange-500 text-white px-2 py-[2px] rounded-2xl' : 'bg-red-500 px-2 py-[2px] text-white rounded-2xl'}>{level}</span></p>
            </div>
            <div>
                <h1 className="text-xl font-bold -mt-1">{title}</h1>
                <p className="mt-1"><span className=""></span> {description}</p>

                <div className="flex justify-between items-center pt-1 pb-3">
                    <p><span className="font-bold">Marks:</span> {marks}</p>
                    <div className="flex  justify-end items-center">
                        <button className="py-1 px-4 rounded-full transition duration-300 ease-in-out transform hover:bg-gray-200 hover:text-gray-700 text-[12px] bg-red-500 text-white outline-none">Delete</button>
                        <button className="py-1 px-4 rounded-full text-[12px] hover:bg-gray-200 hover:text-gray-700 transition duration-300 ease-in-out transform mx-2 bg-green-500  text-white outline-none">Update</button>
                    </div>
                </div>

                <div>
                    <Zoom>
                        <button className="transition duration-300 ease-in-out transform  py-2 rounded-lg hover:bg-gray-200 hover:text-gray-600 border-none outline-none bg-[#00396a] w-full text-white">View Details</button>
                    </Zoom>
                </div>
            </div>
        </div>
    );
};
AssignmentCard.propTypes = {
    assignment: PropTypes.object,
};
export default AssignmentCard;