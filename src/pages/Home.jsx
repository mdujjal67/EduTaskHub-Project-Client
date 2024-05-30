import { useEffect } from "react";
import Banner from "../Components/Banner";
import Faq from "../Components/Faq";
import FeaturesSection from "../Components/FeaturesSection";
import PropTypes from "prop-types"
import { useLoaderData } from "react-router-dom";


const Home = () => {
    
    const featuresData = useLoaderData()

    // dynamic title
    useEffect((() => {
        document.title = "EduTaskHub | Home"
    }), [])

    return (
        <div className="">
            <Banner></Banner>
            <FeaturesSection featuresData={featuresData} />
            <Faq></Faq>
        </div>
    );
};
Home.propTypes = {
    featuresData: PropTypes.object
};
export default Home;