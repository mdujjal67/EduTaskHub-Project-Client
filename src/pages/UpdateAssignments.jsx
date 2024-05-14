// import { useLoaderData } from "react-router-dom";
import { useContext, useEffect } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../Provider/AuthProvider";
import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useLoaderData, useNavigate } from "react-router-dom";
import '../../src/App.css'

const UpdateAssignment = () => {

    // dynamic title
    useEffect((() => {
        document.title = "EduTaskHub | Update-Assignment"
    }), [])


    const navigate = useNavigate()
    const loadedAssignments = useLoaderData();
    const {_id, title, marks, description, imageURL, date} = loadedAssignments;

    const defaultDate = date

    // const [selectedLevel, setSelectedLevel] = useState("");
    // const [submitted, setSubmitted] = useState(false);

    // const assignment = useLoaderData();
    const [startDate, setStartDate] = useState(new Date());
    const {user} = useContext(AuthContext)
    // const { title } = assignment

    const handleUpdate = (event) => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const marks = parseInt(form.marks.value);
        const imageURL = form.imageURL.value;
        const level = form.level.value;
        const email = user?.email;
        // console.log(email)
        const date = form.date.value;
        const description = form.textarea.value;
        const assignmentInfo = { title, imageURL, marks, description, date, level, email }
        // console.log(assignmentInfo);

        fetch(`${import.meta.env.VITE_API_URL}/createdAssignments/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(assignmentInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    toast.success('Assignment Updated Successfully!');
                    form.reset();
                    navigate('/assignment')
                }

            })
    }

    return (
        <div>
            <form onSubmit={handleUpdate} className="card-body bg-gray-100 lg:p-[100px]">
                <div className="flex gap-2 mx-auto items-center">
                    <img src={imageURL} alt="" className="w-16 rounded-xl"/>
                    <h2 className="text-2xl font-bold text-center">Update This Assignment</h2>
                </div>
                <p className="text-center text-[12px] text-gray-400 mb-12 ml-14 -mt-3 gray-on-dark-mode">User: {user?.email}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                    <div className="form-control">
                        <input type="text" name="title" defaultValue={title} placeholder="Assignment Title" className="input rounded-full" />
                    </div>
                    {/* <div className="form-control">
                        <input type="date" name="date" placeholder="Date"  className="input" required />
                    </div> */}
                    <DatePicker defaultDate={defaultDate} name="date" className="text-gray-500 dark:text-gray-400 w-full py-3 rounded-full pl-5" selected={startDate} onChange={(date) => setStartDate(date)} />
                    <div className="form-control">
                        <input type="text" name="marks" defaultValue={marks} placeholder="Assignment Marks" className="input rounded-full" />
                    </div>

                    <div className="input-bordered required text-black dark:text-gray-400 lg:w-full focus:outline-none focus:ring focus:ring-opacity-50 focus:dark:ring-violet-600 rounded-full">
                        <select
                            name="level"
                            className="select rounded-full join-item text-black dark:text-gray-400 w-full focus:outline-none focus:ring focus:ring-opacity-50 py-3 focus:dark:ring-violet-600"
                            // value={selectedLevel}
                            // onChange={(e) => setSelectedLevel(e.target.value)}
                             // Ensures that the select element is required
                        >
                            <option value="" disabled>Select Difficulty Level</option>
                            <option value="easy" className="text-[18px] py-1 text-gray-400">Easy</option>
                            <option value="medium" className="text-[18px] py-1 text-gray-400">Medium</option>
                            <option value="hard" className="text-[18px] py-1 text-gray-400">Hard</option>
                        </select>
                        {/* {submitted && selectedLevel === "" && (
                            <span className="text-red-500">Please select a difficulty level.</span>
                        )} */}
                    </div>

                    <div className="form-control ">
                        <textarea placeholder="Description" defaultValue={description} name="textarea" className="textarea textarea-md h-12 rounded-full"></textarea>
                    </div>
                    <div className="form-control">
                        <input type="text" name="imageURL" defaultValue={imageURL} placeholder="Thumbnail Image URL" className="input rounded-full" />
                    </div>
                </div>


                <div className="form-control pt-5">
                    <input type="submit" className="btn btn-block transition duration-300 ease-in-out transform  py-2 rounded-full text-white hover:bg-gray-200 hover:text-gray-600 border-none outline-none bg-[#00396a]" value="Update Assignment" />
                </div>
            </form>
        </div>
    );
};

export default UpdateAssignment;