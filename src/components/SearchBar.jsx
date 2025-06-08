import React, { useContext, useEffect, useState } from "react";
import { cryptoContext } from "../context/CryptoContext";

const SearchBar = ({ setDisplayCoin }) => {
  const { fullCoinData } = useContext(cryptoContext);
  const [search, setSearch] = useState("");

  const handleSearchData = (e) => {
    const inputValue = e.target.value;
    setSearch(inputValue);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (search.trim() === "") {
        setDisplayCoin(fullCoinData);
        return;
      }
      const filtered = fullCoinData.filter((coin) =>
        coin.name.toLowerCase().includes(search.toLowerCase())
      );
      setDisplayCoin(filtered);
    }, 700);

    return () => clearTimeout(timer);
  }, [search, fullCoinData, setDisplayCoin]);



  return (
     <div className="w-full max-w-2xl mx-auto mt-10 flex items-center justify-center px-4">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full flex items-center bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-2 shadow-2xl hover:shadow-blue-500/10 transition-all duration-300"
      >
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            className="w-full bg-transparent border-none outline-none text-white placeholder-gray-300 px-12 py-3 text-lg focus:ring-0"
            type="text"
            placeholder="Search cryptocurrencies..."
            value={search}
            onChange={handleSearchData}
          />
          {search && (
            <button
              type="button"
              onClick={() => setSearch("")}
              className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-white transition-colors duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
        <button
          className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 px-8 py-3 rounded-xl font-semibold text-white cursor-pointer transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-blue-500/25 ml-2"
          type="submit"
        >
          <span className="flex items-center space-x-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <span>Search</span>
          </span>
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
