import { Outlet } from "react-router-dom";
import NavBar from "../Components/Navbar";
import Footer from "../pages/Footer";



const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;