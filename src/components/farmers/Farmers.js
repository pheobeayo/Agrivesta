import React from "react";
import james from "../../assets/james.svg";
import miremba from "../../assets/miremba.svg";
import samuel from "../../assets/samuel.svg";



const Farmers = () => {
    return (
        <div className="bg-[#F9F7F7]">
            <div
                className="container mx-auto px-8 sm:px-[80px] pb-[100px]">
                <div class=' mb-3 mt-8'>
                    <h2 className="text-[#08711F] text-3xl font-bold leading-10 mt-8">
                        VERIFIED FARMERS
                    </h2>
                    <div style={{ borderTop: "2px solid #000" }}></div>
                </div>
                <div className="grid-cols-4 gap-4 md:flex md:flex-row">
                    <div className="content-card w-full md:w-[32%] mb-5 h-full rounded-t-lg border-2 bg-white">

                        <img alt="" src={james} className="object-fit-object h-2/3 w-full object-center rounded" />
                        <div className="w-full h-1/2 pb-5 p-2 shadow-md">
                            <button class="bg-[#08711F] hover:bg-[#F01313] text-white font-semibold py-2 border-[#08711F] border-2 w-40 h-10 rounded">James Okafor </button>
                            <h2 className="text-black text-lg  font-normal">Lagos, Nigeria.</h2>
                            <h2 className="text-black text-xl font-bold leading-loose mt-20">
                                HarvestGrow Africa
                            </h2>

                            <p className=" text-black text-base font-normal leading-relaxed">
                                “I was able to secure financing for my maize
                                <br /> farming business. The investment allowed
                                <br /> me to purchase high-quality seeds and
                                <br /> fertilizers, resulting in a bountiful harvest.”
                            </p>


                        </div>

                    </div>

                    <div className="content-card w-full md:w-[32%] mb-5 h-full rounded-t-lg border-2 bg-white">

                        <img alt="" src={miremba} className="object-fit-object h-2/3 w-full object-center rounded" />
                        <div className="w-full h-1/2 pb-5 p-2 shadow-md">
                            <button class="bg-[#08711F] hover:bg-[#F01313] text-white font-semibold py-2 border-[#08711F] border-2 w-40 h-10 rounded">Miremba Abbo </button>
                            <h2 className="text-black text-lg  font-normal">Kampala, Uganda.</h2>
                            <h2 className="text-black text-xl  font-bold leading-loose mt-12">
                                DairyBoost Farms
                            </h2>

                            <p className=" text-black text-base font-normal leading-relaxed">
                                "With the financing provided, I was able to
                                <br />establish a profitable dairy farm. Today,
                                <br /> my farm supplies milk to local markets, and
                                <br /> I've created employment opportunities for
                                <br />others in my community."


                            </p>

                        </div>

                    </div>

                    <div className="content-card w-full md:w-[32%] mb-5 h-full rounded-t-lg border-2 bg-white">

                        <img alt="" src={samuel} className="object-fit-object h-2/3 w-full object-center rounded" />
                        <div className="w-full h-1/2 pb-5 p-2 shadow-md">
                            <button class="bg-[#08711F] hover:bg-[#F01313] text-white font-semibold py-2 border-[#08711F] border-2 w-40 h-10 rounded">Samuel Kweku </button>
                            <h2 className="text-black text-lg  font-normal">Kumasi, Ghana.</h2>
                            <h2 className="text-black text-xl  font-bold leading-loose">
                                Kweku Poultry Farms
                            </h2>

                            <p className=" text-black text-base font-normal leading-relaxed">
                                “Assess to the investment I got as a small
                                <br />-scale poultry farmer, I expanded my
                                <br />poultry farm, improved infrastructure, and
                                <br />  increased my flock. I now sell poultry
                                <br /> product in bulk, have a sustainable source
                                <br /> of income and can provide for my family
                                <br /> better than ever before.
                            </p>

                        </div>

                    </div>

                </div>

                <div class='mx-96 mt-4 px-10'>
                <button class="bg-[#08711F] hover:bg-[#F01313] text-white font-semibold py-2 border-[#08711F] border-2 w-60 h-10 rounded">SEE FARMERS </button>
                </div>
                <div class='mx-96 mt-4 px-10'>
                <button class="bg-[#08711F] hover:bg-[#F01313] text-white font-semibold py-2 border-[#08711F] border-2 w-60 h-15 rounded">BECOME A FARMER </button>
                </div>





            </div>
        </div>
    )
}

export default Farmers;