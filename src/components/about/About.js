import React from "react";
import aboutimage from "../../assets/aboutimage.svg";





const About = () => {

    return (
        <div class='bg-[#F9F7F7]'>
            <div class="grid grid-cols-2 gap-7 mt-8 bg-[#F9F7F7]">
                <div class="mx-20 mt-20">
                    <h1 class='text-[#08711F] text-4xl font-bold'>
                    ABOUT AGRIVESTAS 
                    </h1>
                    <p class='text-black text-xl font-normal'>
                    We bridge the gap between 
                    <br />investors and farmers by 
                    <br />tokenizing agricultural produce 
                    <br />and enabling investors to invest in 
                    <br />various crops and livestock using 
                    <br />the blockchain providing finance to farmers 
                    </p>
                    
                </div>
                <div>
                    <img src={aboutimage} alt='aboutimage'/>
                </div>
                
            </div>
        </div>
    );
};





export default About;