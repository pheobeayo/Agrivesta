import React from "react";





const Contact = () => {
    return (
        <main className="bg-white">

            <div
                className="container mx-auto px-8 sm:px-[80px] pb-[100px] bg-white">
                <div>
                    
                    <form class='bg-[#D9D9D9] mt-36 w-3/4 mx-28'>
                    <h1 className="text-[#08711F] text-3xl font-bold leading-10 mt-8 mx-2">Contact Us</h1>
                    <div style={{ borderTop: "2px solid #000" }}></div>

                        <div class="flex flex-wrap mx-3 mb-6">
                            <div class="w-3/4 md:w-1/2 px-3 mb-6 md:mb-0">
                                <label class="block uppercase tracking-wide text-black text-xs font-bold mb-2" for="firstname">
                                    First Name
                                </label>
                                <input class="appearance-none block w-full bg-white text-black border border-black rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="firstname" type="text" placeholder=" " required></input>

                            </div>
                            <div class="w-3/4 md:w-1/2 px-3">
                                <label class="block uppercase tracking-wide text-black text-xs font-bold mb-2" for="lastname">
                                    Last Name
                                </label>
                                <input class="appearance-none block w-full bg-white text-black border border-black rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-black" id="lastname" type="text" placeholder="" required></input>
                            </div>
                        </div>
                        <div class="mb-1 w-1/2 mx-40">
                            <label class="block text-black text-sm font-bold mb-2" for="email">
                                Email Address
                            </label>
                            <input class="bg-white border-black border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder=" " required></input>
                        </div>
                        <div class='mx-40 w-1/2'>
                        <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
                        <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
                        </div>
                        <div class='mt-2 mb-2'>
                        <button class="bg-[#08711F] hover:bg-[#F01313] text-white font-semibold py-2 border-[#08711F] border-2 w-3/4 h-10 rounded mx-20">Send Message </button>
                        </div>
                    </form>
                </div>















            </div>

        </main>
    )
}

export default Contact;