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
  const [isProductClicked, setIsProductClicked] = useState(false); // State to handle Product button click

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
    setIsProductClicked(true); // Update state when the Product button is clicked
    console.log("Product Button Clicked");
  };

  return (
    <header className="bg-yellow-100 shadow-md py-4">
      <div className="w-[1100px] max-w-screen-xl mx-auto">
        {/* Upper Section */}
        {showUpperSection && (
          <div className="flex items-center justify-between text-gray-600 mb-3">
            <div className="flex space-x-4">
              <span className="flex items-center space-x-1">
                <IoMdBusiness className="text-lg" />
                <span className="hidden sm:inline">For Businesses</span>
              </span>
              <span className="flex items-center space-x-1">
                <RiDownload2Line className="text-lg" />
                <span className="hidden sm:inline">Download The App</span>
              </span>
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

        {/* Middle Section */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-4">
            <button className="text-black text-2xl">&#9776;</button>
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
                className="px-2 py-1 flex-grow outline-none"
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

        {/* Lower Section */}
        <div className="flex justify-center space-x-8 bg-purple-500 py-2 text-white text-lg">
          <span
            onClick={handleProductClick}
            className={`hover:bg-yellow-300 rounded hover:text-black ${
              isProductClicked ? "text-white" : ""
            }`}
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
