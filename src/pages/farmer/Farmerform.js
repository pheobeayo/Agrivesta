import React from "react";





const Farmerform = () => {
    return (
        <main className="bg-[#F9F7F7]">

            <div
                className="container mx-auto px-8 sm:px-[80px] pb-[100px] bg-[#F9F7F7]">
                <div class="mt-32">
                <h1 className="text-[#08711F] text-3xl font-bold leading-10 mt-8">Contact Us</h1>
                        <div style={{ borderTop: "2px solid #000" }}></div>
                    <form class='bg-[#D9D9D9]  w-3/4 mx-28'>
                        
                        <div class="mb-1 w-1/2 mx-40">
                            <label class="block text-black text-sm font-bold mb-2" for="fullname">
                                Full Name
                            </label>
                            <input class="bg-white border-black border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" id="fullname" type="text" placeholder=" " required></input>
                        </div>
                        <div class="mb-1 w-1/2 mx-40">
                            <label class="block text-black text-sm font-bold mb-2" for="phonenumber">
                                Phone Number
                            </label>
                            <input class="bg-white border-black border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" id="phonenumber" type="phonenumber" placeholder=" " required></input>
                        </div>
                        <div class="mb-1 w-1/2 mx-40">
                            <label class="block text-black text-sm font-bold mb-2" for="phonenumber">
                                Alternative Number
                            </label>
                            <input class="bg-white border-black border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" id="phonenumber" type="phonenumber" placeholder=" " required></input>
                        </div>
                        <div class="mb-1 w-1/2 mx-40">
                            <label class="block text-black text-sm font-bold mb-2" for="farmname">
                                Farm Name
                            </label>
                            <input class="bg-white border-black border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" id="farmname" type="text" placeholder=" " required></input>
                        </div>
                        <div class="mb-1 w-1/2 mx-40">
                            <label class="block text-black text-sm font-bold mb-2" for="address">
                                Farm Address
                            </label>
                            <input class="bg-white border-black border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" id="address" type="text" placeholder=" " required></input>
                        </div>
                        <div class="mb-1 w-1/2 mx-40">
                            <label class="block text-black text-sm font-bold mb-2" for="email">
                                Email Address
                            </label>
                            <input class="bg-white border-black border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder=" " required></input>
                        </div>
                        <div class="mb-1 w-1/2 mx-40">
                            <label class="block text-black text-sm font-bold mb-2" for="email">
                                Confirm Email
                            </label>
                            <input class="bg-white border-black border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder=" " required></input>
                        </div>
                        <div class="mb-1 w-1/2 mx-40">
                            <label class="block text-black text-sm font-bold mb-2" for="password">
                                Password
                            </label>
                            <input class="bg-white border-black border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder=" " required></input>
                        </div>
                        <div class="flex flex-wrap mx-3 mb-6">
                            <div class="w-1/2 md:w-1/2 px-3 mb-6 md:mb-0">
                                <label class="block uppercase tracking-wide text-black text-xs font-bold mb-2" for="id">
                                    Means of ID
                                </label>
                                <input class="appearance-none block w-full bg-white text-black border border-black rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="id" type="text" placeholder=" " required></input>

                            </div>
                            <div class="w-1/2 md:w-1/2 px-3">
                                <label class="block uppercase tracking-wide text-black text-xs font-bold mb-2" for="idnumber">
                                    ID number
                                </label>
                                <input class="appearance-none block w-full bg-white text-black border border-black rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-black" id="idnumber" type="number" placeholder="" required></input>
                            </div>
                        </div>
                        <div class='mx-40 w-1/2'>
                            <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company Details</label>
                            <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=" " required></textarea>
                        </div>
                        <div class='mt-2 mb-2'>
                            <button class="bg-[#08711F] hover:bg-[#F01313] text-white font-semibold py-2 border-[#08711F] border-2 w-3/4 h-10 rounded mx-20">Proceed </button>
                          <p class='mx-16'>Note: there will be thorough investigation of you and you farm before we verified you</p>
                        </div>
                    </form>
                </div>















            </div>

        </main>
    )
}

export default Farmerform;