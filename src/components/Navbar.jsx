import React, { useContext } from "react";
import { cryptoContext } from "../context/CryptoContext";

const Navbar = () => {
  const { currency, setCurrency } = useContext(cryptoContext);

  const handleCurrencyChange = (e) => {
    switch (e.target.value) {
      case "usd":
        setCurrency({ name: "usd", symbol: "$" });
        break;
      case "eur":
        setCurrency({ name: "eur", symbol: "€" });
        break;
      case "pkr":
        setCurrency({ name: "pkr", symbol: "Rs" });
        break;
      default:
        setCurrency({ name: "usd", symbol: "$" });
    }
  };

  return (
    <div className="w-full py-6 px-6 md:px-12 bg-gradient-to-r from-slate-50 to-gray-50 border-b border-gray-200 shadow-sm">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo/Brand */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">₿</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            Crypto Gear
          </h3>
        </div>

        {/* Currency Selector */}
        <div className="flex items-center space-x-2">
          <span className="text-sm font-medium text-gray-600 hidden sm:block">
            Currency:
          </span>
          <div className="relative">
            <select
              onChange={handleCurrencyChange}
              className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2.5 pr-8 text-sm font-medium text-gray-700 cursor-pointer outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 hover:border-gray-400 shadow-sm"
            >
              <option value="usd">USD ($)</option>
              <option value="eur">EUR (€)</option>
              <option value="pkr">PKR (₨)</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
