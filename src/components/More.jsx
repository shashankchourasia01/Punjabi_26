import React from "react";
import food from "../more_assets/salad 2.png";
import health from "../more_assets/healthcare 2.png";
import clothing from "../more_assets/laundry.png";
import beauty from "../more_assets/beauty-product 2.png";
import fitness from "../more_assets/dumbbell 1.png";
import finance from "../more_assets/budget 1.png";
import event from "../more_assets/event 1.png";
import kid from "../more_assets/playtime 1.png";
import recruitment from '../more_assets/talent-search 1.png'
import automotive from '../more_assets/automotive 1.png'
import transport from '../more_assets/warehouse 1.png'
import education from '../more_assets/graduation-hat 1.png'
import travel from '../more_assets/travel 1.png'
import law from '../more_assets/legal 1.png'
import gurdwara from '../more_assets/amritsar 1.png'
import more from '../more_assets/menu-bar 2.png'
import { useNavigate } from "react-router-dom";
import { IoClose } from "react-icons/io5"; // Import close icon from react-icons


const More = () => {

    const navigate = useNavigate();
    
  return (
    <div >
        <h1 className=" flex items-center justify-center font-semibold text-4xl">All Categories</h1>
        {/* Close Button (Top-Right) */}
      <button 
        onClick={() => navigate(-1)} // Navigate to previous page
        className="absolute  right-4 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-red-600 text-3xl"
      >
        <IoClose />
      </button>
      <div
        id="explore"
        className="w-[80%] mx-auto flex flex-wrap justify-center items-center gap-x-40 "
      >
        <div className="flex items-center justify center flex-col mt-10 flex-wrap w-40">
          <button key={"food"}>
            <div className="w-40 h-40 flex items-center justify-center rounded-full bg-gradient-to-b from-[#FF9E2F] to-[#FFFFFF]">
              <img
                src={food}
                alt="Food & Beverages"
                className="w-16 h-16 object-contain rounded-full"
              />
            </div>
          </button>
          <p className="text-center mt-6 mb-6 text-gray-700 font-medium text-xl">
            Food & Beverages
          </p>
        </div>

        <div className="flex items-center justify center flex-col mt-10 w-40">
          <button key={"food"}>
            <div className="w-40 h-40 flex items-center justify-center rounded-full bg-gradient-to-b from-[#FF9E2F] to-[#FFFFFF]">
              <img
                src={beauty}
                alt="Food & Beverages"
                className="w-16 h-16 object-contain rounded-full"
              />
            </div>
          </button>
          <p className="text-center mt-6 mb-6 text-gray-700 font-medium text-xl">
            Beauty & Wellness
          </p>
        </div>

        <div className="flex items-center justify center flex-col mt-10 w-40">
          <button key={"food"}>
            <div className="w-40 h-40 flex items-center justify-center rounded-full bg-gradient-to-b from-[#FF9E2F] to-[#FFFFFF]">
              <img
                src={clothing}
                alt="Food & Beverages"
                className="w-16 h-16 object-contain rounded-full"
              />
            </div>
          </button>
          <p className="text-center mt-6 mb-6 text-gray-700 font-medium text-xl">
            Clothing
          </p>
        </div>

        <div className="flex items-center justify center flex-col mt-10 w-40">
          <button key={"food"}>
            <div className="w-40 h-40 flex items-center justify-center rounded-full bg-gradient-to-b from-[#FF9E2F] to-[#FFFFFF]">
              <img
                src={fitness}
                alt="Food & Beverages"
                className="w-16 h-16 object-contain rounded-full"
              />
            </div>
          </button>
          <p className="text-center mt-6 mb-6 text-gray-700 font-medium text-xl">
            Fitness
          </p>
        </div>

        <div className="flex items-center justify center flex-col mt-10 w-40">
          <button key={"food"}>
            <div className="w-40 h-40 flex items-center justify-center rounded-full bg-gradient-to-b from-[#FF9E2F] to-[#FFFFFF]">
              <img
                src={health}
                alt="Food & Beverages"
                className="w-16 h-16 object-contain rounded-full"
              />
            </div>
          </button>
          <p className="text-center mt-6 mb-6 text-gray-700 font-medium text-xl">
            Health
          </p>
        </div>

        <div className="flex items-center justify center flex-col mt-10 w-40">
          <button key={"food"}>
            <div className="w-40 h-40 flex items-center justify-center rounded-full bg-gradient-to-b from-[#FF9E2F] to-[#FFFFFF]">
              <img
                src={event}
                alt="Food & Beverages"
                className="w-16 h-16 object-contain rounded-full"
              />
            </div>
          </button>
          <p className="text-center mt-6 mb-6 text-gray-700 font-medium text-xl">
            Wedding and Events
          </p>
        </div>

        <div className="flex items-center justify center flex-col mt-10 w-40">
          <button key={"food"}>
            <div className="w-40 h-40 flex items-center justify-center rounded-full bg-gradient-to-b from-[#FF9E2F] to-[#FFFFFF]">
              <img
                src={finance}
                alt="Food & Beverages"
                className="w-16 h-16 object-contain rounded-full"
              />
            </div>
          </button>
          <p className="text-center mt-6 mb-6 text-gray-700 font-medium text-xl">
            Finance
          </p>
        </div>

        <div className="flex items-center justify-center flex-col mt-10 w-40">
          <button key={"food"}>
            <div className="w-40 h-40 flex items-center justify-center rounded-full bg-gradient-to-b from-[#FF9E2F] to-[#FFFFFF]">
              <img
                src={kid}
                alt="Food & Beverages"
                className="w-16 h-16 object-contain rounded-full"
              />
            </div>
          </button>
          <p className="text-center mt-6 mb-6 text-gray-700 font-medium text-xl">
            Kid
          </p>
        </div>

        {/* 9 */}

        <div className="flex items-center justify-center flex-col mt-10 w-40">
          <button key={"food"}>
            <div className="w-40 h-40 flex items-center justify-center rounded-full bg-gradient-to-b from-[#FF9E2F] to-[#FFFFFF]">
              <img
                src={recruitment}
                alt="Food & Beverages"
                className="w-16 h-16 object-contain rounded-full"
              />
            </div>
          </button>
          <p className="text-center mt-6 mb-6 text-gray-700 font-medium text-xl">
            Recritment
          </p>
        </div>

        {/* 10 */}
        <div className="flex items-center justify-center flex-col mt-10 w-40">
          <button key={"food"}>
            <div className="w-40 h-40 flex items-center justify-center rounded-full bg-gradient-to-b from-[#FF9E2F] to-[#FFFFFF]">
              <img
                src={automotive}
                alt="Food & Beverages"
                className="w-16 h-16 object-contain rounded-full"
              />
            </div>
          </button>
          <p className="text-center mt-6 mb-6 text-gray-700 font-medium text-xl">
            Automotive
          </p>
        </div>

        {/* 11 */}
        <div className="flex items-center justify-center flex-col mt-10 w-40">
          <button key={"food"}>
            <div className="w-40 h-40 flex items-center justify-center rounded-full bg-gradient-to-b from-[#FF9E2F] to-[#FFFFFF]">
              <img
                src={transport}
                alt="Food & Beverages"
                className="w-16 h-16 object-contain rounded-full"
              />
            </div>
          </button>
          <p className="text-center mt-6 mb-6 text-gray-700 font-medium text-xl">
            Transport
          </p>
        </div>

        {/* 12 */}
        <div className="flex items-center justify-center flex-col mt-10 w-40">
          <button key={"food"}>
            <div className="w-40 h-40 flex items-center justify-center rounded-full bg-gradient-to-b from-[#FF9E2F] to-[#FFFFFF]">
              <img
                src={education}
                alt="Food & Beverages"
                className="w-16 h-16 object-contain rounded-full"
              />
            </div>
          </button>
          <p className="text-center mt-6 mb-6 text-gray-700 font-medium text-xl">
            Education
          </p>
        </div>

        {/* 13 */}
        <div className="flex items-center justify-center flex-col mt-10 w-40">
          <button key={"food"}>
            <div className="w-40 h-40 flex items-center justify-center rounded-full bg-gradient-to-b from-[#FF9E2F] to-[#FFFFFF]">
              <img
                src={travel}
                alt="Food & Beverages"
                className="w-16 h-16 object-contain rounded-full"
              />
            </div>
          </button>
          <p className="text-center mt-6 mb-6 text-gray-700 font-medium text-xl">
            Travel
          </p>
        </div>

        {/* 14 */}
        <div className="flex items-center justify-center flex-col mt-10 w-40">
          <button key={"food"}>
            <div className="w-40 h-40 flex items-center justify-center rounded-full bg-gradient-to-b from-[#FF9E2F] to-[#FFFFFF]">
              <img
                src={law}
                alt="Food & Beverages"
                className="w-16 h-16 object-contain rounded-full"
              />
            </div>
          </button>
          <p className="text-center mt-6 mb-6 text-gray-700 font-medium text-xl">
            Law
          </p>
        </div>

        {/* 15 */}
        <div className="flex items-center justify-center flex-col mt-10 w-40">
          <button key={"food"}>
            <div className="w-40 h-40 flex items-center justify-center rounded-full bg-gradient-to-b from-[#FF9E2F] to-[#FFFFFF]">
              <img
                src={gurdwara}
                alt="Food & Beverages"
                className="w-16 h-16 object-contain rounded-full"
              />
            </div>
          </button>
          <p className="text-center mt-6 mb-6 text-gray-700 font-medium text-xl">
            Gurdwara
          </p>
        </div>

        {/* 16 */}
        <div className="flex items-center justify-center flex-col mt-10 w-40">
          <button key={"food"}>
            <div className="w-40 h-40 flex items-center justify-center rounded-full bg-gradient-to-b from-[#FF9E2F] to-[#FFFFFF]">
              <img
                src={more}
                alt="Food & Beverages"
                className="w-16 h-16 object-contain rounded-full"
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
