// import { Link } from 'react-router-dom';
import { Link } from "react-router-dom";
import img from "../assets/error-404.png"
const NotFoundPage = () => {
    return (
        <div className='mb-[40px]'>


            <section className="bg-white ">
                <div className="container items-center min-h-screen pb-8 mx-auto">
                    <img className='mx-auto lg:w-[400px] w-[300px]' src={img} alt="" />
                    <div className="flex flex-col items-center max-w-sm mx-auto text-center">
                        <p className="mt-4 text-gray-500">The page you are looking for doesn't exist. Here are some helpful links:</p>

                        <div className="flex items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto">
                            <Link to="/">
                            <button className="flex items-center justify-center w-1/2 px-5 py-2 text-sm transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto  dark:bg-gray-900 hover:bg-gray-100 hover:text-black text-gray-200 dark:border-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 rtl:rotate-180">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                                </svg>
                                <span className="hover:text-black">Go back</span>
                            </button>
                            </Link>

                            <Link to="/">
                            <button className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 rounded-lg shrink-0 sm:w-auto hover:text-[#00396a] hover:bg-gray-200 bg-[#00396a]">Take me home
                            </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default NotFoundPage;
