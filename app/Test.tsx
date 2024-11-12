// Test.tsx
"use client";

import React, { useState, useEffect } from "react";
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
  const [showUpperSection, setShowUpperSection] = useState(true);

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

  return (
    <header className="w-full bg-white shadow-md py-2">
      <div className="w-full max-w-screen-lg mx-auto px-6 flex flex-col space-y-2">
        {/* Upper Section */}
        {showUpperSection && (
          <div className="flex items-center justify-between text-gray-600">
            <div className="flex space-x-2">
              <span className="flex items-center space-x-1">
                <IoMdBusiness className="text-lg" />
                <span className="hidden sm:inline">For Businesses</span>
              </span>
              <span className="flex items-center space-x-1 text-red-600">
                <RiDownload2Line className="text-lg" />
                <span className="hidden sm:inline">Download The App</span>
              </span>
              <span className="flex items-center space-x-1">
                <FaTags className="text-lg" />
                <span className="hidden sm:inline">Deals</span>
              </span>
              <span className="flex items-center space-x-1">
                <FaStore className="text-lg" />
                <span className="hidden sm:inline">Visit Our Store</span>
              </span>
              <span className="flex items-center space-x-1">
                <FaPercentage className="text-lg" />
                <span className="hidden sm:inline">Discounts on Premium Ads</span>
              </span>
              <span className="flex items-center space-x-1">
                <FaCommentDots className="text-lg" />
                <span className="hidden sm:inline">NXT</span>
              </span>
            </div>
          </div>
        )}

        {/* Lower Section */}
        <div className="flex items-center justify-between">
          {/* Left: Menu and Logo */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 text-2xl">&#9776;</button>
            <img src="/logo.png" alt="Quikr" className="w-24" />
          </div>

          {/* Center: Search Bar */}
          <div className="flex items-center border rounded-md overflow-hidden w-full max-w-md">
            <select className="px-2 bg-gray-100 border-r text-gray-600 outline-none">
              <option>All India</option>
            </select>
            <select className="px-2 bg-gray-100 border-r text-gray-600 outline-none">
              <option>All Categories</option>
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
        <div className="flex justify-center space-x-8 bg-teal-500 py-2 text-white text-lg">
          <span>Home</span>
          <span>Sell</span>
          <span>Social &#9660;</span>
          <span>Favourite</span>
          <span>Help</span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
