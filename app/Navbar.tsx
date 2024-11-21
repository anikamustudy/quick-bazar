// // import React from "react";
// // import { FaSearch, FaUser, FaTags, FaStore, FaPercentage, FaCommentDots } from "react-icons/fa";
// // import { IoMdBusiness } from "react-icons/io";
// // import { RiDownload2Line } from "react-icons/ri";

// // const Navbar: React.FC = () => {
// //   return (
// //     <header className="w-full bg-white shadow-md py-2 px-4 flex items-center justify-between">
// //       {/* Left Section */}
// //       <div className="flex items-center space-x-4">
// //         <button className="text-gray-600 text-2xl">&#9776;</button>
// //         <img
// //           src="https://example.com/logo.png" // Replace with your logo URL
// //           alt="Quikr"
// //           className="w-24"
// //         />
// //       </div>

// //       {/* Center Section */}
// //       <div className="flex items-center space-x-2">
// //         <span className="text-gray-600 flex items-center space-x-1">
// //           <IoMdBusiness className="text-lg" />
// //           <span className="hidden sm:inline">For Businesses</span>
// //         </span>
// //         <span className="text-red-600 flex items-center space-x-1">
// //           <RiDownload2Line className="text-lg" />
// //           <span className="hidden sm:inline">Download The App</span>
// //         </span>
// //       </div>

// //       {/* Search Section */}
// //       <div className="flex items-center border rounded-md overflow-hidden w-full max-w-md">
// //         <select className="px-2 bg-gray-100 border-r text-gray-600 outline-none">
// //           <option>All India</option>
// //           {/* Add more options as needed */}
// //         </select>
// //         <select className="px-2 bg-gray-100 border-r text-gray-600 outline-none">
// //           <option>All Categories</option>
// //           {/* Add more categories as needed */}
// //         </select>
// //         <input
// //           type="text"
// //           placeholder="Search in All India"
// //           className="px-2 py-1 flex-grow outline-none"
// //         />
// //         <button className="bg-blue-500 p-2">
// //           <FaSearch className="text-white" />
// //         </button>
// //       </div>

// //       {/* Right Section */}
// //       <div className="flex items-center space-x-4">
// //         <span className="text-gray-600 flex items-center space-x-1">
// //           <FaTags className="text-lg" />
// //           <span className="hidden sm:inline">Deals</span>
// //         </span>
// //         <span className="text-gray-600 flex items-center space-x-1">
// //           <FaStore className="text-lg" />
// //           <span className="hidden sm:inline">Visit Our Store</span>
// //         </span>
// //         <span className="text-gray-600 flex items-center space-x-1">
// //           <FaPercentage className="text-lg" />
// //           <span className="hidden sm:inline">Discounts on Premium Ads</span>
// //         </span>
// //         <span className="text-gray-600 flex items-center space-x-1">
// //           <FaCommentDots className="text-lg" />
// //           <span className="hidden sm:inline">NXT</span>
// //         </span>
// //         <span className="text-gray-600 flex items-center space-x-1">
// //           <FaUser className="text-lg" />
// //           <span className="hidden sm:inline">Login/Register</span>
// //         </span>
// //         <button className="bg-yellow-300 text-black px-4 py-1 rounded-md font-semibold">
// //           Post Free Ad
// //         </button>
// //       </div>
// //     </header>
// //   );
// // };

// // export default Navbar;



// "use client";

// import React, { useState, useEffect } from "react";
// import {
//   FaSearch,
//   FaUser,
//   FaTags,
//   FaStore,
//   FaPercentage,
//   FaCommentDots,
//   FaMapMarkedAlt,
// } from "react-icons/fa";
// import { IoMdBusiness } from "react-icons/io";
// import { IoMdNotifications } from "react-icons/io";

// import { RiDownload2Line } from "react-icons/ri";
// // import { useSidebar } from "./SidebarContext";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBell } from "@fortawesome/free-solid-svg-icons";

// const Navbar: React.FC = () => {
//   // const { toggleSidebar } = useSidebar();
//   const [showUpperSection, setShowUpperSection] = useState(true);

//   useEffect(() => {
//     let lastScrollY = window.scrollY;

//     const handleScroll = () => {
//       if (window.scrollY > lastScrollY) {
//         setShowUpperSection(false);
//       } else {
//         setShowUpperSection(true);
//       }
//       lastScrollY = window.scrollY;
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header className="w-full bg-white shadow-md py-2">
//       <div className="w-full max-w-screen-lg mx-auto px-6 flex flex-col space-y-2">
//         {/* Upper Section */}
//         {showUpperSection && (
//           <div className="flex items-center justify-between text-gray-600">
//             <div className="flex space-x-2 flex-grow">
//               <div className="flex items-center space-x-4">
//                 <span className="flex items-center space-x-1">
//                   <IoMdBusiness className="text-lg" />
//                   <span className="hidden sm:inline">For Businesses</span>
//                 </span>
//                 <span className="flex items-center space-x-1">
//                   <RiDownload2Line className="text-lg" />
//                   <span className="hidden sm:inline">Download The App</span>
//                 </span>
//               </div>
//             </div>

//             {/* Upper Right Section */}
//             <div className="flex items-center space-x-4">
//             <select className="px-2 text-gray-600 outline-none">
//               <option>ENG</option>
//             </select>
//               {/* <span className="flex items-center space-x-1">
//                 <FaTags className="text-lg" />
//                 <span className="hidden sm:inline">Deals</span>
//               </span> */}
//               {/* <span className="flex items-center space-x-1">
//                 <FaStore className="text-lg" />
//                 <span className="hidden sm:inline">Visit Our Store</span>
//               </span> */}
//               {/* <span className="flex items-center space-x-1">
//                 <FaPercentage className="text-lg" />
//                 <span className="hidden sm:inline">
//                   Discounts on Premium Ads
//                 </span>
//               </span> */}
//               <span className="flex items-center space-x-1">

//               <IoMdNotifications className="text-lg" />

//                 {/* < className="text-lg" /> */}
//                 {/* <span className="hidden sm:inline">NXT</span> */}
//               </span>
//             </div>
//           </div>
//         )}

//         {/* Lower Section */}
//         <div className="flex items-center justify-between">
//           {/* Left: Menu and Logo */}

// <div/>

//           <div className="flex items-center space-x-4 flex-grow">
//             <button 
//             // onClick={toggleSidebar} 
//             className="text-gray-600 text-2xl">
//               &#9776;
//             </button>
//             <img src="/logo.png" alt="Nepsun" className="w-24" />
//           </div>

          
//           <div className="flex">
//             <div className=" flex items-center px-1  text-gray-600 ">
//               <FaMapMarkedAlt className="text-lg mr-1 " />
//               <select className="bg-transparent outline-none">
//                 <option>All Nepal</option>
//               </select>
//             </div>
//             <select className="px-2 bg-gray-100 border-r text-gray-600 outline-none">
//               <option>All Categories</option>
//             </select>
//             {/* Center: Search Bar */}
//             <div className=" flex border-2 border-blue">
            
//               <input
//                 type="text"
//                 placeholder="Search in All Nepal"
//                 className="px-2 py-1 flex-grow outline-1"
//               />
//               <button className="bg-purple-500 p-2">
//                 <FaSearch className="text-white" />
//               </button>{" "}
//             </div>
//           </div>

//           {/* Right: User & Post Ad */}
//           <div className="flex items-center space-x-4">
//             <span className="text-gray-600 flex items-center space-x-1">
//               <FaUser className="text-lg" />
//               <span className="hidden sm:inline">Login/Register</span>
//             </span>
//             <button className="bg-yellow-300 text-black px-4 py-1 rounded-md font-semibold">
//               Post Free Ad
//             </button>
//           </div>
//         </div>

//         {/* Bottom Navigation Links */}
//         <div className="flex justify-center space-x-8 bg-purple-500 py-2 text-white text-lg">

       
//           {/* <span onClick={toggleSidebar} className="hover:bg-yellow-300 hover:text-black hover:peer-2 rounded-md cursor-pointer hover:px-1 py-0.5"> Product</span> */}
        
//           <span className= "hover:bg-yellow-300 hover:h-full hover:text-black hover:rounded ">Product</span>
//           <span>Services</span>
//           <span>Jobs</span>
//           <span>Homes</span>
//           <span>Food</span>
//           <span>Freelancer</span>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;

"use client";

import React, { useState, useEffect } from "react";
import {
  FaSearch,
  FaUser,
  FaTags,
  FaStore,
  FaPercentage,
  FaCommentDots,
  FaMapMarkedAlt,
} from "react-icons/fa";
import { IoMdBusiness } from "react-icons/io";
import { IoMdNotifications } from "react-icons/io";
import { RiDownload2Line } from "react-icons/ri";

const Navbar: React.FC = () => {
  const [showUpperSection, setShowUpperSection] = useState(true);
  const [isProductClicked, setIsProductClicked] = useState(false);  // State to handle Product button click

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowUpperSection(false);
      } else {
        setShowUpperSection(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleProductClick = () => {
    setIsProductClicked(true);  // Update state when the Product button is clicked
    // You can add logic here to navigate to the Product page, if needed
    console.log("Product Button Clicked");
  };

  return (
    <header className="w-full bg-white shadow-md py-2">
      <div className="w-full max-w-screen-lg mx-auto px-6 flex flex-col space-y-2">
        {/* Upper Section */}
        {showUpperSection && (
          <div className="flex items-center justify-between text-gray-600">
            <div className="flex space-x-2 flex-grow">
              <div className="flex items-center space-x-4">
                <span className="flex items-center space-x-1">
                  <IoMdBusiness className="text-lg" />
                  <span className="hidden sm:inline">For Businesses</span>
                </span>
                <span className="flex items-center space-x-1">
                  <RiDownload2Line className="text-lg" />
                  <span className="hidden sm:inline">Download The App</span>
                </span>
              </div>
            </div>

            {/* Upper Right Section */}
            <div className="flex items-center space-x-4">
              <select className="px-2 text-gray-600 outline-none">
                <option>ENG</option>
              </select>
              <IoMdNotifications className="text-lg" />
            </div>
          </div>
        )}

        {/* Lower Section */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 flex-grow">
            <button className="text-gray-600 text-2xl">&#9776;</button>
            <img src="/logo.png" alt="Nepsun" className="w-24" />
          </div>

          <div className="flex">
            <div className="flex items-center px-1 text-gray-600">
              <FaMapMarkedAlt className="text-lg mr-1" />
              <select className="bg-transparent outline-none">
                <option>All Nepal</option>
              </select>
            </div>
            <select className="px-2 bg-gray-100 border-r text-gray-600 outline-none">
              <option>All Categories</option>
            </select>
            <div className="flex border-2 border-blue">
              <input
                type="text"
                placeholder="Search in All Nepal"
                className="px-2 py-1 flex-grow outline-1"
              />
              <button className="bg-purple-500 p-2">
                <FaSearch className="text-white" />
              </button>
            </div>
          </div>

          {/* Right: User & Post Ad */}
          <div className="flex items-center space-x-4">
            <span className="text-gray-600 flex items-center space-x-1">
              <FaUser className="text-lg" />
              <span className="hidden sm:inline">Login/Register</span>
            </span>
            <button className="bg-yellow-300 text-black px-4 py-1 rounded-md font-semibold">
              Post Free Ad
            </button>
          </div>
        </div>

        {/* Bottom Navigation Links */}
        <div className="flex justify-center space-x-8 bg-purple-500 py-2 text-white text-lg">
          <span
            onClick={handleProductClick}  // Handle click event
            className={`hover:bg-yellow-300 rounded hover:border-collapse hover:text-black hover:tab ${isProductClicked ? "text-white" : ""}`}
          >
            Product
          </span>
          <span>Services</span>
          <span>Jobs</span>
          <span>Homes</span>
          <span>Food</span>
          <span>Freelancer</span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
