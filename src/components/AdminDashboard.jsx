import React, { useState, useEffect } from "react";
import logo from "../explore_assets/new_logo.jpeg";
import menu from "../explore_assets/profile_icon.png";
import axios from "axios";
import { SERVER_URL } from "../services/Helper";

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [businessCount, setBusinessCount] = useState(0);

  const [todayCount, setTodayCount] = useState(0);

  const [userCount, setUserCount] = useState(0);

  const fetchBusinessCount = async () => {
    try {
      const response = await axios.get(`${SERVER_URL}company/count`);
      setBusinessCount(response.data.count);
    } catch (err) {
      console.error("Failed to fetch business count", err);
    }
  };

  const fetchTodaysCount = async () => {
    try {
      const response = await axios.get(`${SERVER_URL}company/count/today`);
      setTodayCount(response.data.count);
    } catch (err) {
      console.error("Failed to fetch today's business count", err);
    }
  };

  const fetchUserCount = async () => {
    try {
      const response = await axios.get(`${SERVER_URL}company/count-user`);
      setUserCount(response.data.count);
    } catch (err) {
      console.error("Failed to fetch user count", err);
    }
  };

  useEffect(() => {
    fetchBusinessCount();
    fetchTodaysCount();
    fetchUserCount();
  }, []);

  const renderSection = () => {
    switch (activeSection) {
      case "dashboard":
        return (
          <>
            {/* Stats Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Total Businesses */}
              <div className="bg-white h-40 shadow-md p-6 rounded-lg">
                <h2 className="text-gray-600 text-lg">
                  Total Businesses Listed
                </h2>
                <p className="text-4xl font-bold mt-2">{businessCount}</p>
              </div>

              {/* New Listings Today */}
              <div className="bg-white shadow-md p-6 rounded-lg">
                <h2 className="text-gray-600 text-lg">New Listings Today</h2>
                <p className="text-4xl font-bold mt-2">{todayCount}</p>
              </div>

              {/* Total Users */}
              <div className="bg-white shadow-md p-6 rounded-lg">
                <h2 className="text-gray-600 text-lg">Total Users</h2>
                <p className="text-4xl font-bold mt-2">{userCount}</p>
              </div>
            </div>

            {/* Approvals Section */}
            <div className="bg-white shadow-md p-6 rounded-lg mt-6">
              <h2 className="text-xl font-semibold mb-4">
                Approvals & Moderation
              </h2>

              <div className="space-y-4">
                {/* Business Card */}
                <div className="border p-4 rounded-lg">
                  <h3 className="font-bold">Code Pixels</h3>
                  <p className="text-gray-600">📞 +91-7575875876</p>
                  <p className="text-gray-600">📧 Codemarketing@gmail.com</p>

                  <div className="flex justify-end space-x-4 mt-4">
                    <button className="bg-red-500 text-white px-4 py-2 rounded">
                      Reject
                    </button>
                    <button className="bg-green-500 text-white px-4 py-2 rounded">
                      Approve
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      case "userManagement":
        return (
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">User Management</h2>
            <p>User management content goes here...</p>
          </div>
        );
      case "businessListings":
        return (
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Business Listings</h2>
            <p>Business listings content goes here...</p>
          </div>
        );
      case "payments":
        return (
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Payments</h2>
            <p>Payments content goes here...</p>
          </div>
        );
      case "manageSubscriptions":
        return (
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Manage Subscriptions</h2>
            <p>Subscription management content goes here...</p>
          </div>
        );
      case "analytics":
        return (
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Analytics</h2>
            <p>Analytics content goes here...</p>
          </div>
        );
      case "settings":
        return (
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Settings</h2>
            <p>Settings content goes here...</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Navbar */}
      <header className="w-full bg-[#1077BC] shadow-md p-4 flex justify-between items-center">
        <a href="/" className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="w-14 h-14 object-cover rounded-full ml-4 md:ml-15"
          />
        </a>
        <button className="" onClick={() => setSidebarOpen(!sidebarOpen)}>
          <img src={menu} alt="Menu" className="w-12 h-12 cursor-pointer" />
        </button>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside
          className={`fixed md:static w-64 bg-gradient-to-b from-[#F09918] to-[#1575C2] text-white p-6 flex flex-col md:block transition-transform duration-300 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
          }`}
        >
          <nav className="flex-1">
            <ul className="space-y-4">
              {[
                { id: "dashboard", label: "Dashboard" },
                { id: "userManagement", label: "User Management" },
                { id: "businessListings", label: "Business Listings" },
                { id: "payments", label: "Payments" },
                { id: "manageSubscriptions", label: "Manage Subscriptions" },
                { id: "analytics", label: "Analytics" },
                { id: "settings", label: "Settings" },
              ].map((item) => (
                <li
                  key={item.id}
                  className={`cursor-pointer hover:text-yellow-400 p-2 rounded ${
                    activeSection === item.id ? "bg-white text-black" : ""
                  }`}
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
        <main className="flex-1 p-6">{renderSection()}</main>
      </div>

      {/* Footer */}
      <footer className="w-full bg-black text-white text-center py-4 mt-auto">
        Copyright © 2025. Purplebiogas.in | All rights reserved.
      </footer>
    </div>
  );
};

export default AdminDashboard;
