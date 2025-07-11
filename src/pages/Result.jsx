import React, { useEffect } from "react";
import logo from "../explore_assets/new_logo.jpeg";
import search_icon from "../home_assets/search icon.png";
import bus from "../result_assets/warehouse 1.png";
import cap from "../result_assets/graduation-hat 1.png";
import church from "../result_assets/event 1.png";
import more_icon from "../result_assets/menu-bar 2.png";
import health from "../result_assets/healthcare 2.png";
import dining from "../result_assets/salad 2.png";
import clothing_store from "../result_assets/clothing_store.png";
import spa from "../result_assets/beauty-product 2.png";
import Footer from "../components/Footer";
import second from "../result_assets/2 card.png";
import rectangle from "../result_assets/rectangle_new.png";
import girl from "../result_assets/new_girl.png";
import receptionist from "../result_assets/recep_replace.jpg";
import left_phone from "../result_assets/left_phone.png";
import right_phone from "../result_assets/right_phone.png";
import playstore from "../result_assets/playstore 1.png";
import appstore from "../result_assets/appstore 1.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Ellipse_4 from "../result_assets/Ellipse 4.png";
import Ellipse_5 from "../result_assets/Ellipse 5.png";
import Group_11 from "../result_assets/Group 11.png";
import blue_bg from "../main_assets/new_blue.png";
import { useState } from "react";
import axios from "axios";
import { X } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/authSlice";
import weather_icon from "../result_assets/weather_icon.png";
import Explore from "../components/Explore";
import { SERVER_URL } from "../services/Helper";
import PopularCategories from "../components/PopularCategories";
import bg_video from "../result_assets/bg_video.mp4";
import UserLocation from "../components/UserLocation";

const Result = () => {
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);
  
  // weather
  const [weatherVisible, setWeatherVisible] = useState(false);
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
      const response = await axios.get(`${SERVER_URL}company/searchResults`, {
        params: {
          primaryBusiness: data.primaryBusiness, // Query parameter to be passed in URL
        },
      });
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

  const handleCategoryClick = (category) => {
    navigate(`/category/${encodeURIComponent(category)}`); // Navigate to category page
  };

  // weather
  const handleWeatherChange = (e) => {
    setLocation(e.target.value);
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          fetchWeatherByCoords(lat, lon); // call this function
        },
        (err) => {
          console.error("Error getting location:", err.message);
        }
      );
    }
  }, []);

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

  const fetchWeatherByCoords = async (lat, lon) => {
    const apiKey = "f69ee6d52e37c6d325586aa8562b7b04";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.main) {
        setWeather(data);
      } else {
        alert("Unable to fetch weather for your location.");
      }
    } catch (error) {
      console.error("Error fetching weather by location:", error);
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

  //login
  const isUserLoggedIn = useSelector((state) => state.auth.status); // Check if user is logged in
  const dispatch = useDispatch();

  //logout
  const handleLogout = async () => {
    dispatch(logout());
    const response = await axios.post(
      `${SERVER_URL}users/logout`,
      {},
      { withCredentials: true }
    );
    console.log(response);
    if (response.status == 200) {
      navigate("/");
    }
  };

  return (
    <div id="about" className="relative h-screen z-[10]">
      {/* {/Navbar/} */}
      <div className=" relative flex items-center justify-between px-10 py-2 bg-[#1077BC] w-full ">
        <Link to="/home" className="flex items-center">
          <img
            src={logo}
            alt="Punjabi Logo"
            className="w-20 rounded-full ml-4"
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
          <Link
            to="/review"
            className="text-white font-semibold hover:text-gray-900"
          >
            Write a Review
          </Link>
          <Link
            to="/articles"
            className="text-white font-semibold hover:text-gray-900"
          >
            Articles
          </Link>

        </div>

        {/* Login Button*/}
        <button
          onClick={() => setShowForm((prev) => !prev)}
          className="mr-20 px-4 py-2 bg-yellow-500 text-black text-lg rounded-lg hover:bg-yellow-600 transition"
        >
          Login
        </button>

        {/* Weather checker */}

        <button
          onClick={() => setWeatherVisible(true)}
          className={`absolute top-5 right-5 z-50 ${
            weatherVisible ? "" : ""
          }`}
        >
          <img src={weather_icon} alt="Weather Icon" className="w-12 h-12" />
        </button>

        {/* Weather Box */}
        {weatherVisible && (
          <div className="absolute top-23 right-5 bg-[#F09918] text-white w-[250px] p-4 rounded-2xl shadow-lg z-50">
            <form onSubmit={handleWeatherSubmit} className="flex">
              <input
                type="text"
                placeholder="Search Weather"
                name="location"
                onChange={handleWeatherChange}
                className="w-full p-2 rounded-xl text-black border-2"
              />
              <button type="submit" className="ml-2">
                <img src={search_icon} alt="Search" className="w-[30px] mr-4" />
              </button>
            </form>

            {/* Close Button */}
            <button
              onClick={() => setWeatherVisible(false)}
              className="absolute top-1 right-1 bg-gray-200 p-1 rounded-full hover:bg-gray-300"
            >
              <X className="w-4 h-4 text-black" />
            </button>

            {/* Weather Info */}
            {weather && (
              <div className="mt-4 text-left">
                <h2 className="text-lg font-semibold mb-2">
                  Weather in {weather.name}
                </h2>
                <p>🌡️ Temperature: {weather.main.temp}°C</p>
                <p>🌤️ Condition: {weather.weather[0].description}</p>
                <p>💧 Humidity: {weather.main.humidity}%</p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* <UserLocation /> */}

      {/* Background Image */}
      <div className="absolute inset-0 z-[-50] pt-20">
        <div className="absolute "></div>
        <video
          className="w-full h-[450px] object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={bg_video} type="video/mp4" />
        </video>
      </div>

      {/* Main Content */}
      <div className="w-[80%] mx-auto flex flex-col items-start text-white text-center mr-30 mt-40 justify-center">
        <h1 className="text-5xl font-bold">
          Discover  Businesses
          <br />
        </h1>

        <br />
        <h4 className="mb-4 text-2xl">
          From restaurants to real estate,find trusted businesses in your
          community.
        </h4>
      </div>

      {/* Search Bar */}
      <div
        id="searchBox"
        className="bg-white w-full max-w-[1170px] h-[70px] flex justify-center items-stretch rounded-lg shadow-lg mt-10 mx-auto px-4"
      >
        {/* Search Business Input */}
        <form onSubmit={handleSubmit} className="flex flex-1 max-w-[1170px]">
          {/* Search Input */}
          <input
            type="text"
            placeholder="Search the Businesses..."
            name="primaryBusiness"
            onChange={handleChange}
            className="flex-1 min-w-[100px] p-2 rounded-l-2xl focus:outline-none text-black border-r border-gray-300 m-1"
          />

          {/* Location Input */}
          <input
            type="text"
            name="location"
            placeholder="Location"
            onChange={handleChange}
            className="flex-1 min-w-[100px] p-2 focus:outline-none text-black m-1"
          />

          {/* Search Button */}
          <div className="flex items-stretch">
            <button className="bg-[#F09918] text-white rounded-sm flex items-center justify-center w-[75px] min-w-[60px] mt-2 h-[54px]">
              <img src={search_icon} alt="Search" className="w-[30px]" />
            </button>
          </div>
        </form>
      </div>

      {showForm && (
        <div className="fixed top-5 right-4 bg-white text-black cursor-pointer text-lg p-6 shadow-2xl rounded-lg w-46 z-50 mt-16 mr-5 gap-2">
          {/* Close Button */}
          {isUserLoggedIn ? (
            <div onClick={handleLogout}>Logout</div>
          ) : (
            <div onClick={() => navigate("/login")}>Login</div>
          )}
           
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
            className="w-[80%] mx-auto flex flex-wrap justify-center items-center gap-x-40 mt-25"
          >
            <div className="flex flex-row flex-nowrap overflow-x-auto space-x-6 px-4">
              {/* Food & Beverages */}
              <div className="flex items-center justify-center flex-col w-40">
                <button
                  key={"food"}
                  onClick={() => handleCategoryClick("Food")}
                >
                  <div className="flex items-center justify-center ">
                    <img
                      src={dining}
                      alt="Food & Beverages"
                      className="w-13 h-13 object-contain "
                    />
                  </div>
                </button>
                <p className="text-center mt-2 mb-6 text-gray-700 font-medium text-lg">
                  Food & Beverages
                </p>
              </div>

              {/* Beauty & Wellness */}
              <div className="flex items-center justify-center flex-col w-40">
                <button
                  onClick={() => handleCategoryClick("Beauty & Wellness")}
                >
                  <div className="flex items-center justify-center rounded-full">
                    <img
                      src={spa}
                      alt="Beauty & Wellness"
                      className="w-13 h-13 object-contain"
                    />
                  </div>
                </button>
                <p className="text-center mt-2 mb-6 text-gray-700 font-medium text-lg">
                  Beauty & Wellness
                </p>
              </div>

              {/* Apparel & Accessories */}
              <div className="flex items-center justify-center flex-col w-40">
                <button
                  onClick={() => handleCategoryClick("Apparel & Accessories")}
                >
                  <div className="flex items-center justify-center rounded-full">
                    <img
                      src={clothing_store}
                      alt="Apparel & Accessories"
                      className="w-13 h-13 object-contain "
                    />
                  </div>
                </button>
                <p className="text-center mt-2 mb-6 text-gray-700 font-medium text-lg">
                  Apparel & Accessories
                </p>
              </div>

              {/* Education */}
              <div className="flex items-center justify-center flex-col w-40">
                <button onClick={() => handleCategoryClick("Education")}>
                  <div className="flex items-center justify-center rounded-full">
                    <img
                      src={cap}
                      alt="Education"
                      className="w-13 h-13 object-contain"
                    />
                  </div>
                </button>
                <p className="text-center mt-2 mb-6 text-gray-700 font-medium text-lg">
                  Education
                </p>
              </div>

              {/* Health */}
              <div className="flex items-center justify-center flex-col w-40">
                <button onClick={() => handleCategoryClick("Health")}>
                  <div className="flex items-center justify-center rounded-full">
                    <img
                      src={health}
                      alt="Health"
                      className="w-13 h-13 object-contain rounded-full"
                    />
                  </div>
                </button>
                <p className="text-center mt-2 mb-6 text-gray-700 font-medium text-lg">
                  Health
                </p>
              </div>

              {/* Wedding and Events */}
              <div className="flex items-center justify-center flex-col w-40">
                <button
                  onClick={() => handleCategoryClick("Wedding and Events")}
                >
                  <div className="flex items-center justify-center rounded-full">
                    <img
                      src={church}
                      alt="Wedding and Events"
                      className="w-11 h-11 object-contain"
                    />
                  </div>
                </button>
                <p className="text-center mt-2 mb-6 text-gray-700 font-medium text-lg">
                  Wedding and Events
                </p>
              </div>

              {/* Logistic Services */}
              <div className="flex items-center justify-center flex-col w-40">
                <button
                  onClick={() => handleCategoryClick("Logistic Services")}
                >
                  <div className="flex items-center justify-center rounded-full">
                    <img
                      src={bus}
                      alt="Logistic Services"
                      className="w-11 h-11 object-contain"
                    />
                  </div>
                </button>
                <p className="text-center mt-2 mb-6 text-gray-700 font-medium text-lg">
                  Logistic Services
                </p>
              </div>

              {/* More */}
              <div className="flex items-center justify-center flex-col w-40">
                <button onClick={handleCategoryClickToMore}>
                  <div className="flex items-center justify-center rounded-full">
                    <img
                      src={more_icon}
                      alt="More"
                      className="w-13 h-13 object-contain rounded-full"
                    />
                  </div>
                </button>
                <p className="text-center mt-6 mb-6 text-gray-700 font-medium text-lg">
                  More
                </p>
              </div>
            </div>

            {/* <More /> */}
          </div>

          {/* Pupular Categories */}

          <PopularCategories />

          {/* 500k+  3  */}

          <div className="bg-[#1077BC] py-16 md:py-22 flex flex-wrap justify-center gap-8 md:justify-around items-center w-full relative px-4">
            {/* Business Stat */}
            <div className="stat relative text-center w-[160px] md:w-auto">
              <div className="number text-3xl sm:text-4xl md:text-5xl font-medium text-white px-4 py-1 rounded absolute -top-6 left-1/2 transform -translate-x-1/2 bg-[#1077BC]">
                500+
              </div>
              <div className="text text-white mt-10 text-sm sm:text-base md:text-lg">
                Businesses
              </div>
            </div>

            {/* Users Stat */}
            <div className="stat relative text-center w-[160px] md:w-auto">
              <div className="number text-3xl sm:text-4xl md:text-5xl font-medium text-white px-4 py-1 rounded absolute -top-6 left-1/2 transform -translate-x-1/2 bg-[#1077BC]">
                40K
              </div>
              <div className="text text-white mt-10 text-sm sm:text-base md:text-lg">
                Users
              </div>
            </div>

            {/* Premium Users Stat */}
            <div className="stat relative text-center w-[160px] md:w-auto">
              <div className="number text-3xl sm:text-4xl md:text-5xl font-medium text-white px-4 py-1 rounded absolute -top-6 left-1/2 transform -translate-x-1/2 bg-[#1077BC]">
                200+
              </div>
              <div className="text text-white mt-10 text-sm sm:text-base md:text-lg">
                Premium Users
              </div>
            </div>

            {/* Listings Stat */}
            <div className="stat relative text-center w-[160px] md:w-auto">
              <div className="number text-3xl sm:text-4xl md:text-5xl font-medium text-white px-4 py-1 rounded absolute -top-6 left-1/2 transform -translate-x-1/2 bg-[#1077BC]">
                16+
              </div>
              <div className="text text-white mt-10 text-sm sm:text-base md:text-lg">
                Business Listings Daily
              </div>
            </div>
          </div>

          {/* Featured business  4  */}

          <Explore />

          {/* List your business 5 */}

          <div
            id="addBusiness"
            className="relative bg-white w-full flex items-center justify-center h-[696px] p-6"
          >
            {/* Background Image */}
            <img
              src={rectangle}
              alt="Background"
              className="absolute  w-[1400px] mx-auto top-[12rem] left-1/2 -translate-x-1/2 -translate-y-1/20 z-[5] h-[451px]"
            />

            <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl">
              {/* Left Section - Girl Image */}
              <div className="w-full md:w-1/2 flex justify-center z-[10] ">
                <img
                  src={girl}
                  alt="Woman using a blender"
                  className="w-full max-w-md md:max-w-lg mt-10  absolute top-[21rem] left-[30rem] transform -translate-x-1/2 -translate-y-1/2"
                />
              </div>

              {/* Right Section - Business Info */}
              <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left p-6 relative z-[10] mt-20">
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
              <img src={blue_bg} alt="" className="w-full h-[900px]" />
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
                  <h1 className="text-2xl">End-to-End Expertise</h1>
                  <p className="mt-4">
                    From ideation to execution, we cover every aspect of the
                    digital journey.
                  </p>
                </div>
              </div>

              {/* mid image */}
              <div className="relative flex items-center justify-center w-[40rem]">
                <div className="absolute w-[120px] h-[120px]   rounded-[50%] bg-[#D72E2F]  z-10 top-[-1.5rem] left-[6rem]"></div>
                <div className="absolute w-[120px] h-[120px]  rounded-[50%] bg-[#D72E2F]  z-10 top-[-1.5rem] right-[6rem]"></div>
                <div className="absolute w-[120px] h-[120px]  rounded-[50%] bg-[#D72E2F]  z-10 bottom-[-1.5rem] left-[6rem]"></div>
                <div className="absolute w-[120px] h-[120px]  rounded-[50%] bg-[#D72E2F]  z-10 bottom-[-1.5rem] right-[6rem]"></div>
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
                  <h1 className="text-2xl">Innovative Approach</h1>
                  <p className="mt-4">
                    From ideation to execution, we cover every aspect of the
                    digital journey.
                  </p>
                </div>

                <div>
                  <h1 className="text-2xl">Customer-Centric Solution</h1>
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
