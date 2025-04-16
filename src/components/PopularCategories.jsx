import React from "react";

const popularCategories = {
  Sydney: [
    "Plumbers",
    "Electricians",
    "Locksmiths",
    "Lawyers",
    "Mechanics",
    "Pest Control",
    "Auto Electricians",
    "Accountants",
    "Doctors",
    "Builders",
    "Concrete Contractors",
    "Auto Wreckers",
  ],
  Melbourne: [
    "Plumbers",
    "Electricians",
    "Locksmiths",
    "Lawyers",
    "Mechanics",
    "Pest Control",
    "Auto Electricians",
    "Accountants",
    "Doctors",
    "Builders",
    "Concrete Contractors",
    "Auto Wreckers",
  ],
  Brisbane: [
    "Plumbers",
    "Electricians",
    "Locksmiths",
    "Lawyers",
    "Mechanics",
    "Pest Control",
    "Auto Electricians",
    "Accountants",
    "Doctors",
    "Builders",
    "Concrete Contractors",
    "Auto Wreckers",
  ],
  Adelaide: [
    "Plumbers",
    "Electricians",
    "Locksmiths",
    "Lawyers",
    "Mechanics",
    "Pest Control",
    "Auto Electricians",
    "Accountants",
    "Doctors",
    "Builders",
    "Concrete Contractors",
    "Auto Wreckers",
  ],
  Perth: [
    "Plumbers",
    "Electricians",
    "Locksmiths",
    "Lawyers",
    "Mechanics",
    "Pest Control",
    "Auto Electricians",
    "Accountants",
    "Doctors",
    "Builders",
    "Concrete Contractors",
    "Auto Wreckers",
  ],
};

const PopularCategories = () => {
  return (
    <div className="bg-[#FFFDF5] mt-10 py-12 px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-10">
        Popular categories on Punjabi Pages
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-start gap-10 overflow-x-auto">
        {Object.entries(popularCategories).map(([city, businesses]) => (
          <div key={city} className="min-w-[180px]">
            <h3 className="text-2xl font-semibold mt-5 mb-3 text-center md:text-left ">
              {city}
            </h3>
            <ul className="space-y-2 text-lg cursor-pointer text-center mt-10 md:text-left text-base text-gray-800">
              {businesses.map((biz, index) => (
                <li key={index}>{biz}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularCategories;
