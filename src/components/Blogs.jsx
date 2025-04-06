import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Blogs = () => {
  const [search, setSearch] = useState('');
  const [showBlogForm, setShowBlogForm] = useState(false);
  const [blog, setBlog] = useState({
    title: '',
    author: '',
    category: '',
    content: '',
  });

  const navigate = useNavigate(); // ✅ React Router navigation hook

  const handleBack = () => {
    window.history.back();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBlog({ ...blog, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Blog Submitted:', blog);
    alert('Blog submitted successfully!');
    setBlog({ title: '', author: '', category: '', content: '' });
    setShowBlogForm(false);
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
        <button
          onClick={() => navigate('/register')}
          className="bg-pink-600 text-white hover:bg-pink-700 py-2 px-4 rounded-md"
        >
          Register
        </button>
        <button
          onClick={() => navigate('/login')}
          className="bg-yellow-500 text-white hover:bg-yellow-600 py-2 px-4 rounded-md"
        >
          Login
        </button>
        <button
          onClick={() => navigate('/companyDetails')}
          className="bg-green-600 text-white hover:bg-green-700 py-2 px-4 rounded-md"
        >
          Add Businesses
        </button>
        <button
          className="bg-blue-600 text-white hover:bg-blue-700 py-2 px-4 rounded-md"
          onClick={() => setShowBlogForm(!showBlogForm)}
        >
          Write Blog
        </button>
      </div>

      {/* Blog Form Section */}
      {showBlogForm && (
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8 border border-blue-200 mb-12">
          <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">Write a Blog</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="title"
              placeholder="Blog Title"
              value={blog.title}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="text"
              name="author"
              placeholder="Author Name"
              value={blog.author}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <select
              name="category"
              value={blog.category}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option>IT Services</option>
                <option>Food and Beverages</option>
                <option>Beauty & Wellness</option>
                <option>Finance</option>
                <option>Recritment</option>
                <option>Health</option>
                <option>Apparel & Accessories</option>
                <option>Education</option>
                <option>Wedding and Events</option>
                <option>Fitness</option>
                <option>Clothing</option>
                <option>Automotive</option>
                <option>Transport</option>
                <option>Travel</option>
                <option>Kid</option>
                <option>Logistic Services</option>
                <option>Law</option>
                <option>Gurdwara</option>
                <option>More</option>
            </select>
            <textarea
              name="content"
              placeholder="Write your blog content here..."
              value={blog.content}
              onChange={handleInputChange}
              required
              rows="6"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-semibold"
            >
              Submit Blog
            </button>
          </form>
        </div>
      )}

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

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto mt-16 bg-white shadow-lg rounded-lg p-8 border border-yellow-200">
        <h2 className="text-3xl font-bold text-pink-700 mb-6 text-center">Frequently Asked Questions</h2>
        <div className="space-y-6 text-gray-700 text-lg">
          <div>
            <p className="font-semibold text-pink-800">Q. What is Panjabi Pages?</p>
            <p>A. Panjabi Pages is a business directory app designed to help the Punjabi community discover and connect with local businesses, services, and cultural events.</p>
          </div>
          <div>
            <p className="font-semibold text-pink-800">Q. Is Panjabi Pages only for Punjabi-owned businesses?</p>
            <p>A. No, any business that serves or supports the Punjabi community is welcome to list.</p>
          </div>
          <div>
            <p className="font-semibold text-pink-800">Q. How can I list my business on Panjabi Pages?</p>
            <p>A. Tap “Add Your Business,” fill out the form, and submit. Once verified, your listing goes live.</p>
          </div>
          <div>
            <p className="font-semibold text-pink-800">Q. Is there a fee to list a business?</p>
            <p>A. Basic listings are free. We offer premium plans for extra visibility and promotions.</p>
          </div>
          <div>
            <p className="font-semibold text-pink-800">Q. Can I search by location or business category?</p>
            <p>A. Yes, filter by location, business type, or specific services.</p>
          </div>
          <div>
            <p className="font-semibold text-pink-800">Q. Can I leave reviews for businesses?</p>
            <p>A. Yes! Reviews help the community and the businesses.</p>
          </div>
          <div>
            <p className="font-semibold text-pink-800">Q. Is the app available on both Android and iOS?</p>
            <p>A. Yes, it’s available on both platforms.</p>
          </div>
          <div>
            <p className="font-semibold text-pink-800">Q. How do I update my business details?</p>
            <p>A. Log in and edit your listing anytime. Our team reviews updates.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
