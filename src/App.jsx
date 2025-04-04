import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Result from "./pages/Result";
import CompanyDetails from "./pages/CompanyDetails";
import Login from "./components/Login";
import Register from "./components/Register";
import StoreContextProvider from "./context/StoreContext";
import Category from "./pages/Category"; 
import Dashboard from "./components/Dashboard";
import More from "./components/More";
import Blogs from "./components/Blogs";
//import SearchResults from "./pages/SearchResults";


const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <StoreContextProvider>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/result" element={<Result />} />
            <Route path="/companyDetails" element={<CompanyDetails />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} /> 
            <Route path="/category/:categoryName" element={<Category />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/more" element={<More />} />
            
          </Routes>
        </main>
      </StoreContextProvider>
    </div>
  );
};

export default App;

