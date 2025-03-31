import React from 'react';
import email from '../home_assets/formkit_email.png';


const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white mt-auto pt-[4rem] w-full mb-0">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
        {/* Left Section */}
        <div className="mb-8 ">
          <h2 className="text-4xl font-semibold mb-4">Get Yourself Discovered!</h2>
          <div className="py-8 grid grid-cols-3 gap-8 ">
            {/* Pages Section */}
            <ul>
              <li className="font-bold text-orange-700 mb-2 text-2xl">Pages</li>
              <li className="text-gray-300 text-xl">About</li>
              <li className="text-gray-300 text-xl">Featured</li>
              <li className="text-gray-300 text-xl">Explore</li>
              <li className="text-gray-300 text-xl">How It Works</li>
            </ul>

            {/* Business Section */}
            <ul>
              <li className="font-bold text-orange-700 mb-2 text-2xl">Business</li>
              <li className="text-gray-300 text-xl">Add Business</li>
              <li className="text-gray-300 text-xl">Explore</li>
              <li className="text-gray-300 text-xl">Why Us</li>
            </ul>

            {/* Social Section */}
            <ul>
              <li className="font-bold text-orange-700 mb-2 text-2xl">Social</li>
              <li className="text-gray-300 text-xl">Facebook</li>
              <li className="text-gray-300 text-xl">Instagram</li>
              <li className="text-gray-300 text-xl">Twitter</li>
              <li className="text-gray-300 text-xl">LinkedIn</li>
            </ul>
          </div>
        </div>

        {/* Right Section (Subscribe) */}
        <div className="flex flex-col">
          <h3 className="text-3xl font-semibold mb-4">Subscribe</h3>
          <div className="relative">
            <input
              type="email"
              placeholder="Email Address"
              className="bg-white text-black py-2 px-4 w-72 h-12 rounded-xl shadow-md focus:outline-none"
            />
            <button className="absolute right-1 top-1 bottom-1 bg-yellow-500 px-4 rounded-xl flex items-center justify-center">
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
