import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import user from "../../assets/user.svg";
import notificationIcon from "../../assets/notification-icon.svg";




const Navbar = () => {

    return (
        <nav class="bg-[#0E5310]">
            <div className='fixed top-0 right-0 left-0 bg-gradient z-50 bg-[#102428]'>
                <div className='flex gap-4 justify-center items-center mx-4 pt-10 mb-2'>
                  <Link to='/'><img src={logo} alt="logo" /></Link>
                   
                    <ul className='flex m-auto gap-7'>
                    <li className='hidden md:inline-block text-white '><Link to='/'>HOME</Link></li>
                    <li className='hidden md:inline-block text-white '><Link to='/about-us'>ABOUT US</Link></li>
                    <li className='hidden md:inline-block text-white '><Link to='/farmstore'>FARM STORE</Link></li>
                    <li className='hidden md:inline-block text-white '><Link to='/contact-us'>CONTACT US</Link></li>
                    
                        
                    </ul>
                    <div>
                    <img src={user} alt=" "/>
                    </div>
                    <div>
                    <img src={notificationIcon}  alt=""/>
                    </div>
                    
                    
                    
                </div>
            </div>
        </nav>
    )



}

export default Navbar;