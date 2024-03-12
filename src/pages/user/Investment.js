import React from "react";
import wheat from "../../assets/wheat.svg";
import fish from "../../assets/fish.svg";
import cocoa from "../../assets/cocoa.svg";




const Investment = () => {
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
                    <div className="grid-cols-4 gap-7 md:flex md:flex-row">
                        <div className="content-card w-full md:w-[32%] mb-5 h-full">
                            <img alt="" src={wheat} className="object-fit-object h-full w-full object-center rounded" />

                        </div>

                        <div className="content-card w-full md:w-[32%] mb-5 h-full  bg-[#F9F7F7]">

                            <div>
                                <h2 className="text-black text-xl font-bold leading-loose">
                                    WHEAT FARM INVESTMENT
                                </h2>
                                <p className=" text-black text-base font-normal ">
                                    10% return in 12 months

                                </p>
                                <h2 className="text-black text-xl  font-bold leading-loose ">
                                    FARMLORD LIMITED
                                    <br />KANO
                                    <br />KAWA
                                </h2>
                                <h3 className=" text-black text-base font-bold leading-relaxed">Details</h3>
                                <p className=" text-black text-base font-normal leading-relaxed">
                                    Your tokenized investment in our wheat farm is in its 6 months and actively managed by experienced farmers.
                                </p>

                            </div>

                        </div>

                        <div className="content-card w-full md:w-[32%] mb-5 h-full">
                            <div class='mx-20 mt-28'>
                                <button class="bg-[#08711F] hover:bg-[#F01313] text-white font-semibold py-2 border-[#08711F] border-2 w-40 h-10 rounded">VIEW MORE </button>
                            </div>
                        </div>

                    </div>
                    <div className="grid-cols-4 gap-7 md:flex md:flex-row">
                        <div className="content-card w-full md:w-[32%] mb-5 h-full">
                            <img alt="" src={fish} className="object-fit-object h-full w-full object-center rounded" />

                        </div>

                        <div className="content-card w-full md:w-[32%] mb-5 h-full  bg-[#F9F7F7]">

                            <div>
                                <h2 className="text-black text-xl font-bold leading-loose">
                                    FISH FARM INVESTMENT
                                </h2>
                                <p className=" text-black text-base font-normal ">
                                    10% return in 12 months

                                </p>
                                <h2 className="text-black text-xl  font-bold leading-loose ">
                                    FISHLORD LIMITED
                                    <br />OYO STATE
                                    <br />IBADAN
                                </h2>
                                <h3 className=" text-black text-base font-bold leading-relaxed">Details</h3>
                                <p className=" text-black text-base font-normal leading-relaxed">
                                    Your tokenized investment in our fish farm is in its 6 months and is set to be matured on 31st May 2025
                                </p>

                            </div>

                        </div>

                        <div className="content-card w-full md:w-[32%] mb-5 h-full">
                            <div class='mx-20 mt-28'>
                                <button class="bg-[#08711F] hover:bg-[#F01313] text-white font-semibold py-2 border-[#08711F] border-2 w-40 h-10 rounded">VIEW MORE </button>
                            </div>
                        </div>

                    </div>
                    <div className="grid-cols-4 gap-7 md:flex md:flex-row">
                        <div className="content-card w-full md:w-[32%] mb-5 h-full">
                            <img alt="" src={cocoa} className="object-fit-object h-full w-full object-center rounded" />

                        </div>

                        <div className="content-card w-full md:w-[32%] mb-5 h-full  bg-[#F9F7F7]">

                            <div>
                                <h2 className="text-black text-xl font-bold leading-loose">
                                    COCOA FARM INVESTMENT
                                </h2>
                                <p className=" text-black text-base font-normal ">
                                    25% return in 12 months

                                </p>
                                <h2 className="text-black text-xl  font-bold leading-loose ">
                                    ADEBASS FARMS LIMITED
                                    <br />OGUN
                                    <br />IJEBU
                                </h2>
                                <h3 className=" text-black text-base font-bold leading-relaxed">Details</h3>
                                <p className=" text-black text-base font-normal leading-relaxed">
                                    Your tokenized investment in our cocoa farm is in its 6 months and actively managed by experienced farmers.
                                </p>

                            </div>

                        </div>

                        <div className="content-card w-full md:w-[32%] mb-5 h-full">
                            <div class='mx-20 mt-28'>
                                <button class="bg-[#08711F] hover:bg-[#F01313] text-white font-semibold py-2 border-[#08711F] border-2 w-40 h-10 rounded">VIEW MORE </button>
                            </div>
                        </div>

                    </div>







                </div>
            </div>
        </main>
    )
}

export default Investment;