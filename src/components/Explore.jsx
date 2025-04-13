import React, { useState } from "react";
import clothing from "../explore_assets/photo-1441984904996-e0b6ba687e04.avif";
import fitness from "../explore_assets/fitness.avif";
import technology from "../explore_assets/technology.avif";
import cake from "../explore_assets/cake.avif";
import dairy from "../explore_assets/dairy.avif";
import dhol from "../explore_assets/dhol.jpg";
import hotels from "../explore_assets/hotels.avif";
import food from "../explore_assets/food.avif";
import accessories from "../explore_assets/accessories.avif";
import premium from "../explore_assets/premium.png"; // Add these assets
import verified from "../explore_assets/verified.png"; // Add these assets

const Explore = () => {
  const [selectedBusiness, setSelectedBusiness] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  

  // Business data array
  const businesses = [
    {
      id: 1,
      title: "Indian Clothing Brands",
      description:
        "Discover the richness of traditional and modern Indian fashion through our curated clothing brands.",
      image: clothing,
      category: "Clothing",
      aboutCompany: "Fashion Fab",
      address: {
        street: "123 Fashion Street",
        city: "Mumbai",
      },
      serviceProducts: ["Traditional Wear", "Modern Wear", "Custom Tailoring"],
      website: "https://example.com/clothing",
      rating: "★★★★☆",
    },
    {
      id: 2,
      title: "Fitness Centers",
      description:
        "Achieve your health goals with top-rated fitness centers and expert trainers around you.",
      image: fitness,
      category: "Fitness",
      aboutCompany: "FitLife Gym",
      address: {
        street: "456 Health Avenue",
        city: "Delhi",
      },
      serviceProducts: [
        "Personal Training",
        "Group Classes",
        "Nutrition Counseling",
      ],
      website: "https://example.com/fitness",
      rating: "★★★☆☆",
    },
    {
      id: 3,
      title: "Tech Innovators",
      description:
        "Explore groundbreaking tech companies that are reshaping the future with innovation.",
      image: technology,
      category: "Technology",
      aboutCompany: "TechGenius Solutions",
      address: {
        street: "789 Tech Park",
        city: "Bangalore",
      },
      serviceProducts: [
        "Software Development",
        "AI Solutions",
        "Cloud Services",
      ],
      website: "https://example.com/technology",
      rating: "★★★★★",
    },
    {
      id: 4,
      title: "Online Cake Makers",
      description:
        "Delicious custom cakes for all occasions made with love and finest ingredients.",
      image: cake,
      category: "Food",
      aboutCompany: "Sweet Delights",
      address: {
        street: "321 Baker's Lane",
        city: "Pune",
      },
      serviceProducts: ["Birthday Cakes", "Wedding Cakes", "Custom Designs"],
      website: "https://example.com/cakes",
      rating: "★★★★☆",
    },
    {
      id: 5,
      title: "Dairy Products",
      description: "Fresh dairy products sourced directly from local farms.",
      image: dairy,
      category: "Food",
      aboutCompany: "Milk & More",
      address: {
        street: "654 Farm Road",
        city: "Ahmedabad",
      },
      serviceProducts: ["Milk", "Cheese", "Yogurt", "Butter"],
      website: "https://example.com/dairy",
      rating: "★★★☆☆",
    },
    {
      id: 6,
      title: "Indian Dhol Player",
      description: "Traditional dhol players for weddings and cultural events.",
      image: dhol,
      category: "Entertainment",
      aboutCompany: "Dhol Masters",
      address: {
        street: "987 Music Street",
        city: "Chandigarh",
      },
      serviceProducts: ["Wedding Performances", "Cultural Events", "Festivals"],
      website: "https://example.com/dhol",
      rating: "★★★★★",
    },
    {
      id: 7,
      title: "Indian Hotels",
      description:
        "Luxurious accommodations with authentic Indian hospitality.",
      image: hotels,
      category: "Hospitality",
      aboutCompany: "Royal Stay",
      address: {
        street: "135 Hospitality Blvd",
        city: "Jaipur",
      },
      serviceProducts: ["Luxury Rooms", "Conference Halls", "Restaurant"],
      website: "https://example.com/hotels",
      rating: "★★★★☆",
    },
    {
      id: 8,
      title: "Indian Food",
      description: "Authentic Indian cuisine with traditional flavors.",
      image: food,
      category: "Food",
      aboutCompany: "Spice Route",
      address: {
        street: "246 Food Court",
        city: "Hyderabad",
      },
      serviceProducts: ["North Indian", "South Indian", "Street Food"],
      website: "https://example.com/food",
      rating: "★★★★★",
    },
    {
      id: 9,
      title: "Accessories",
      description: "Fashion accessories to complement your style.",
      image: accessories,
      category: "Fashion",
      aboutCompany: "Style Hub",
      address: {
        street: "369 Fashion Square",
        city: "Chennai",
      },
      serviceProducts: ["Jewelry", "Bags", "Watches", "Sunglasses"],
      website: "https://example.com/accessories",
      rating: "★★★☆☆",
    },
  ];

  const handleCardClick = (business) => {
    setSelectedBusiness(business);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setSelectedBusiness(null);
  };

  return (
    <div className="p-6 relative">
      {/* Close Button */}
      <button
        onClick={() => window.history.back()}
        className="absolute top-4 right-4 text-black cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <h1 className="text-3xl font-bold mb-4 text-gray-800">
        <span className="bg-[#D72E2F] bg-clip-text text-transparent">
          Recently Added Business
        </span>
      </h1>

      <div className="flex justify-between w-[100%] mx-auto gap-26 pb-4 mt-10">
        {" "}
        {/* Changed to justify-between and full width */}
        {businesses.slice(0, 3).map((business) => (
          <div
            key={business.id}
            className="flex-1 min-w-[280px] max-w-[32%] bg-white dark:bg-[#002954] rounded-2xl overflow-hidden shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300"
            onClick={() => handleCardClick(business)}
          >
            <img
              className="w-full h-64 object-cover"
              src={business.image}
              alt={business.title}
            />

            <div className="px-6 py-5 h-[180px] flex flex-col">
              <div className="font-bold text-xl mb-3 text-gray-900 dark:text-white whitespace-normal overflow-hidden">
                {business.title}
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-base overflow-hidden">
                {business.description.length > 120
                  ? `${business.description.substring(0, 120)}...`
                  : business.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Popular Business Section */}
      <h1 className="text-3xl font-bold mb-4 mt-30 text-gray-800">
        <span className="bg-[#D72E2F] bg-clip-text text-transparent">
          Popular Business
        </span>
      </h1>

      <div className="flex justify-between w-[100%] mx-auto gap-26 pb-4 mt-10">
        {businesses.slice(3, 6).map((business) => (
          <div
            key={business.id}
            className="flex-1 min-w-[280px] max-w-[32%] bg-white dark:bg-[#002954] rounded-2xl overflow-hidden shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300"
            onClick={() => handleCardClick(business)}
          >
            <img
              className="w-full h-64 object-cover"
              src={business.image}
              alt={business.title}
            />

            <div className="px-6 py-5 h-[180px] flex flex-col">
              <div className="font-bold text-xl mb-3 text-gray-900 dark:text-white whitespace-normal overflow-hidden">
                {business.title}
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-base overflow-hidden">
                {business.description.length > 120
                  ? `${business.description.substring(0, 120)}...`
                  : business.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Featured Business Section */}
      <h1 className="text-3xl font-bold mt-30 mb-4 text-gray-800">
        <span className="bg-[#D72E2F] bg-clip-text text-transparent">
          Featured Business
        </span>
      </h1>

      <div className="flex justify-between w-[100%] mx-auto gap-26 pb-4 mt-10">
        {businesses.slice(6, 9).map((business) => (
          <div
            key={business.id}
            className="flex-1 min-w-[280px] max-w-[32%] bg-white dark:bg-[#002954] rounded-2xl overflow-hidden shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300"
            onClick={() => handleCardClick(business)}
          >
            <img
              className="w-full h-64 object-cover"
              src={business.image}
              alt={business.title}
            />

            <div className="px-6 py-5 h-[180px] flex flex-col">
              <div className="font-bold text-xl mb-3 text-gray-900 dark:text-white whitespace-normal overflow-hidden">
                {business.title}
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-base overflow-hidden">
                {business.description.length > 120
                  ? `${business.description.substring(0, 120)}...`
                  : business.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Popup Section */}
      {showPopup && selectedBusiness && (
        <div className="fixed  inset-0 bg-white bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="w-full max-w-4xl bg-white rounded-xl shadow-2xl overflow-hidden relative">
            <div className="flex w-full">
              {/* Left Side with Blue Background and Image */}
              <div className="w-1/2  relative flex flex-col items-center justify-center p-4">
                {/* Semi-circle effect on left */}
                <div className="absolute -left-1/2 top-0 h-full w-full rounded-r-full bg-[#D72E33]" />

                {/* Image with Fashion Fab label and stars */}
                <div className="relative z-10">
                  <img
                    src={selectedBusiness.image}
                    alt="business"
                    className="w-full h-[280px] object-cover rounded-lg "
                  />
                  <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 bg-[#185432] opacity-90  text-white px-6 py-1 font-bold text-sm whitespace-nowrap w-full min-w-[340px] flex justify-between items-center">
                    <span>{selectedBusiness.aboutCompany}</span>
                    <span className="text-yellow-400 text-lg">
                      {selectedBusiness.rating}
                    </span>
                  </div>

                  {/* Premium and Verified badges */}
                  <div className="flex gap-2 z-10 -mt-14 ">
                    <span className="flex items-center ml-10 gap-1 bg-[#185432] opacity-90 text-yellow-500 px-8 py-2 rounded-md font-semibold text-sm">
                      <img src={premium} alt="Premium" className="w-8 h-6" />
                      Premium
                    </span>
                    <span className="flex items-center gap-1 bg-[#185432] opacity-90 text-yellow-500 px-8 py-2 rounded-md font-semibold text-sm">
                      <img src={verified} alt="Verified" className="w-8 h-6" />
                      Verified
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Side Info */}
              <div className="w-1/2 p-6 flex flex-col justify-between">
                <div className="space-y-3">
                  <h2 className="text-2xl font-bold text-gray-800">
                    {selectedBusiness.category}
                  </h2>

                  <div>
                    <p className="font-semibold text-gray-700">
                      Business Name:
                    </p>
                    <p className="text-gray-600">
                      {selectedBusiness.aboutCompany}
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold text-gray-700">Description:</p>
                    <p className="text-gray-600">
                      {selectedBusiness.description}
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold text-gray-700">Address:</p>
                    <p className="text-gray-600">
                      {selectedBusiness.address.street},{" "}
                      {selectedBusiness.address.city}
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold text-gray-700">Services:</p>
                    <p className="text-gray-600">
                      {selectedBusiness.serviceProducts.map((e, i) => (
                        <span key={i} className="mx-1">
                          |{e}|
                        </span>
                      ))}
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-between mt-6">
                  <a
                    href={selectedBusiness.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="bg-[#FF9E2F] text-white font-semibold px-5 py-2 rounded-md cursor-pointer">
                      Visit Website
                    </button>
                  </a>

                  <button className="bg-[#FF9E2F] text-white font-semibold px-5 py-2 rounded-md cursor-pointer">
                    Get Direction
                  </button>
                </div>
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Explore;
