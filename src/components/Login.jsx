            
// import { useState } from "react";
// import "./App.css";
// import logo from "../home_assets/punjabi logo.png";
// import pagi from "../home_assets/result main image.jpeg";
// import google from '../home_assets/google_icon.png'
// import x from '../home_assets/x_icon.png'

// function App() {
//   const [count, setCount] = useState(0);

//   const handleGoogleLogin = () => {
//     window.location.href = "https://accounts.google.com/signin"; // Replace with your OAuth URL
//   };

//   const handleTwitterLogin = () => {
//     window.location.href = "https://twitter.com/i/oauth2/authorize"; // Replace with your OAuth URL
//   };

//   return (
//     <div className="flex flex-col md:flex-row h-screen w-full">
//       {/* Left Section */}
//       <div className="w-full md:w-1/2 bg-green-900 flex flex-col items-center justify-center px-6 py-10">
//         {/* Logo */}
//         <img src={logo} alt="Logo" className="w-20 mb-4 rounded-full" />

//         {/* Heading */}
//         <h2 className="text-white text-3xl font-bold">Welcome Back</h2>
//         <p className="text-gray-300 mb-6 text-center">
//           Welcome Back! Please fill in your details
//         </p>

//         {/* Login Form */}
//         <form className="w-full max-w-xs ">
//           <input
//             type="email"
//             placeholder="Email"
//             className="w-full p-3 border rounded-md mb-4 text-gray-700 bg-white"
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             className="w-full p-3 border rounded-md mb-4 text-gray-700 bg-white"
//           />
//           <button className="w-full bg-yellow-400 text-black font-semibold py-3 rounded-full hover:bg-yellow-500 transition">
//             Sign In
//           </button>
//         </form>

//         {/* Social Login Buttons */}
//         <button
//           onClick={handleGoogleLogin}
//           className="w-full max-w-xs flex items-center justify-center gap-2 border rounded-md py-3 mt-4 bg-white hover:bg-gray-100 transition"
//         >
//           <img
//             src={google}
//             alt="Google"
//             className="w-5"
//           />
//           <span>Sign in with Google</span>
//         </button>

//         <button
//           onClick={handleTwitterLogin}
//           className="w-full max-w-xs flex items-center justify-center gap-2 border rounded-md py-3 mt-3 bg-white hover:bg-gray-100 transition"
//         >
//           <img
//             src={x}
//             alt="Twitter"
//             className="w-5"
//           />
//           <span>Sign in with Twitter</span>
//         </button>

//         {/* Links */}
//         <p className="text-gray-300 text-sm mt-4">
//           Forgot password?{" "}
//           <a href="#" className="text-yellow-300 hover:underline">
//             Help
//           </a>
//         </p>
//         <p className="text-gray-300 text-sm">
//           Don't have an account?{" "}
//           <a href="#" className="text-yellow-300 hover:underline">
//             Sign Up
//           </a>{" "}
//           for <strong>FREE</strong>
//         </p>
//       </div>

//       {/* Right Section */}
//       <div className="w-full md:w-1/2 h-full hidden md:flex overflow-hidden">
//         <img
//           src={pagi} // Replace with your image URL
//           alt="Side Image"
//           className="w-full h-full object-cover transform scale-145 -translate-x-40 mt-40"
//         />
//       </div>
//     </div>
//   );
// }

// export default App;