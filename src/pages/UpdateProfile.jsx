import { useContext, useEffect, useState } from "react";
import { MdOutlinePassword } from "react-icons/md";
import toast from "react-hot-toast";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import { Zoom } from "react-awesome-reveal";
import userImg from "../assets/user-icon-8.png"

const UpdateProfile = () => {

    useEffect((() => {
        document.title = "EduTaskHub | UpdateProfile"
    }), [])

    const navigate = useNavigate()

    const [updatePassError, setUpdatePassError] = useState('')
    const { user, updateUserProfile } = useContext(AuthContext)
    // State variables for user profile data
    const [displayName, setDisplayName] = useState(user?.displayName || "User!");
    const [photoURL, setPhotoURL] = useState(user?.photoURL || userImg);
    const [password, setPassword] = useState(""); // For new password

    // Update document title
    useEffect(() => {
        document.title = "Haven Vista | Update-Profile";
    }, []);

    // Function to handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await updateUserProfile(displayName, photoURL);
            // Check if password is not empty to update password
            if (password.trim() !== "") {
                if (!/(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(password)) {
                    setUpdatePassError('Password must be at least 6 characters long and contain at least one uppercase letter and one lowercase letter');
                    toast.error('Please provide valid password!');
                    return;

                }
            }
            toast.success('Profile Updated Successfully!');
            navigate('/user-Profile')

        } catch (error) {
            console.error("Error updating profile:", error.message);
            // Handle error and provide feedback to the user if necessary
        }
    };

    return (
        <div className="mb-10 lg:pb-0">
            <h1 className="pt-14 md:pt-20 lg:pt-14 text-center text-2xl">Hi! <span className="text-[#46af36] Montserrat font-bold">{user?.displayName || user?.email.substring(0, 6)}</span></h1>
            <p className="text-center">Update your profile</p>
            <div className="w-24 lg:w-28 lg:h-28 h-24 rounded-full mx-auto mt-10 bg-gray-200">
                <img className="rounded-full w-full" src={user?.photoURL || userImg} alt="user photo" />
            </div>
            <p className="text-center mx-auto mt-2 text-gray-500">{user?.email}</p>
            <form className="w-[320px] mx-auto mt-10" onSubmit={handleSubmit}>
                {/* Name field */}
                <label className="input input-bordered flex items-center gap-2 mx-4 rounded-full">
                    <input type="text" className="grow text-gray-500" value={displayName} onChange={(e) => setDisplayName(e.target.value)} />
                </label>

                {/* photoURL field */}
                <label className="input input-bordered flex items-center gap-2 mx-4 mt-4 rounded-full">
                    <input type="text" className="grow text-gray-500" value={photoURL} onChange={(e) => setPhotoURL(e.target.value)} />
                </label>
                {/* password field */}
                <label className="input input-bordered flex items-center gap-2 mx-4 mt-4 rounded-full">
                    <MdOutlinePassword className="text-gray-600" />
                    <input type="password" className="grow text-gray-500" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="New Password" />
                </label>
                {/* password validation and error show */}
                <div>
                    {
                        updatePassError && <p className="text-[10px] mx-6 w-[290px] mt-1 text-red-500">{updatePassError}</p>
                    }
                </div>
                <Zoom>
                    <button className="btn input-bordered flex items-center gap-2 mx-4 mt-4 rounded-full w-[290px] bg-[#00396a] text-white hover:text-gray-400 ">Save Changes</button>
                </Zoom>
            </form>
        </div>
    );
};

export default UpdateProfile;
