//RESPONSIVE


// import React from "react";
// import "./App.css";
// import logo from "../home_assets/punjabi logo.png";
// import pagi2 from "../home_assets/pagi2_register_page.png";

// function App() {
  

//   return (
//     <div className="flex flex-col md:flex-row h-screen w-full">
//       {/* Left Section (Registration Form) */}
//       <div className="w-full md:w-1/2 bg-green-900 flex flex-col items-center justify-center px-6 py-10">
//         {/* Logo */}
//         <img src={logo} alt="Logo" className="w-20 mb-4 rounded-full" />

//         {/* Heading */}
//         <h2 className="text-white text-3xl font-bold">Register Now</h2>
//         <p className="text-gray-300 mt-3 mb-6 text-center">
//           Please fill in your details
//         </p>

//         {/* Registration Form */}
//         <form className="w-full max-w-xs">
//           <input
//             type="text"
//             placeholder="Name"
//             className="w-full p-3 border rounded-md mb-4 text-gray-700 bg-white"
//           />
//           <input
//             type="text"
//             placeholder="User Type"
//             className="w-full p-3 border rounded-md mb-4 text-gray-700 bg-white"
//           />
//           <input
//             type="email"
//             placeholder="Email"
//             className="w-full p-3 border rounded-md mb-4 text-gray-700 bg-white"
//           />
//           <input
//             type="tel"
//             placeholder="Mobile"
//             className="w-full p-3 border rounded-md mb-4 text-gray-700 bg-white"
//           />
//           <button className="w-full bg-yellow-400 text-black font-semibold py-3 rounded-full hover:bg-yellow-500 transition">
//             Verify
//           </button>
//         </form>

//         {/* Sign In Link */}
//         <p className="text-gray-300 text-sm mt-4">
//           Already have an account?{" "}
//           <a href="#" className="text-yellow-300 hover:underline">
//             Sign In
//           </a>
//         </p>
//       </div>

//       {/* Right Section (Image) */}
//       <div className="w-full md:w-1/2 h-full hidden md:flex overflow-hidden">
//         <img
//           src={pagi2} // Replace with your image path
//           alt="Side Image"
//           className="w-full h-full object-cover  transform scale-100 -translate-x-"
//         />
//       </div>
//     </div>
//   );
// }

// export default App;