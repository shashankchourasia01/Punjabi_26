import React from 'react';

const BusinessCard = () => {
  return (
    <div className="bg-white rounded-xl shadow-md flex p-6 w-[1100px] h-[300px] mx-auto relative">
      {/* Left side with image and circular bg */}
      <div className="relative w-1/3">
        <div className="absolute top-0 left-0 w-full h-full bg-green-800 rounded-3-full z-0" />
        <div className="relative z-10 p-4">
          <div className="text-white font-bold mb-2">Clothing</div>
          <img
            src="https://via.placeholder.com/250"
            alt="Business"
            className="rounded-xl w-[250px] h-[180px] object-cover"
          />
          <div className="absolute bottom-24 left-4 text-white font-semibold text-lg">Fashion Fab</div>
          <div className="absolute bottom-20 left-4 flex gap-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-yellow-400 text-xl">★</span>
            ))}
          </div>
          <div className="flex gap-4 mt-5">
            <div className="bg-green-100 text-green-800 px-4 py-1 rounded flex items-center gap-2">
              <span className="text-lg">👑</span> Premium
            </div>
            <div className="bg-green-100 text-green-800 px-4 py-1 rounded flex items-center gap-2">
              <span className="text-lg">✅</span> Verified
            </div>
          </div>
        </div>
      </div>

      {/* Right side info */}
      <div className="w-1/2 pl-10 flex flex-col justify-between">
        <div>
          <p className="font-semibold">Business Name:</p>
          <p className="font-semibold">Working Hours:</p>
          <p className="font-semibold">Address:</p>
          <p className="font-semibold">Services:</p>
          <p className="font-semibold">Phone :</p>
          <p className="font-semibold">Email :</p>
        </div>
        <div className="flex gap-6 mt-4">
          <button className="bg-green-700 text-white px-4 py-2 rounded">Visit Website</button>
          <button className="bg-green-700 text-white px-4 py-2 rounded">Get Direction</button>
        </div>
      </div>
    </div>
  );
};

const Explore = () => {
  const sections = ["Featured Business", "Popular Business", "Recently Added Business"];

  return (
    <div className="space-y-10 py-10">
      {sections.map((section, index) => (
        <div key={index}>
          <h2 className="text-2xl font-bold mb-4 text-center">{section}</h2>
          <div className="flex flex-wrap justify-center gap-10">
            {[...Array(3)].map((_, i) => (
              <BusinessCard key={i} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Explore;
