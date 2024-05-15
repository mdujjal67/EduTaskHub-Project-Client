import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";

const GiveMark = () => {

    const submittedAssignment = useLoaderData();

    const {marks, link, note, _id} = submittedAssignment;
    const navigate = useNavigate()

    const handleGiveMarks = event => {
        event.preventDefault();
        const form = event.target;
        // const email = user?.email;
        const obtainMarks = form.obtainMarks.value;
        const feedback = form.feedback.value;
        const status = "marked";
        const submitGiveMarks = {obtainMarks,feedback, status};
        console.log(submitGiveMarks);


        fetch(`${import.meta.env.VITE_API_URL}/submittedAssignments/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(submitGiveMarks)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    toast.success('Marks given!');
                    form.reset();
                navigate('/pending-assignment');
                    

                }
    
            })



    }


    return (
        <div className="py-10">
           <div className="mx-auto w-400px">
            <h2 className="text-center text-2xl font-bold mb-10">Assignment Preview</h2>
           <iframe src={link} width="350px" height="400px" style={{ margin: "auto", display: "block" }}></iframe>
           <p className="mt-5 text-center"><span className="font-semibold ">Examinee Notes:</span> {note}</p>

           <form onSubmit={handleGiveMarks} className="card-body  lg:p-16 ">
                <div className="form-control">
                    <input type="text" name="obtainMarks" placeholder="Give Marks" className="input rounded-full mx-auto w-full lg:w-[600px] mb-5 bg-gray-200" required />
                </div>
                <div className="form-control ">
                    <textarea placeholder="Give Your Feedback " name="feedback" className="textarea textarea-md h-12 rounded-full w-full lg:w-[600px] mx-auto text-[16px] bg-gray-200" required></textarea>
                </div>
                <div className="form-control pt-5">
                    <input type="submit" className="btn border-none w-full lg:w-[600px] mx-auto bg-[#00396a] text-white hover:text-gray-700 rounded-full outline-none" value="Submit" />
                </div>
            </form>
           </div>

        </div>
    );
};

export default GiveMark;