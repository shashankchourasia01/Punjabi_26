import React from "react";
import paji from "../home_assets/result main image.jpeg";
import logo from "../home_assets/punjabi logo.png";
import menu from "../home_assets/Menu Logo.png";
import search_icon from '../home_assets/search icon.png'
import bus from '../result_assets/bus.png'
import cap from '../result_assets/cap.png'
import church from '../result_assets/church.png'
import more_icon from '../result_assets/more_icon.png'
import health from '../result_assets/solar_health-bold.png'
import dining from '../result_assets/dining.png'
import clothing_store from '../result_assets/clothing_store.png'
import spa from '../result_assets/spa.png'
import Footer from "../components/Footer";


import { Link } from "react-router-dom";

const Result = () => {
  return (
    <div className="relative h-screen z-[10]">
      {/*Navbar*/}
      <div className=" relative flex items-center justify-between px-10 py-4 bg-transparent w-full z-[50]">
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Punjabi Logo"
            className="w-16 rounded-full ml-20"
          />
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex space-x-10 pr-30">
          <button className="text-white font-semibold hover:text-gray-900">
            Add a Business
          </button>
          <Link
            to="/services"
            className="text-white font-semibold hover:text-gray-900"
          >
            Our Services
          </Link>
          <Link
            to="/blogs"
            className="text-white font-semibold hover:text-gray-900"
          >
            Blogs
          </Link>
        </div>

        {/* Menu Icon */}
        <img src={menu} alt="Menu Logo" className="w-10 rounded-full mr-15" />
      </div>

      {/* Background Image */}
      <div className="absolute inset-0 z-[-50]">
        <div className="absolute inset-0 bg-black opacity-15 "></div>
        <img
          src={paji}
          alt="Home Background"
          className="w-full h-full bg-cover bg-center"
        />
        {/* .. */}
      </div>

      {/* Main Content */}
      <div className="w-[80%] mx-auto flex flex-col items-start text-white text-center mt-20 justify-center">
        <h1 className="text-5xl font-bold">
          Discover <span className="text-[#FCE130]">Punjabi</span>
          <br />
        </h1>
        <h1 className="text-5xl font-bold mt-4">Businesses And Pages!</h1>
        <br />
        <h4 className="mb-4 text-2xl">
          From restaurants to real estate,find trusted
        </h4>
        <h4 className="mb-20 text-2xl">businesses in your community.</h4>

        {/* Search Bar */}

        <div className="bg-white w-[1200px] h-[80px] flex justify-center items-stretch  rounded-2xl shadow-lg mt-10">
          {/* Search Business Input */}
          <input
            type="text"
            placeholder="Search the business"
            className="w-[800px] p-3 rounded-l-2xl focus:outline-none text-black border-r border-gray-300 m-2"
          />

          {/* Location Input */}
          <input
            type="text"
            placeholder="Location"
            className="w-[300px] p-3 focus:outline-none text-black "
          />

          {/* Search Button */}
          <button className="bg-yellow-400 text-white h-full rounded-r-2xl flex items-center justify-center w-[106px]">
            <img src={search_icon} alt="" className="w-[50px]"/>
          </button>
        </div>
      </div>



      {/* 8 options */}

      <div className="w-[80%] mx-auto flex flex-wrap justify-center items-center gap-x-40 mt-40">


       
          <div className="flex items-center justify center flex-col mt-10 flex-wrap w-40">
            <div className="w-40 h-40 flex items-center justify-center rounded-full border border-green-700 bg-[#FCE130]">
              <img src={dining} alt="Food & Beverages" className="w-16 h-16 object-contain rounded-full" />
            </div>
            <p className="text-center mt-6 mb-6 text-gray-700 text-xl">Food & Beverages</p>
          </div>
        
          <div className="flex items-center justify center flex-col mt-10 w-40">
            <div className="w-40 h-40 flex items-center justify-center rounded-full border border-green-700 bg-[#FCE130]">
              <img src={spa} alt="Food & Beverages" className="w-16 h-16 object-contain rounded-full" />
            </div>
            <p className="text-center mt-6 mb-6 text-gray-700 text-xl">Beauty & wellness</p>
          </div>

          <div className="flex items-center justify center flex-col mt-10 w-40">
            <div className="w-40 h-40 flex items-center justify-center rounded-full border border-green-700 bg-[#FCE130]">
              <img src={clothing_store} alt="Food & Beverages" className="w-16 h-16 object-contain rounded-full" />
            </div>
            <p className="text-center mt-6 mb-6 text-gray-700 text-xl">Apparel & Accessories</p>
          </div>

          <div className="flex items-center justify center flex-col mt-10 w-40">
            <div className="w-40 h-40 flex items-center justify-center rounded-full border border-green-700 bg-[#FCE130]">
              <img src={cap} alt="Food & Beverages" className="w-16 h-16 object-contain rounded-full" />
            </div>
            <p className="text-center mt-6 mb-6 text-gray-700 text-xl">Education</p>
          </div>

          <div className="flex items-center justify center flex-col mt-10 w-40">
            <div className="w-40 h-40 flex items-center justify-center rounded-full border border-green-700 bg-[#FCE130]">
              <img src={health} alt="Food & Beverages" className="w-16 h-16 object-contain rounded-full" />
            </div>
            <p className="text-center mt-6 mb-6 text-gray-700 text-xl">Health</p>
          </div>

          <div className="flex items-center justify center flex-col mt-10 w-40">
            <div className="w-40 h-40 flex items-center justify-center rounded-full border border-green-700 bg-[#FCE130]">
              <img src={church} alt="Food & Beverages" className="w-16 h-16 object-contain rounded-full" />
            </div>
            <p className="text-center mt-6 mb-6 text-gray-700 text-xl">Wedding and Events</p>
          </div>

          <div className="flex items-center justify center flex-col mt-10 w-40">
            <div className="w-40 h-40 flex items-center justify-center rounded-full border border-green-700 bg-[#FCE130]">
              <img src={bus} alt="Food & Beverages" className="w-16 h-16 object-contain rounded-full" />
            </div>
            <p className="text-center mt-6 mb-6 text-gray-700 text-xl">Logistic Services</p>
          </div>

          <div className="flex items-center justify center flex-col mt-10 w-40">
            <div className="w-40 h-40 flex items-center justify-center rounded-full border border-green-700 bg-[#FCE130]">
              <img src={more_icon} alt="Food & Beverages" className="w-16 h-16 object-contain rounded" />
            </div>
            <p className="text-center mt-6 mb-6 text-gray-700 text-xl">More</p>
          </div>
        



      </div>
      <Footer></Footer>
    </div>
  );
};

export default Result;
