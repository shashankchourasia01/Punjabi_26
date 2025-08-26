import React, { useState, useEffect } from "react";
import logo from "../explore_assets/new_logo.jpeg";
import rev_image from "../explore_assets/review-image.png";
import { Link } from "react-router-dom";
import rev_icon from "../explore_assets/review_icon.png";
import Footer from "./Footer";

const Review = () => {
  const [searchText, setSearchText] = useState("");
  const [businesses, setBusinesses] = useState([]);
  const [loading, setLoading] = useState(false);

  const [showReviewPopup, setShowReviewPopup] = useState(false);
  const [selectedBusiness, setSelectedBusiness] = useState(null);
  const [rating, setRating] = useState(0);
  const [reviewTitle, setReviewTitle] = useState("");
  const [reviewContent, setReviewContent] = useState("");
  const [recommend, setRecommend] = useState(null);
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [agree, setAgree] = useState(false);
  const [overallRating, setOverallRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [recommendFriend, setRecommendFriend] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const [recentReviews, setRecentReviews] = useState([]);

  const closePopup = () => {
    setIsPopupOpen(false); // this will close your review popup
    setSelectedBusiness(null); // optional: clear selected business
    setOverallRating(0); // optional: clear form
    setReviewTitle("");
    setReviewText("");
    setRecommendFriend(false);
    setNickname("");
    setEmail("");
  };

  const handleSearch = async () => {
    if (!searchText) return;

    try {
      setLoading(true);
      const response = await fetch(`/api/company/search?query=${searchText}`);
      const data = await response.json();
      setBusinesses(data.businesses);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching businesses:", error);
      setLoading(false);
    }
  };

  const handlePostReview = async () => {
    // if (!reviewText.trim()) {
    //     alert("Please write something in the Review section.");
    //     return; // stop here, don't post empty review
    //   }

    const reviewData = {
      businessId: selectedBusiness._id, // the clicked business
      businessName: selectedBusiness.businessName,
      overallRating,
      reviewTitle,
      reviewText,
      recommendFriend,
      nickname,
      email,
    };

    try {
      const response = await fetch("/api/reviews/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reviewData),
      });

      const result = await response.json();
      if (response.ok) {
        alert("Review Posted Successfully!");
        closePopup(); // close the review popup
      } else {
        alert(result.error);
      }
    } catch (error) {
      console.error("Error posting review:", error);
      alert("Failed to post review.");
    }
  };

  //fetch review data
  useEffect(() => {
    fetchRecentReviews();
  }, []);

  const fetchRecentReviews = async () => {
    try {
      const response = await fetch("/api/reviews/recent");
      const data = await response.json();
      setRecentReviews(data.reviews);
    } catch (error) {
      console.error("Error fetching recent reviews:", error);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Navbar */}
      <nav className="flex items-center justify-between bg-[#F09918] p-4 shadow-md relative">
        <div className="flex items-center gap-2">
          <Link to="/result" className="flex items-center">
            <img
              src={logo}
              alt="Logo"
              className="w-12 h-12 rounded-full ml-20 object-cover cursor-pointer"
            />
          </Link>
        </div>
        <h1 className="text-lg md:text-2xl font-semibold text-black text-center w-full absolute left-0 right-0 mx-auto">
          Review a Businesses in Business Listing Page
        </h1>
      </nav>
      {/* Main Section */}
      <section className="flex flex-col items-center justify-center p-6">
        {/* Image */}
        <div className="my-8">
          <img
            src={rev_image}
            alt="Review Illustration"
            className="w-full max-w-md mx-auto"
          />
        </div>

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Review a Business
        </h1>
        <p className="text-gray-600 text-center mb-8 font-semibold text-base md:text-2xl">
          Got a minute? Write a review and share your thoughts
        </p>

        {/* Search Bar */}
        <div className="w-full max-w-2xl bg-white shadow-md rounded-lg flex overflow-hidden">
          <input
            type="text"
            placeholder="Business name to review"
            className="flex-1 px-4 py-3 text-gray-700 focus:outline-none"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="bg-yellow-400 hover:bg-yellow-500 p-4 flex items-center justify-center"
            onClick={handleSearch}
          >
            <svg
              className="w-6 h-6 text-black"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
              />
            </svg>
          </button>
        </div>

        {/* Businesses Results */}
        <div className="mt-10 w-full max-w-6xl">
          {loading && (
            <p className="text-center text-gray-500 mt-4">Loading...</p>
          )}

          {!loading && businesses.length === 0 && (
            <p className="text-center text-gray-500 mt-4">
              Search Businesses for Review.
            </p>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {businesses.map((business) => (
              <div
                key={business._id}
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold mb-2">
                  {business.businessName}
                </h3>
                {/* <p className="text-gray-600 mb-4">{business.aboutCompany}</p> */}
                {business.address && (
                  <p className="text-gray-500 mb-2 font-semibold">
                    📍 {business.address.street}, {business.address.city},{" "}
                    {business.address.state}
                  </p>
                )}

                {/* Updated button */}
                <button
                  className="mt-2 px-4 py-2 cursor-pointer bg-yellow-400 hover:bg-yellow-500 text-black rounded-lg flex items-center justify-center gap-2"
                  onClick={() => {
                    setSelectedBusiness(business);
                    setShowReviewPopup(true);
                  }}
                >
                  Write a Review
                  <img src={rev_icon} alt="" className="h-6 w-6" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Review Popup Modal */}
      {showReviewPopup && selectedBusiness && (
        <div className="fixed inset-0 bg-white bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50 p-4">
          <div className="bg-white w-full max-w-2xl rounded-lg shadow-lg p-6 relative overflow-y-auto max-h-[90vh]">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-black text-2xl"
              onClick={() => setShowReviewPopup(false)}
            >
              &times;
            </button>

            {/* Heading */}
            <h2 className="text-2xl font-bold text-center mb-6">
              My Review for {selectedBusiness.businessName}
            </h2>

            {/* Overall Rating */}
            <div className="flex justify-center mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => setRating(star)}
                  className={`text-3xl ${
                    rating >= star ? "text-yellow-400" : "text-gray-300"
                  }`}
                >
                  ★
                </button>
              ))}
            </div>

            {/* Review Title */}
            <input
              type="text"
              placeholder="Review Title"
              value={reviewTitle}
              onChange={(e) => setReviewTitle(e.target.value)}
              className="w-full border p-3 rounded-lg mb-4"
            />

            {/* Review Content */}
            <textarea
              placeholder="Write your review..."
              value={reviewContent}
              onChange={(e) => setReviewContent(e.target.value)}
              className="w-full border p-3 rounded-lg mb-4 h-32 resize-none"
            ></textarea>

            {/* Recommend to Friend */}
            <div className="mb-4">
              <p className="mb-2 font-semibold">
                Would you recommend this business to a friend?
              </p>
              <div className="flex gap-4">
                <button
                  onClick={() => setRecommend(true)}
                  className={`px-6 py-2 rounded-lg ${
                    recommend === true ? "bg-yellow-400" : "bg-gray-200"
                  }`}
                >
                  Yes
                </button>
                <button
                  onClick={() => setRecommend(false)}
                  className={`px-6 py-2 rounded-lg ${
                    recommend === false ? "bg-yellow-400" : "bg-gray-200"
                  }`}
                >
                  No
                </button>
              </div>
            </div>

            {/* Nickname & Email */}
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <input
                type="text"
                placeholder="Nickname"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                className="flex-1 border p-3 rounded-lg"
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 border p-3 rounded-lg"
              />
            </div>

            {/* Agreement */}
            <div className="flex items-start mb-4 gap-2">
              <input
                type="checkbox"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
                className="mt-1"
              />
              <p>
                I agree to the{" "}
                <a href="#" className="text-blue-500 underline">
                  terms of use – ratings and reviews
                </a>
              </p>
            </div>

            {/* Privacy Notice */}
            <p className="text-xs text-gray-500 mb-4">
              Privacy collection notice: We will collect your personal
              information when you click Post Review. Your personal information
              may be used to contact you about your review and to improve our
              products and services.
            </p>

            {/* Post Review Button */}
            <button
              onClick={handlePostReview}
              className="bg-yellow-400 hover:bg-yellow-500 px-6 py-2 rounded-lg text-black font-semibold mt-4"
            >
              Post Review
            </button>
          </div>
        </div>
      )}

      {/* Recently Reviewed Businesses */}
      <div className="mt-2 w-full flex flex-col items-center">
        {/* Heading */}
        <h2 className="text-2xl font-bold mb-6 text-center">
          Recently reviewed Businesses
        </h2>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 w-full max-w-5xl">
          {recentReviews.map((review) => (
            <div
              key={review._id}
              className="flex justify-between items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition"
            >
              {/* Left Part */}
              <div className="flex flex-col items-start gap-2">
                <img
                  src={logo} // your logo here
                  alt="Logo"
                  className="w-14 h-14  object-cover rounded-full"
                />
                <div>
                  <h3 className="text-lg font-semibold">
                    {review.businessName}
                  </h3>
                  <div className="flex items-center">
                    <span className="text-yellow-500 text-sm mr-1">
                      {"★".repeat(Math.round(review.overallRating))}
                    </span>
                    <span className="text-gray-500 text-sm ml-2">
                      ({review.overallRating})
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Part */}
              <div className="text-center">
                <p className="text-gray-600 text-sm font-semibold mb-2">
                  Rate and review this business.
                </p>
                <button
                  className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-lg"
                  onClick={() => {
                    setSelectedBusiness(review); // this sets which business you are reviewing
                    setShowReviewPopup(true); // this opens the review popup
                  }}
                >
                  Review
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Review;
