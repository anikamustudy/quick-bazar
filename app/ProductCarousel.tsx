import React from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  location: string;
  time: string;
  imageUrl: string;
}

const products: Product[] = [
  {
    id: 1,
    title: "IPhone 16 Pro Max 5G...",
    price: 12000,
    location: "Delhi",
    time: "5 mins ago",
    imageUrl: "/iphone.png  ",
  },
  {
    id: 2,
    title: "IPhone 16 Pro Max 5G...",
    price: 11999,
    location: "Hyderabad",
    time: "5 mins ago",
    imageUrl: "/iphone.png",
  },
  {
    id: 3,
    title: "IPhone 16 Pro Max 5G...",
    price: 11999,
    location: "Delhi",
    time: "5 mins ago",
    imageUrl: "/laptop.png",
  },
];

const ProductCarousel: React.FC = () => {
  return (
    <div>
      <div className="mb-6 pt-4 rounded-lg overflow-hidden shadow-lg gap-4">
        <img
          src="/banner.png"
          alt="Banner"
          className="w-full h-48 object-cover"
        />
      </div>
      {/*Auction */}
      <div className="  p-4 bg-gray-100 rounded-lg shadow-md justify-center w-full max-w-screen-lg mx-auto px-6 flex flex-col space-y-2">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Auction</h3>
          <a
            href="#"
            className="text-blue-500 hover:underline text-sm font-medium"
          >
            View More
          </a>
        </div>

        {/* Carousel Section */}
        <div className="relative ">
          {/* Previous Button */}
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-black rounded-full w-8 h-8 flex justify-center items-center z-10"
            aria-label="Previous"
          >
            ‹
          </button>

          {/* Product Cards */}
          <div className="flex overflow-x-auto gap-4 scrollbar-hide">
            {products.map((product) => (
              <div
                key={product.id}
                className="flex-shrink-0 w-64 bg-yellow-200 rounded-lg shadow-md"
              >
                <img
                  src={product.imageUrl}
                  alt={product.title}
                  className="w-full h-36 object-cover rounded-t-lg"
                />
                <div className="p-3">
                  <h4 className="text-sm font-semibold truncate">
                    {product.title}
                  </h4>
                  <p className="text-gray-700 text-sm font-bold mt-1">
                    ₹{product.price.toLocaleString()}
                  </p>
                  <p className="text-gray-500 text-xs justify-right items-right ">
                    {product.location}
                  </p>
                  <p className="text-gray-400 text-xs">{product.time}</p>
                  <button className="mt-3 px-4 py-1 text-sm text-black bg-yellow-300 rounded hover:bg-yellow-600">
                    View
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Next Button */}
          <button
            className="size-12 absolute right-0 top-1/2 -translate-y-1/2 bg-yellow-300 hover:bg-gray-300 text-black rounded-full w-8 h-8 flex justify-center items-center z-10"
            aria-label="Next"
          >
            ›
          </button>
        </div>
      </div>

      {/*Trending Now */}
      <div className="  p-4 bg-gray-100 rounded-lg shadow-md justify-center w-full max-w-screen-lg mx-auto px-6 flex flex-col space-y-2">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Trending Now</h3>
          <a
            href="#"
            className="text-blue-500 hover:underline text-sm font-medium"
          >
            View More
          </a>
        </div>

        {/* Carousel Section */}
        <div className="relative ">
          {/* Previous Button */}
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-black rounded-full w-8 h-8 flex justify-center items-center z-10"
            aria-label="Previous"
          >
            ‹
          </button>

          {/* Product Cards */}
          <div className="flex overflow-x-auto gap-4 scrollbar-hide">
            {products.map((product) => (
              <div
                key={product.id}
                className="flex-shrink-0 w-64 bg-yellow-200 rounded-lg shadow-md"
              >
                <img
                  src={product.imageUrl}
                  alt={product.title}
                  className="w-full h-36 object-cover rounded-t-lg"
                />
                <div className="p-3">
                  <h4 className="text-sm font-semibold truncate">
                    {product.title}
                  </h4>
                  <p className="text-gray-700 text-sm font-bold mt-1">
                    ₹{product.price.toLocaleString()}
                  </p>
                  <p className="text-gray-500 text-xs justify-right items-right ">
                    {product.location}
                  </p>
                  <p className="text-gray-400 text-xs">{product.time}</p>
                  <button className="mt-3 px-4 py-1 text-sm text-black bg-yellow-300 rounded hover:bg-yellow-600">
                    View
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Next Button */}
          <button
            className="size-12 absolute right-0 top-1/2 -translate-y-1/2 bg-yellow-300 hover:bg-gray-300 text-black rounded-full w-8 h-8 flex justify-center items-center z-10"
            aria-label="Next"
          >
            ›
          </button>
        </div>
      </div>

      {/*Latest */}
      <div className="  p-4 bg-gray-100 rounded-lg shadow-md justify-center w-full max-w-screen-lg mx-auto px-6 flex flex-col space-y-2">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Latest</h3>
          <a
            href="#"
            className="text-blue-500 hover:underline text-sm font-medium"
          >
            View More
          </a>
        </div>

        {/* Carousel Section */}
        <div className="relative ">
          {/* Previous Button */}
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-black rounded-full w-8 h-8 flex justify-center items-center z-10"
            aria-label="Previous"
          >
            ‹
          </button>

          {/* Product Cards */}
          <div className="flex overflow-x-auto gap-4 scrollbar-hide">
            {products.map((product) => (
              <div
                key={product.id}
                className="flex-shrink-0 w-64 bg-yellow-200 rounded-lg shadow-md"
              >
                <img
                  src={product.imageUrl}
                  alt={product.title}
                  className="w-full h-36 object-cover rounded-t-lg"
                />
                <div className="p-3">
                  <h4 className="text-sm font-semibold truncate">
                    {product.title}
                  </h4>
                  <p className="text-gray-700 text-sm font-bold mt-1">
                    ₹{product.price.toLocaleString()}
                  </p>
                  <p className="text-gray-500 text-xs justify-right items-right ">
                    {product.location}
                  </p>
                  <p className="text-gray-400 text-xs">{product.time}</p>
                  <button className="mt-3 px-4 py-1 text-sm text-black bg-yellow-300 rounded hover:bg-yellow-600">
                    View
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Next Button */}
          <button
            className="size-12 absolute right-0 top-1/2 -translate-y-1/2 bg-yellow-300 hover:bg-gray-300 text-black rounded-full w-8 h-8 flex justify-center items-center z-10"
            aria-label="Next"
          >
            ›
          </button>
        </div>
      </div>

      {/*Last Seen */}
      <div className="  p-4 bg-gray-100 rounded-lg shadow-md justify-center w-full max-w-screen-lg mx-auto px-6 flex flex-col space-y-2">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Last Seen</h3>
          <a
            href="#"
            className="text-blue-500 hover:underline text-sm font-medium"
          >
            View More
          </a>
        </div>

        {/* Carousel Section */}
        <div className="relative ">
          {/* Previous Button */}
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-black rounded-full w-8 h-8 flex justify-center items-center z-10"
            aria-label="Previous"
          >
            ‹
          </button>

          {/* Product Cards */}
          <div className="flex overflow-x-auto gap-4 scrollbar-hide">
            {products.map((product) => (
              <div
                key={product.id}
                className="flex-shrink-0 w-64 bg-yellow-200 rounded-lg shadow-md"
              >
                <img
                  src={product.imageUrl}
                  alt={product.title}
                  className="w-full h-36 object-cover rounded-t-lg"
                />
                <div className="p-3">
                  <h4 className="text-sm font-semibold truncate">
                    {product.title}
                  </h4>
                  <p className="text-gray-700 text-sm font-bold mt-1">
                    ₹{product.price.toLocaleString()}
                  </p>
                  <p className="text-gray-500 text-xs justify-right items-right ">
                    {product.location}
                  </p>
                  <p className="text-gray-400 text-xs">{product.time}</p>
                  <button className="mt-3 px-4 py-1 text-sm text-black bg-yellow-300 rounded hover:bg-yellow-600">
                    View
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Next Button */}
          <button
            className="size-12 absolute right-0 top-1/2 -translate-y-1/2 bg-yellow-300 hover:bg-gray-300 text-black rounded-full w-8 h-8 flex justify-center items-center z-10"
            aria-label="Next"
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCarousel;
