// import { useLoaderData } from "react-router-dom";
import SubmissionCard from "../Components/SubmissionCard";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import { useLoaderData } from "react-router-dom";

const MySubmission = () => {
    const { user, loading } = useContext(AuthContext);
    const [submissions, setSubmissions] = useState([]);
    const MySubmission = useLoaderData()
    console.log(MySubmission)


    const url = user ? `http://localhost:5000/booking?email=${user.email}` : '';


        useEffect(() => {
            if (!user) return; // Guard clause if user is not available
            // we can also fetch data using axios, here we don't need to convert data to the json format
            axios.get(url, {withCredentials:true})
            .then(res => {
                setSubmissions(res.data)
            })

    }, [url]);

    if (loading) {
        return (
            <div>Loading...</div>
        );
    }

    return (
        <div>
            <h2>My Submissions</h2>
            <h2>{submissions.length}</h2>
            {submissions.map(submission => (
                <SubmissionCard key={submission.id} submission={submission} />
            ))}
        </div>
    );
};

export default MySubmission;
