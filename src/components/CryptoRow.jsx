import React, { useContext } from "react";
import { cryptoContext } from "../context/CryptoContext";
import { Link } from "react-router-dom";

const CryptoRow = ({ coin }) => {
  const { currency } = useContext(cryptoContext);
  // console.log(currency);

  const { id, market_cap_rank, name, high_24h, low_24h, current_price, image } =
    coin;

  return (
    <Link
      to={`/currency/${id}`}
      key={id}
      className="top-row grid grid-rows-1 mt-0 border-t-0 border-b border-white/10 grid-cols-12 font-medium overflow-hidden hover:bg-white/5 transition-all duration-200 group cursor-pointer"
    >
      <h4 className="border-r border-white/10 px-4 py-4 col-span-1 text-gray-300 group-hover:text-white transition-colors duration-200">
        {market_cap_rank}
      </h4>
      <h4 className="border-r border-white/10 px-4 py-4 col-span-4 flex items-center gap-3 text-white group-hover:text-blue-300 transition-colors duration-200">
        <span className="font-semibold">{name}</span>
        <img
          className="w-6 h-6 rounded-full shadow-sm"
          src={image || "/placeholder.svg"}
          alt={name}
        />
      </h4>
      <h4 className="border-r border-white/10 px-4 text-center py-4 col-span-2">
        <span className="text-green-400 font-semibold bg-green-400/10 px-1 py-1 rounded-md">
          {high_24h.toLocaleString()}
        </span>
        <span className="text-sm text-gray-400 ml-1">{currency.symbol}</span>
      </h4>
      <h4 className="border-r border-white/10 px-4 text-center py-4 col-span-2">
        <span className="text-red-400 font-semibold bg-red-400/10 px-1 py-1 rounded-md">
          {low_24h.toLocaleString()}
        </span>
        <span className="text-sm text-gray-400 ml-1">{currency.symbol}</span>
      </h4>
      <h4 className="px-4 py-4 col-span-3 text-white font-bold text-lg group-hover:text-blue-300 transition-colors duration-200">
        {current_price.toLocaleString()}
        <span className="text-sm text-gray-400 ml-1">{currency.symbol}</span>
      </h4>
    </Link>
  );
};

export default CryptoRow;
