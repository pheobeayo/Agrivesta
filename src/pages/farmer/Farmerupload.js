import React from "react";





const Farmerupload = () => {
    return (
        <main className="bg-[#F9F7F7]">

            <div
                className="container mx-auto px-8 sm:px-[80px] pb-[100px] bg-[#F9F7F7]">
                <div class="mt-32">
                    <h1 className="text-[#08711F] text-3xl font-bold leading-10 mt-8">PHOTO UPLOAD</h1>
                    <div style={{ borderTop: "2px solid #000" }}></div>
                    <form class='bg-[#D9D9D9]  w-3/4 mx-28'>

                        
                        <div class="mb-1 w-1/2 mx-40">
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="user_avatar">Drop an Image here and browse</label>
                        <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="user_avatar_help" id="user_avatar" type="file"></input>
                        </div>
                        
                        <div class='mx-40 w-1/2'>
                            <label for="preview" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image Preview</label>
                            <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=" " required></textarea>
                        </div>
                        <div class='mt-2 mb-2'>
                            <button class="bg-[#08711F] hover:bg-[#F01313] text-white font-semibold py-2 border-[#08711F] border-2 w-3/4 h-10 rounded mx-20">Upload </button>
                            
                        </div>
                    </form>
                </div>















            </div>

        </main>
    )
}

export default Farmerupload;