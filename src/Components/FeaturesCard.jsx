import PropTypes from "prop-types"


const FeaturesCard = ({ feature }) => {
    return (

        <div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
                <img src={feature.img} alt={feature.title} className="w-full h-[200px] object-cover mb-4 hover:scale-105 transition duration-300 ease-in-out transform rounded-lg" />
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-gray-600 py-5">{feature.description}</p>
                <button className="btn border-none outline-none bg-[#00396a] w-full text-white">Explore More</button>
            </div>
        </div>
    );
};
FeaturesCard.propTypes = {
    feature: PropTypes.object
};
export default FeaturesCard;