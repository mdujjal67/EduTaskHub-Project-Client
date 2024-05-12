// import { useEffect, useRef } from "react";
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BannerContent from "./BannerContent";

const Banner = () => {
    // const carouselRef = useRef(null);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         carouselRef.current.slickNext();
    //     }, 5000); // Change 5000 to the desired interval in milliseconds (e.g., 5000 for 5 seconds)

    //     return () => clearInterval(interval);
    // }, []);

    // const settings = {
    //     dots: false,
    //     arrows: false,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1
    // };
    return (
        <div>
            <div className="carousel w-full mb-[100px]">
                <div id="slide1" className="carousel-item relative w-full h-[500px] object-cover">
                    <img src="https://i.ibb.co/Yjhy7FD/pexels-rdne-8500290.jpg" className="w-full rounded-xl object-cover" />
                    <div className="absolute flex items-center space-y-7 h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] w-full rounded-xl">
                       <BannerContent></BannerContent> 
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide4" className="btn btn-circle mr-5 hover:bg-[#00396a] hover:text-white text-xl hover:border-0">❮</a>
                        <a href="#slide2" className="btn btn-circle hover:bg-[#00396a] hover:text-white text-xl hover:border-0">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full h-[500px] object-cover">
                    <img src="https://i.ibb.co/y6sy5p7/pexels-julia-m-cameron-4143799.jpg" className="w-full rounded-xl object-cover" />
                    <div className="absolute flex items-center space-y-7 h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] w-full rounded-xl">
                       <BannerContent></BannerContent> 
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide1" className="btn btn-circle mr-5 hover:bg-orange-600 hover:text-white text-xl hover:border-0">❮</a>
                        <a href="#slide3" className="btn btn-circle hover:bg-orange-600 hover:text-white text-xl hover:border-0">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full h-[500px] object-cover">
                    <img src="https://i.ibb.co/NjSs6LD/pexels-cottonbro-4778611.jpg" className="w-full rounded-xl object-cover" />
                    <div className="absolute flex items-center space-y-7 h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] w-full rounded-xl">
                       <BannerContent></BannerContent> 
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide2" className="btn btn-circle mr-5 hover:bg-orange-600 hover:text-white text-xl hover:border-0">❮</a>
                        <a href="#slide4" className="btn btn-circle hover:bg-orange-600 hover:text-white text-xl hover:border-0">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full h-[500px] object-cover">
                    <img src="https://i.ibb.co/1M5JtBp/pexels-olly-3807755.jpg" className="w-full rounded-xl object-cover" />
                    <div className="absolute flex items-center space-y-7 h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] w-full rounded-xl">
                       <BannerContent></BannerContent> 
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide3" className="btn btn-circle mr-5 hover:bg-orange-600 hover:text-white text-xl hover:border-0">❮</a>
                        <a href="#slide1" className="btn btn-circle hover:bg-orange-600 hover:text-white text-xl hover:border-0">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;