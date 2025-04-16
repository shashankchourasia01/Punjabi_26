import React from "react";
// import food from "../more_assets/salad 2.png";
// import health from "../more_assets/healthcare 2.png";
import clothing from "../more_assets/clothing_new.png";
// import beauty from "../more_assets/beauty-product 2.png";
import fitness from "../more_assets/fitness_new.png";
import finance from "../more_assets/finance_new.png";
// import event from "../more_assets/event 1.png";
import kid from "../more_assets/playtime 1.png";
import recruitment from '../more_assets/talent-search 1.png'
import automotive from '../more_assets/automotive_new.png'
import transport from '../more_assets/warehouse 1.png'
import travel from '../more_assets/travelt_new.png'
import law from '../more_assets/legal 1.png'
import gurdwara from '../more_assets/gurudwara.png'
import { useNavigate } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import cap from "../result_assets/cap_new.png";
import more_icon from "../result_assets/more_new.png";


const More = () => {

    const navigate = useNavigate();

    const handleCategoryClick = (category) => {
      navigate(`/category/${encodeURIComponent(category)}`); // Navigate to category page
    };
    
  return (
    <div >
        <h1 className=" flex items-center justify-center font-semibold text-4xl">All Categories</h1>
        {/* Close Button (Top-Right) */}
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
      <div
        id="explore"
        className="w-[80%] mx-auto flex flex-wrap justify-center items-center gap-x-40 "
      >

        <div className="flex items-center justify center flex-col mt-10 w-40">
          <button key={"food"} onClick={() => handleCategoryClick("Clothing")}>
            <div className="flex items-center justify-center">
              <img
                src={clothing}
                alt="Food & Beverages"
                className="w-13 h-13 object-contain rounded-full"
              />
            </div>
          </button>
          <p className="text-center mt-6 mb-6 text-gray-700 font-medium text-xl">
            Clothing
          </p>
        </div>

        <div className="flex items-center justify center flex-col mt-10 w-40">
          <button key={"food"} onClick={() => handleCategoryClick("Fitness")}>
            <div className="flex items-center justify-center">
              <img
                src={fitness}
                alt="Food & Beverages"
                className="w-13 h-13 object-contain rounded-full"
              />
            </div>
          </button>
          <p className="text-center mt-6 mb-6 text-gray-700 font-medium text-xl">
            Fitness
          </p>
        </div>

        <div className="flex items-center justify center flex-col mt-10 w-40">
          <button key={"food"} onClick={() => handleCategoryClick("Finance")}>
            <div className="flex items-center justify-center">
              <img
                src={finance}
                alt="Food & Beverages"
                className="w-13 h-13 object-contain rounded-full"
              />
            </div>
          </button>
          <p className="text-center mt-6 mb-6 text-gray-700 font-medium text-xl">
            Finance
          </p>
        </div>

        <div className="flex items-center justify-center flex-col mt-10 w-40">
          <button key={"food"} onClick={() => handleCategoryClick("Kid")}>
            <div className="flex items-center justify-center">
              <img
                src={kid}
                alt="Food & Beverages"
                className="w-13 h-13 object-contain rounded-full"
              />
            </div>
          </button>
          <p className="text-center mt-6 mb-6 text-gray-700 font-medium text-xl">
            Kid
          </p>
        </div>

        {/* 9 */}

        <div className="flex items-center justify-center flex-col mt-10 w-40">
          <button key={"food"} onClick={() => handleCategoryClick("Recritment")}>
            <div className="flex items-center justify-center">
              <img
                src={recruitment}
                alt="Food & Beverages"
                className="w-13 h-13 object-contain rounded-full"
              />
            </div>
          </button>
          <p className="text-center mt-6 mb-6 text-gray-700 font-medium text-xl">
            Recritment
          </p>
        </div>

        {/* 10 */}
        <div className="flex items-center justify-center flex-col mt-10 w-40">
          <button key={"food"} onClick={() => handleCategoryClick("Automotive")}>
            <div className="flex items-center justify-center">
              <img
                src={automotive}
                alt="Food & Beverages"
                className="w-13 h-13 object-contain rounded-full"
              />
            </div>
          </button>
          <p className="text-center mt-6 mb-6 text-gray-700 font-medium text-xl">
            Automotive
          </p>
        </div>

        {/* 11 */}
        <div className="flex items-center justify-center flex-col mt-10 w-40">
          <button key={"food"} onClick={() => handleCategoryClick("Transport")}>
            <div className="flex items-center justify-center">
              <img
                src={transport}
                alt="Food & Beverages"
                className="w-13 h-13 object-contain rounded-full"
              />
            </div>
          </button>
          <p className="text-center mt-6 mb-6 text-gray-700 font-medium text-xl">
            Transport
          </p>
        </div>

        {/* 12 */}
        <div className="flex items-center justify-center flex-col mt-10 w-40">
          <button key={"food"} onClick={() => handleCategoryClick("Education")}>
            <div className="flex items-center justify-center">
              <img
                src={cap}
                alt="Food & Beverages"
                className="w-13 h-13 object-contain rounded-full"
              />
            </div>
          </button>
          <p className="text-center mt-6 mb-6 text-gray-700 font-medium text-xl">
            Education
          </p>
        </div>

        {/* 13 */}
        <div className="flex items-center justify-center flex-col mt-10 w-40">
          <button key={"food"} onClick={() => handleCategoryClick("Travel")}>
            <div className="flex items-center justify-center">
              <img
                src={travel}
                alt="Food & Beverages"
                className="w-13 h-13 object-contain rounded-full"
              />
            </div>
          </button>
          <p className="text-center mt-6 mb-6 text-gray-700 font-medium text-xl">
            Travel
          </p>
        </div>

        {/* 14 */}
        <div className="flex items-center justify-center flex-col mt-10 w-40">
          <button key={"food"} onClick={() => handleCategoryClick("Law")}>
            <div className="flex items-center justify-center">
              <img
                src={law}
                alt="Food & Beverages"
                className="w-13 h-13 object-contain rounded-full"
              />
            </div>
          </button>
          <p className="text-center mt-6 mb-6 text-gray-700 font-medium text-xl">
            Law
          </p>
        </div>

        {/* 15 */}
        <div className="flex items-center justify-center flex-col mt-10 w-40">
          <button key={"food"} onClick={() => handleCategoryClick("Gurdwara")}>
            <div className="flex items-center justify-center">
              <img
                src={gurdwara}
                alt="Food & Beverages"
                className="w-13 h-13 object-contain rounded-full"
              />
            </div>
          </button>
          <p className="text-center mt-6 mb-6 text-gray-700 font-medium text-xl">
            Gurdwara
          </p>
        </div>

        {/* 16 */}
        <div className="flex items-center justify-center flex-col mt-10 w-40">
          <button key={"food"} onClick={() => handleCategoryClick("More")}>
            <div className="flex items-center justify-center">
              <img
                src={more_icon}
                alt="Food & Beverages"
                className="w-13 h-13 object-contain rounded-full"
              />
            </div>
          </button>
          <p className="text-center mt-6 mb-6 text-gray-700 font-medium text-xl">
            More
          </p>
        </div>


      </div>
    </div>
  );
};

export default More;
