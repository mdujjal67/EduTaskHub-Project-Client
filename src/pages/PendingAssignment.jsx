import development from "../assets/Website Building of Shopping Sale.gif"

const PendingAssignment = () => {
    return (
        <div className="px-4">
            <div>
                <img src={development} alt="" className="w-[300px] -mt-10 lg:w-[400] mx-auto lg:h-[300px]"/>
            </div>
            <h1 className="text-2xl pb-10 text-center">This page is under development...</h1>
        </div>
    );
};

export default PendingAssignment;