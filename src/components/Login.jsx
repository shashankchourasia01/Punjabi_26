//RESPONSIVE 

import React, { useContext,  useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from '../main_assets/punjabi logo.png'
import pagi from '../main_assets/pagi1.jpeg';
import google from '../main_assets/google_icon.png'
import x from '../main_assets/x_icon.png'
import { StoreContext } from "../context/StoreContext";
import axios from 'axios'



function Login({setShowLogin}) {

  //const navigate = useNavigate();

  const [currState, setCurrState] = useState("Login");
  const navigate = useNavigate();
  //Fetch url from StoreContext
  const {url,setToken} = useContext(StoreContext)

  
  //State variable to check Email and Password
  const [data,setData] = useState({
    email: "",
    password: ""
  })

  const onChangeHandler = (event) => {
    const name = event.target.name
    const value = event.target.value
    setData(data => ({...data,[name]:value}))
  }

  
  // useEffect(() => {
  //   console.log(data)
  // },[data])
  //fininsh



  //use url for login component
  const onLogin = async (event) => {
    event.preventDefault();
    let newUrl = url;
  
    if (currState === "Login") {
      newUrl += "/api/users/login";
    } else {
      newUrl += "/api/users/register";
    }
  
    try {
      const response = await axios.post(newUrl, data, { withCredentials: true });
  
      if (response.status === 200) {
        const { token, refreshToken } = response.data;
  
        console.log("Logged in successfully");
        localStorage.setItem("token", token);
        if (refreshToken) {
          localStorage.setItem("refreshToken", refreshToken);
        }
  
        setToken(token);
        navigate("/result");
      }
    } catch (error) {
      console.error(error);
      alert(error?.response?.data?.message || "Login failed");
    }
  };
  



  const handleGoogleLogin = () => {
    window.location.href = "https://accounts.google.com/signin"; // Replace with your OAuth URL
  };

  const handleTwitterLogin = () => {
    window.location.href = "https://twitter.com/i/oauth2/authorize"; // Replace with your OAuth URL
  };

  return (
    <div className="flex flex-col md:flex-row h-screen w-full overflow-hidden">
      {/* Left Section */}
      <div className="w-full md:w-1/2 bg-gradient-to-b from-[#004080] via-[#01346B] to-[#002248] flex flex-col items-center justify-center px-4 sm:px-6 py-8 sm:py-10">
        {/* Logo */}
        <img src={logo} alt="Logo" className="w-16 sm:w-20 mb-3 sm:mb-4 rounded-full cursor-pointer"
        onClick={() => navigate("/result")}
        />

        {/* Heading */}
        <h2 className="text-white text-2xl sm:text-3xl font-bold">Welcome Back</h2>
        <p className="text-gray-300 mb-4 sm:mb-6 text-center text-sm sm:text-base font-medium">
          Welcome Back! Please fill in your details
        </p>

        {/* Login Form */}
        <form onSubmit={onLogin} className="w-full max-w-xs">
          <input
          name="email"
          onChange={onChangeHandler} value={data.email}
            type="email"
            placeholder="Email"
            className="w-full p-2 sm:p-3 border rounded-md mb-3 sm:mb-4 text-gray-700 bg-white text-sm sm:text-base"
          />
          <input
          name="password"
          onChange={onChangeHandler}  value={data.password}
            type="password"
            placeholder="Password"
            className="w-full p-2 sm:p-3 border rounded-md mb-3 sm:mb-4 text-gray-700 bg-white text-sm sm:text-base"
          />
          <button type="submit" className="w-full bg-[#FF9E2F] text-black font-semibold py-2 sm:py-3 rounded-full hover:bg-orange-700 transition text-sm sm:text-base">
            Sign In
          </button>
        </form>

        {/* Social Login Buttons */}
        <button
          onClick={handleGoogleLogin}
          className="w-full max-w-xs flex items-center justify-center gap-2 border rounded-md py-2 sm:py-3 mt-3 sm:mt-4 bg-white hover:bg-gray-100 transition text-sm sm:text-base"
        >
          <img
            src={google}
            alt="Google"
            className="w-4 sm:w-5"
          />
          <span>Sign in with Google</span>
        </button>

        <button
          onClick={handleTwitterLogin}
          className="w-full max-w-xs flex items-center justify-center gap-2 border rounded-md py-2 sm:py-3 mt-2 sm:mt-3 bg-white hover:bg-gray-100 transition text-sm sm:text-base"
        >
          <img
            src={x}
            alt="Twitter"
            className="w-4 sm:w-5"
          />
          <span>Sign in with Twitter</span>
        </button>

        {/* Links */}
        <p className="text-gray-300 text-xs sm:text-sm mt-3 sm:mt-4">
          Forgot password?{" "}
          <a href="#" className="text-[#FF9E2F] hover:underline">
            Help
          </a>
        </p>
        <p className="text-gray-300 text-xs sm:text-sm">
          Don't have an account?{" "}
          <Link to="/register" className="text-[#FF9E2F] hover:underline">
            Sign Up
          </Link>{" "}
          for <strong>FREE</strong>
        </p>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 h-full hidden md:flex overflow-hidden">
        <img
          src={pagi}
          alt="Side Image"
          className="w-full h-full object-cover transform scale-145 -translate-x-40 mt-40"
        />
      </div>
    </div>
  );
}

export default Login;