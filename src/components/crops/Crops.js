import React from "react";




const Crops = () => {
    return (
        <div className="bg-[#F9F7F7]">
            <div
                className="container mx-auto px-8 sm:px-[80px] pb-[100px]">

                <div className="grid-cols-4 gap-10 md:flex md:flex-row mx-20">


                    <button class="bg-[#08711F] hover:bg-[#F01313] text-white font-semibold py-2 border-[#08711F] border-2 w-48 h-12 rounded">Food crops </button>
                    <button class="bg-[#08711F] hover:bg-[#F01313] text-white font-semibold py-2 border-[#08711F] border-2 w-48 h-12 rounded">Feeds crops </button>
                    <button class="bg-[#08711F] hover:bg-[#F01313] text-white font-semibold py-2 border-[#08711F] border-2 w-48 h-12 rounded">Oil crops </button>
                    <button class="bg-[#08711F] hover:bg-[#F01313] text-white font-semibold py-2 border-[#08711F] border-2 w-48 h-12 rounded">Ornamentals </button>
                </div>
                <div className="grid-cols-4 gap-10 md:flex md:flex-row mt-8 mx-36">


                    <button class="bg-[#08711F] hover:bg-[#F01313] text-white font-semibold py-2 border-[#08711F] border-2 w-48 h-12 rounded">Industrial </button>
                    <button class="bg-[#08711F] hover:bg-[#F01313] text-white font-semibold py-2 border-[#08711F] border-2 w-48 h-12 rounded">Fibre Crops </button>
                    <button class="bg-[#08711F] hover:bg-[#F01313] text-white font-semibold py-2 border-[#08711F] border-2 w-48 h-12 rounded">Livestock </button>
                    
                </div>


            </div>



        </div>













    )
}

export default Crops;