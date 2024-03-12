import React from "react";
import wallet from "../../assets/wallet.svg";
import investment from "../../assets/investment.svg";
import notification from "../../assets/notification.svg";





const User = () => {
    return (
        <main className="bg-[#F9F7F7]">
            <div className="bg-[#F9F7F7]">
                <div
                    className="container mx-auto px-8 sm:px-[80px] pb-[100px]">
                    <div class=' mb-3 mt-32'>
                        <h2 className="text-[#08711F] text-3xl font-bold leading-10 mt-8">
                            Investor’s Dashboard
                        </h2>
                        <div style={{ borderTop: "2px solid #000" }}></div>
                        <h2 className="text-[#08711F] text-3xl font-bold leading-10 mt-8">
                            Welcome
                            <br/> User
                        </h2>
                    </div>
                    <div className="grid-cols-4 gap-4 md:flex md:flex-row">
                        <div className="content-card w-full md:w-[32%] mb-5 h-full rounded-t-lg border-2 bg-white">

                            <img alt="" src={wallet} className="object-none object-center mx-36 mt-8" />
                            <div>
                                <h2 className="text-[#08711F] text-xl font-bold leading-loose mx-36 mb-3">
                                    Wallet
                                </h2>

                            </div>

                        </div>

                        <div className="content-card w-full md:w-[32%] mb-5 h-full rounded-t-lg border-2 bg-white">

                            <img alt="" src={investment} className="object-none object-center mx-32 mt-8" />
                            <div>
                                <h2 className="text-[#08711F] text-xl font-bold leading-loose mx-32 mb-2">
                                    Investments
                                </h2>
                            </div>

                        </div>

                        <div className="content-card w-full md:w-[32%] mb-5 h-full rounded-t-lg border-2 bg-white">

                            <img alt="" src={notification} className="object-none object-center mx-36 mt-8" />
                            <div>
                                <h2 className="text-[#08711F] text-xl font-bold leading-loose mx-32">
                                    Notification
                                </h2>
                            </div>

                        </div>

                    </div>


                    <div className="grid-cols-4 gap-4 md:flex md:flex-row mt-4">
                        <div className="content-card w-full md:w-[32%] mb-5 h-full rounded-t-lg border-2 bg-white">
                            <div>
                                <h2 className="text-[#08711F] text-xl font-bold leading-loose mx-32">
                                    Pending Investments
                                </h2>
                            </div>

                        </div>

                        <div className="content-card w-full md:w-[32%] mb-5 h-full rounded-t-lg border-2 bg-white">


                            <div>
                                <h2 className="text-[#08711F] text-xl font-bold leading-loose mx-32">
                                    Successful Investments
                                </h2>
                            </div>

                        </div>

                        <div className="content-card w-full md:w-[32%] mb-5 h-full rounded-t-lg border-2 bg-white">


                            <div>
                                <h2 className="text-[#08711F] text-xl font-bold leading-loose mx-32">
                                    Cashout Investments
                                </h2>
                            </div>

                        </div>

                    </div>



                </div>
            </div>
        </main>
    )
}

export default User;