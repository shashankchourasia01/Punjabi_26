//RESPONSIVE 

import React, { useContext,  useState } from "react";
import { Link } from "react-router-dom";
import logo from '../main_assets/punjabi logo.png'
import pagi from '../main_assets/pagi1.jpeg';
import google from '../main_assets/google_icon.png'
import x from '../main_assets/x_icon.png'
import { StoreContext } from "../context/StoreContext";
import axios from 'axios'

function Login({setShowLogin}) {

  const [currState, setCurrState] = useState("Login");

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
    event.preventDefault()
    let newUrl = url;
    if (currState==="Login") {
      newUrl += "/api/users/login"
      }
      else{
        newUrl += "/api/users/register"
      }
      const response = await axios.post(newUrl,data)

      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem("token",response.data.token);
        setShowLogin(false)
      }
      else{
        alert(response.data.message)
      }

  }



  const handleGoogleLogin = () => {
    window.location.href = "https://accounts.google.com/signin"; // Replace with your OAuth URL
  };

  const handleTwitterLogin = () => {
    window.location.href = "https://twitter.com/i/oauth2/authorize"; // Replace with your OAuth URL
  };

  return (
    <div className="flex flex-col md:flex-row h-screen w-full overflow-hidden">
      {/* Left Section */}
      <div className="w-full md:w-1/2 bg-green-900 flex flex-col items-center justify-center px-4 sm:px-6 py-8 sm:py-10">
        {/* Logo */}
        <img src={logo} alt="Logo" className="w-16 sm:w-20 mb-3 sm:mb-4 rounded-full" />

        {/* Heading */}
        <h2 className="text-white text-2xl sm:text-3xl font-bold">Welcome Back</h2>
        <p className="text-gray-300 mb-4 sm:mb-6 text-center text-sm sm:text-base">
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
          <button type="submit" className="w-full bg-yellow-400 text-black font-semibold py-2 sm:py-3 rounded-full hover:bg-yellow-500 transition text-sm sm:text-base">
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
          <a href="#" className="text-yellow-300 hover:underline">
            Help
          </a>
        </p>
        <p className="text-gray-300 text-xs sm:text-sm">
          Don't have an account?{" "}
          <Link to="/register" className="text-yellow-300 hover:underline">
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