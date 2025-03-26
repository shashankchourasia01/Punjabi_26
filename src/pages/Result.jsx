import React from "react";
import paji from "../home_assets/result main image.jpeg";
import logo from "../home_assets/punjabi logo.png";
import menu from "../home_assets/Menu Logo.png";
import search_icon from "../home_assets/search icon.png";
import bus from "../result_assets/bus.png";
import cap from "../result_assets/cap.png";
import church from "../result_assets/church.png";
import more_icon from "../result_assets/more_icon.png";
import health from "../result_assets/solar_health-bold.png";
import dining from "../result_assets/dining.png";
import clothing_store from "../result_assets/clothing_store.png";
import spa from "../result_assets/spa.png";
import Footer from "../components/Footer";

import first from "../result_assets/1 card.png";
import second from "../result_assets/2 card.png";
import third from "../result_assets/3 card.png";
import left_arrow from "../result_assets/left_arrow.png";
import right_arrow from "../result_assets/right_arrow.png";
import rectangle from "../result_assets/rectangle.png";
import girl from "../result_assets/girl (1).png";
import green_bg from "../result_assets/green_bg.png";
// import cyan_bg from '../result_assets/cyan_bg.png'
// import email from '../home_assets/formkit_email.png'
import receptionist from "../result_assets/receptionists-elegant-suits-work-hours.png";
import left_phone from '../result_assets/left_phone.png'
import right_phone from '../result_assets/right_phone.png'
import playstore from '../result_assets/playstore 1.png'
import appstore from '../result_assets/appstore 1.png'
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Ellipse_4 from "../result_assets/Ellipse_4.png";
import Ellipse_5 from "../result_assets/Ellipse_5.png";
import Group_11 from "../result_assets/Group_11.png";
const Result = () => {

  const navigate = useNavigate();


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
            <img src={search_icon} alt="" className="w-[50px]" />
          </button>
        </div>
      </div>

      {/* 8 options */}

      <div className="w-[80%] mx-auto flex flex-wrap justify-center items-center gap-x-40 mt-40">
        <div className="flex items-center justify center flex-col mt-10 flex-wrap w-40">
          <div className="w-40 h-40 flex items-center justify-center rounded-full border border-green-700 bg-[#FCE130]">
            <img
              src={dining}
              alt="Food & Beverages"
              className="w-16 h-16 object-contain rounded-full"
            />
          </div>
          <p className="text-center mt-6 mb-6 text-gray-700 text-xl">
            Food & Beverages
          </p>
        </div>

        <div className="flex items-center justify center flex-col mt-10 w-40">
          <div className="w-40 h-40 flex items-center justify-center rounded-full border border-green-700 bg-[#FCE130]">
            <img
              src={spa}
              alt="Food & Beverages"
              className="w-16 h-16 object-contain rounded-full"
            />
          </div>
          <p className="text-center mt-6 mb-6 text-gray-700 text-xl">
            Beauty & wellness
          </p>
        </div>

        <div className="flex items-center justify center flex-col mt-10 w-40">
          <div className="w-40 h-40 flex items-center justify-center rounded-full border border-green-700 bg-[#FCE130]">
            <img
              src={clothing_store}
              alt="Food & Beverages"
              className="w-16 h-16 object-contain rounded-full"
            />
          </div>
          <p className="text-center mt-6 mb-6 text-gray-700 text-xl">
            Apparel & Accessories
          </p>
        </div>

        <div className="flex items-center justify center flex-col mt-10 w-40">
          <div className="w-40 h-40 flex items-center justify-center rounded-full border border-green-700 bg-[#FCE130]">
            <img
              src={cap}
              alt="Food & Beverages"
              className="w-16 h-16 object-contain rounded-full"
            />
          </div>
          <p className="text-center mt-6 mb-6 text-gray-700 text-xl">
            Education
          </p>
        </div>

        <div className="flex items-center justify center flex-col mt-10 w-40">
          <div className="w-40 h-40 flex items-center justify-center rounded-full border border-green-700 bg-[#FCE130]">
            <img
              src={health}
              alt="Food & Beverages"
              className="w-16 h-16 object-contain rounded-full"
            />
          </div>
          <p className="text-center mt-6 mb-6 text-gray-700 text-xl">Health</p>
        </div>

        <div className="flex items-center justify center flex-col mt-10 w-40">
          <div className="w-40 h-40 flex items-center justify-center rounded-full border border-green-700 bg-[#FCE130]">
            <img
              src={church}
              alt="Food & Beverages"
              className="w-16 h-16 object-contain rounded-full"
            />
          </div>
          <p className="text-center mt-6 mb-6 text-gray-700 text-xl">
            Wedding and Events
          </p>
        </div>

        <div className="flex items-center justify center flex-col mt-10 w-40">
          <div className="w-40 h-40 flex items-center justify-center rounded-full border border-green-700 bg-[#FCE130]">
            <img
              src={bus}
              alt="Food & Beverages"
              className="w-16 h-16 object-contain rounded-full"
            />
          </div>
          <p className="text-center mt-6 mb-6 text-gray-700 text-xl">
            Logistic Services
          </p>
        </div>

        <div className="flex items-center justify center flex-col mt-10 w-40">
          <div className="w-40 h-40 flex items-center justify-center rounded-full border border-green-700 bg-[#FCE130]">
            <img
              src={more_icon}
              alt="Food & Beverages"
              className="w-16 h-16 object-contain rounded"
            />
          </div>
          <p className="text-center mt-6 mb-6 text-gray-700 text-xl">More</p>
        </div>
      </div>

      {/* 500k+  3  */}

      <div class="bg-green-900 py-22 flex justify-around items-center w-full relative">
        <div class="stat relative text-center">
          <div class="number text-5xl font-medium  text-white px-4 py-1 rounded absolute -top-6 left-1/2 transform -translate-x-1/2">
            500+
          </div>
          <div class="text text-white mt-10">Lorem Ipsum</div>
        </div>

        <div class="stat relative text-center">
          <div class="number text-5xl font-medium  text-white px-4 py-1 rounded absolute -top-6 left-1/2 transform -translate-x-1/2">
            40K
          </div>
          <div class="text text-white mt-10">Lorem Ipsum</div>
        </div>

        <div class="stat relative text-center">
          <div class="number text-5xl font-medium text-white px-4 py-1 rounded absolute -top-6 left-1/2 transform -translate-x-1/2">
            200+
          </div>
          <div class="text text-white mt-10">Lorem Ipsum</div>
        </div>

        <div class="stat relative text-center">
          <div class="number text-5xl font-medium text-white px-4 py-1 rounded absolute -top-6 left-1/2 transform -translate-x-1/2">
            16+
          </div>
          <div class="text text-white mt-10">Lorem Ipsum</div>
        </div>
      </div>

      {/* Featured business  4  */}

      <div class="bg-white p-10">
        {/*  Header Section  */}
        <div class="flex justify-between items-center mb-6 mt-18">
          <h2 class="text-4xl font-bold text-green-900 ml-20">
            Featured Business
          </h2>
          <button class="bg-yellow-400 text-black px-8 py-4 text-lg rounded-md font-medium shadow-md mr-20 transition-transform transform hover:scale-95 hover:bg-yellow-400 ">
            Explore More
          </button>
        </div>

        {/*  Image Cards Section  */}
        <div class="flex justify-center gap-6 mt-20">
          {/* <!-- Card 1 --> */}
          <div class="text-center">
            <img src={first} alt="" class="w-110 h-70" />
            <div class="flex items-center justify-center space-x-2 mt-8 text-3xl">
              <h3 class="font-bold">Lorem Ipsum</h3>
              <div class="text-yellow-400">★★★★★</div>
            </div>
            <p class="text-gray-500 text-2xl mt-5">Lorem Ipsum</p>
          </div>

          {/* <!-- Card 2 --> */}
          <div class="text-center">
            <img src={second} alt="" class="w-110 h-70" />
            <div class="flex items-center justify-center space-x-2 mt-8 text-3xl">
              <h3 class="font-bold">Lorem Ipsum</h3>
              <div class="text-yellow-400">★★★★★</div>
            </div>
            <p class="text-gray-500 text-2xl mt-5">Lorem Ipsum</p>
          </div>

          {/* <!-- Card 3 --> */}
          <div class="text-center">
            <img src={third} alt="" className="w-110 h-70" />
            <div class="flex items-center justify-center space-x-2 mt-8 text-3xl">
              <h3 class="font-bold">Lorem Ipsum</h3>
              <div class="text-yellow-400">★★★★★</div>
            </div>
            <p class="text-gray-500 text-2xl mt-5">Lorem Ipsum</p>
          </div>
        </div>

        {/* <!-- Slider Icons --> */}
        <div class="flex justify-center gap-6 mt-20">
          <button class="bg-yellow-400 p-9  rounded-full shadow-md">
            {" "}
            <img src={left_arrow} alt="" />
          </button>
          <button class="bg-yellow-400 p-9 rounded-full shadow-md">
            {" "}
            <img src={right_arrow} alt="" />
          </button>
        </div>
      </div>

      {/* List your business 5 */}

      <div className="relative bg-white w-full flex items-center justify-center min-h-screen p-6">
        {/* Background Image */}
        <img
          src={rectangle}
          alt="Background"
          className="absolute  w-[1400px] mx-auto top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/20 z-[5] h-[451px]"
        />

        <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl">
          {/* Left Section - Girl Image */}
          <div className="w-full md:w-1/2 flex justify-center z-[10]">
            <img
              src={girl}
              alt="Woman using a blender"
              className="w-full max-w-md md:max-w-lg"
            />
          </div>

          {/* Right Section - Business Info */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left p-6 relative z-[10]">
            <h2 className="text-2xl md:text-3xl font-bold text-black">
              List Your Business for FREE Today!
            </h2>
            <p className="mt-2 text-gray-700 text-lg">
              Join the largest Punjabi business directory in Australia. Increase
              your visibility and connect with customers easily!
            </p>

            <button className="mt-4 px-6 py-3 bg-green-700 text-white font-semibold rounded-md hover:bg-green-800 transition"
              onClick={() => navigate("/login")} >
              List Now
            </button>

          </div>
        </div>
      </div>

      {/* Green bg 6*/}

      <div className="relative z-0">
        <div className="mt-16">
          <img src={green_bg} alt="" />
        </div>

        <div className="absolute inset-0 flex items-center justify-center z-5">
          {/* left */}
          
            <div className="flex flex-col items-center justify-center w-[20rem] gap-y-80">
              <div className="text-white">
                <h1>Highly Affordable</h1>
                <p>From ideation to execution, we cover every aspect of the digital journey.</p>
              </div>

              <div className="text-white">
                <h1>Highly Affordable</h1>
                <p>From ideation to execution, we cover every aspect of the digital journey.</p>
              </div>
            </div>
          



          {/* mid image */}
          <div className="relative flex items-center justify-center w-[40rem]">
            <div className="absolute w-[120px] h-[120px] border-2 border-yellow-400 rounded-[50%] bg-[#185231]  z-10 top-[-1.5rem] left-[6rem]"></div>
            <div className="absolute w-[120px] h-[120px] border-2 border-yellow-400 rounded-[50%] bg-[#185231]  z-10 top-[-1.5rem] right-[6rem]"></div>
            <div className="absolute w-[120px] h-[120px] border-2 border-yellow-400 rounded-[50%] bg-[#164329]  z-10 bottom-[-1.5rem] left-[6rem]"></div>
            <div className="absolute w-[120px] h-[120px] border-2 border-yellow-400 rounded-[50%] bg-[#164329]  z-10 bottom-[-1.5rem] right-[6rem]"></div>
          <img
              src={Group_11}
              alt="Woman using a blender"
              className="w-[15rem] absolute top-[1/2] left-[1/2]"
            />
             
            <img
            src={Ellipse_5}
            alt="Woman using a blender"
            className="w-[25rem] aboslute top-1/2 left-1/2"
          />

<img
              src={Ellipse_4}
              alt="Woman using a blender"
              className=" w-[30rem] absolute top-[1/2] left-[1/2]"
            /> 
          </div>

          {/* right */}
        <div className="flex flex-col items-center justify-start w-[20rem] gap-y-80 text-white">
        <div>
            <h1>Highly Affordable</h1>
            <p>From ideation to execution, we cover every aspect of the digital journey.</p>
          </div>

          <div>
            <h1>Highly Affordable</h1>
            <p>From ideation to execution, we cover every aspect of the digital journey.</p>
          </div>
        </div>
          

          
        </div>
      </div>


      {/* How it works  7 */}

      <div className="bg-[#fdfaf3] px-6 lg:px-20 py-12 mb-30">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Section */}
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold text-green-900 mb-4 pt-20">
              How It Works ?
            </h1>
            <p className="text-gray-700 mb-6 pt-10 text-2xl">
              We’ve designed our user-friendly system to make your <br />
              search for businesses more effortless and smooth.
            </p>
            <div className="relative">
              <div className="absolute left-4 top-2 h-full w-[2px] bg-green-700"></div>

              {/* Step 1 */}
              <div className="flex items-start mb-10 mt-20">
                <div className="w-15 h-12 bg-green-700 text-white flex items-center justify-center rounded-full text-lg font-semibold">
                  1
                </div>
                <div className="ml-12">
                  <h3 className="text-3xl font-semibold text-green-800">
                    Search
                  </h3>
                  <p className="text-gray-600 text-lg">
                    Use our search bar to find businesses in your network. Enter
                    the keywords, location.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start mb-10">
                <div className="w-12 h-10 bg-green-700 text-white flex items-center justify-center rounded-full text-lg font-semibold">
                  2
                </div>
                <div className="ml-12">
                  <h3 className="text-3xl font-semibold text-green-800">
                    Discover
                  </h3>
                  <p className="text-gray-600 text-lg">
                    Browse listings with business names, descriptions, and
                    contact info.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start">
                <div className="w-12 h-12 bg-green-700 text-white flex items-center justify-center rounded-full text-lg font-semibold">
                  3
                </div>
                <div className="ml-12">
                  <h3 className="text-3xl font-semibold text-green-800">
                    Connect
                  </h3>
                  <p className="text-gray-600 text-xl">
                    Contact businesses directly or add your own to the list.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="relative">
            {/* Girl Image */}
            <div className="w-[500px] h-[500px] md:w-[550px] md:h-[550px] rounded-full overflow-hidden mx-auto mr-10">
              <img
                src={receptionist}
                alt="Business Woman"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Card */}
            <div className="absolute bottom-[-130px] right-0 bg-white shadow-lg rounded-lg w-90 h-95 p-4 mr-80">
              <img
                src={second}
                alt="Food"
                className="w-full h-62 object-cover rounded-md mb-3"
              />
              <div className="flex items-center justify-center space-x-2 mt-8 text-3xl">
                <h5 className="text-lg mr-18">Lorem Ipsum</h5>
                <div className="text-yellow-400">★★★★★</div>
              </div>
            </div>

            {/* Button */}
            <div className="absolute bottom-[-170px] ml-75">
              <button className="bg-yellow-400 text-black px-12 py-6 rounded-md text-lg font-semibold shadow-md hover:bg-yellow-500 transition">
                Search more
              </button>
            </div>
          </div>
        </div>
      </div>



      {/* second last page 8 */}
      <div className="relative bg-[#0F3D1E] py-20 px-6 md:px-16 lg:px-24 ">
        {/* Background Image */}
        <img src={green_bg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-30" />

        <div className="relative flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto">
          {/* Left Side - Phone Images */}
          <div className="relative w-[300px] h-[350px] flex items-center justify-center">
            <img
              src={left_phone}
              alt="Phone 1"
              className="w-60  drop-shadow-lg absolute left-6 rotate-[-2deg] bottom-[3rem]"
            />
            <img
              src={right_phone}
              alt="Phone 2"
              className="w-50 drop-shadow-lg absolute right-6 rotate-[5deg] left-[8rem]"
            />
          </div>

          {/* Right Side - Heading & Text */}
          <div className="text-white text-center lg:text-left max-w-lg">
            <h2 className="text-3xl md:text-5xl font-bold">
              Discover <span className="text-yellow-400">Punjabi</span> Businesses And Pages!
            </h2>
            <p className="mt-4 text-lg md:text-xl">
              Download the Punjabi Pages app to explore and connect with trusted businesses, services, and community resources in your area.
            </p>

            {/* Download Buttons */}
            <div className="mt-6 flex flex-wrap justify-center lg:justify-start space-x-4">
              <img src={playstore} alt="Google Play" className="w-40 md:w-48" />
              <img src={appstore} alt="App Store" className="w-40 md:w-48" />
            </div>
          </div>
        </div>
      </div>





      <Footer></Footer>
    </div>
  );
};

export default Result;
