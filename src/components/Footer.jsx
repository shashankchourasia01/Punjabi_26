import React from "react";
import email from "../home_assets/formkit_email.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const goToAddBusiness = () => {
    navigate("/companyDetails");
  };

  return (
    <footer className="bg-[#FF9E2F] text-black mt-auto pt-[4rem] w-full mb-0">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
        {/* Left Section */}
        <div className="mb-8 ">
          <h2 className="text-4xl font-semibold mb-4">
            Get Yourself Discovered!
          </h2>
          <div className="py-8 grid grid-cols-3 gap-8 ">
            {/* Pages Section */}
            <ul>
              <li className="font-bold text-black mb-2 text-2xl">Pages</li>
              <li
                className="text-black text-xl cursor-pointer"
                onClick={() =>
                  document
                    .getElementById("about")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                About
              </li>

              <li
                className="text-black text-xl cursor-pointer"
                onClick={() =>
                  document
                    .getElementById("featuredBusiness")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Featured
              </li>
              <li
                className="text-black text-xl cursor-pointer"
                onClick={() =>
                  document
                    .getElementById("explore")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Explore
              </li>
              <li
                className="text-black text-xl cursor-pointer"
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
            <ul>
              <li className="font-bold text-black mb-2 text-2xl">Business</li>
              <li className="text-black text-xl cursor-pointer">
                <Link to="/companyDetails" onClick={goToAddBusiness}>
                  Add Business
                </Link>
              </li>

              <li
                className="text-black text-xl cursor-pointer"
                onClick={() =>
                  document
                    .getElementById("featuredBusiness")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Explore
              </li>
              <li className="text-black text-xl cursor-pointer">Why Us</li>
            </ul>

            {/* Social Section */}
            <ul>
              <li className="font-bold text-black mb-2 text-2xl">Social</li>
              <li className="text-black text-xl cursor-pointer">Facebook</li>
              <li className="text-black text-xl cursor-pointer">Instagram</li>
              <li className="text-black text-xl cursor-pointer">Twitter</li>
              <li className="text-black text-xl cursor-pointer">LinkedIn</li>
            </ul>
          </div>
        </div>

        {/* Right Section (Subscribe) */}
        <div className="flex flex-col mb-75">
          <h3 className="text-3xl font-semibold mb-4">Subscribe</h3>
          <div className="relative">
            <input
              type="email"
              placeholder="Email Address"
              className="bg-white text-black py-2 px-4 w-112 h-15 rounded-xl shadow-md focus:outline-none"
            />
            <button className="absolute right-1 top-1 bottom-1 bg-[#01366E] px-4 rounded-xl flex items-center justify-center">
              <img src={email} alt="Email icon" className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="mt-4 bg-black w-full text-center py-4 text-gray-300">
        Copyright © 2025, Punjabipages.in | All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
