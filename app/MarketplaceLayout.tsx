// import React from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// const ProductCard = ({ title, price, location, time, imageUrl }) => (
//   <div className="min-w-[250px] bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-yellow-300">
//     <div className="relative h-48 w-full">
//       <img
//         src={imageUrl || "/api/placeholder/250/192"}
//         alt={title}
//         className="w-full h-full object-cover rounded-t-lg"
//       />
//     </div>
//     <div className="p-4">
//       <h3 className="text-sm font-medium text-purple-500 truncate">{title}</h3>
//       <div className="mt-2 flex justify-between items-center">
//         <span className="text-lg font-bold text-black">₹{price.toLocaleString()}</span>
//         <span className="text-sm text-black">{location}</span>
//       </div>
//       <div className="mt-3 flex justify-between items-center">
//         <button className="px-4 py-1 text-white bg-purple-500 rounded-md text-sm hover:bg-purple-600 transition-colors">
//           View
//         </button>
//         <span className="text-sm text-black/60">{time}</span>
//       </div>
//     </div>
//   </div>
// );

// const CategorySection = ({ title, products }) => {
//   const scrollContainerRef = React.useRef(null);

//   const scroll = (direction) => {
//     if (scrollContainerRef.current) {
//       const scrollAmount = 300;
//       scrollContainerRef.current.scrollBy({
//         left: direction === 'left' ? -scrollAmount : scrollAmount,
//         behavior: 'smooth'
//       });
//     }
//   };

//   return (
//     <div className="mb-8">
//       <div className="flex justify-between items-center mb-4 bg-yellow-300 p-4 rounded-lg">
//         <h2 className="text-xl font-bold text-black">{title}</h2>
//         <a href="#" className="text-purple-500 text-sm hover:text-purple-600 font-medium">
//           View All Results
//         </a>
//       </div>
//       <div className="relative">
//         <button
//           onClick={() => scroll('left')}
//           className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 p-2 rounded-full bg-purple-500 text-white shadow-md hover:bg-purple-600 transition-colors"
//         >
//           <ChevronLeft className="w-5 h-5" />
//         </button>
//         <div
//           ref={scrollContainerRef}
//           className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
//         >
//           {products.map((product, idx) => (
//             <ProductCard key={idx} {...product} />
//           ))}
//         </div>
//         <button
//           onClick={() => scroll('right')}
//           className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 p-2 rounded-full bg-purple-500 text-white shadow-md hover:bg-purple-600 transition-colors"
//         >
//           <ChevronRight className="w-5 h-5" />
//         </button>
//       </div>
//     </div>
//   );
// };

// const MarketplaceLayout = () => {
//   const mobileProducts = [
//     {
//       title: "brand new open box only. :! Samsung S23 Ultra",
//       price: 99000,
//       location: "Mohali",
//       time: "13 mins ago",
//       imageUrl: "/api/placeholder/250/192"
//     },
//     {
//       title: "no scratch no dent suprab condition",
//       price: 21000,
//       location: "Bangalore",
//       time: "25 mins ago",
//       imageUrl: "/api/placeholder/250/192"
//     },
//     {
//       title: "Contact 82938 06662 Special Price",
//       price: 3499,
//       location: "Delhi",
//       time: "27 mins ago",
//       imageUrl: "/api/placeholder/250/192"
//     },
//     {
//       title: "iPhone 14 Pro Max",
//       price: 89000,
//       location: "Mumbai",
//       time: "35 mins ago",
//       imageUrl: "/api/placeholder/250/192"
//     }
//   ];

//   const homeProducts = [
//     {
//       title: "pearls and beads",
//       price: 200,
//       location: "Delhi",
//       time: "2 mins ago",
//       imageUrl: "/api/placeholder/250/192"
//     },
//     {
//       title: "7 month old bed with side table",
//       price: 17000,
//       location: "Panchkula",
//       time: "4 mins ago",
//       imageUrl: "/api/placeholder/250/192"
//     },
//     {
//       title: "urban terrain 7 gear new cycle",
//       price: 6500,
//       location: "Hyderabad",
//       time: "24 mins ago",
//       imageUrl: "/api/placeholder/250/192"
//     },
//     {
//       title: "4-seater Sofa cum bed",
//       price: 14000,
//       location: "Bangalore",
//       time: "28 mins ago",
//       imageUrl: "/api/placeholder/250/192"
//     }
//   ];

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-8 bg-white min-h-screen">
//       <CategorySection title="Mobile & Tablets" products={mobileProducts} />
//       <CategorySection title="Home & Lifestyle" products={homeProducts} />
//     </div>
//   );
// };

// export default MarketplaceLayout;


import React from 'react';

const MobileAndTablets = () => {
  return (
    <div className="bg-white">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Mobile & Tablets</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-yellow-300 rounded-lg shadow-md">
          <img src="contact-82938-06662-special.jpg" alt="Contact 82938 06662 Special" className="rounded-t-lg" />
          <div className="p-4">
            <h3 className="text-lg font-bold text-gray-800">Contact 82938 06662 Special</h3>
            <p className="text-gray-600">Lucknow</p>
            <p className="text-gray-800 font-bold">₹3,499</p>
            <button className="bg-purple-300 hover:bg-purple-400 text-white font-bold py-2 px-4 rounded mt-2">
              View
            </button>
          </div>
        </div>
        {/* Add more product cards here */}
      </div>
    </div>
  );
};

const HomeAndLifestyle = () => {
  return (
    <div className="bg-white">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Home & Lifestyle</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-yellow-300 rounded-lg shadow-md">
          <img src="queen-size-bed-with-storage.jpg" alt="Queen size bed with storage" className="rounded-t-lg" />
          <div className="p-4">
            <h3 className="text-lg font-bold text-gray-800">Queen size bed with storage</h3>
            <p className="text-gray-600">Bangalore</p>
            <p className="text-gray-800 font-bold">₹9,950</p>
            <button className="bg-purple-300 hover:bg-purple-400 text-white font-bold py-2 px-4 rounded mt-2">
              View
            </button>
          </div>
        </div>
        {/* Add more product cards here */}
      </div>
    </div>
  );
};

const MarketplaceLayout = () => {
  return (
    <div className="bg-white text-gray-800 font-sans">
      <MobileAndTablets />
      <HomeAndLifestyle />
    </div>
  );
};

export default  MarketplaceLayout;