import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import toast from "react-hot-toast";

const TakeAssignment = () => {

    const { user } = useContext(AuthContext)
    const assignmentDetails = useLoaderData()
    const { title, imageURL, description, date, marks, level } = assignmentDetails
    
    const handleTakeAssignment = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = user?.email;
        const link = form.link.value;
        const note = form.note.value;
        const status = "pending";

        const SubmittedDetails = {email, link, note, status, title, imageURL, marks, description, date, level }
        // console.log(SubmittedDetails);


        fetch(`${import.meta.env.VITE_API_URL}/submittedAssignments`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(SubmittedDetails)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    toast.success('Assignment Submitted Successfully!');
                    form.reset()
                }
    
            })

    }

    



    return (
        <div className="bg-gray-100 py-[70px]">
            <h1 className="font-bold text-3xl text-center pt-8">Submit Your Assignment</h1>
            <form onSubmit={handleTakeAssignment} className="card-body  lg:p-16 ">
                <div className="form-control">
                    <input type="text" name="link" placeholder="Your pdf/doc link" className="input rounded-full mx-auto w-full lg:w-[600px] mb-5" required />
                </div>
                <div className="form-control ">
                    <textarea placeholder="Your quick note " name="note" className="textarea textarea-md h-12 rounded-full w-full lg:w-[600px] mx-auto text-[16px]" required></textarea>
                </div>
                <div className="form-control pt-5">
                    <input type="submit" className="btn border-none w-full lg:w-[600px] mx-auto bg-[#00396a] text-white hover:text-gray-700 rounded-full outline-none" value="Create Assignment" />
                </div>
            </form>
        </div>
    );
};

export default TakeAssignment;