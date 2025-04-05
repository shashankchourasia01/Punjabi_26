import React, { useState } from "react";
import axios from "axios";
// import home_bg from '../home_assets/Home image.jpeg'

const CompanyDetailsForm = () => {
  const initialState = {
    primaryBusiness: "",
    businessName: "",
    address: { street: "", city: "", state: "" },
    location: { country: "", city: "" },
    // businessImage: "",
    website: "",
    aboutCompany: "",
    secondaryBusiness: [],
    serviceProducts: ["", ""], // Initial 2 fields for services/products
  };

  const [img, setImg] = useState(false);

  const [data, setData] = useState(initialState);

  // Reset form fields
  const handleReset = () => {
    setData(initialState);
  };

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

  const handleSubmitImage = async (e) => {
    e.preventDefault();

    const form = e.target;
    const fileInput = form.querySelector('input[type="file"]');
  
    const file = fileInput.files[0];
  
    if (!file) {
      alert("Please select a file before uploading.");
      return;
    }
  
    const formData = new FormData();
    formData.append("profileImage", file);
  
    try {
      const res = await fetch("http://localhost:5000/upload", {
        method: "POST",
        body: formData,
        credentials: "include",
      });
      setImg(true);
      const data = await res.json();
      console.log("Upload response:", data);
    } catch (err) {
      console.error("Upload failed:", err);
    }
  }
  //  Handle Business Image Upload
  //  const handleBusinessImageChange = (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     setData((prev) => ({
  //       ...prev,
  //       businessImage: file,
  //     }));
  //   }
  // };



  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting Data:", data);
    try {
      const response = await axios.post(
        "http://localhost:5000/api/company/listbusiness",
        data,
        { withCredentials: true }
      );
      alert(response.data.message || "Company registered successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      {/* <img src={home_bg} alt="" /> */}
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6 relative">
        {/* Close Button */}
        <button
          onClick={() => window.history.back()}
          className="absolute top-4 right-4 w-10 h-10 text-blue-700 hover:text-gray-900 text-4xl font-bold bg-cyan-300 hover:bg-gray-400 rounded-full"
        >
          ×
        </button>

        <h1 className="text-2xl font-bold text-center text-gray-800">
          Company Details
        </h1>
        <p className="text-gray-600 text-center mb-6">
          Share Business Details To Proceed further
        </p>

        <form onSubmit={handleSubmitImage} encType="multipart/form-data" className="mb-4 flex gap-x-4">
        {/* <label htmlFor="image" className="block mb-2 bg-blue-800 rounded-md px-4 py-2 text-white">click here to choose image</label> */}
  <input
    type="file"
    id="image"
    name="profileImage"
    className="block mb-2 bg-blue-800 rounded-md px-4 py-2 text-white"
    
  />
  <button type="submit" className="bg-orange-600 text-white rounded-md px-4 py-2">
    {img?"Image Uploaded":"Upload Image"}
  </button>
        </form>

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
              </select>

              <label className="block font-medium mt-4">Address</label>
              <input
                name="street"
                type="text"
                placeholder="Street"
                value={data.address.street}
                onChange={(e) => handleNestedChange(e, "address")}
                className="border border-gray-300 rounded-md w-full p-2 mt-1"
              />
              <input
                name="city"
                type="text"
                placeholder="City"
                value={data.address.city}
                onChange={(e) => handleNestedChange(e, "address")}
                className="border border-gray-300 rounded-md w-full p-2 mt-2"
              />
              <input
                name="state"
                type="text"
                placeholder="State"
                value={data.address.state}
                onChange={(e) => handleNestedChange(e, "address")}
                className="border border-gray-300 rounded-md w-full p-2 mt-2"
              />

              <label className="block font-medium mt-4">Website</label>
              <input
                name="website"
                type="text"
                placeholder="Website"
                value={data.website}
                onChange={handleChange}
                className="border border-gray-300 rounded-md w-full p-2 mt-1"
              />
            </div>

            {/* Right Side */}
            <div>
              <label className="block font-medium">Business Name</label>
              <input
                name="businessName"
                type="text"
                placeholder="Business Name"
                value={data.businessName}
                onChange={handleChange}
                className="border border-gray-300 rounded-md w-full p-2 mt-1"
              />

              <label className="block font-medium mt-4">Location</label>
              <input
                name="country"
                type="text"
                placeholder="Country"
                value={data.location.country}
                onChange={(e) => handleNestedChange(e, "location")}
                className="border border-gray-300 rounded-md w-full p-2 mt-1"
              />
              <input
                name="city"
                type="text"
                placeholder="City"
                value={data.location.city}
                onChange={(e) => handleNestedChange(e, "location")}
                className="border border-gray-300 rounded-md w-full p-2 mt-2"
              />

              {/* <label htmlFor="image"></label> */}


              {/* <label className="block font-medium mt-4">Business Image</label>

              <input
                id="businessImageUpload"
                name="businessImage"
                type="file"
                accept="image/*"
                // onChange={(e) => handleNestedChange(e, "businessImage")}
                onChange={handleBusinessImageChange}
                className="hidden"
              />

              <label
                htmlFor="businessImageUpload"
                className="cursor-pointer inline-block mt-2"
              >
                <div className="w-24 h-24 bg-gray-200 flex items-center justify-center rounded-lg border border-gray-300">
                  +
                </div>
              </label> */}

              <label className="block font-medium mt-4">About Company</label>
              <textarea
                name="aboutCompany"
                placeholder="About Company"
                value={data.aboutCompany}
                onChange={handleChange}
                className="border border-gray-300 rounded-md w-full p-2 mt-1 h-24"
              ></textarea>
            </div>
          </div>

          {/* Secondary Business */}
          <div className="mt-6">
            <label className="block font-medium">Secondary Business</label>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-2 mt-2">
              {[
                "Retail",
                "IT",
                "Finance",
                "Healthcare",
                "Education",
                "Manufacturing",
              ].map((business) => (
                <label key={business} className="flex items-center">
                  <input
                    type="checkbox"
                    name={business}
                    checked={data.secondaryBusiness.includes(business)}
                    onChange={handleCheckboxChange}
                    className="mr-2"
                  />
                  {business}
                </label>
              ))}
            </div>
          </div>

          {/* Services / Products */}
          <div className="mt-6">
            {data.serviceProducts.map((service, index) => (
              <input
                key={index}
                type="text"
                placeholder={`Service / Product ${index + 1}`} // Corrected placeholder
                value={service}
                onChange={(e) => handleServiceChange(index, e.target.value)}
                className="border border-gray-300 rounded-md w-full p-2 mt-2"
              />
            ))}
            <button
              type="button"
              onClick={addServiceField}
              className="mt-2 text-blue-600 underline cursor-pointer"
            >
              + Add More
            </button>
          </div>

          

          <div className="flex justify-between mt-6">
            <button
              type="button"
              onClick={handleReset}
              className="bg-gray-500 text-white font-semibold py-2 px-6 rounded-lg cursor-pointer"
            >
              Reset
            </button>
            <button
              type="submit"
              className="bg-orange-600 text-black font-semibold py-2 px-6 rounded-lg cursor-pointer"
            >
              Register
            </button>
          </div>
        </form>

        {/* <form onSubmit={handleSubmitImage} encType="multipart/form-data" >
          <input type="file" id="image" name="profileImage" />
          <button type="submit" onSubmit={handleSubmitImage} className="bg-orange-600 rounded-md p-4">upload</button>
        </form> */}
      </div>
    </div>
  );
};

export default CompanyDetailsForm;
