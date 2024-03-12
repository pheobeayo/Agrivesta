import React from "react";
import landingimage from "../../assets/landingimage.svg";
import About from "../../components/about/About";
import What from "../../components/what/What";
import Crops from "../../components/crops/Crops";
import Chart from "../../components/chart/Chart";
import Farmers from "../../components/farmers/Farmers";
import Subfooter from "../../components/subfooter/Subfooter";











const Home = () => {


        return (
                <main class='bg-[#F9F7F7]'>
                        <section class='bg-[#F9F7F7]'>
                                <figure class="relative  transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 w-full">
                                        <div> <img src={landingimage} alt='landingimage' /></div>

                                        <figcaption class="absolute bottom-80 mx-24">
                                                <h1 class='text-6xl font-bold text-white'>Africa Agricultural
                                                        <br />Sustainability 
                                                        <br />Through Blockchain</h1>
                                                <p class='text-xl font-normal text-white'>
                                                        We solve the issues of sustainability
                                                        <br />      in the Agricultural value chain.
                                                </p>

                                        </figcaption>
                                </figure>


                        </section>

                        <About />
                        <What />
                        <Crops />
                        <Chart/>
                        <Farmers/>
                        <Subfooter/>


                </main>


        )



}


export default Home;