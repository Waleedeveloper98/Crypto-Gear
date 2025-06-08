import React from "react";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import CryptoDetail from "./pages/CryptoDetail";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="w-full bg-blue-950 min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/currency/:id" element={<CryptoDetail />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
