import { Outlet } from "react-router-dom";
import NavBar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Contact from "../Components/Contact";
import { useState } from "react";




const Main = () => {

    const [openModal, setOpenModal] = useState(false);

    const handleToggleModal = () => {
        setOpenModal(!openModal);
        console.log(setOpenModal ,"you clicked me!!!")
    };

    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer handleToggleModal={handleToggleModal} />
            <Contact openModal={openModal} setOpenModal={setOpenModal} />
        </div>
    );
};

export default Main;