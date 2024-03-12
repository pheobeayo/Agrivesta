import React from "react";
import wheat from "../../assets/wheat.svg";




const Farmerinvestment = () => {
    return (
        <main className="bg-[#F9F7F7]">

            <div
                className="container mx-auto px-8 sm:px-[80px] pb-[100px] bg-[#F9F7F7]">
                <div class=' mb-3 mt-32'>
                    <h2 className="text-[#08711F] text-3xl font-bold leading-10 mt-8">
                        FARMSTORE
                    </h2>
                    <div style={{ borderTop: "2px solid #000" }}></div>
                </div>
                <div className="grid-cols-2 gap-10 md:flex md:flex-row">
                    <div>

                        <img alt="" src={wheat} className="object-fit-object  w-full object-center rounded" />


                    </div>

                    <div>
                        <h1 className="text-[#08711F] text-3xl font-bold leading-10 mt-8">WHEAT FARM INVESTMENT</h1>
                        <h2 className="text-black text-lg font-bold leading-10">  10% return in 12 months</h2>
                        <h3 className="text-black text-lg font-bold leading-10">FARMLORD LIMITED</h3>
                        <h4 className="text-black text-lg font-bold leading-10">KANO</h4>
                        <h5 className="text-black text-lg font-bold leading-10">KAWA</h5>
                        <h6>Details</h6>
                        <p className="text-black font-normal text-base">
                            100hectares of land.
                            <br />Our wheat farm is located in the thriving agricultural region of Nigeria. We offers investors a chance to capitalize on the increasing demand for wheat and participate in a lucrative agricultural venture...
                        </p>
                        <button class="bg-[#08711F] hover:bg-[#F01313] text-white font-semibold py-2 border-[#08711F] border-2 w-40 h-10 rounded">View more </button>
                    </div>


                </div>

                <div>
                    <h2 className="text-[#08711F] text-3xl font-bold leading-10 mt-8">
                        Investment Information
                    </h2>
                    <div style={{ borderTop: "2px solid #000" }}></div>
                    <p>
                        EXPECT ROI: <span>10% in 12 months</span>
                        <br />OFFER CLOSING: <span>August 31st, 2025</span>
                        <br />MATURITY DATE: <span>May 31st, 2025</span>
                        <br /> PAYOUT TYPE: <span>Capital + Profit at maturity</span>
                        <br />INVESTMENT TYPE: <span> FIXED</span>
                        <br />Unit type: <span>Can be sold to others anytime</span>
                        <br />LOCATION: <span>Lagos, Nigeria</span>
                        <br />FARM SIZE: <span>387 acres </span>
                    </p>
                </div>
                <div>
                    <h2 className="text-[#08711F] text-3xl font-bold leading-10 mt-8">
                        Investment Process
                    </h2>
                    <div style={{ borderTop: "2px solid #000" }}></div>
                    <p>
                        Total unit request: <span>20,000</span>
                        <br />Available unit: <span>12,000</span>

                    </p>
                    <form>
                        <div class="mb-1">
                            <label class="block text-black text-sm font-bold mb-2" for="units">
                                Units Purchase:
                            </label>
                            <input class="bg-white border-black border-2 rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" id="units" type="number" placeholder=" " required></input>
                        </div>
                        <div class="mb-1">
                            <label class="block text-black text-sm font-bold mb-2" for="password">
                                Amount:
                            </label>
                            <input class="bg-white border-black border-2 rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" id="amount" type="amount" placeholder="" required></input>
                        </div>
                        <div class="mb-1">
                            <label class="block text-black text-sm font-bold mb-2" for="roi">
                                ROI (20%):
                            </label>
                            <input class="bg-white border-black border-2 rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" id="roi" type="amount" placeholder="" required></input>
                        </div>
                        <div class="mb-1">
                            <label class="block text-black text-sm font-bold mb-2" for="return">
                                Return:
                            </label>
                            <input class="bg-white border-black border-2 rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" id="return" type="amount" placeholder="" required></input>
                        </div>
                        <div class="mb-1">
                            <label class="block text-black text-sm font-bold mb-2" for="maturity">
                                Maturity:
                            </label>
                            <input class="bg-white border-black border-2 rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" id="date" type="date" placeholder="" required></input>
                        </div>
                        <button class="bg-[#08711F] hover:bg-[#F01313] text-white font-semibold py-2 border-[#08711F] border-2 w-full h-10 rounded">INVEST </button>
                    </form>
                </div>










            </div>

        </main>
    )
}

export default Farmerinvestment;