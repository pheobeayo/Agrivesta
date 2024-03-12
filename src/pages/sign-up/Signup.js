import React from "react";
import { Link } from "react-router-dom";





const Signup = () => {
    return (
        <main className="bg-white">

            <div
                className="container mx-auto px-8 sm:px-[80px] pb-[100px] bg-white">
                <div class="mt-32">
                    <h1 className="text-[#08711F] text-3xl font-bold leading-10 mt-8">New here? Let’s get you started!</h1>
                    <div style={{ borderTop: "2px solid #000" }}></div>
                    <form class='bg-white  w-3/4 mx-28'>

                        <div class="mb-1 w-1/2 mx-40">
                            <label class="block text-black text-sm font-bold mb-2" for="fullname">
                                Full Name
                            </label>
                            <input class="bg-white border-black border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" id="fullname" type="text" placeholder="Enter your full name" required></input>
                        </div>
                        <div class="mb-1 w-1/2 mx-40">
                            <label class="block text-black text-sm font-bold mb-2" for="email">
                                Email Address
                            </label>
                            <input class="bg-white border-black border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Enter your email " required></input>
                        </div>
                        <div class="mb-1 w-1/2 mx-40">
                            <label class="block text-black text-sm font-bold mb-2" for="phonenumber">
                                Phone Number
                            </label>
                            <input class="bg-white border-black border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" id="phonenumber" type="phonenumber" placeholder="Enter your phone number " required></input>
                        </div>
                        <div class="mb-1 w-1/2 mx-40">
                            <label class="block text-black text-sm font-bold mb-2" for="password">
                                Password
                            </label>
                            <input class="bg-white border-black border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Enter your password " required></input>
                        </div>
                        <div class='mt-2 mb-2'>
                            <button class="bg-[#08711F] hover:bg-[#F01313] text-white font-semibold py-2 border-[#08711F] border-2 w-1/2 h-10 rounded mx-40">Create Account </button>
                            <p class='mx-40'>Already have an account? <Link to='/sign-in'>Sign in</Link></p>
                        </div>
                    </form>
                </div>















            </div>

        </main>
    )
}

export default Signup;