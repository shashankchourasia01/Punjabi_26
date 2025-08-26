import React, { useState } from "react";
import logo from "../explore_assets/new_logo.jpeg";
import articles_img from "../explore_assets/article_img.jpg";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import tabData from "./tabData";

const Articles = () => {
  const [activeTab, setActiveTab] = useState("Featured");

  return (
    <div className="min-h-screen bg-[#344650] text-white">
      {/* Navbar */}
      <nav className="flex items-center justify-between bg-yellow-400 p-4 flex-wrap">
        <div className="flex items-center">
          <Link to="/result">
            <img
              src={logo}
              alt="Logo"
              className="h-14 w-auto mr-2 rounded-full ml-14"
            />
          </Link>
        </div>
        <h1 className="text-lg md:text-xl font-bold text-black text-center w-full md:w-auto">
        Business Listing Page Articles
        </h1>
        <div className="w-0 md:w-auto" />
      </nav>

      {/* Intro Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-16 py-12 gap-8 bg-white text-black">
        <div className="flex-1 max-w-xl text-left">
          <h2 className="text-4xl font-bold mb-4 text-gray-700">
          Business Listing Page Articles
          </h2>
          <p className="text-gray-600 font-semibold mb-6">
            Our in-depth articles, cost guides and DIY resources empower you
            with the knowledge and practical tips you need to start your next
            project.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mb-8 shadow-md">
            <input
              type="text"
              placeholder="I'm looking for articles on…"
              className="flex-1 border border-gray-300 rounded-md px-4 py-2"
            />
            <button className="bg-yellow-400 text-black font-medium px-6 py-2 rounded-md hover:bg-yellow-300 transition">
              Search
            </button>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">
              Popular Articles on Business Listing Page
            </h3>
            <div className="flex flex-wrap gap-4 text-blue-600">
              <a href="#" className="hover:underline">
                Cost Guides
              </a>
              <a href="#" className="hover:underline">
                DIY
              </a>
              <a href="#" className="hover:underline">
                Renovations
              </a>
            </div>
          </div>
        </div>
        <div className="flex-1 max-w-xl">
          <img
            src={articles_img}
            alt="Articles Visual"
            className="w-full rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Tabs Section */}
      <div className="px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 py-12 bg-[#344650] text-white">
        <div className="flex justify-center mb-8 border-b border-gray-500 gap-6 flex-wrap">
          {Object.keys(tabData).map((tab) => (
            <button
              key={tab}
              className={`pb-2 font-medium ${
                activeTab === tab
                  ? "border-b-2 border-white text-white"
                  : "text-gray-400"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Cards Section */}
        <div className="max-w-4xl  mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {tabData[activeTab].map((item, index) => (
            <div
              key={index}
              className="bg-white text-black rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <p className="text-sm text-gray-500 mb-1">{item.category}</p>
                <h4 className="text-lg font-bold mb-3">{item.title}</h4>
                <Link
                  to={`/article/${item.id}`}
                  className="text-blue-600 hover:underline"
                >
                  Read story
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

          {/* recent articles */}
          <div className="px-6 lg:px-16 py-12 bg-white text-gray-600">
  <h2 className="text-3xl font-bold mb-8 text-center">Recent Articles</h2>
  <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {tabData.Recent.map((item) => (
      <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        {/* Article Image */}
        <img 
          src={item.img} 
          alt={item.title}
          className="w-full h-48 object-cover"
        />
        
        {/* Article Content */}
        <div className="p-4">
          <p className="text-sm font-semibold text-gray-500 mb-1">{item.category}</p>
          <h4 className="text-lg font-bold mb-3">{item.title}</h4>
          <Link 
            to={`/article/${item.id}`} 
            className="text-blue-600 hover:underline font-medium inline-flex items-center"
          >
            Read story
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    ))}
  </div>
</div>

      <Footer />
    </div>
  );
};

export default Articles;
