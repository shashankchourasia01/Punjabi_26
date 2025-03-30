import React, { useEffect, useState } from "react";
import axios from "axios";
import logo from "../home_assets/punjabi logo.png";
import pagi2 from "../home_assets/pagi2_register_page.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    userType: "",
    email: "",
    password: "",
    mobile: "",
  });

  const [message, setMessage] = useState("");

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/signup",
        data
      );

      if (response.data.success) {
        setMessage("Registration successful!");
        setData({
          name: "",
          userType: "",
          email: "",
          password: "",
          mobile: "",
        }); // Clear form
      } else {
        setMessage(response.data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("Registration failed. Please try again.");
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen w-full">
      {/* Left Section (Registration Form) */}
      <div className="w-full md:w-1/2 bg-green-900 flex flex-col items-center justify-center px-6 py-10">
        <img
          src={logo}
          alt="Logo"
          className="w-20 mb-4 rounded-full cursor-pointer"
          onClick={() => navigate("/result")}
        />
        <h2 className="text-white text-3xl font-bold">Register Now</h2>
        <p className="text-gray-300 mt-3 mb-6 text-center font-medium">
          Please fill in your details
        </p>

        {/* Registration Form */}
        <form className="w-full max-w-xs" onSubmit={onSubmitHandler}>
          <input
            name="name"
            onChange={onChangeHandler}
            value={data.name}
            type="text"
            placeholder="Name"
            className="w-full p-3 border rounded-md mb-4 text-gray-700 bg-white"
          />

          <select
            name="userType"
            onChange={onChangeHandler}
            value={data.userType}
            className="w-full p-3 border rounded-md mb-4 text-gray-700 bg-white"
          >
            <option value="" disabled>
              Select User Type
            </option>
            <option value="Customer">Customer</option>
            <option value="Admin">Admin</option>
          </select>

          <input
            name="email"
            onChange={onChangeHandler}
            value={data.email}
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded-md mb-4 text-gray-700 bg-white"
          />
          <input
            name="password"
            onChange={onChangeHandler}
            value={data.password}
            type="password"
            placeholder="Password"
            className="w-full p-3 border rounded-md mb-4 text-gray-700 bg-white"
          />
          <input
            name="mobile"
            onChange={onChangeHandler}
            value={data.mobile}
            type="tel"
            placeholder="Mobile"
            className="w-full p-3 border rounded-md mb-4 text-gray-700 bg-white"
          />

          <button
            type="submit"
            className="w-full bg-yellow-400 text-black font-semibold py-3 rounded-full hover:bg-yellow-500 transition"
          >
            Verify & Register
          </button>
        </form>

        {message && <p className="text-white mt-3">{message}</p>}

        <p className="text-gray-300 text-sm mt-4">
          Already have an account?{" "}
          <Link to="/Login" className="text-yellow-300 hover:underline">
            Sign Up
          </Link>{" "}
        </p>
      </div>

      {/* Right Section (Image) */}
      <div className="w-full md:w-1/2 h-full hidden md:flex overflow-hidden">
        <img
          src={pagi2}
          alt="Side Image"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default Register;
