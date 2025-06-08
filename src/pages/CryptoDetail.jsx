import React, { useContext } from "react";
import { cryptoContext } from "../context/CryptoContext";
import { useParams } from "react-router-dom";
import CryptoChart from "../components/CryptoChart";

const CryptoDetail = () => {
  const { fullCoinData, currency } = useContext(cryptoContext);
  const { id } = useParams();

  const coin = fullCoinData.find((item) => item.id === id);

  if (!coin) {
    return <div>Loading or coin not found...</div>;
  }
  const {
    name,
    symbol,
    image,
    current_price,
    market_cap,
    market_cap_rank,
    total_volume,
    high_24h,
    low_24h,
    circulating_supply,
    price_change_24h,
  } = coin;
  return (
    <div className="max-w-4xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl rounded-2xl mx-auto mt-10 px-8 py-12 flex flex-col items-center">
      <img
        className="rounded-full w-32 h-32 mb-6 shadow-lg ring-4 ring-white/20"
        src={image || "/placeholder.svg?height=128&width=128"}
        alt=""
      />
      <h3 className="text-3xl font-bold text-white mb-2">
        {name} <span className="uppercase text-gray-300">({symbol})</span>
      </h3>
      <h4 className="text-xl font-medium text-gray-300 bg-white/10 px-4 py-2 rounded-full">
        Rank #{market_cap_rank}
      </h4>
      <div className="table w-full text-white mt-8 space-y-3">
        <div className="flex items-center px-6 py-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/15 transition-all duration-200 gap-4">
          <h5 className="w-2/5 font-semibold text-gray-200">Current Price</h5>
          <h6 className="w-3/5 font-bold text-xl text-green-400">
            ${current_price}{" "}
            <span className="text-sm text-gray-400">{currency.symbol}</span>
          </h6>
        </div>
        <div className="flex items-center px-6 py-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/15 transition-all duration-200 gap-4">
          <h5 className="w-2/5 font-semibold text-gray-200">Market Cap</h5>
          <h6 className="w-3/5 font-bold text-blue-400">
            {market_cap.toLocaleString()}{" "}
            <span className="text-sm text-gray-400">{currency.symbol}</span>
          </h6>
        </div>
        <div className="flex items-center px-6 py-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/15 transition-all duration-200 gap-4">
          <h5 className="w-2/5 font-semibold text-gray-200">24H High</h5>
          <h6 className="w-3/5 font-bold text-green-400">
            {high_24h}{" "}
            <span className="text-sm text-gray-400">{currency.symbol}</span>
          </h6>
        </div>
        <div className="flex items-center px-6 py-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/15 transition-all duration-200 gap-4">
          <h5 className="w-2/5 font-semibold text-gray-200">24H Low</h5>
          <h6 className="w-3/5 font-bold text-red-400">
            {low_24h}{" "}
            <span className="text-sm text-gray-400">{currency.symbol}</span>
          </h6>
        </div>
        <div className="flex items-center px-6 py-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/15 transition-all duration-200 gap-4">
          <h5 className="w-2/5 font-semibold text-gray-200">24H Change</h5>
          <h6 className="w-3/5 font-bold text-yellow-400">
            {price_change_24h}{" "}
            <span className="text-sm text-gray-400">{currency.symbol}</span>
          </h6>
        </div>
        <div className="flex items-center px-6 py-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/15 transition-all duration-200 gap-4">
          <h5 className="w-2/5 font-semibold text-gray-200">Total Volume</h5>
          <h6 className="w-3/5 font-bold text-purple-400">
            {total_volume.toLocaleString()}{" "}
            <span className="text-sm text-gray-400">{currency.symbol}</span>
          </h6>
        </div>
        <div className="flex items-center px-6 py-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/15 transition-all duration-200 gap-4">
          <h5 className="w-2/5 font-semibold text-gray-200">
            Circulating Supply
          </h5>
          <h6 className="w-3/5 font-bold text-cyan-400">
            {Math.floor(circulating_supply).toLocaleString()}{" "}
            <span className="text-sm text-gray-400">{currency.symbol}</span>
          </h6>
        </div>
      </div>
      <CryptoChart />
    </div>
  );
};

export default CryptoDetail;
