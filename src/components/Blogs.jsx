import React, { useState } from 'react';

const Blogs = () => {
  const [search, setSearch] = useState('');

  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-pink-100 p-6 relative">
      {/* Back Icon */}
      <button
        onClick={handleBack}
        className="absolute top-6 right-6 text-2xl text-pink-700 hover:text-pink-900"
        aria-label="Go back"
      >
        ❌
      </button>

      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-pink-800">Punjabi Pages</h1>
        <p className="text-lg text-gray-700 mt-2">Register, Login, List & Search Punjabi Businesses, and Write Blogs</p>
      </header>

      {/* Auth Buttons */}
      <div className="flex justify-center space-x-4 mb-10">
        <button className="bg-pink-600 text-white hover:bg-pink-700 py-2 px-4 rounded-md">Register</button>
        <button className="bg-yellow-500 text-white hover:bg-yellow-600 py-2 px-4 rounded-md">Login</button>
        <button className="bg-green-600 text-white hover:bg-green-700 py-2 px-4 rounded-md">Add Business</button>
        <button className="bg-blue-600 text-white hover:bg-blue-700 py-2 px-4 rounded-md">Write Blog</button>
      </div>

      {/* Services Section */}
      <section className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-3xl font-bold text-pink-700 mb-6">Our Services</h2>
        <ul className="space-y-4 text-lg text-gray-700">
          <li>🔐 Easy & Secure Registration/Login for users and businesses</li>
          <li>📍 Add and List Punjabi Businesses across various categories</li>
          <li>🔎 Search for businesses based on category, location or name</li>
          <li>📝 Share your stories, business experiences, or tips through our Blog feature</li>
          <li>🌐 Connect with the Punjabi community and explore local services</li>
        </ul>
      </section>

      {/* Search Bar */}
      <div className="max-w-2xl mx-auto mb-12">
        <input
          type="text"
          placeholder="Search businesses..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full text-lg px-4 py-3 rounded-md shadow-md border border-gray-300 focus:outline-none"
        />
      </div>

      {/* Business List Placeholder */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((biz) => (
          <div key={biz} className="bg-white rounded-lg shadow-xl border border-pink-200 p-6">
            <h2 className="text-xl font-semibold text-pink-700 mb-2">Business Name {biz}</h2>
            <p className="text-gray-600">Brief description of the business with relevant Punjabi context and services.</p>
            <a href="#" className="text-pink-600 mt-4 inline-block">View Details</a>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Blogs;
