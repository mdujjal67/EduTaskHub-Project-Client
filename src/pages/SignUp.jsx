import { Link, Navigate } from "react-router-dom";
import { IoLogoGithub } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
// import { useForm } from "react-hook-form";
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { AuthContext } from "../Provider/AuthProvider";
import loginImg from "../assets/login.png"
import { MdOutlineDriveFileRenameOutline, MdOutlineEmail, MdPassword } from "react-icons/md";
import { IoLinkSharp } from "react-icons/io5";


const Register = () => {

    const [showPassword, setShowPassword] = useState(false)

    const [registerError, setRegisterError] = useState('')

    const { createUser, googleLogin, gitHubLogin } = useContext(AuthContext);

    // const {register, handleSubmit, formState: { errors }, reset} = useForm()

    const handleSignUp = (event) => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        const userInfo = { name, email, password }
        console.log(userInfo);

        // reset error
        setRegisterError('')

        // password validation
        if (!/(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(password)) {
            setRegisterError('Password must be at least 6 characters long and contain at least one uppercase letter and one lowercase letter');
            toast.error('Please provide valid password!');
            return;
            
        }

        createUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                toast.success('User Registered Successfully!');
                form.reset();
                Navigate('/login')

            })
            .catch((error) => {
                console.log(error)
                return toast.error('Please try again!');
            });

    }

    // dynamic title
    useEffect((() => {
        document.title = "EduTaskHub | Register"
    }), [])

    //   for google login
    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                console.log(result.user)
            })
    }


    //   for github login
    const handleGitHubLogin = () => {
        gitHubLogin()
            .then(result => {
                console.log(result.user)
            });
    }



    return (
        <div>
            <div className="hero min-h-screen bg-gray-50 container mb-[80px] mx-auto py-10">
                <div className="hero-content flex-col lg:flex-row flex gap-10 lg:gap-20">
                    <div className="lg:w-1/2">
                        <img src={loginImg} alt="" className="lg:w-[400px] lg:mr-10" />
                    </div>
                    <div className="card lg:w-1/2 shrink-0 max-w-sm shadow-2xl bg-base-100">
                        <h2 className="text-2xl font-bold text-center pt-5">Sign Up</h2>
                        <form onSubmit={handleSignUp} className="card-body ">

                            {/* this is for Name field */}
                            <div className="form-control -mt-1 relative">
                                <input type="text" name="name" placeholder="Name" className="input input-bordered border-[#00396a] -mt-1 rounded-full pl-10" required/>
                                <MdOutlineDriveFileRenameOutline className="absolute left-4 top-3 text-gray-500"/>
                            </div>

                            {/* This is for Email field */}
                            <div className="form-control mt-3 relative">
                                <input type="email" name="email" placeholder="Email" className="input input-bordered border-[#00396a] -mt-1 rounded-full  pl-10" required/>
                                <MdOutlineEmail className="absolute left-4 top-3 text-gray-500"/>
                            </div>

                            {/* This is for Photo URL field*/}
                            <div className="form-control my-3 relative">
                                <input type="text" name="text" placeholder="Photo url" className="input input-bordered border-[#00396a] -mt-1 rounded-full pl-10"></input>
                                <IoLinkSharp className="absolute left-4 top-3 text-gray-500"/>
                            </div>

                            {/* This is for Password field*/}
                            <div className="form-control">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    placeholder="Password"
                                    className="input input-bordered border-[#00396a] -mt-1 rounded-full relative pl-10" required/>
                                    <MdPassword className="absolute left-12 top-[53%] text-gray-500"/>
                                <a className="relative" href="#">
                                    <span className="absolute right-4 -top-8" onClick={() => setShowPassword(!showPassword)}>
                                        {showPassword ? <FaEye /> : <FaEyeSlash />}
                                    </span>
                                </a>
                                {/* password validation and error show */}
                                <div>
                                    {
                                        registerError && <p className="text-[12px] text-red-500">{registerError}</p>
                                    }
                                </div>
                                <label className="">
                                    <p className="text-[14px] w-[220px] text-[#00000082] mx-auto mt-2">Already have an account? <Link to='/login' className="hover:link font-semibold text-[14px] text-[#00396a]">Login</Link>
                                    </p>
                                </label>
                            </div>
                            <div className="form-control mt-3">
                                <button className="btn border-none rounded-full bg-[#00396a] hover:bg-gray-400 text-white">Sign Up</button>
                            </div>
                        </form>

                        {/* This is for social login buttons */}
                        <div className="flex items-center -mt-3">
                            <hr className="w-full ml-8" />
                            <p className="px-4 text-[#00000082]">Or</p>
                            <hr className="w-full mr-8" />
                        </div>
                        <div className="form-control mt-3 px-8 flex flex-row gap-5 mx-auto items-center pb-10">
                            <button onClick={handleGitHubLogin} className="bg-gray-100 hover:bg-gray-200 w-8 h-8 items-center mx-auto rounded-full">
                                <IoLogoGithub className="text-black text-[20px]  mx-auto items-center" />
                            </button>
                            <button onClick={handleGoogleLogin} className="bg-gray-100 hover:bg-gray-200 w-8 h-8 items-center mx-auto rounded-full">
                                <FcGoogle className="text-black text-[20px]  mx-auto items-center" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;