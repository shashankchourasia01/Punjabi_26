
import React, { useState } from "react";
import logo from "../explore_assets/new_logo.jpeg";
import menu from "../home_assets/Menu Logo.png";

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState("dashboard");
  const [planType, setPlanType] = useState("monthly");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Navbar */}
      <header className="w-full bg-white shadow-md p-4 flex justify-between items-center">
        <a href="/" className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="w-20 h-14 object-cover rounded-full ml-4 md:ml-15"
          />
        </a>
        <button className="md:hidden" onClick={() => setSidebarOpen(!sidebarOpen)}>
          <img src={menu} alt="Menu" className="w-12 h-12 cursor-pointer" />
        </button>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className={`fixed md:static w-64 bg-gradient-to-b from-[#F09918]  to-[#1575C2] text-white p-6 flex flex-col md:block transition-transform duration-300 ${sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}>
          <nav className="flex-1">
            <ul className="space-y-4">
              {[
                { id: "dashboard", label: "My Dashboard" },
                { id: "profile", label: "Company Profile" },
                { id: "products", label: "Product / Services" },
                { id: "premium", label: "Premium Plan" },
                { id: "support", label: "Support" }
              ].map((item) => (
                <li
                  key={item.id}
                  className={`cursor-pointer hover:text-yellow-400 p-2 rounded ${activeSection === item.id ? "bg-white text-black" : ""}`}
                  onClick={() => {
                    setActiveSection(item.id);
                    setSidebarOpen(false);
                  }}
                >
                  {item.label}
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Show "Code Pixels" and "Products/Services" ONLY IF activeSection is NOT "premium" */}
          {activeSection !== "premium" && (
            <>
              {/* Top Section */}
              <div className="bg-white shadow-md p-6 md:p-8 rounded-lg flex flex-col md:flex-row justify-between items-center">
                <div className="flex items-center gap-6">
                  <input type="file" className="hidden" id="profileUpload" />
                  <label htmlFor="profileUpload" className="cursor-pointer">
                    <div className="w-24 h-24 bg-gray-200 flex items-center justify-center rounded-lg">
                      +
                    </div>
                  </label>
                  <div>
                    <h2 className="text-2xl font-semibold">Code Pixels</h2>
                    <p className="text-gray-600 text-lg">📞 +91-7575875876</p>
                    <p className="text-gray-600 text-lg">📧 codemarketing@gmail.com</p>
                  </div>
                </div>
                <button className="bg-[#FF9E2F] px-6 py-3 rounded-md text-black font-semibold text-lg cursor-pointer hover:bg-yellow-500 transition-all">
                  Edit
                </button>
              </div>

              {/* Products / Services Section */}
              <div className={`bg-white shadow-md p-6 mt-6 rounded-lg transition-all duration-500 ${activeSection === "products" ? "scale-95" : "scale-100"}`}>
                <h3 className="text-lg font-semibold text-green-900">Products / Services</h3>
                <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="h-32 border-r"></div>
                  <div className="h-32 border-r"></div>
                  <div className="h-32"></div>
                </div>
              </div>
            </>
          )}

          {/* Show "Premium Plans" Section ONLY IF activeSection is "premium" */}
          {activeSection === "premium" && (
            <div className="bg-white shadow-md p-6 rounded-lg">
              <div className="bg-[#F09918] py-4 rounded-md">
                <h2 className="text-3xl ml-4 md:ml-10 font-bold text-black">
                  Boost Your Online Presence
                </h2>
                <p className="text-lg ml-4 md:ml-10 text-gray-700">
                  Get Started with our Premium Plans
                </p>
              </div>
              <div className="flex flex-col md:flex-row justify-center gap-4 mt-7">
                <button className={`px-4 py-2 rounded-md ${planType === "monthly" ? "bg-[#1077BC] text-white" : "bg-gray-200 text-black"}`} onClick={() => setPlanType("monthly")}>
                  Monthly Plan
                </button>
                <button className={`px-4 py-2 rounded-md ${planType === "yearly" ? "bg-[#1077BC] text-white" : "bg-gray-200 text-black"}`} onClick={() => setPlanType("yearly")}>
                  Yearly Plan
                </button>
              </div>

              {/* Plan Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                {["Standard Plan", "Premium Plan", "Standard Plan"].map(
                  (plan, index) => (
                    <div
                      key={index}
                      className="bg-white shadow-md p-6 rounded-lg border border-gray-300"
                    >
                      <div className="bg-yellow-200 p-4 text-lg rounded-md text-center font-semibold h-60">
                        {plan}
                        <p className="text-black text-center mt-2">
                          Lorem ipsum dolor sit amet consectetur.
                        </p>
                        <button className="bg-[#1077BC] text-white px-4 py-2 rounded-md mt-25 w-50 mx-auto block">
                          Choose Plan
                        </button>
                      </div>
                      <ul className="mt-10 text-sm text-gray-700 space-y-2">
                        <li>✔︎ Gallery Showcase</li>
                        <li>✔︎ Brand Identity</li>
                        <li>✔︎ Contact Information</li>
                        <li>✔︎ Direct Contact</li>
                        <li>✔︎ Social Connectivity</li>
                        <li>✔︎ Directions</li>
                        <li>✔︎ Lead Generation</li>
                        <li>✔︎ Verification Cost $20 (one-off)</li>
                      </ul>
                    </div>
                  )
                )}
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Footer */}
      <footer className="w-full bg-black text-white text-center py-4 mt-auto">
        Copyright © 2025, Punjabipages.in | All rights reserved.
      </footer>
    </div>
  );
};

export default Dashboard;
