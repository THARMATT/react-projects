import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaChartBar, FaBox, FaUsers, FaMoneyBill, FaBullhorn, FaQuestionCircle } from 'react-icons/fa';
import {  FaShoppingCart, FaDollarSign, FaBalanceScale } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';

function Navbar() {
    // <div>
    //     <FaMoney /> Earning
    //   </div>
    //   <div>
    //     <FaShoppingCart /> Orders
    //   </div>
    //   <div>
    //     <FaDollarSign /> Total Sales
    //   </div>
    //   <div>
    //     <FaBalanceScale /> Balance
//     //   </div>
//     // </div>
//     <FaChartBar /> Dashboard
//     </div>
//     <div>
//       <FaBox /> Product
//     </div>
//     <div>
//       <FaUsers /> Customers
//     </div>
//     <div>
//       <FaMoneyBill /> Income
//     </div>
//     <div>
//       <FaBullhorn /> Promote
//     </div>
//   </div>
// const footerLinks = [
//     { name: "Github", icon: <FaChartBar /> , link: "https://github.com/THARMATT" },
//     {
//       name: "Youtube",
//       icon: <FiYoutube />,
//       link: "https://youtube.com/@nigam_sharma",
//     },
//     {
//       name: "LinkedIn",
//       icon: <FiLinkedin />,
//       link: "https://www.linkedin.com/in/nigam-sharma",
//     },
//     {
//       name: "Instagram",
//       icon: <FiInstagram />,
//       link: "",
//     },
//     {
//       name: "Twitter",
//       icon: <FiTwitter />,
//       link: "https://twitter.com/nigamsharma_",
//     },
//   ];

  return (
    <>
<nav className="nav bg-fuchsia-700 w-1/6 h-screen" id="nav">
    <div className="dashboard flex ">
        <FaChartBar/>
Dashboard
    </div>
    <div className="nav-icon flex  mt-4">
        <ul className='gap-2'>
        <li className='flex '><FaChartBar/> dashboard</li>
            <li><FaBox/></li>
            <li><FaUsers/></li>
            <li><FaMoneyBill/></li>
            <li><FaBullhorn/></li>
           
            <li><FaQuestionCircle/></li>
        </ul>

    </div>
    <div className="user bg-white h-8">

    </div>
</nav>

    </>
  )}
export default Navbar
