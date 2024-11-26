import React from "react";
import {
  FaCouch,
  FaMobileAlt,
  FaBriefcase,
  FaCar,
  FaMotorcycle,
  FaHome,
  FaTabletAlt,
  FaBasketballBall,
  FaGraduationCap,
  FaDog,
  FaBuilding,
  FaUsers,
} from "react-icons/fa";
import ProductCarousel from "./ProductCarousel";
// import { useSidebar } from './SidebarContext';
// import { useSidebar } from './SidebarContext';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.min.css';
// import { Autoplay, Pagination } from 'swiper';

const categories = [
  { icon: <FaCouch />, label: "Furniture & Decor" },
  { icon: <FaMobileAlt />, label: "Mobiles & Tablets" },
  { icon: <FaBriefcase />, label: "Jobs" },
  { icon: <FaCar />, label: "Cars" },
  { icon: <FaMotorcycle />, label: "Bikes" },
  { icon: <FaHome />, label: "Homes" },
  { icon: <FaTabletAlt />, label: "Electronics" },
  { icon: <FaBuilding />, label: "Real Estate" },
  { icon: <FaBasketballBall />, label: "Sports & Fashion" },
  { icon: <FaGraduationCap />, label: "Education" },
  // { icon: <FaDog />, label: "Pets & Pet Care" },
  // { icon: <FaUsers />, label: "Services" },
];

const CategoryPage = () => {
  return (
    <div className="flex justify-center">
      <div className="max-w-screen-lg py-4">
        <div className="flex items-start w-full  bg-yellow-100">
          {/* {isSidebarOpen && ( */}
          <div className="w-1/4 p-4 bg-yellow-100 h-screen">
            <ul className="space-y-4">
              {categories.map((category, page) => (
                <li
                  key={page}
                  className="flex items-center space-x-3 text-gray-700 hover:bg-gray-200 p-3 rounded-md cursor-pointer transition-all"
                >
                  <span className="text-purple-500 text-2xl">
                    {category.icon}
                  </span>
                  <span className="text-lg font-medium">{category.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      

      <ProductCarousel />
    </div>
  );
};

export default CategoryPage;
