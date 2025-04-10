import React from "react";
import paji from "../home_assets/result_new1.jpg";
import logo from "../explore_assets/new_logo.jpeg";
import menu from "../home_assets/Menu Logo.png";
import search_icon from "../home_assets/search icon.png";
import bus from "../result_assets/bus_new.png";
import cap from "../result_assets/cap_new.png";
import church from "../result_assets/temple_new.png";
import more_icon from "../result_assets/more_new.png";
import health from "../result_assets/health_new.png";
import dining from "../result_assets/cup_new.png";
import clothing_store from "../result_assets/cloth_new.png";
import spa from "../result_assets/flower_new.png";
import Footer from "../components/Footer";
import first from "../result_assets/1 card.png";
import second from "../result_assets/2 card.png";
import third from "../result_assets/3 card.png";
import left_arrow from "../result_assets/left_arrow.png";
import right_arrow from "../result_assets/right_arrow.png";
import rectangle from "../result_assets/rectangle_new.png";
import girl from "../result_assets/girl (1).png";
import receptionist from "../result_assets/receptionists-elegant-suits-work-hours.png";
import left_phone from "../result_assets/left_phone.png";
import right_phone from "../result_assets/right_phone.png";
import playstore from "../result_assets/playstore 1.png";
import appstore from "../result_assets/appstore 1.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Ellipse_4 from "../result_assets/Ellipse 4.png";
import Ellipse_5 from "../result_assets/Ellipse 5.png";
import Group_11 from "../result_assets/Group 11.png";
import blue_bg from "../main_assets/blue_bg.png";
import { useState } from "react";
import axios from "axios";
import { X } from "lucide-react";

const Result = () => {
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);
  //const [LoggedIn, setLoggedIn] = useState(false);
  // weather
  // const [wLocation, wSetLocation] = useState("");
  const [weather, setWeather] = useState(null);
  const [showWeather, setShowWeather] = useState(true);

  //const location = useLocation("");
  const [primaryBusiness, setprimaryBusiness] = useState("");
  const [data, setData] = useState("");
  const [location, setLocation] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting Data:", data);
    try {
      const response = await axios.get(
        "http://localhost:5000/api/company/searchResults",
        {
          params: {
            primaryBusiness: data.primaryBusiness, // Query parameter to be passed in URL
          },
        }
      );
      //alert(response.data.message || "Company registered successfully!");
      setSearch(true);
      setResults(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Registration failed. Please try again.");
    }
  }; // Runs whenever query changes

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  //Go to more page
  const handleCategoryClickToMore = () => {
    navigate("/more"); // Navigate to More.jsx page
  };

  // Go to explore more page
  const handleCategoryClickToExplore = () => {
    navigate("/explore_more");
  };

  const handleCategoryClick = (category) => {
    navigate(`/category/${encodeURIComponent(category)}`); // Navigate to category page
  };

  // weather
  const handleWeatherChange = (e) => {
    setLocation(e.target.value);
  };

  const handleWeatherSubmit = async (e) => {
    e.preventDefault();

    const apiKey = "f69ee6d52e37c6d325586aa8562b7b04";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.main) {
        setWeather(data); // Changed from setLocation to setWeather
      } else {
        alert("City not found!");
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  const isLoggedIn = () => {
    // Get all cookies from the browser
    const cookies = document.cookie; // Example: "accessToken=abc123; refreshToken=xyz456"

    // Find the accessToken from the cookies
    const accessTokenCookie = cookies
      .split("; ")
      .find((row) => row.startsWith("accessToken="));

    // Extract token value
    const accessToken = accessTokenCookie
      ? accessTokenCookie.split("=")[1]
      : null;

    //console.log("Access Token:", accessToken);

    if (!accessToken) {
      alert("Please log in first");
      return false;
    }

    return true;
  };

  return (
    <div id="about" className="relative h-screen z-[10]">
      {/* {/Navbar/} */}
      <div className=" relative flex items-center justify-between px-10 py-4 bg-transparent w-full z-[50]">
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Punjabi Logo"
            className="w-16 rounded-full ml-20 "
          />
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex space-x-10 pr-30">
          <button
            className="text-white font-semibold hover:text-gray-900"
            onClick={() => {
              if (isLoggedIn()) {
                navigate("/companyDetails");
              }
            }}
          >
            Add a Business
          </button>
          <Link
            to="/result"
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
        <img
          src={menu}
          alt="Menu Logo"
          className="w-10 rounded-full mr-15"
          onClick={() => {
            setShowForm(true);
          }}
        />
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
          Discover Punjabi
          <br />
        </h1>
        <h1 className="text-5xl font-bold mt-4">Businesses And Pages!</h1>
        <br />
        <h4 className="mb-4 text-2xl">
          From restaurants to real estate,find trusted
        </h4>
        <h4 className="mb-20 text-2xl">businesses in your community.</h4>

        {/* Search Bar */}

        <div
          id="searchBox"
          className="bg-white w-[1200px] h-[80px] flex justify-center items-stretch  rounded-2xl shadow-lg mt-10"
        >
          {/* Search Business Input */}
          <form onSubmit={handleSubmit} className="flex">
            {/* Search Input */}
            <input
              type="text"
              placeholder="Search the Businesses..."
              name="primaryBusiness"
              onChange={handleChange}
              className="w-[800px] p-3 rounded-l-2xl focus:outline-none text-black border-r border-gray-300 m-2"
            />

            {/* Location Input (Optional, not used in backend yet) */}
            <input
              type="text"
              name="location"
              placeholder="Location"
              className="w-[300px] p-3 focus:outline-none text-black"
              onChange={handleChange}
            />

            {/* Search Button */}
            <button className="bg-[#F09918] text-white h-full rounded-r-2xl flex items-center justify-center w-[106px]">
              <img src={search_icon} alt="Search" className="w-[50px]" />
            </button>
          </form>
        </div>
      </div>

      {/* Weather checker */}

      <div>
        <div
          id="weatherBox"
          className="bg-white w-[1200px] h-[80px] flex justify-center items-stretch rounded-2xl shadow-lg mt-10 ml-40"
        >
          {/* Weather Search Input */}
          <form onSubmit={handleWeatherSubmit} className="flex">
            {/* Location Input */}
            <input
              type="text"
              placeholder="Search the Weather..."
              name="location"
              onChange={handleWeatherChange}
              className="w-[800px] p-3 rounded-2xl focus:outline-none text-black border border-gray-300 m-2"
            />

            {/* Search Button */}
            <button className="bg-[#F09918] cursor-pointer text-white h-full rounded-r-2xl ml-70 flex items-center justify-center w-[106px]">
              <img src={search_icon} alt="Search" className="w-[50px] " />
            </button>
          </form>

          {/* Display Weather Information */}
          {weather && (
            <div
              id="weather_search"
              className="absolute z-10 mt-[100px] bg-white w-[1200px] rounded-b-2xl shadow-lg p-5 text-black"
            >
              {/* Close Button */}
              <button
                onClick={() => {
                  setWeather(null); // clear weather result
                  document
                    .getElementById("weather_search")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="absolute top-3 right-3 bg-gray-200 p-2 rounded-full hover:bg-gray-300"
              >
                <X className="w-4 h-4" />
              </button>

              <h2 className="text-xl font-semibold mb-2">
                Weather in {weather.name}
              </h2>
              <p className="mb-1">🌡️ Temperature: {weather.main.temp}°C</p>
              <p className="mb-1">
                🌤️ Condition: {weather.weather[0].description}
              </p>
              <p>💧 Humidity: {weather.main.humidity}%</p>
            </div>
          )}
        </div>
      </div>

      {showForm && (
        <div className="fixed top-5 right-10 bg-white p-6 shadow-2xl rounded-lg w-96 z-50 mt-40 mr-20 gap-2">
          {/* Close Button */}
          <button
            onClick={() => setShowForm(false)}
            className="absolute top-2 right-2 bg-gray-300 hover:bg-gray-400 text-black rounded-full w-7 h-7 flex items-center justify-center text-lg font-bold"
          >
            ×
          </button>

          <h5 className="text-center text-lg font-bold mb-4 text-[#153A23]">
            Register Here
          </h5>
          <input
            type="text"
            placeholder="Name"
            className="w-full h-10 p-1 border mb-3 shadow-2xl rounded-md border-gray-300 placeholder:text-[12px] pl-5"
          />
          <input
            type="text"
            placeholder="Company / Business Name"
            className="w-full p-1 border mb-3 shadow-2xl rounded-md border-gray-300 h-10 placeholder:text-[12px] pl-5"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-1 border mb-3 shadow-2xl rounded-md border-gray-300 h-10 placeholder:text-[12px] pl-5"
          />
          <input
            type="text"
            placeholder="Mobile"
            className="w-full p-1 border mb-3 shadow-2xl rounded-md border-gray-300 h-10 placeholder:text-[12px] pl-5"
          />
          <input
            type="text"
            placeholder="Locality"
            className="w-full p-1 border mb-3 shadow-2xl rounded-md border-gray-300 h-10 placeholder:text-[12px] pl-5"
          />
          <div className="flex items-center mb-3">
            <input type="checkbox" className="mr-2" />
            <span>
              I agree to all the{" "}
              <a href="#" className="text-blue-600">
                Terms of Use
              </a>
            </span>
          </div>
          <button className="w-full bg-orange-600 text-white p-2 font-bold">
            Submit
          </button>
          <p className="text-center mt-2">
            Already registered?{" "}
            <button
              className="text-red-600 cursor-pointer"
              onClick={() => navigate("/login")}
            >
              {" "}
              Sign in
            </button>
          </p>
        </div>
      )}

      {/* 8 options */}

      {search ? (
        <div className="relative">
          {/* Close Icon */}
          <button
            onClick={() => (window.location.href = "/result")}
            className="absolute top-4 right-4 z-10 text-black text-2xl font-bold bg-white rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-gray-100"
          >
            &times;
          </button>

          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 mt-20 mb-20">
              {results.data.map((el) => (
                <div
                  key={el.id}
                  className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <div className="bg-[#1077BC] h-40 flex items-center justify-center text-white">
                    <img
                      src={el.image || "https://via.placeholder.com/150"}
                      alt={el.businessName}
                      className="w-70 h-34 object-cover  border-2 border-white shadow-md"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-xl font-semibold text-black">
                      {el.businessName} - {el.address.street}{" "}
                    </h3>
                    <p className="text-gray-600 mt-2">
                      <a
                        href={el.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#002954] underline"
                      >
                        Visit Website
                      </a>
                    </p>

                    <button className="mt-4 px-4 py-2 bg-[#F09918] text-white rounded-lg ">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div
            id="explore"
            className="w-[80%] mx-auto flex flex-wrap justify-center items-center gap-x-40 mt-40"
          >
            <div className="flex items-center justify center flex-col mt-10 flex-wrap w-40">
              <button key={"food"} onClick={() => handleCategoryClick("Food")}>
                <div className="w-40 h-40 flex items-center justify-center rounded-full bg-gradient-to-b from-[#F09918] to-[#D72E2F]">
                  <img
                    src={dining}
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
              <button
                key={"food"}
                onClick={() => handleCategoryClick("Beauty & Wellness")}
              >
                <div className="w-40 h-40 flex items-center justify-center rounded-full bg-gradient-to-b from-[#F09918] to-[#D72E2F]">
                  <img
                    src={spa}
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
              <button
                key={"food"}
                onClick={() => handleCategoryClick("Apparel & Accessories")}
              >
                <div className="w-40 h-40 flex items-center justify-center rounded-full bg-gradient-to-b from-[#F09918] to-[#D72E2F]">
                  <img
                    src={clothing_store}
                    alt="Food & Beverages"
                    className="w-16 h-16 object-contain rounded-full"
                  />
                </div>
              </button>
              <p className="text-center mt-6 mb-6 text-gray-700 font-medium text-xl">
                Apparel & Accessories
              </p>
            </div>

            <div className="flex items-center justify center flex-col mt-10 w-40">
              <button
                key={"food"}
                onClick={() => handleCategoryClick("Education")}
              >
                <div className="w-40 h-40 flex items-center justify-center rounded-full bg-gradient-to-b from-[#F09918] to-[#D72E2F]">
                  <img
                    src={cap}
                    alt="Food & Beverages"
                    className="w-16 h-16 object-contain rounded-full"
                  />
                </div>
              </button>
              <p className="text-center mt-6 mb-6 text-gray-700 font-medium text-xl">
                Education
              </p>
            </div>

            <div className="flex items-center justify center flex-col mt-10 w-40">
              <button
                key={"food"}
                onClick={() => handleCategoryClick("Health")}
              >
                <div className="w-40 h-40 flex items-center justify-center rounded-full bg-gradient-to-b from-[#F09918] to-[#D72E2F]">
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
              <button
                key={"food"}
                onClick={() => handleCategoryClick("Wedding and Events")}
              >
                <div className="w-40 h-40 flex items-center justify-center rounded-full bg-gradient-to-b from-[#F09918] to-[#D72E2F]">
                  <img
                    src={church}
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
              <button
                key={"food"}
                onClick={() => handleCategoryClick("Logistic Services")}
              >
                <div className="w-40 h-40 flex items-center justify-center rounded-full bg-gradient-to-b from-[#F09918] to-[#D72E2F]">
                  <img
                    src={bus}
                    alt="Food & Beverages"
                    className="w-16 h-16 object-contain rounded-full"
                  />
                </div>
              </button>
              <p className="text-center mt-6 mb-6 text-gray-700 font-medium text-xl">
                Logistic Services
              </p>
            </div>

            <div className="flex items-center justify-center flex-col mt-10 w-40">
              <button key={"food"} onClick={handleCategoryClickToMore}>
                <div className="w-40 h-40 flex items-center justify-center rounded-full bg-gradient-to-b from-[#F09918] to-[#D72E2F]">
                  <img
                    src={more_icon}
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

          {/* 500k+  3  */}

          <div className=" bg-[#1077BC] py-22 flex justify-around items-center w-full relative">
            <div className="stat relative text-center">
              <div className="number text-5xl font-medium  text-white px-4 py-1 rounded absolute -top-6 left-1/2 transform -translate-x-1/2">
                500+
              </div>
              <div className="text text-white mt-10">Businesses</div>
            </div>

            <div className="stat relative text-center">
              <div className="number text-5xl font-medium  text-white px-4 py-1 rounded absolute -top-6 left-1/2 transform -translate-x-1/2">
                40K
              </div>
              <div className="text text-white mt-10">Users</div>
            </div>

            <div className="stat relative text-center">
              <div className="number text-5xl font-medium text-white px-4 py-1 rounded absolute -top-6 left-1/2 transform -translate-x-1/2">
                200+
              </div>
              <div className="text text-white mt-10">Premium Usrs</div>
            </div>

            <div className="stat relative text-center">
              <div className="number text-5xl font-medium text-white px-4 py-1 rounded absolute -top-6 left-1/2 transform -translate-x-1/2">
                16+
              </div>
              <div className="text text-white mt-10">Lorem Ipsum</div>
            </div>
          </div>

          {/* Featured business  4  */}

          <div className="bg-white p-10">
            {/*  Header Section  */}
            <div
              id="featuredBusiness"
              className="flex justify-between items-center mb-6 mt-18"
            >
              <h2 className="text-4xl font-bold text-[#F09918] ml-20">
                Featured Business
              </h2>
              <button
                onClick={handleCategoryClickToExplore}
                className="bg-[#F09918] text-white px-8 py-4 text-lg rounded-md font-medium shadow-md mr-20 transition-transform transform hover:scale-95"
              >
                Explore More
              </button>
            </div>

            {/*  Image Cards Section  */}
            <div className="flex justify-center gap-6 mt-20">
              {/* <!-- Card 1 --> */}
              <div className="text-center">
                <img src={first} alt="" className="w-110 h-70" />
                <div className="flex items-center justify-center space-x-2 mt-8 text-3xl">
                  <h3 className="font-bold text-black">Indian Hotels</h3>
                  <div className="text-yellow-300">★★★★★</div>
                </div>
                <Link
                  to="/explore_more"
                  className="text-black text-2xl mt-8 cursor-pointer hover:underline"
                >
                  Click to Explore
                </Link>
              </div>

              {/* <!-- Card 2 --> */}
              <div className="text-center">
                <img src={second} alt="" className="w-110 h-70" />
                <div className="flex items-center justify-center space-x-2 mt-8 text-3xl">
                  <h3 className="font-bold text-black">Indian Food</h3>
                  <div className="text-yellow-300">★★★★★</div>
                </div>
                <Link
                  to="/explore_more"
                  className="text-black text-2xl mt-5 cursor-pointer hover:underline"
                >
                  Click to Explore
                </Link>
              </div>

              {/* <!-- Card 3 --> */}
              <div className="text-center">
                <img src={third} alt="" className="w-110 h-70" />
                <div className="flex items-center justify-center space-x-2 mt-8 text-3xl">
                  <h3 className="font-bold text-black">Accessories</h3>
                  <div className="text-yellow-300">★★★★★</div>
                </div>
                <Link
                  to="/explore_more"
                  className="text-black text-2xl mt-5 cursor-pointer hover:underline"
                >
                  Click to Explore
                </Link>
              </div>
            </div>

            {/* <!-- Slider Icons --> */}
            <div className="flex justify-center gap-6 mt-20">
              <button className="border-4 text-[#01346B] p-9  rounded-full shadow-md cursor-pointer">
                {" "}
                <img src={left_arrow} alt="" />
              </button>
              <button className="border-4 text-[#01346B] p-9 rounded-full shadow-md cursor-pointer">
                {" "}
                <img src={right_arrow} alt="" />
              </button>
            </div>
          </div>

          {/* List your business 5 */}

          <div
            id="addBusiness"
            className="relative bg-white w-full flex items-center justify-center min-h-screen p-6"
          >
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
                  Join the largest Punjabi business directory in Australia.
                  Increase your visibility and connect with customers easily!
                </p>

                <button
                  className="mt-4 px-6 py-3 cursor-pointer bg-[#D72E2F] text-white font-semibold rounded-md  transition"
                  onClick={() => {
                    if (isLoggedIn()) {
                      navigate("/companyDetails");
                    }
                  }}
                >
                  List Now
                </button>
              </div>
            </div>
          </div>

          {/* Blue bg 6*/}

          <div className="relative z-0">
            <div className="mt-16">
              <img src={blue_bg} alt="" />
            </div>

            <div className="absolute inset-0 flex items-center justify-center z-5">
              {/* left */}

              <div className="flex flex-col items-center justify-center w-[20rem] gap-y-80">
                <div className="text-white">
                  <h1 className="text-2xl">Highly Affordable</h1>
                  <p className="mt-4">
                    From ideation to execution, we cover every aspect of the
                    digital journey.
                  </p>
                </div>

                <div className="text-white ">
                  <h1 className="text-2xl">Highly Affordable</h1>
                  <p className="mt-4">
                    From ideation to execution, we cover every aspect of the
                    digital journey.
                  </p>
                </div>
              </div>

              {/* mid image */}
              <div className="relative flex items-center justify-center w-[40rem]">
                <div className="absolute w-[120px] h-[120px] border-3 text-[#FF8D49]  rounded-[50%] bg-[#013D7B]  z-10 top-[-1.5rem] left-[6rem]"></div>
                <div className="absolute w-[120px] h-[120px] border-3 text-[#FF8D49] rounded-[50%] bg-[#013D7B]  z-10 top-[-1.5rem] right-[6rem]"></div>
                <div className="absolute w-[120px] h-[120px] border-3 text-[#FF8D49] rounded-[50%] bg-[#013D7B]  z-10 bottom-[-1.5rem] left-[6rem]"></div>
                <div className="absolute w-[120px] h-[120px] border-3 text-[#FF8D49] rounded-[50%] bg-[#013D7B]  z-10 bottom-[-1.5rem] right-[6rem]"></div>
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
                  <h1 className="text-2xl">Highly Affordable</h1>
                  <p className="mt-4">
                    From ideation to execution, we cover every aspect of the
                    digital journey.
                  </p>
                </div>

                <div>
                  <h1 className="text-2xl">Highly Affordable</h1>
                  <p className="mt-4">
                    From ideation to execution, we cover every aspect of the
                    digital journey.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* How it works  7 */}

          <div
            id="howWorks"
            className="bg-[#fdfaf3] px-6 lg:px-20 py-24 min-h-screen mb-10 ]"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              {/* Left Section */}
              <div>
                <h1 className="text-4xl md:text-5xl font-semibold text-[#D72E2F] mb-4 pt-20">
                  How It Works ?
                </h1>
                <p className="text-[#646464] mb-6 pt-10 text-2xl">
                  We’ve designed our user-friendly system to make your <br />
                  search for businesses more effortless and smooth.
                </p>
                <div className="relative z-[10]">
                  <div className="absolute left-4 bottom-8 h-full w-[2px] bg-black z-[-1] ml-[0.3rem]"></div>

                  {/* Step 1 */}
                  <div className="flex items-start mb-10 mt-20 z-[10]">
                    <div className="w-15 h-12 bg-[#FFA032] text-black flex items-center justify-center rounded-full text-lg font-semibold">
                      1
                    </div>
                    <div className="ml-12">
                      <h3 className="text-3xl font-semibold text-[#D72E2F]">
                        Search
                      </h3>
                      <p className="text-gray-600 text-lg">
                        Use our search bar to find businesses in your network.
                        Enter the keywords, location.
                      </p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex items-start mb-10">
                    <div className="w-12 h-10 bg-[#FFA032] text-black flex items-center justify-center rounded-full text-lg font-semibold">
                      2
                    </div>
                    <div className="ml-12">
                      <h3 className="text-3xl font-semibold text-[#D72E2F]">
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
                    <div className="w-12 h-12 bg-[#FFA032] text-black flex items-center justify-center rounded-full text-lg font-semibold">
                      3
                    </div>
                    <div className="ml-12">
                      <h3 className="text-3xl font-semibold text-[#D72E2F]">
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
                    <h5 className="text-lg mr-18">Indian Food</h5>
                    <div className="text-orange-700">★★★★★</div>
                  </div>
                </div>

                {/* Button */}
                <div className="absolute bottom-[-170px] ml-75">
                  <Link to="/more">
                    <button className="bg-[#D72E2F] text-white px-12 py-6 rounded-md text-xl font-semibold shadow-md hover:bg-orange-700 transition">
                      Search more
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* second last page 8 */}
          <div className="relative bg-[#1575C2] py-20 px-6 md:px-16 lg:px-24 ">
            {/* Background Image */}
            <img
              src={blue_bg}
              alt=""
              className="absolute inset-0 w-full h-full object-cover opacity-30"
            />

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
                  Discover <span className="text-yellow-500">Punjabi</span>{" "}
                  Businesses And Pages!
                </h2>
                <p className="mt-4 text-lg md:text-xl">
                  Download the Punjabi Pages app to explore and connect with
                  trusted businesses, services, and community resources in your
                  area.
                </p>

                {/* Download Buttons */}
                <div className="mt-6 flex flex-wrap justify-center lg:justify-start space-x-4">
                  <a
                    href="https://play.google.com/store"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={playstore}
                      alt="Google Play"
                      className="w-40 md:w-48 cursor-pointer hover:scale-110 transition-transform duration-300"
                    />
                  </a>
                  <a
                    href="https://www.apple.com/app-store/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={appstore}
                      alt="App Store"
                      className="w-40 md:w-48 cursor-pointer hover:scale-110 transition-transform duration-300"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer></Footer>
    </div>
  );
};

export default Result;
