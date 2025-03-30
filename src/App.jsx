import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Result from "./pages/Result";
import CompanyDetails from "./pages/CompanyDetails";
import Login from "./components/Login";
import Register from "./components/Register";
import StoreContextProvider from "./context/StoreContext";
import Category from "./pages/Category"; 


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
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} /> 
            <Route path="/category/:categoryName" element={<Category />} />
          </Routes>
        </main>
      </StoreContextProvider>
    </div>
  );
};

export default App;

