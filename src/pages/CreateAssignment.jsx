// import { useLoaderData } from "react-router-dom";
import { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../Provider/AuthProvider";
import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const CreateAssignment = () => {

    const [selectedLevel, setSelectedLevel] = useState("");
    const [submitted, setSubmitted] = useState(false);

    // const assignment = useLoaderData();
    const [startDate, setStartDate] = useState(new Date());
    const {user} = useContext(AuthContext)
    // const { title } = assignment

    const handleCreate = (event) => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const marks = form.marks.value;
        const imageURL = form.imageURL.value;
        const level = form.level.value;
        const email = user?.email;
        const date = form.date.value;
        const description = form.textarea.value;
        const assignmentInfo = { title, imageURL, marks, description, date, level, email }
        console.log(assignmentInfo);

        if (selectedLevel === "") {
            setSubmitted(true);
            return;
        }
        // Proceed with form submission
        setSubmitted(false); // Reset submitted state

        fetch(`${import.meta.env.VITE_API_URL}/createdAssignments`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(assignmentInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    toast.success('Assignment Created Successfully!');
                    form.reset()
                }

            })
    }

    return (
        <div>
            <form onSubmit={handleCreate} className="card-body bg-gray-100 lg:p-[100px]">
                <h2 className="text-2xl font-bold text-center">Create Your Assignment</h2>
                <p className="text-center text-[14px] text-gray-400 mb-12 -mt-1">User: {user?.email}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                    <div className="form-control">
                        <input type="text" name="title" placeholder="Assignment Title" className="input rounded-full" required />
                    </div>
                    {/* <div className="form-control">
                        <input type="date" name="date" placeholder="Date"  className="input" required />
                    </div> */}
                    <DatePicker name="date" className="text-gray-500 w-full py-3 rounded-full pl-5" selected={startDate} onChange={(date) => setStartDate(date)} required />
                    <div className="form-control">
                        <input type="text" name="marks" placeholder="Assignment Marks" className="input rounded-full" required />
                    </div>

                    <div className="input-bordered required text-black lg:w-full focus:outline-none focus:ring focus:ring-opacity-50 focus:dark:ring-violet-600 rounded-full">
                        <select
                            name="level"
                            className="select rounded-full join-item text-black w-full focus:outline-none focus:ring focus:ring-opacity-50 py-3 focus:dark:ring-violet-600"
                            value={selectedLevel}
                            onChange={(e) => setSelectedLevel(e.target.value)}
                            required // Ensures that the select element is required
                        >
                            <option value="" disabled>Select Difficulty Level</option>
                            <option value="easy" className="text-[18px] py-1 text-gray-400">Easy</option>
                            <option value="medium" className="text-[18px] py-1 text-gray-400">Medium</option>
                            <option value="hard" className="text-[18px] py-1 text-gray-400">Hard</option>
                        </select>
                        {submitted && selectedLevel === "" && (
                            <span className="text-red-500">Please select a difficulty level.</span>
                        )}
                    </div>

                    <div className="form-control ">
                        <textarea placeholder="Description" name="textarea" className="textarea textarea-md h-12 rounded-full" required></textarea>
                    </div>
                    <div className="form-control">
                        <input type="text" name="imageURL" placeholder="Thumbnail Image URL" className="input rounded-full" />
                    </div>
                </div>


                <div className="form-control pt-5">
                    <input type="submit" className="btn btn-block bg-[#00396a] text-white hover:text-gray-700 rounded-full" value="Create Assignment" />
                </div>
            </form>
        </div>
    );
};

export default CreateAssignment;