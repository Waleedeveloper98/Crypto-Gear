import React, { useContext, useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import CryptoRow from "../components/CryptoRow";
import { cryptoContext } from "../context/CryptoContext";

const HomePage = () => {
  const { fullCoinData, setFullCoinData } = useContext(cryptoContext);
  const [displayCoin, setDisplayCoin] = useState([]);

  useEffect(() => {
    setDisplayCoin(fullCoinData);
  }, [fullCoinData]);
  return (
     <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 px-4">
      <h1 className=" text-4xl md:text-5xl lg:text-6xl text-center pt-20 font-bold bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent leading-tight">
        Track Your Crypto Journey
      </h1>
      <p className="text-center text-gray-300 mt-6 text-lg md:text-xl w-full md:w-3/4 lg:w-1/2 mx-auto leading-relaxed">
        Monitor the performance of each mining script and watch your coin accumulation grow.
      </p>
      <div className="mt-12">
        <SearchBar setDisplayCoin={setDisplayCoin} />
      </div>
      <div className="container w-full md:w-4/5 lg:w-3/5 p-0 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl text-white mx-auto mt-12 overflow-hidden">
        <div className="top-row grid grid-rows-1 grid-cols-12 font-semibold bg-gradient-to-r from-blue-600/30 to-purple-600/30 border-b border-white/20">
          <h4 className="bg-transparent border-r border-white/20 px-3 py-4 col-span-1 text-sm text-gray-200">#</h4>
          <h4 className="bg-transparent border-r border-white/20 px-3 py-4 col-span-4 text-sm text-gray-200">Coin</h4>
          <h4 className="bg-transparent border-r border-white/20 px-3 text-center py-4 col-span-2 text-sm text-gray-200">
            24H High
          </h4>
          <h4 className="bg-transparent border-r border-white/20 px-3 text-center py-4 col-span-2 text-sm text-gray-200">
            24H Low
          </h4>
          <h4 className="bg-transparent px-3 py-4 col-span-3 text-right text-sm text-gray-200">Price</h4>
        </div>
        {displayCoin.length > 0 &&
          displayCoin.slice(0, 20).map((coin, index) => <CryptoRow key={coin.id} coin={coin} index={index} />)}
      </div>
    </div>
  );
};

export default HomePage;
