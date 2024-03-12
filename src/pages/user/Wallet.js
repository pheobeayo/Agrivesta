import React from "react";





const Wallet = () => {
    return (
        <main className="bg-[#F9F7F7]">

            <div
                className="container mx-auto px-8 sm:px-[80px] pb-[100px] bg-[#F9F7F7]">
                <div class=' mb-3 mt-32'>
                    <h2 className="text-[#08711F] text-3xl font-bold leading-10 mt-8">
                        User
                    </h2>
                    <div style={{ borderTop: "2px solid #000" }}></div>
                </div>
                <div className="grid-cols-2 gap-10 md:flex md:flex-row">
                    <div class="w-1/2">
                        <div className="content-card w-full  mb-5 h-50% rounded-t-lg border-2 bg-white">
                            <h1 className="text-black text-base font-bold mx-4 mt-8">Balance</h1>
                            <h2 className="text-black text-3xl font-bold mx-4">HBARS 80,801.231</h2>
                            <h3 className="text-black text-base font-bold mx-4 mb-8">$24,000.00</h3>
                        </div>

                        <div className="content-card w-full mb-5 h-50% rounded-t-lg border-2 bg-white">
                            <h1 className="text-black text-base font-bold mx-4 mt-8">Information </h1>
                            <h1 className="text-black text-base font-bold mx-4 ">Location </h1>
                            <h2 className="text-black text-base font-bold mx-4">Address</h2>
                            <h3 className="text-black text-base font-bold mx-4 mb-8">Wallet ID:</h3>
                        </div>


                    </div>

                    <div>
                        <h1 className="text-[#08711F] text-3xl font-bold leading-10 mt-8">New Transactions</h1>
                        <form>
                            <button class="bg-[#08711F] hover:bg-[#F01313] text-white font-semibold py-2 border-[#08711F] border-2 w-full h-10 rounded">Payment </button>
                            <div class="mb-1">
                                <label class="block text-black text-sm font-bold mb-2" for="wallet">
                                    Agrivesta
                                </label>
                                <input class="bg-white border-black border-2 rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" id="wallet" type="walletaddress" placeholder=" " required></input>
                            </div>
                            <div class="flex flex-wrap -mx-3 mb-6">
                                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label class="block uppercase tracking-wide text-black text-xs font-bold mb-2" for="amount">
                                        Amount
                                    </label>
                                    <input class="appearance-none block w-full bg-white text-black border border-black rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="amount" type="number" placeholder=" "></input>

                                </div>
                                <div class="w-full md:w-1/2 px-3">
                                    <label class="block uppercase tracking-wide text-black text-xs font-bold mb-2" for="reason">
                                        Reason
                                    </label>
                                    <input class="appearance-none block w-full bg-white text-black border border-black rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-black" id="reason" type="text" placeholder=""></input>
                                </div>
                            </div>
                        </form>
                    </div>


                </div>

                <div>
                    <h2 className="text-[#08711F] text-3xl font-bold leading-10 mt-8">
                        History
                    </h2>
                    <div style={{ borderTop: "2px solid #000" }}></div>
                    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table class="w-full text-sm text-left rtl:text-right text-black dark:text-black">
                            <thead class="text-xs text-black uppercase dark:text-black">
                                <tr>
                                    <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                                        NAME
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        WALLET ADDRESS
                                    </th>
                                    <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                                        INVESTMENT
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        DATE/TIME
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        STATUS
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        NETWORK FEE
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="border-b border-gray-200 dark:border-gray-700">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                        Agrivesta
                                    </th>
                                    <td class="px-6 py-4">
                                        ed72k7j4761mbn69h3649897544a975
                                    </td>
                                    <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                        KOKO FARM
                                    </td>
                                    <td class="px-6 py-4">
                                        9/6/2024, 8:30PM
                                    </td>
                                    <td class="px-6 py-4">
                                        Completed
                                    </td>
                                    <td class="px-6 py-4">
                                        0.000076245462 HBARS ($0.54)
                                    </td>
                                </tr>
                                <tr class="border-b border-gray-200 dark:border-gray-700">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                        Agrivesta
                                    </th>
                                    <td class="px-6 py-4">
                                        ed72k7j4761mbn69h3649897544a975
                                    </td>
                                    <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                        KOKO FARM
                                    </td>
                                    <td class="px-6 py-4">
                                        9/6/2024, 8:30PM
                                    </td>
                                    <td class="px-6 py-4">
                                        Completed
                                    </td>
                                    <td class="px-6 py-4">
                                        0.000076245462 HBARS ($0.54)
                                    </td>
                                </tr>
                                <tr class="border-b border-gray-200 dark:border-gray-700">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                        Agrivesta
                                    </th>
                                    <td class="px-6 py-4">
                                        ed72k7j4761mbn69h3649897544a975
                                    </td>
                                    <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                        KOKO FARM
                                    </td>
                                    <td class="px-6 py-4">
                                        9/6/2024, 8:30PM
                                    </td>
                                    <td class="px-6 py-4">
                                        Completed
                                    </td>
                                    <td class="px-6 py-4">
                                        0.000076245462 HBARS ($0.54)
                                    </td>
                                </tr>
                                <tr class="border-b border-gray-200 dark:border-gray-700">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                        Agrivesta
                                    </th>
                                    <td class="px-6 py-4">
                                        ed72k7j4761mbn69h3649897544a975
                                    </td>
                                    <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                        KOKO FARM
                                    </td>
                                    <td class="px-6 py-4">
                                        9/6/2024, 8:30PM
                                    </td>
                                    <td class="px-6 py-4">
                                        Completed
                                    </td>
                                    <td class="px-6 py-4">
                                        0.000076245462 HBARS ($0.54)
                                    </td>
                                </tr>


                            </tbody>
                        </table>
                    </div>
                </div>










            </div>

        </main>
    )
}

export default Wallet;