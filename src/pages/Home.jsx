import React, { useState, useEffect } from "react";
import home from "../main_assets/home_new.jpg";
import logo from "../explore_assets/new_logo.jpeg";
import menu from "../home_assets/Menu Logo.png";
import girl from "../main_assets/ipad_girl.png";
import people from "../home_assets/people.png";
import location from "../home_assets/location icon.png";
import arcti from "../home_assets/arcticons_boost.png";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/authSlice";
import axios from "axios";
import google from "../main_assets/google_icon.png";
import x from "../main_assets/x_icon.png";
import { SERVER_URL } from "../services/Helper";

const Home = () => {
  const [showForm, setShowForm] = useState(false);

  const [loggedIn, setLoggedIn] = useState(false);

  const navigate = useNavigate();

  //  Function to navigate to Result Page
  const goToResultPage = () => {
    navigate("/result");
  };

  // function to navigate to dashboard page
  const goToDashboard = () => {
    navigate("/dashboard");
  };

  // Function to navigate to blogs page
  const goToBlogs = () => {
    navigate("/blogs");
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
    return !!accessToken;
  };

  useEffect(() => {
    setLoggedIn(isLoggedIn());
  }, []);

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

  const handleGoogleLogin = () => {
    window.location.href = "https://accounts.google.com/signin"; // Replace with your OAuth URL
  };

  const handleTwitterLogin = () => {
    window.location.href = "https://twitter.com/i/oauth2/authorize"; // Replace with your OAuth URL
  };

  return (
    <div className="relative h-screen z-[10]">
      {/* Navbar */}
      <div className="relative flex flex-wrap items-center justify-between px-4 py-4 bg-transparent w-full z-[50]">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Punjabi Logo"
            className="w-16 rounded-full ml-4"
          />
        </Link>

        {/* Center Nav Links (shown only on large screens) */}
        <div className="hidden md:flex flex-1 justify-center items-center space-x-10">
          <button
            onClick={() => {
              if (isLoggedIn()) {
                navigate("/companyDetails");
              }
            }}
            className="text-white font-semibold hover:text-gray-900"
          >
            Add a Business
          </button>
          <button
            onClick={goToResultPage}
            className="text-white font-semibold hover:text-gray-900"
          >
            Our Services
          </button>
          <button
            onClick={goToBlogs}
            className="text-white font-semibold hover:text-gray-900"
          >
            Blogs
          </button>
        </div>

        {/* Right section - Dashboard & Menu Icon */}
        <div className="flex items-center space-x-4">
        {loggedIn && (
  localStorage.getItem("userType") === "Admin" ? (
    <div className="hidden md:flex justify-center items-center h-12 w-60 cursor-pointer rounded-lg border-2 border-yellow-400">
      <button
        onClick={() => navigate("/admin/dashboard")}
        className="text-white text-lg font-semibold cursor-pointer"
      >
        Admin Dashboard
      </button>
    </div>
  ) : (
    <div className="hidden md:flex justify-center items-center h-12 w-40 cursor-pointer rounded-lg border-2 border-yellow-400">
      <button
        onClick={goToDashboard}
        className="text-white text-lg font-semibold cursor-pointer"
      >
        Dashboard
      </button>
    </div>
  )
)}

          <img
            onClick={() => setShowForm((prev) => !prev)}
            src={menu}
            alt="Menu Logo"
            className="w-10 rounded-full mr-4"
          />
        </div>

        {/* Mobile Menu */}
        {showForm && (
          <div className="w-full flex flex-col items-center bg-black bg-opacity-90 py-4 space-y-4 mt-4 md:hidden rounded-md">
            <button
              onClick={() => {
                if (isLoggedIn()) {
                  setShowForm(false);
                  navigate("/companyDetails");
                }
              }}
              className="text-white font-semibold hover:text-gray-400"
            >
              Add a Business
            </button>
            <button
              onClick={() => {
                setShowForm(false);
                goToResultPage();
              }}
              className="text-white font-semibold hover:text-gray-400"
            >
              Our Services
            </button>
            <button
              onClick={() => {
                setShowForm(false);
                goToBlogs();
              }}
              className="text-white font-semibold hover:text-gray-400"
            >
              Blogs
            </button>
            <button
              onClick={() => {
                setShowForm(false);
                goToDashboard();
              }}
              className="text-white font-semibold border border-yellow-400 px-4 py-2 rounded-md"
            >
              Dashboard
            </button>
          </div>
        )}
      </div>

      {/* Background Image */}
      <div className="absolute inset-0 z-[-50]">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <img
          src={home}
          alt="Home Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Main Content */}
      <div className="flex relative z-10 flex-col justify-center items-start text-white text-left h-full px-4 md:px-10 lg:ml-20 -mt-10 md:-mt-20">
        {/* login form */}
        <div className="absolute top-5 right-10 bg-white p-6 shadow-2xl rounded-lg w-96 z-50 mt-40 mr-20 gap-2">
          <h5 className="text-center text-lg font-bold mb-4 text-[#153A23]">
            Login Here
          </h5>

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-1 border mb-3 shadow-2xl rounded-md border-gray-300 text-black h-10 placeholder:text-[12px] pl-5"
          />
          <input
            type="text"
            placeholder="Password"
            className="w-full p-1 border mb-3 shadow-2xl rounded-md border-gray-300 text-black h-10 placeholder:text-[12px] pl-5"
          />

          <button
            onClick={goToResultPage}
            className="w-full rounded-2xl bg-yellow-400 text-white p-2 font-bold"
          >
            Sign in
          </button>

          {/* Social Login Buttons */}
          <button
            onClick={handleGoogleLogin}
            className="w-full max-w-xs flex items-center justify-center gap-2 border rounded-md py-2 sm:py-3 mt-3 sm:mt-4 bg-black transition text-sm sm:text-base"
          >
            <img src={google} alt="Google" className="w-4 sm:w-5" />
            <span>Sign in with Google</span>
          </button>

          <button
            onClick={handleTwitterLogin}
            className="w-full max-w-xs flex items-center justify-center gap-2 border rounded-md py-2 sm:py-3 mt-2 sm:mt-3 bg-black transition text-sm sm:text-base"
          >
            <img src={x} alt="Twitter" className="w-4 sm:w-5" />
            <span>Sign in with Twitter</span>
          </button>

          <p className="text-black text-xs mt-5  sm:text-sm">
            Don't have an account?{" "}
            <Link to="/register" className="text-[#F09918] hover:underline">
              Sign Up
            </Link>{" "}
            for <strong>FREE</strong>
          </p>
        </div>
        {/* last div of form */}
      </div>

      {/* Registration Form (Only Visible When ShowForm is True) */}

      {showForm && (
        <div className="fixed top-5 right-4 bg-white text-black text-lg p-6 cursor-pointer shadow-2xl rounded-lg w-46 z-50 mt-16 mr-5 gap-2">
          {/* Close Button */}
          {isUserLoggedIn ? (
            <div onClick={handleLogout}>Logout</div>
          ) : (
            <div onClick={() => navigate("/login")}>Login</div>
          )}

          {/* login form */}
          {/* <div className="fixed top-5 right-10 bg-white p-6 shadow-2xl rounded-lg w-96 z-50 mt-40 mr-20 gap-2">
            <h5 className="text-center text-lg font-bold mb-4 text-[#153A23]">
              Login Here
            </h5>

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-1 border mb-3 shadow-2xl rounded-md border-gray-300  h-10 placeholder:text-[12px] pl-5"
            />
            <input
              type="text"
              placeholder="Password"
              className="w-full p-1 border mb-3 shadow-2xl rounded-md border-gray-300  h-10 placeholder:text-[12px] pl-5"
            />

            <button
              onClick={goToResultPage}
              className="w-full rounded-2xl bg-yellow-400 text-white p-2 font-bold"
            >
              Sign in
            </button>

            <button
              onClick={handleGoogleLogin}
              className="w-full max-w-xs flex items-center justify-center gap-2 border rounded-md py-2 sm:py-3 mt-3 sm:mt-4 bg-white hover:bg-gray-100 transition text-sm sm:text-base"
            >
              <img src={google} alt="Google" className="w-4 sm:w-5" />
              <span>Sign in with Google</span>
            </button>

            <button
              onClick={handleTwitterLogin}
              className="w-full max-w-xs flex items-center justify-center gap-2 border rounded-md py-2 sm:py-3 mt-2 sm:mt-3 bg-white hover:bg-gray-100 transition text-sm sm:text-base"
            >
              <img src={x} alt="Twitter" className="w-4 sm:w-5" />
              <span>Sign in with Twitter</span>
            </button>

            <p className="text-black text-xs mt-5  sm:text-sm">
              Don't have an account?{" "}
              <Link to="/register" className="text-[#F09918] hover:underline">
                Sign Up
              </Link>{" "}
              for <strong>FREE</strong>
            </p>
          </div> */}
          {/* last div of form */}
        </div>
      )}

      <div className="absolute top-[79%] bg-green-800 w-[100%] h-[20%] border-green-800  opacity-100  mix-blend-overlay z-[-10] bg-gradient-to-r from-green-800 from-30% via-green-200 via-30% to-green-800 to-80% blur-2xl"></div>

      {/* List Business Detail */}

      <div className="relative container mt-20 mx-auto px-4 sm:px-6 bg-white">
        {/* <!-- Progress Steps --> */}
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-8 sm:space-y-0 sm:space-x-4 md:space-x-10 lg:space-x-20 mb-6 sm:mb-10">
          <div className="relative flex flex-col items-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-22 md:h-22 border-2 bg-[#1077BC] border-black text-[#F09918] flex justify-center items-center rounded-full font-medium text-3xl sm:text-4xl md:text-5xl">
              1
            </div>
            <span className="mt-2 sm:mt-4 text-lg sm:text-xl md:text-2xl font-semibold text-[#D72E2F] text-center">
              List Your Business
            </span>
          </div>
          <div className="w-16 sm:w-20 md:w-32 border-t-2 sm:border-t-4 border-green-700 rotate-90 sm:rotate-0"></div>
          <div className="relative flex flex-col items-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-22 md:h-22 border-2 bg-[#1077BC] border-black text-[#F09918] flex justify-center items-center rounded-full font-medium text-3xl sm:text-4xl md:text-5xl">
              2
            </div>
            <span className="mt-2 sm:mt-4 text-lg sm:text-xl md:text-2xl font-semibold text-[#D72E2F] text-center">
              Verify Your Business
            </span>
          </div>
          <div className="w-16 sm:w-20 md:w-32 border-t-2 sm:border-t-4 border-green-700 rotate-90 sm:rotate-0"></div>
          <div className="relative flex flex-col items-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-22 md:h-22 border-2 bg-[#1077BC] border-black text-[#F09918] flex justify-center items-center rounded-full font-medium text-3xl sm:text-4xl md:text-5xl">
              3
            </div>
            <span className="mt-2 sm:mt-4 text-lg sm:text-xl md:text-2xl font-semibold text-[#D72E2F] text-center">
              Target Customer
            </span>
          </div>
        </div>

        {/* <!-- Content Section --> */}
        <div className="flex flex-col lg:flex-row justify-between items-center p-0">
          {/* <!-- Left Text --> */}
          <div className="w-full lg:w-1/2 mt-8 sm:mt-12 lg:mt-30 px-4 sm:px-6 lg:px-0 lg:ml-10 xl:ml-20 order-2 lg:order-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#F09918] text-center lg:text-left">
              List Your Business Details
            </h1>
            <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl text-[#646464] text-center lg:text-left">
              To begin, you need to create an account on Punjabi Pages. Simply
              visit the Sign-Up page and enter your details. Once
              submitted,you'll receive an OTP verification via email. Verify
              your email,log in to your dashboard, and you are ready to add your
              business information.
            </p>
          </div>

          {/* <!-- Right Image --> */}
          <div className="w-full lg:w-1/2 flex justify-center order-1 lg:order-2">
            <img
              src={girl}
              alt="Businessman"
              className="w-3/4 sm:w-1/2 lg:w-3/4 xl:w-auto max-w-md lg:mr-10 xl:mr-60 align-bottom"
              style={{ marginBottom: "-0.6rem" }}
            />
          </div>
        </div>
      </div>

      {/* List Business page  */}

      <section className="bg-[#1077BC] text-white py-8 sm:py-12 px-4 sm:px-6 flex items-center justify-center flex-col">
        {/* Heading Section */}
        <div className="max-w-3xl mx-auto w-full px-4 sm:px-6 lg:ml-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold sm:ml-14 mt-8 sm:mt-14 text-center sm:text-left">
            Why List Your <span className="text-yellow-400">Business</span> with
            Us?
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mt-6 sm:mt-12 sm:ml-15 leading-relaxed text-center sm:text-left">
            Are you a Punjabi business owner in Australia? Increase your
            visibility and attract more customers by listing your business on
            Punjabi Pages – the leading directory for Punjabi-owned businesses
            across Australia.
          </p>
        </div>

        {/* Features Section */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-40 w-full max-w-5xl px-4 sm:px-6">
          {/* Feature 1 */}
          <div className="text-center relative px-4">
            <div className="relative w-52 h-52 sm:w-60 sm:h-60 mx-auto border-2 border-white rounded-full flex flex-col items-center justify-center overflow-hidden p-4">
              <div className="absolute top-6 w-full h-full"></div>
              <img
                src={location}
                alt="Reach Local Customers"
                className="w-12 h-12 sm:w-14 sm:h-14 mb-2 sm:mb-3 relative z-10"
              />
              <h3 className="text-sm sm:text-base font-semibold mt-1 sm:mt-2 relative z-10">
                Reach Local Customers
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm relative z-10 mt-1 sm:mt-2">
                Get discovered by people searching for businesses like yours.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="text-center relative px-4">
            <div className="relative w-52 h-52 sm:w-60 sm:h-60 mx-auto border-2 border-white rounded-full flex flex-col items-center justify-center overflow-hidden p-4">
              <div className="absolute -top-6 w-full h-full"></div>
              <img
                src={arcti}
                alt="Boost Online Presence"
                className="w-12 h-12 sm:w-14 sm:h-14 mb-2 sm:mb-3 relative z-10"
              />
              <h3 className="text-sm sm:text-base font-semibold mt-1 sm:mt-2 relative z-10">
                Boost Online Presence
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm relative z-10 mt-1 sm:mt-2">
                Improve your brand visibility and credibility. No hidden
                charges!
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="text-center relative px-4">
            <div className="relative w-52 h-52 sm:w-60 sm:h-60 mx-auto border-2 border-white rounded-full flex flex-col items-center justify-center overflow-hidden p-4">
              <div className="absolute -top-6 w-full h-full"></div>
              <img
                src={people}
                alt="Targeted Audience"
                className="w-12 h-12 sm:w-14 sm:h-14 mb-2 sm:mb-3 relative z-10"
              />
              <h3 className="text-sm sm:text-base font-semibold mt-1 sm:mt-2 relative z-10">
                Targeted Audience
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm relative z-10 mt-1 sm:mt-2">
                Connect with the Punjabi community looking for services they
                trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Question section */}
      <section className="bg-[#FFFDF5] py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-12">
        {/* Heading */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#D72E2F]">
            Explore Answers to your Question!
          </h2>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 max-w-6xl mx-auto">
          {/* FAQ Item 1 */}
          <div className="p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#F09918]">
              Q. What is Panjabi Pages?
            </h2>
            <p className="text-[#454545] mt-2 text-base sm:text-lg md:text-xl">
              Panjabi Pages is a business directory app designed to help the
              Punjabi community discover and connect with local businesses,
              services, and cultural events. From restaurants to professionals,
              everything is curated with the Punjabi lifestyle in mind.
            </p>
          </div>

          {/* FAQ Item 2 */}
          <div className="p-4 sm:p-6">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#F09918]">
              Q. Is Panjabi Pages only for Punjabi-owned businesses?
            </h3>
            <p className="text-[#454545] mt-2 text-base sm:text-lg md:text-xl">
              No, any business that serves or supports the Punjabi community is
              welcome to list. Our goal is to build a strong, helpful network
              for everyone in the community.
            </p>
          </div>

          {/* FAQ Item 3 */}
          <div className="p-4 sm:p-6">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#F09918]">
              Q. How can I list my business on Panjabi Pages?
            </h3>
            <p className="text-[#454545] mt-2 text-base sm:text-lg md:text-xl">
              Simply tap the "Add Your Business" button on the app, fill out the
              form with your details, and submit. Once verified, your listing
              will go live.
            </p>
          </div>

          {/* FAQ Item 4 */}
          <div className="p-4 sm:p-6">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#F09918]">
              Q. Is there a fee to list a business?
            </h3>
            <p className="text-[#454545] mt-2 text-base sm:text-lg md:text-xl">
              Basic listings are free. We also offer premium plans for extra
              visibility, featured placements, and promotional tools.
            </p>
          </div>

          {/* FAQ Item 5 */}
          <div className="p-4 sm:p-6">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#F09918]">
              Q. Can I search by location or business category?
            </h3>
            <p className="text-[#454545] mt-2 text-base sm:text-lg md:text-xl">
              Yes, you can filter by location, business type, and even specific
              services to find exactly what you're looking for.
            </p>
          </div>

          {/* FAQ Item 6 */}
          <div className="p-4 sm:p-6">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#F09918]">
              Q. Can I leave reviews for businesses?
            </h3>
            <p className="text-[#454545] mt-2 text-base sm:text-lg md:text-xl">
              Absolutely! Reviews help others in the community make informed
              decisions, and businesses appreciate your honest feedback.
            </p>
          </div>

          {/* FAQ Item 7 */}
          <div className="p-4 sm:p-6">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#F09918]">
              Q. Is the app available on both Android and iOS?
            </h3>
            <p className="text-[#454545] mt-2 text-base sm:text-lg md:text-xl">
              Yes, Panjabi Pages is available on both platforms so you can
              access it anytime, anywhere.
            </p>
          </div>

          {/* FAQ Item 8 */}
          <div className="p-4 sm:p-6">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#F09918]">
              Q. How do I update my business details?
            </h3>
            <p className="text-[#454545] mt-2 text-base sm:text-lg md:text-xl">
              You can log in to your account and edit your listing anytime. Our
              team also reviews changes for quality and accuracy.
            </p>
          </div>
        </div>
      </section>

      {/* Footer section */}
      <Footer></Footer>
    </div>
  );
};

export default Home;
