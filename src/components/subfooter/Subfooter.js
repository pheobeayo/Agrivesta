import React from "react";
import Subscriber from "../subscribe/Subscribe";



const Subfooter = () => {
    return (
        <div className="bg-[#479821]">
            <div className="container mx-auto sm:px-[80px] pb-[100px] mt-16">
                
                    <div>
                        <h2 className="text-white text-xl sm:text-3xl font-bold leading-10 mt-4">
                        SUBSCRIBE TO OUR NEWSLETTER 
                        </h2>
                        

                        <Subscriber />
                    </div>
                    
                    
                
            </div>
        </div>



    )
}

export default Subfooter;  