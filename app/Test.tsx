import React from "react";
import {
  FaSearch,
  FaUser,
  FaTags,
  FaStore,
  FaPercentage,
  FaCommentDots,
} from "react-icons/fa";
import { IoMdBusiness } from "react-icons/io";
import { RiDownload2Line } from "react-icons/ri";

const Navbar: React.FC = () => {
  return (
    <header className="w-full bg-white shadow-md py-2 px-4 flex items-center justify-between">
      {/* Left Section */}

      <div className= "flex flex-col space-y-2 align-center"> 

<div > 
    
    
      {/* Upper Section */}
      <div className="flex items-center space-x-2">
        <span className="text-gray-600 flex items-center space-x-1">
          <IoMdBusiness className="text-lg" />
          <span className="hidden sm:inline">For Businesses</span>
        </span>
        <span className="text-red-600 flex items-center space-x-1">
          <RiDownload2Line className="text-lg" />
          <span className="hidden sm:inline">Download The App</span>
        </span>
        <span className="text-gray-600 flex items-center space-x-1">
          <FaTags className="text-lg" />
          <span className="hidden sm:inline">Deals</span>
        </span>
        <span className="text-gray-600 flex items-center space-x-1">
          <FaStore className="text-lg" />
          <span className="hidden sm:inline">Visit Our Store</span>
        </span>
        <span className="text-gray-600 flex items-center space-x-1">
          <FaPercentage className="text-lg" />
          <span className="hidden sm:inline">Discounts on Premium Ads</span>
        </span>
        <span className="text-gray-600 flex items-center space-x-1">
          <FaCommentDots className="text-lg" />
          <span className="hidden sm:inline">NXT</span>
        </span>
      </div>






      </div>
      {/*Lower left Section */}

      <div className="flex items-center space-x-4"> 
        
         <div className="flex items-center space-x-4">
        <button className="text-gray-600 text-2xl">&#9776;</button>
        <img
          src="/logo.png" // Use a leading slash to point to the public folder
          alt="Quikr"
          className="w-24"
        />
      </div> 


      {/* lower Center Section */}

      <div className="flex items-center border rounded-md overflow-hidden w-full max-w-md">
        <select className="px-2 bg-gray-100 border-r text-gray-600 outline-none">
          <option>All India</option>
          {/* Add more options as needed */}
        </select>
        <select className="px-2 bg-gray-100 border-r text-gray-600 outline-none">
          <option>All Categories</option>
          {/* Add more categories as needed */}
        </select>
        <input
          type="text"
          placeholder="Search in All India"
          className="px-2 py-1 flex-grow outline-none"
        />
        <button className="bg-blue-500 p-2">
          <FaSearch className="text-white" />
        </button>
      </div>


      {/* Lower Right Section */}

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

       </div>

    


    
    </header>
  );
};

export default Navbar;
