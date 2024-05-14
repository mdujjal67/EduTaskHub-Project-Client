import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";
import { useContext, useEffect } from "react";
import axios from "axios";


const Footer = () => {

    const {user} = useContext(AuthContext)

    const url = user ? `${import.meta.env.VITE_API_URL}/subscriber?email=${user.email}` : '';
    useEffect(() => {
        // we can also fetch data using axios, here we don't need to convert data to the json format
        axios.get(url, {withCredentials:true})
        .then(res => res.data)
        
        // If we use fetch then use {credential: 'include'} for sent cookie
        // fetch(url, {credentials: 'include'})
        //     .then(res => res.json())
        //     .then(data => setBookings(data))
    }, [url]);




    const handleSubscribe = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        // console.log(email);
        const subscriber = {email}


        // send data to the server 
        fetch(`${import.meta.env.VITE_API_URL}/subscriber`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(subscriber)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Subscribed!',
                        text: 'You will get updates and newsletters!',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    });
                    form.reset()
                }
            })
    }




    return (
        <footer className="bg-base-200 pt-10 lg:mt-[100px]">
            <div className="footer p-5 text-base-content">
            <nav>
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover">Collaborative Learning</a>
                <a className="link link-hover">Learning Analytics</a>
                <a className="link link-hover">Online Assignment Management</a>
                <a className="link link-hover">Community Engagement</a>
            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
            <form onSubmit={handleSubscribe}>
                <h6 className="footer-title">Newsletter</h6>
                <fieldset className="form-control w-80">
                    <label className="label">
                        <span className="label-text">Enter your email address</span>
                    </label>
                    <div className="join">
                        <input type="email" name="email" placeholder="abc@site.com"  className="input input-bordered outline-none join-item " required />
                        <input type="submit" value="Subscribe" className="btn bg-[#00396a] text-white join-item"/>
                    </div>
                </fieldset>
            </form>
            </div>
            <div className="text-center text-sm text-gray-500 mt-4 pb-10">
                &copy; {new Date().getFullYear()} EduTaskHub. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;