import React from "react";
import clothing from "../explore_assets/photo-1441984904996-e0b6ba687e04.avif";
import fitness from "../explore_assets/fitness.avif";
import technology from "../explore_assets/technology.avif";
import cake from '../explore_assets/cake.avif'
import dairy from '../explore_assets/dairy.avif'
import dhol from '../explore_assets/dhol.jpg'
import hotels from '../explore_assets/hotels.avif'
import food from '../explore_assets/food.avif'
import accessories from '../explore_assets/accessories.avif'

const Explore = () => {
  return (
    <div className="p-6 relative">
      {/* Close Button */}
      <button
        onClick={() => window.history.back()}
        className="absolute top-4 right-4 text-black cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <h1 className="text-3xl font-bold mb-4 text-gray-800">
        Recently Added Business
      </h1>

      <div className="flex gap-6 overflow-x-auto whitespace-nowrap">
        {/* Clothing Card */}
        <div className="w-[32%] min-w-[300px] bg-white dark:bg-[#002954] rounded-2xl overflow-hidden shadow-lg">
          <img
            className="w-full h-56 object-cover"
            src={clothing}
            alt="Clothing Business"
          />

          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-gray-900 dark:text-white">
              Indian Clothing Brands
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-base">
              Discover the richness of traditional and modern Indian fashion
              through our curated clothing brands.
            </p>
          </div>

          <div className="px-6 pt-4 pb-4">
            <a
              href="https://example.com/clothing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#FF9E2F]  text-white font-semibold py-2 px-4 rounded"
            >
              View Website
            </a>
          </div>
        </div>

        {/* Fitness Card */}
        <div className="w-[32%] min-w-[300px] bg-white dark:bg-[#002954] rounded-2xl overflow-hidden shadow-lg">
          <img
            className="w-full h-56 object-cover"
            src={fitness}
            alt="Fitness Business"
          />

          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-gray-900 dark:text-white">
              Fitness Centers
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-base">
              Achieve your health goals with top-rated fitness centers and
              expert trainers around you.
            </p>
          </div>

          <div className="px-6 pt-4 pb-4">
            <a
              href="https://example.com/fitness"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#FF9E2F] text-white font-semibold py-2 px-4 rounded"
            >
              View Website
            </a>
          </div>
        </div>

        {/* Technology Card */}
        <div className="w-[32%] min-w-[300px] bg-white dark:bg-[#002954] rounded-2xl overflow-hidden shadow-lg">
          <img
            className="w-full h-56 object-cover"
            src={technology}
            alt="Technology Business"
          />

          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-gray-900 dark:text-white">
              Tech Innovators
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-base">
              Explore groundbreaking tech companies that are reshaping the
              future with innovation.
            </p>
          </div>

          <div className="px-6 pt-4 pb-4">
            <a
              href="https://example.com/technology"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#FF9E2F] text-white font-semibold py-2 px-4 rounded"
            >
              View Website
            </a>
          </div>
        </div>
      </div>

      {/* section 2 */}

      <h1 className="text-3xl font-bold mb-4 mt-30 text-gray-800">
        Popular Business
      </h1>

      <div className="flex gap-6 overflow-x-auto whitespace-nowrap">
        {/* cake Card */}
        <div className="w-[32%] min-w-[300px] bg-white dark:bg-[#002954] rounded-2xl overflow-hidden shadow-lg">
          <img
            className="w-full h-56 object-cover"
            src={cake}
            alt="Clothing Business"
          />

          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-gray-900 dark:text-white">
              Online Cake Makers
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-base">
              Discover the richness of traditional and modern Indian fashion
              through our curated clothing brands.
            </p>
          </div>

          <div className="px-6 pt-4 pb-4">
            <a
              href="https://example.com/clothing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#FF9E2F] text-white font-semibold py-2 px-4 rounded"
            >
              View Website
            </a>
          </div>
        </div>

        {/* DAIRY Card */}
        <div className="w-[32%] min-w-[300px] bg-white dark:bg-[#002954] rounded-2xl overflow-hidden shadow-lg">
          <img
            className="w-full h-56 object-cover"
            src={dairy}
            alt="Fitness Business"
          />

          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-gray-900 dark:text-white">
              Dairy Products
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-base">
              Achieve your health goals with top-rated fitness centers and
              expert trainers around you.
            </p>
          </div>

          <div className="px-6 pt-4 pb-4">
            <a
              href="https://example.com/fitness"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#FF9E2F] text-white font-semibold py-2 px-4 rounded"
            >
              View Website
            </a>
          </div>
        </div>

        {/* Indian Dhol Card */}
        <div className="w-[32%] min-w-[300px] bg-white dark:bg-[#002954] rounded-2xl overflow-hidden shadow-lg">
          <img
            className="w-full h-56 object-cover"
            src={dhol}
            alt="Technology Business"
          />

          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-gray-900 dark:text-white">
              Indian Dhol Player
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-base">
              Explore groundbreaking tech companies that are reshaping the
              future with innovation.
            </p>
          </div>

          <div className="px-6 pt-4 pb-4">
            <a
              href="https://example.com/technology"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#FF9E2F] text-white font-semibold py-2 px-4 rounded"
            >
              View Website
            </a>
          </div>
        </div>
      </div>

      {/* section 3 */}

      <h1 className="text-3xl font-bold mt-30 mb-4 text-gray-800">
        Featured Business
      </h1>

      <div className="flex gap-6 overflow-x-auto whitespace-nowrap">
        {/* Clothing Card */}
        <div className="w-[32%] min-w-[300px] bg-white dark:bg-[#002954] rounded-2xl overflow-hidden shadow-lg">
          <img
            className="w-full h-56 object-cover"
            src={hotels}
            alt="Clothing Business"
          />

          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-gray-900 dark:text-white">
              Indian Hotels
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-base">
              Discover the richness of traditional and modern Indian fashion
              through our curated clothing brands.
            </p>
          </div>

          <div className="px-6 pt-4 pb-4">
            <a
              href="https://example.com/clothing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#FF9E2F] text-white font-semibold py-2 px-4 rounded"
            >
              View Website
            </a>
          </div>
        </div>

        {/* Fitness Card */}
        <div className="w-[32%] min-w-[300px] bg-white dark:bg-[#002954] rounded-2xl overflow-hidden shadow-lg">
          <img
            className="w-full h-56 object-cover"
            src={food}
            alt="Fitness Business"
          />

          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-gray-900 dark:text-white">
              Indian Food
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-base">
              Achieve your health goals with top-rated fitness centers and
              expert trainers around you.
            </p>
          </div>

          <div className="px-6 pt-4 pb-4">
            <a
              href="https://example.com/fitness"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#FF9E2F] text-white font-semibold py-2 px-4 rounded"
            >
              View Website
            </a>
          </div>
        </div>

        {/* Technology Card */}
        <div className="w-[32%] min-w-[300px] bg-white dark:bg-[#002954] rounded-2xl overflow-hidden shadow-lg">
          <img
            className="w-full h-56 object-cover"
            src={accessories}
            alt="Technology Business"
          />

          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-gray-900 dark:text-white">
              Accessories
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-base">
              Explore groundbreaking tech companies that are reshaping the
              future with innovation.
            </p>
          </div>

          <div className="px-6 pt-4 pb-4">
            <a
              href="https://example.com/technology"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#FF9E2F] text-white font-semibold py-2 px-4 rounded"
            >
              View Website
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
