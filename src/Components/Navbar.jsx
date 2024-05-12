import { Link } from "react-router-dom";
import logo from "../../src/assets/logo.png"
import { IoSearch } from "react-icons/io5";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";



const NavBar = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success('Log Out Successful!');
            })
            .catch(error => console.log(error))
    }
    const navItems = <>
        <li ><Link className="hover:bg-[#00396a] hover:text-white" to="/">Home</Link></li>
        <li><Link className="hover:bg-[#00396a] hover:text-white ml-2" to="/create-assignment">Create Assignment</Link></li>
        {/* <li><Link className="hover:bg-[#00396a] hover:text-white" to="/services">My Assignment</Link></li> */}
        <li><Link className="hover:bg-[#00396a] hover:text-white mx-2" to="/assignment">Assignment</Link></li>
        <li><Link className="hover:bg-[#00396a] hover:text-white" to="/pending-assignment">Pending Assignment</Link></li>
        {
            user?.email && (
                <li><Link to="/bookingList">My Bookings</Link></li>
            )
        }
    </>
    return (
        <div>
            <div className="navbar bg-base-100 pb-12">
                <div className="navbar-start">
                    <div className="dropdown block lg:hidden">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <Link to="/"><img src={logo} alt="logo-image" className="w-[70px] lg:w-44 ml-4 lg:ml-0" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    {user && (
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img referrerPolicy="no-referrer" src={user?.photoURL || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} alt="" className="bg-gray-100"/>
                            </div>
                        </label>
                    )}
                       <div className="md:block hidden">
                            {
                                user?.email ? <button className="menu px-2 lg:mr-5 lg:ml-5 bg-[#ff3811] rounded-lg text-white hover:bg-gray-200 hover:text-gray-700" onClick={handleLogOut}>Log Out</button> : <div className="flex">
                                    <button className="menu px-2 lg:mr-6 bg-[#00396a] rounded-lg text-white hover:bg-gray-200 hover:text-gray-700"><Link to="/login">Login</Link></button>

                                    <button className="menu px-2 lg:mr-6 bg-[#00396a] rounded-lg text-white hover:bg-gray-200 hover:text-gray-700"><Link to="/signUp">Sign Up</Link></button>
                                </div>
                            }
                        </div> 
                    <button><IoSearch className="text-xl mx-5 hover:text-[#00396a]" /></button>

                    <div className="md:hidden block flex-wrap ml-4">
                       {
                            user?.email ? <button className="menu px-2 lg:mr-5 lg:ml-5 bg-[#ff3811] rounded-lg text-white hover:bg-gray-200 hover:text-gray-700" onClick={handleLogOut}>Log Out</button> : <button className="menu px-2 lg:mr-10 bg-[#00396a] rounded-lg text-white hover:bg-gray-200 hover:text-gray-700"><Link to="/login">Login</Link></button>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;