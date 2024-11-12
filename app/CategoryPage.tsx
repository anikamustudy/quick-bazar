import React from 'react';
import { FaCouch, FaMobileAlt, FaBriefcase, FaCar, FaMotorcycle, FaHome, FaTabletAlt, FaBasketballBall, FaGraduationCap, FaDog, FaBuilding, FaUsers } from 'react-icons/fa';
import { useSidebar } from './SidebarContext';
const categories = [
  { icon: <FaCouch />, label: 'Furniture & Decor' },
  { icon: <FaMobileAlt />, label: 'Mobiles & Tablets' },
  { icon: <FaBriefcase />, label: 'Jobs' },
  { icon: <FaCar />, label: 'Cars' },
  { icon: <FaMotorcycle />, label: 'Bikes' },
  { icon: <FaHome />, label: 'Homes' },
  { icon: <FaTabletAlt />, label: 'Electronics' },
  { icon: <FaBuilding />, label: 'Real Estate' },
  { icon: <FaBasketballBall />, label: 'Sports & Fashion' },
  { icon: <FaGraduationCap />, label: 'Education' },
  { icon: <FaDog />, label: 'Pets & Pet Care' },
  { icon: <FaUsers />, label: 'Services' },
];

// const FeatureCard = ({ title, description, options }) => (
//   <div className="p-4 rounded-lg shadow-md bg-white transition-transform transform hover:scale-105">
//     <h2 className="text-xl font-semibold text-teal-600">{title}</h2>
//     <p className="text-gray-600 mt-1">{description}</p>
//     <ul className="mt-3 space-y-2 text-teal-600 font-medium">
//       {options.map((option, index) => (
//         <li key={index} className="hover:underline cursor-pointer">{option}</li>
//       ))}
//     </ul>
//     <a href="#" className="text-blue-500 mt-3 inline-block font-semibold hover:underline">View All Categories</a>
//   </div>
// );

// const FeatureCard = ({ title, description, options, titleStyle }) => (
//     <div className="border rounded-lg shadow-md overflow-hidden">
//       <div className={`text-center ${titleStyle}`}>
//         <h2 className="font-semibold">{title}</h2>
//       </div>
//       <div className="p-4">
//         <p>{description}</p>
//         <ul className="mt-2 list-disc list-inside">
//           {options.map(option => (
//             <li key={option}>{option}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
  

const FeatureCard = ({ title, description, options, titleStyle}) => (
    <div className="border rounded-lg shadow-md overflow-hidden bg-white">
      {/* Title Section */}
      <div className={`text-center py-2 ${titleStyle} flex`  }>
        <h2 className=" font-semibold text-xl text-white">{title}</h2>
        {/* <a href="#" className="text-blue-500 text-sm font-semibold hover:underline ">See All</a> */}
      </div>
  
      {/* Description and Options */}
      <div className="p-4">
        <p className="text-gray-600 text-sm">{description}</p>
        <ul className="mt-3 space-y-2 text-blue-500 font-medium">
          {options.map(option => (
            <li key={option} className="flex items-center space-x-1">
              <span className="text-gray-400">&#10148;</span> {/* Right arrow icon */}
              <a href="#" className="hover:underline">{option}</a>
            </li>
          ))}
        </ul>
        
        {/* View All Categories */}
        <div className="mt-4">
          <a href="#" className="text-blue-500 text-sm font-semibold hover:underline">View All Categories</a>
        </div>
      </div>
    </div>
  );
  
 
  

const CategoryPage = () => {
    const {isSidebarOpen} = useSidebar();

  return (
    <div className="flex justify-center">
      <div className="max-w-screen-lg w-full px-6 py-4">
        {/* Sidebar and Main Content Wrapper */}

       
        <div className="flex items-start w-full">
          {/* Sidebar */}
          {isSidebarOpen && (
          <div className="w-1/4 p-4 bg-gray-100 h-screen">
            <ul className="space-y-4">
              {categories.map((category, index) => (
                <li key={index} className="flex items-center space-x-3 text-gray-700 hover:bg-gray-200 p-3 rounded-md cursor-pointer transition-all">
                  <span className="text-teal-500 text-2xl">{category.icon}</span>
                  <span className="text-lg font-medium">{category.label}</span>
                </li>
              ))}
            </ul>
          </div>
          )}

          {/* Main Content */}
          <div className="w-3/4 p-6 bg-gray-50">
            {/* Banner */}
            <div className="mb-6 rounded-lg overflow-hidden shadow-lg">
              <img src="/banner.jpg" alt="Banner" className="w-full h-48 object-cover" />
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-2 gap-6">
              <FeatureCard 
                title="NepsunBazaar"
                titleStyle="bg-teal-500 text-white py-2 px-4 rounded-t-md shadow-md"
                description="A new way to buy and sell used goods"
                options={['Furniture & Decor', 'Electronics & Appliances', 'Mobiles & Tablets']}
              />
              <FeatureCard
                title="NepsunHomes"
                 titleStyle="bg-teal-500 text-white py-2 px-4 rounded-t-md shadow-md"
                description="Buy, Sell & Rent properties"
                options={['Apartment for Sale', 'Apartment for Rent', 'Commercial Properties']}
              />
              <FeatureCard
                title="NepsunJobs"
                 titleStyle="bg-teal-500 text-white py-2 px-4 rounded-t-md shadow-md"
                description="Find thousands of jobs across industries"
                options={['Telecaller', 'Delivery', 'Back Office']}
              />
              <FeatureCard
                title="NepsunCars"
                 titleStyle="bg-teal-500 text-white py-2 px-4 rounded-t-md shadow-md"
                description="Buy & sell cars or book auto services"
                options={['Used Cars', 'New Cars', 'Car Services']}
              />
              <FeatureCard
                title="NepsunBikes"
                 titleStyle="bg-teal-500 text-white py-2 px-4 rounded-t-md shadow-md"
                description="Find used bikes across India"
                options={['Used Bikes', 'New Bikes', 'Bike Services']}
              />
              <FeatureCard
                title="NepsunEasy"
                 titleStyle="bg-teal-500 text-white py-2 px-4 rounded-t-md shadow-md"
                description="Connect with experts for services"
                options={['Interior Design', 'Movers & Packers', 'B2B Suppliers']}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;

