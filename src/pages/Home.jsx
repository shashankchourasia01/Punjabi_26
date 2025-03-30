import React, { useState } from "react";
import home from "../home_assets/Home image.jpeg";
import logo from "../home_assets/punjabi logo.png";
import menu from "../home_assets/Menu Logo.png";
import man from "../home_assets/Man Image.png"
import people from '../home_assets/people.png'
import location from '../home_assets/location icon.png'
import arcti from '../home_assets/arcticons_boost.png'
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();

  //  Function to navigate to Result Page
  const goToResultPage = () => {
    navigate("/result");
  };


  return (
    <div className="relative h-screen z-[10]">
      {/* Navbar */}
      <div className=" relative flex items-center justify-between px-10 py-4 bg-transparent w-full z-[50]">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Punjabi Logo" className="w-16 rounded-full ml-15" />
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex space-x-10">
          <button
            onClick={() => navigate("/companyDetails")}

            className="text-white font-semibold hover:text-gray-900"
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
        <img onClick={() => {
          setShowForm(true)
        }} src={menu} alt="Menu Logo" className="w-12 rounded-full mr-15" />
      </div>

      {/* Background Image */}
      <div className="absolute inset-0 z-[-50]">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <img
          src={home}
          alt="Home Background"
          className="w-full h-full object-cover"
        />
        {/* .. */}
      </div>

      {/* Main Content */}
      <div className="flex  relative bottom-[5rem] z-10  flex-col justify-center items-center text-white text-center h-full px-6  mr-160 ml-20">
        <h1 className="text-5xl font-bold">
          List & Grow Your <span className="text-orange-600">Business</span>
          <br />
        </h1>
        <h1 className="text-5xl font-bold mt-4">with Punjabi Pages!</h1>
        <br />
        <h4 className="mb-4 text-2xl">
          Join 1000+ Businesses & connect with <br />
          customers today!
        </h4>
      </div>


      {/* Registration Form (Only Visible When ShowForm is True) */}

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
          <button className="w-full bg-yellow-400 text-white p-2 font-bold">
            Submit
          </button>
          <p className="text-center mt-2">
            Already registered?{" "}
            <button className="text-red-600" onClick={() => navigate("/login")}>
              {" "}
              Sign in
            </button>
          </p>
        </div>
      )}



      <div className="absolute top-[79%] bg-green-800 w-[100%] h-[20%] border-green-800  opacity-100  mix-blend-overlay z-[-10] bg-gradient-to-r from-green-800 from-30% via-green-200 via-30% to-green-800 to-80% blur-2xl"></div>



      {/* List Business Detail */}



      <div className=" relative container mx-auto px-6 py-5 bg-[#FFFDF5]  mt-5">
        {/* <!-- Progress Steps --> */}
        <div className="flex justify-center items-center space-x-10 md:space-x-20 mb-10">
          <div className="relative flex flex-col items-center">
            <div className="w-22 h-22 bg-orange-600 text-white flex justify-center items-center rounded-full font-medium text-5xl">
              1
            </div>
            <span className="mt-2 text-2xl font-semibold">List Your Business</span>
          </div>
          <div className="w-20 md:w-32 border-t-4 border-green-700"></div>
          <div className="relative flex flex-col items-center">
            <div className="w-22 h-22 border-2 bg-[#FDF6E3] border-black text-orange-600 flex justify-center items-center rounded-full font-medium text-5xl">
              2
            </div>
            <span className="mt-2 text-2xl font-semibold">Verify Your Business</span>
          </div>
          <div className="w-20 md:w-32 border-t-4 border-green-700"></div>
          <div className="relative flex flex-col items-center">
            <div className="w-22 h-22 border-2 bg-[#FDF6E3] border-black text-orange-600 flex justify-center items-center rounded-full font-medium text-5xl">
              3
            </div>
            <span className="mt-2 text-2xl font-semibold">Target Customer</span>
          </div>
        </div>

        {/* <!-- Content Section --> */}
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-12">
          {/* <!-- Left Text --> */}
          <div className="md:w-1/2 mt-30">
            <h1 className="text-5xl font-bold text-orange-700 ml-20">
              List Your Business Details
            </h1>
            <p className="mt-4 ml-20 text-orange-700 text-2xl">
              To begin, you need to create an account on <br />
              Punjabi Pages. Simply visit the Sign-Up page and <br />
              enter your details. Once submitted,you'll receive <br />
              an OTP verification via email. Verify your email,log <br />
              in to your dashboard, and you are ready to add <br />
              your business information.
            </p>
          </div>

          {/* <!-- Right Image --> */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src={man}
              alt="Businessman" className="ml-10"
            // class="w-64 md:w-80 rounded-lg"
            />
          </div>
        </div>
      </div>


      {/* List Business page  */}

      <section className="bg-blue-700 text-white py-12 px-4 md:px-12">
        {/* Heading Section */}
        <div className=" max-w-3xl mx-auto ml-6">
          <h1 className="text-3xl md:text-4xl font-bold ml-14 mt-14">
            Why List Your <span className="text-orange-600">Business</span> with Us?
          </h1>
          <p className="text-2xl text-gray-300 mt-12 ml-15 leading-relaxed">
            Are you a Punjabi business owner in Australia? Increase your visibility and attract more
            customers by listing your business on Punjabi Pages – the leading directory for
            Punjabi-owned businesses across Australia.
          </p>
        </div>

        {/* Features Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-60 max-w-5xl mx-auto">


          {/* Feature 1 */}
          <div className="text-center relative">
            <div className="relative w-88 h-88 mx-auto border-2 border-white rounded-full flex flex-col items-center justify-center overflow-hidden">
              <div className="absolute -top-6 w-full h-full bg-orange-700"></div> {/* Cutting the upper part */}
              <img src={location} alt="Reach Local Customers" className="w-18 h-18 mb-4 relative z-10" />
              <h3 className="text-lg font-semibold mt-2 relative z-10">Reach Local Customers</h3>
              <p className="text-gray-300 text-sm relative z-10">
                Get discovered by people searching <br />
                for businesses like yours.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="text-center relative">
            <div className="relative w-88 h-88 mx-auto border-2 border-white rounded-full flex flex-col items-center justify-center overflow-hidden">
              <div className="absolute -top-6 w-full h-full bg-orange-700"></div> {/* Cutting the upper part */}
              <img src={arcti} alt="Boost Online Presence" className="w-18 h-18 mb-4 relative z-10" />
              <h3 className="text-lg font-semibold mt-2 relative z-10">Boost Online Presence</h3>
              <p className="text-gray-300 text-sm relative z-10">
                Improve your brand visibility and <br />
                credibility. No hidden charges!
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="text-center relative">
            <div className="relative w-88 h-88 mx-auto border-2 border-white rounded-full flex flex-col items-center justify-center overflow-hidden">
              <div className="absolute -top-6 w-full h-full bg-orange-700"></div> {/* Cutting the upper part */}
              <img src={people} alt="Targeted Audience" className="w-18 h-18 mb-4 relative z-10" />
              <h3 className="text-lg font-semibold mt-2 relative z-10">Targeted Audience</h3>
              <p className="text-gray-300 text-sm relative z-10">
                Connect with the Punjabi community <br />
                looking for services they trust.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Question page */}

      <section className="bg-[#FFFDF5] py-16 px-6 md:px-12">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mt-18 mr-118">
            Explore Answers to your Question!
          </h2>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-15 max-w-6xl mx-auto mt-25">
          {/* FAQ Item 1 */}
          <div className=" p-6  ">
            <h2 className="text-3xl font-semibold text-orange-600">
              Q. Lorem ipsum dolor sit amet?
            </h2>
            <p className="text-gray-600 mt-2 text-xl">
              Lorem ipsum dolor sit amet consectetur. Purus ultrices dignissim
              aliquam lectus quam sem eu eget nisi. Erat tortor urna in augue
              proin congue arcu.
            </p>
          </div>

          {/* FAQ Item 2 */}
          <div className=" p-6 ">
            <h3 className="text-3xl font-semibold text-orange-600">
              Q. Lorem ipsum dolor sit amet?
            </h3>
            <p className="text-gray-600 mt-2 text-xl">
              Lorem ipsum dolor sit amet consectetur. Purus ultrices dignissim
              aliquam lectus quam sem eu eget nisi. Erat tortor urna in augue
              proin congue arcu.
            </p>
          </div>

          {/* FAQ Item 3 */}
          <div className=" p-6  ">
            <h3 className="text-3xl font-semibold text-orange-600">
              Q. Lorem ipsum dolor sit amet?
            </h3>
            <p className="text-gray-600 mt-2 text-xl">
              Lorem ipsum dolor sit amet consectetur. Purus ultrices dignissim
              aliquam lectus quam sem eu eget nisi. Erat tortor urna in augue
              proin congue arcu.
            </p>
          </div>

          {/* FAQ Item 4 */}
          <div className=" p-6">
            <h3 className="text-3xl font-semibold text-orange-600">
              Q. Lorem ipsum dolor sit amet?
            </h3>
            <p className="text-gray-600 mt-2 text-xl">
              Lorem ipsum dolor sit amet consectetur. Purus ultrices dignissim
              aliquam lectus quam sem eu eget nisi. Erat tortor urna in augue
              proin congue arcu.
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
