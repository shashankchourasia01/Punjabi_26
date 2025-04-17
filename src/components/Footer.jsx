import React from "react";
import email from "../home_assets/formkit_email.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const goToAddBusiness = () => {
    const navigate = useNavigate();

    navigate("/companyDetails");
  };

  return (
    <footer className="bg-[#F09918] text-black mt-auto pt-8 sm:pt-12 md:pt-16 w-full mb-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row justify-between items-start">
        {/* Left Section */}
        <div className="mb-8 w-full">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">
            Get Yourself Discovered!
          </h2>
          <div className="py-4 sm:py-6 md:py-8 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {/* Pages Section */}
            <ul className="mb-4 sm:mb-0">
              <li className="font-bold text-black mb-2 text-xl sm:text-2xl">
                Pages
              </li>
              <li
                className="text-black text-base sm:text-lg md:text-xl cursor-pointer hover:underline mb-1"
                onClick={() =>
                  document
                    .getElementById("about")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                About
              </li>
              <li
                className="text-black text-base sm:text-lg md:text-xl cursor-pointer hover:underline mb-1"
                onClick={() =>
                  document
                    .getElementById("featuredBusiness")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Featured Business
              </li>
              <li
                className="text-black text-base sm:text-lg md:text-xl cursor-pointer hover:underline mb-1"
                onClick={() =>
                  document
                    .getElementById("explore")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Explore
              </li>
              <li
                className="text-black text-base sm:text-lg md:text-xl cursor-pointer hover:underline mb-1"
                onClick={() =>
                  document
                    .getElementById("howWorks")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                How its Works
              </li>
            </ul>

            {/* Business Section */}
            <ul className="mb-4 sm:mb-0">
              <li className="font-bold text-black mb-2 text-xl sm:text-2xl">
                Business
              </li>
              <li className="text-black text-base sm:text-lg md:text-xl cursor-pointer hover:underline mb-1">
                <Link to="/companyDetails" onClick={goToAddBusiness}>
                  Add Business
                </Link>
              </li>
              <li
                className="text-black text-base sm:text-lg md:text-xl cursor-pointer hover:underline mb-1"
                onClick={() =>
                  document
                    .getElementById("featuredBusiness")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Explore
              </li>
              <li className="text-black text-base sm:text-lg md:text-xl cursor-pointer hover:underline mb-1">
                Why Us
              </li>
            </ul>

            {/* Social Section */}
            <ul>
              <li className="font-bold text-black mb-2 text-xl sm:text-2xl">
                Social
              </li>
              <li className="text-black text-base sm:text-lg md:text-xl cursor-pointer hover:underline mb-1">
                Facebook
              </li>
              <li className="text-black text-base sm:text-lg md:text-xl cursor-pointer hover:underline mb-1">
                Instagram
              </li>
              <li className="text-black text-base sm:text-lg md:text-xl cursor-pointer hover:underline mb-1">
                Twitter
              </li>
              <li className="text-black text-base sm:text-lg md:text-xl cursor-pointer hover:underline mb-1">
                LinkedIn
              </li>
            </ul>
          </div>
        </div>

        {/* Right Section (Subscribe) */}
        <div className="flex flex-col mb-8 w-full sm:w-auto">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">
            Subscribe
          </h3>
          <div className="relative w-full sm:w-64 md:w-80">
            <input
              type="email"
              placeholder="Email Address"
              className="bg-white text-black py-2 px-4 w-full h-12 sm:h-15 rounded-xl shadow-md focus:outline-none"
            />
            <button className="absolute right-1 top-1 bottom-1 bg-[#01366E] px-4 rounded-xl flex items-center justify-center">
              <img
                src={email}
                alt="Email icon"
                className="w-5 h-5 sm:w-6 sm:h-6"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="mt-4 bg-black w-full text-center py-4 text-gray-300 text-sm sm:text-base">
        Copyright © 2025, Punjabipages.in | Designed & Developed by PARK Management Consultants.com.au
      </div>
    </footer>
  );
};

export default Footer;
