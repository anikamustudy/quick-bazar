

// import React from 'react';
// import { FaCouch, FaMobileAlt, FaBriefcase, FaCar, FaMotorcycle, FaHome, FaTabletAlt, FaBasketballBall, FaGraduationCap, FaDog, FaBuilding, FaUsers } from 'react-icons/fa';

// const CategoryPage = () => {
//   return (
//     <div className="flex justify-center">
//       <div className="max-w-screen-lg w-full px-6 py-4">
//         <div className="flex items-start w-full">
//           <div className="w-1/4 p-4 bg-gray-100 h-screen">
//             <ul className="space-y-4">
//               {[
//                 { icon: <FaCouch />, label: 'Furniture & Decor' },
//                 { icon: <FaMobileAlt />, label: 'Mobiles & Tablets' },
//                 { icon: <FaBriefcase />, label: 'Jobs' },
//                 { icon: <FaCar />, label: 'Cars' },
//                 { icon: <FaMotorcycle />, label: 'Bikes' },
//                 { icon: <FaHome />, label: 'Homes' },
//                 { icon: <FaTabletAlt />, label: 'Electronics' },
//                 { icon: <FaBuilding />, label: 'Real Estate' },
//                 { icon: <FaBasketballBall />, label: 'Sports & Fashion' },
//                 { icon: <FaGraduationCap />, label: 'Education' },
//                 { icon: <FaDog />, label: 'Pets & Pet Care' },
//                 { icon: <FaUsers />, label: 'Services' },
//               ].map((category, index) => (
//                 <li key={index} className="flex items-center space-x-3 text-gray-700 hover:bg-gray-200 p-3 rounded-md cursor-pointer transition-all">
//                   <span className="text-purple-500 text-2xl">{category.icon}</span>
//                   <span className="text-lg font-medium">{category.label}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div className="w-3/4 p-6 bg-gray-50">
//             {/* Banner */}
//             <div className="mb-6 rounded-lg overflow-hidden shadow-lg">
//               <img src="/banner.png" alt="Banner" className="w-full h-48 object-cover" />
//             </div>

//             {/* Mobile & Tablets Section */}
//             <div className="grid grid-cols-2 gap-6">
//               <div className="border rounded-lg shadow-md overflow-hidden bg-white">
//                 <img src="/iphone-16-pro-max-5g-dubai.png" alt="iPhone 16 pro max 5g" className="w-full" />
//                 <div className="p-4">
//                   <h2 className="font-semibold text-xl">iPhone 16 pro max 5g...Dubai</h2>
//                   <p className="text-gray-600 text-sm">₹ 12,000</p>
//                   <div className="mt-4">
//                     <a href="#" className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md">
//                       View
//                     </a>
//                   </div>
//                 </div>
//               </div>

//               <div className="border rounded-lg shadow-md overflow-hidden bg-white">
//                 <img src="/iphone-16-pro-max-5g-cod.png" alt="iPhone 16 pro max 5g cod" className="w-full" />
//                 <div className="p-4">
//                   <h2 className="font-semibold text-xl">iPhone 16 pro max 5g...cod av</h2>
//                   <p className="text-gray-600 text-sm">₹ 11,999</p>
//                   <div className="mt-4">
//                     <a href="#" className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md">
//                       View
//                     </a>
//                   </div>
//                 </div>
//               </div>

//               <div className="border rounded-lg shadow-md overflow-hidden bg-white">
//                 <img src="/iphone-16-pro-max-5g-cod.png" alt="iPhone 16 pro max 5g cod" className="w-full" />
//                 <div className="p-4">
//                   <h2 className="font-semibold text-xl">iPhone 16 pro max 5g...cod av</h2>
//                   <p className="text-gray-600 text-sm">₹ 11,999</p>
//                   <div className="mt-4">
//                     <a href="#" className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md">
//                       View
//                     </a>
//                   </div>
//                 </div>
//               </div>

//               <div className="border rounded-lg shadow-md overflow-hidden bg-white">
//                 <img src="/iphone-16-pro-max-5g-dubai.png" alt="iPhone 16 pro max 5g" className="w-full" />
//                 <div className="p-4">
//                   <h2 className="font-semibold text-xl">iPhone 16 pro max 5g...Dubai</h2>
//                   <p className="text-gray-600 text-sm">₹ 11,999</p>
//                   <div className="mt-4">
//                     <a href="#" className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md">
//                       View
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CategoryPage;



import React from 'react';
import { FaCouch, FaMobileAlt, FaBriefcase, FaCar, FaMotorcycle, FaHome, FaTabletAlt, FaBasketballBall, FaGraduationCap, FaDog, FaBuilding, FaUsers } from 'react-icons/fa';
import ProductCarousel from './ProductCarousel';

const CategoryPage = () => {
  return (
    <div className="flex justify-center">
      <div className="max-w-screen-lg w-full px-6 py-4">
        <div className="flex items-start w-full">
          <div className="w-1/4 p-4 bg-gray-100 h-screen">
            <ul className="space-y-4">
              {[
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
              ].map((category, index) => (
                <li key={index} className="flex items-center space-x-3 text-gray-700 hover:bg-gray-200 p-3 rounded-md cursor-pointer transition-all">
                  <span className="text-purple-500 text-2xl">{category.icon}</span>
                  <span className="text-lg font-medium">{category.label}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-3/4 p-6 bg-gray-50">
            {/* Banner */}
            <div className="mb-6 rounded-lg overflow-hidden shadow-lg">
              <img src="/banner.png" alt="Banner" className="w-full h-48 object-cover" />
            </div>
<ProductCarousel />
            {/* Mobile & Tablets Section */}
            {/* <div className="grid grid-cols-2 gap-6">
              <div className="border rounded-lg shadow-md overflow-hidden bg-white">
                <img src="/iphone.png" alt="iPhone 16 pro max 5g" className="w-full" />
                <div className="p-4 bg-yellow-300 text-black">
                  <h2 className="font-semibold text-xl">iPhone 16 pro max 5g...Dubai</h2>
                  <p className="text-sm">₹ 12,000</p>
                  <div className="mt-4">
                    <a href="#" className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2 px-4 rounded-md">
                      View
                    </a>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg shadow-md overflow-hidden bg-white">
                <img src="/iphone2.png" alt="iPhone 16 pro max 5g cod" className="w-full" />
                <div className="p-4 bg-yellow-300 text-black">
                  <h2 className="font-semibold text-xl">iPhone 16 pro max 5g...cod av</h2>
                  <p className="text-sm">₹ 11,999</p>
                  <div className="mt-4">
                    <a href="#" className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2 px-4 rounded-md">
                      View
                    </a>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg shadow-md overflow-hidden bg-white">
                <img src="/laptop.png" alt="iPhone 16 pro max 5g cod" className="w-full" />
                <div className="p-4 bg-yellow-300 text-black">
                  <h2 className="font-semibold text-xl">iPhone 16 pro max 5g...cod av</h2>
                  <p className="text-sm">₹ 11,999</p>
                  <div className="mt-4">
                    <a href="#" className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2 px-4 rounded-md">
                      View
                    </a>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg shadow-md overflow-hidden bg-white">
                <img src="/laptop.png" alt="iPhone 16 pro max 5g" className="w-full" />
                <div className="p-4 bg-yellow-300 text-black">
                  <h2 className="font-semibold text-xl">iPhone 16 pro max 5g...Dubai</h2>
                  <p className="text-sm">₹ 11,999</p>
                  <div className="mt-4">
                    <a href="#" className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2 px-4 rounded-md">
                      View
                    </a>
                  </div>
                </div>
              </div>
            </div> */}


          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;