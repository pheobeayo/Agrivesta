import React from "react";
import aboutimage from "../../assets/aboutimage.svg";
import finance from "../../assets/finance.svg";











const Aboutus = () => {


    return (
        <main class='bg-[#F9F7F7]'>
            <div class='mt-32'>
                <h1 class='text-[#08711F] text-4xl font-bold mx-8 mt-4'>
                    Welcome to Agrivestas
                </h1>
                <img src={aboutimage} alt='' class='mx-80' />
            </div>
            <div class='mx-40'>
                <p class='text-black font-medium text-lg'>
                    Agrivestas is a platform for investors to invest in agricultural produce such as food crops, feed crops, fiber crops, oil crops, ornamental crops, industrial crops and livestock. The investor invests in any of these in a hedera coin to get a sizable share and rate of investment after a period of time.

                    <br />  The investment is used to finance registered farmers on the platform to perform their agricultural activities thereby making farming finance accessible to farmers and alleviating poverty and hunger issues in Africa.
                   

                </p>
                <div class='w-full border-white'>
                    <h1 class='text-black text-4xl font-bold  mt-4 mb-4'>FARMERS FINANCING </h1>
                    <img src={finance} alt='' class='w-[100%]' />
                    <p class='text-black font-medium text-lg mt-8 mb-4'>
                        Agrivestas is a platform for investors to invest in agricultural produce such as food crops, feed crops, fiber crops, oil crops, ornamental crops, industrial crops and livestock. The investor invests in any of these in a hedera coin to get a sizable share and rate of investment after a period of time.

                        <br /> The investment is used to finance registered farmers on the platform to perform their agricultural activities thereby making farming finance accessible to farmers and alleviating poverty and hunger issues in Africa.
                        
                    </p>
                    <h1 class='text-black text-4xl font-bold  mt-4 mb-4'>AGRICULTURAL INVESTMENT</h1>
                    <img src={finance} alt='' class='w-[100%]' />
                    <p class='text-black font-medium text-lg  mt-8 mb-4'>
                        Agrivestas is a platform for investors to invest in agricultural produce such as food crops, feed crops, fiber crops, oil crops, ornamental crops, industrial crops and livestock. The investor invests in any of these in a hedera coin to get a sizable share and rate of investment after a period of time.

                        <br /> The investment is used to finance registered farmers on the platform to perform their agricultural activities thereby making farming finance accessible to farmers and alleviating poverty and hunger issues in Africa.
                        
                    </p>
                </div>
            </div>





        </main>


    )



}


export default Aboutus;