import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "../pages/home/Home";
import Layout from "../layout/Layout";
import Aboutus from "../pages/about/Aboutus";
import Farmerstore from "../pages/farmstore/Farmstore";
import Farmerinvestment from "../pages/farmstore/Farmerinvestment";
import User from "../pages/user/User";
import Wallet from '../pages/user/Wallet';
import Investment from  '../pages/user/Investment';
import Notification from "../pages/user/Notification";
import Contact from "../pages/contact/Contact";
import Farmerform from "../pages/farmer/Farmerform";
import Farmerupload from "../pages/farmer/Farmerupload";
import Signup from "../pages/sign-up/Signup";
import Signin from "../pages/sign-in/Signin";




const AllRoutes  = () => {
  return (
    <BrowserRouter>
    <Layout>
    <Routes>
      <Route  path="/" element={<Home />} />
      <Route path="/about-us" element={<Aboutus />} />
      <Route path="/farmstore" element={<Farmerstore/>} />
      <Route path='/farmerinvestment-page' element={<Farmerinvestment/>} />
      <Route path='/user' element={< User/>}/>
      <Route path="/wallet" element={<Wallet/>} />
      <Route path="/investment" element={<Investment/>} />
      <Route path="/notification" element={<Notification/>} />
      <Route path='/contact-us' element={<Contact/>} />
      <Route path='/farmer-form' element={<Farmerform/>}/>
      <Route path="/farmer-upload" element={<Farmerupload/>} />
      <Route path="/sign-in" element={<Signin/>} />
      <Route path="/sign-up" element={<Signup/>} />
       
     </Routes>
     </Layout>
    </BrowserRouter>
  );
}

export default AllRoutes;