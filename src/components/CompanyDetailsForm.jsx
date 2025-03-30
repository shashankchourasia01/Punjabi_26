import React, { useState } from "react";
import axios from "axios";

const CompanyDetailsForm = () => {
  const [data, setData] = useState({
    primaryBusiness: "",
    businessName: "",
    address: { street: "", city: "", state: "" },
    location: { country: "", city: "" },
    website: "",
    aboutCompany: "",
    secondaryBusiness: [],
    serviceProducts: ["", ""], // Initial 2 fields for services/products
  });

  // Handle input changes for normal fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle input changes for nested objects (address, location)
  const handleNestedChange = (e, field) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [field]: { ...prev[field], [name]: value },
    }));
  };

  // Handle checkbox changes for Secondary Business
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setData((prev) => ({
      ...prev,
      secondaryBusiness: checked
        ? [...prev.secondaryBusiness, name]
        : prev.secondaryBusiness.filter((item) => item !== name),
    }));
  };

  // Handle dynamic service/product fields
  const handleServiceChange = (index, value) => {
    const updatedServices = [...data.serviceProducts];
    updatedServices[index] = value;
    setData((prev) => ({ ...prev, serviceProducts: updatedServices }));
  };

  // Add a new service/product input field
  const addServiceField = () => {
    setData((prev) => ({
      ...prev,
      serviceProducts: [...prev.serviceProducts, ""],
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting Data:", data);
    try {
      const response = await axios.post("http://localhost:5000/api/company/listbusiness", data, { withCredentials: true });
      alert(response.data.message || "Company registered successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6 relative">
        
        {/* Close Button */}
        <button 
          onClick={() => window.history.back()} 
          className="absolute top-4 right-4 w-10 h-10  text-gray-600 hover:text-gray-900 text-4xl font-bold bg-gray-300 hover:bg-gray-400 rounded-full"
        >
          ×
        </button>

        <h1 className="text-2xl font-bold text-center text-gray-800">Company Details</h1>
        <p className="text-gray-600 text-center mb-6">Share Business Details To Proceed further</p>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Side */}
            <div>
              <label className="block font-medium">Primary Business</label>
              <select
                name="primaryBusiness"
                value={data.primaryBusiness}
                onChange={handleChange}
                className="border border-gray-300 rounded-md w-full p-2 mt-1"
                required
              >
                <option value="">Select</option>
                <option>IT Services</option>
                <option>Finance</option>
                <option>Retail</option>
                <option>Healthcare</option>
                <option>Education</option>
                <option>Real Estate</option>
                <option>Manufacturing</option>
                <option>Consulting</option>
                <option>Marketing</option>
                <option>Telecommunications</option>
                <option>Energy</option>
                <option>Transportation</option>
                <option>Hospitality</option>
              </select>

              <label className="block font-medium mt-4">Address</label>
              <input name="street" type="text" placeholder="Street" value={data.address.street} onChange={(e) => handleNestedChange(e, "address")} className="border border-gray-300 rounded-md w-full p-2 mt-1" />
              <input name="city" type="text" placeholder="City" value={data.address.city} onChange={(e) => handleNestedChange(e, "address")} className="border border-gray-300 rounded-md w-full p-2 mt-2" />
              <input name="state" type="text" placeholder="State" value={data.address.state} onChange={(e) => handleNestedChange(e, "address")} className="border border-gray-300 rounded-md w-full p-2 mt-2" />

              <label className="block font-medium mt-4">Website</label>
              <input name="website" type="text" placeholder="Website" value={data.website} onChange={handleChange} className="border border-gray-300 rounded-md w-full p-2 mt-1" />
            </div>

            {/* Right Side */}
            <div>
              <label className="block font-medium">Business Name</label>
              <input name="businessName" type="text" placeholder="Business Name" value={data.businessName} onChange={handleChange} className="border border-gray-300 rounded-md w-full p-2 mt-1" />

              <label className="block font-medium mt-4">Location</label>
              <input name="country" type="text" placeholder="Country" value={data.location.country} onChange={(e) => handleNestedChange(e, "location")} className="border border-gray-300 rounded-md w-full p-2 mt-1" />
              <input name="city" type="text" placeholder="City" value={data.location.city} onChange={(e) => handleNestedChange(e, "location")} className="border border-gray-300 rounded-md w-full p-2 mt-2" />

              <label className="block font-medium mt-4">About Company</label>
              <textarea name="aboutCompany" placeholder="About Company" value={data.aboutCompany} onChange={handleChange} className="border border-gray-300 rounded-md w-full p-2 mt-1 h-24"></textarea>
            </div>
          </div>

          {/* Secondary Business */}
          <div className="mt-6">
            <label className="block font-medium">Secondary Business</label>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-2 mt-2">
              {["Retail", "IT", "Finance", "Healthcare", "Education", "Manufacturing"].map((business) => (
                <label key={business} className="flex items-center">
                  <input type="checkbox" name={business} checked={data.secondaryBusiness.includes(business)} onChange={handleCheckboxChange} className="mr-2" />
                  {business}
                </label>
              ))}
            </div>
          </div>

          {/* Services / Products */}
          <div className="mt-6">
            {data.serviceProducts.map((service, index) => (
              <input key={index} type="text" placeholder={`Service / Product ${index + 1}`} value={service} onChange={(e) => handleServiceChange(index, e.target.value)} className="border border-gray-300 rounded-md w-full p-2 mt-2" />
            ))}
            <button type="button" onClick={addServiceField} className="mt-2 text-blue-600 underline">+ Add More</button>
          </div>

          <button type="submit" className="bg-yellow-400 text-black font-semibold py-2 px-6 rounded-lg mt-6">Register</button>
        </form>
      </div>
    </div>
  );
};

export default CompanyDetailsForm;
