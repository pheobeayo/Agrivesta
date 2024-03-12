import React from "react";
import wheat from "../../assets/wheat.svg";
import fish from "../../assets/fish.svg";
import cassava from "../../assets/cassava.svg";
import corn from "../../assets/corn.svg";
import banana from "../../assets/banana.svg";
import cocoa from "../../assets/cocoa.svg";
import rice from "../../assets/rice.svg";
import potato from "../../assets/potato.svg";
import yam from "../../assets/yam.svg";
import { Link } from "react-router-dom";




const Farmerstore = () => {
    return (
        <main className="bg-[#F9F7F7]">
            <div className="bg-[#F9F7F7]">
                <div
                    className="container mx-auto px-8 sm:px-[80px] pb-[100px]">
                    <div class=' mb-3 mt-32'>
                        <h2 className="text-[#08711F] text-3xl font-bold leading-10 mt-8">
                            FARMSTORE
                        </h2>
                        <div style={{ borderTop: "2px solid #000" }}></div>
                    </div>
                    <div className="grid-cols-4 gap-4 md:flex md:flex-row">
                        <div className="content-card w-full md:w-[32%] mb-5 h-full rounded-t-lg border-2 bg-white">

                            <img alt="" src={wheat} className="object-fit-object h-2/3 w-full object-center rounded" />
                            <div className="w-full h-1/2 pb-5 p-2 shadow-md">
                                <h2 className="text-black text-xl font-bold leading-loose mt-20">
                                    WHEAT FARM INVESTMENT
                                </h2>

                                <p className=" text-black text-base font-normal leading-relaxed">
                                    10% return in 12 months

                                </p>
                               <Link to='/farmerinvestment-page'><button class="bg-[#08711F] hover:bg-[#F01313] text-white font-semibold py-2 border-[#08711F] border-2 w-40 h-10 rounded">INVEST </button></Link>
                               
                            </div>

                        </div>

                        <div className="content-card w-full md:w-[32%] mb-5 h-full rounded-t-lg border-2 bg-white">

                            <img alt="" src={fish} className="object-fit-object h-2/3 w-full object-center rounded" />
                            <div className="w-full h-1/2 pb-5 p-2 shadow-md">
                                <h2 className="text-black text-xl  font-bold leading-loose mt-12">
                                    FISH FARM INVESTMENT
                                </h2>

                                <p className=" text-black text-base font-normal leading-relaxed">
                                    18% return in 6 months
                                </p>
                                <div class='mt-8'>
                                <button class="bg-[#08711F] hover:bg-[#F01313] text-white font-semibold py-2 border-[#08711F] border-2 w-40 h-10 rounded">INVEST </button>
                                </div>
                            </div>

                        </div>

                        <div className="content-card w-full md:w-[32%] mb-5 h-full rounded-t-lg border-2 bg-white">

                            <img alt="" src={cassava} className="object-fit-object h-2/3 w-full object-center rounded" />
                            <div className="w-full h-1/2 pb-5 p-2 shadow-md">
                                <h2 className="text-black text-xl  font-bold leading-loose">
                                    CASSAVA FARM INVESTMENT
                                </h2>

                                <p className=" text-black text-base font-normal leading-relaxed">
                                    12% return in 8 months
                                </p>
                                <div class='mt-20'>
                                <button class="bg-[#08711F] hover:bg-[#F01313] text-white font-semibold py-2 border-[#08711F] border-2 w-40 h-10 rounded">INVEST </button>
                                </div>
                            </div>

                        </div>

                    </div>


                    <div className="grid-cols-4 gap-4 md:flex md:flex-row mt-4">
                        <div className="content-card w-full md:w-[32%] mb-5 h-full rounded-t-lg border-2 bg-white">

                            <img alt="" src={corn} className="object-fit-object h-2/3 w-full object-center rounded" />
                            <div className="w-full h-1/2 pb-5 p-2 shadow-md">
                                <h2 className="text-black text-xl font-bold leading-loose mt-20">
                                    CORN FARM INVESTMENT
                                </h2>

                                <p className=" text-black text-base font-normal leading-relaxed">
                                    10% return in 3 months

                                </p>
                                <button class="bg-[#08711F] hover:bg-[#F01313] text-white font-semibold py-2 border-[#08711F] border-2 w-40 h-10 rounded">INVEST </button>
                            </div>

                        </div>

                        <div className="content-card w-full md:w-[32%] mb-5 h-full rounded-t-lg border-2 bg-white">

                            <img alt="" src={banana} className="object-fit-object h-2/3 w-full object-center rounded" />
                            <div className="w-full h-1/2 pb-5 p-2 shadow-md">
                                <h2 className="text-black text-xl  font-bold leading-loose mt-12">
                                    BANANA FARM INVESTMENT
                                </h2>

                                <p className=" text-black text-base font-normal leading-relaxed">
                                    15% return in 9 months
                                </p>
                                <div class='mt-8'>
                                <button class="bg-[#08711F] hover:bg-[#F01313] text-white font-semibold py-2 border-[#08711F] border-2 w-40 h-10 rounded">INVEST </button>
                                </div>
                            </div>

                        </div>

                        <div className="content-card w-full md:w-[32%] mb-5 h-full rounded-t-lg border-2 bg-white">

                            <img alt="" src={cocoa} className="object-fit-object h-2/3 w-full object-center rounded" />
                            <div className="w-full h-1/2 pb-5 p-2 shadow-md">
                                <h2 className="text-black text-xl  font-bold leading-loose">
                                    COCOA FARM INVESTMENT
                                </h2>

                                <p className=" text-black text-base font-normal leading-relaxed">
                                    25% return in 12 months
                                </p>
                                <div class='mt-16'>
                                <button class="bg-[#08711F] hover:bg-[#F01313] text-white font-semibold py-2 border-[#08711F] border-2 w-40 h-10 rounded">INVEST </button>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className="grid-cols-4 gap-4 md:flex md:flex-row mt-4">
                        <div className="content-card w-full md:w-[32%] mb-5 h-full rounded-t-lg border-2 bg-white">

                            <img alt="" src={rice} className="object-fit-object h-2/3 w-full object-center rounded" />
                            <div className="w-full h-1/2 pb-5 p-2 shadow-md">
                                <h2 className="text-black text-xl font-bold leading-loose mt-20">
                                    RICE FARM INVESTMENT
                                </h2>

                                <p className=" text-black text-base font-normal leading-relaxed">
                                    20% return in 12 months

                                </p>
                                <button class="bg-[#08711F] hover:bg-[#F01313] text-white font-semibold py-2 border-[#08711F] border-2 w-40 h-10 rounded">INVEST </button>
                            </div>

                        </div>

                        <div className="content-card w-full md:w-[32%] mb-5 h-full rounded-t-lg border-2 bg-white">

                            <img alt="" src={potato} className="object-fit-object h-2/3 w-full object-center rounded" />
                            <div className="w-full h-1/2 pb-5 p-2 shadow-md">
                                <h2 className="text-black text-xl  font-bold leading-loose mt-12">
                                    POTATO FARM INVESTMENT
                                </h2>

                                <p className=" text-black text-base font-normal leading-relaxed">
                                    15% return in 6 months
                                </p>
                                <div class='mt-8'>
                                <button class="bg-[#08711F] hover:bg-[#F01313] text-white font-semibold py-2 border-[#08711F] border-2 w-40 h-10 rounded">INVEST </button>
                                </div>
                            </div>

                        </div>

                        <div className="content-card w-full md:w-[32%] mb-5 h-full rounded-t-lg border-2 bg-white">

                            <img alt="" src={yam} className="object-fit-object h-2/3 w-full object-center rounded" />
                            <div className="w-full h-1/2 pb-5 p-2 shadow-md">
                                <h2 className="text-black text-xl  font-bold leading-loose">
                                    YAM FARM INVESTMENT
                                </h2>

                                <p className=" text-black text-base font-normal leading-relaxed">
                                    15% return in 9 months
                                </p>
                                <div class="mt-20">
                                <button class="bg-[#08711F] hover:bg-[#F01313] text-white font-semibold py-2 border-[#08711F] border-2 w-40 h-10 rounded">INVEST </button>
                                </div>
                            </div>

                        </div>

                    </div>



                </div>
            </div>
        </main>
    )
}

export default Farmerstore;