import React from "react";
import farmer from "../../assets/farmer.svg";
import agriculture from "../../assets/agriculture.svg";
import buy from "../../assets/buy.svg";



const What = () => {
    return (
        <div className="bg-[#F9F7F7]">
            <div
                className="container mx-auto px-8 sm:px-[80px] pb-[100px]">
                <div class=' mb-3 '>
                    <h2 className="text-[#08711F] text-3xl font-bold leading-10 ">
                        WHAT WE  OFFER
                    </h2>
                    <div style={{ borderTop: "2px solid #000" }}></div>
                </div>
                <div className="grid-cols-4 gap-4 md:flex md:flex-row">
                    <div className="content-card w-full md:w-[32%] mb-5 h-full rounded-t-lg border-2 bg-white">

                        <img alt="" src={farmer} className="object-fit-object h-2/3 w-full object-center rounded" />
                        <div className="w-full h-1/2 pb-5 p-2 shadow-md">
                            <h2 className="text-black text-xl font-bold leading-loose">
                                FARMERS FINANCING
                            </h2>

                            <p className=" text-black text-base font-normal leading-relaxed">
                                We finance farmers in Africa who require
                                <br />funding empowering them to carry out 
                                <br />their agricultural activities effectively
                                <br /> while supporting the SDGs goals.
                                
                               
                            </p>

                            <button class="bg-[#F01313] hover:bg-[#08711F] text-white font-semibold py-2 border-[#F01313] border-2 w-28 h-10 rounded">READ MORE </button>
                        </div>

                    </div>

                    <div className="content-card w-full md:w-[32%] mb-5 h-full rounded-t-lg border-2 bg-white">

                        <img alt="" src={agriculture} className="object-fit-object h-2/3 w-full object-center rounded" />
                        <div className="w-full h-1/2 pb-5 p-2 shadow-md">
                            <h2 className="text-black text-xl  font-bold leading-loose">
                                AGRICULTURAL INVESTMENT
                            </h2>

                            <p className=" text-black text-base font-normal leading-relaxed">
                                We provide investors with transparent and
                                <br />accessible investment opportunities in the
                                <br />agricultural sector, allowing for
                                <br />  diversification and impact investing.
                               
                            </p>
                            <button class="bg-[#F01313] hover:bg-[#08711F] text-white font-semibold py-2 border-[#F01313] border-2 w-28 h-10 rounded">READ MORE </button>
                        </div>

                    </div>

                    <div className="content-card w-full md:w-[32%] mb-5 h-full rounded-t-lg border-2 bg-white">

                        <img alt="" src={buy} className="object-fit-object h-2/3 w-full object-center rounded" />
                        <div className="w-full h-1/2 pb-5 p-2 shadow-md">
                            <h2 className="text-black text-xl  font-bold leading-loose">
                                BUY FROM FARMERS
                            </h2>
                            
                            <p className=" text-black text-base font-normal leading-relaxed">
                            We provide opportunities for buyers of
                            <br />various crops and livestock to purchase
                            <br />  directly from our verified farmers.
                            

                            </p>
                            <div class='mt-6'>
                            <button class="bg-[#F01313] hover:bg-[#08711F] text-white font-semibold py-2 border-[#F01313] border-2 w-28 h-10 rounded">READ MORE </button>
                            </div>
                        </div>
                        
                    </div>

                </div>
                
              



            </div>
        </div>
    )
}

export default What;