import React, { createContext, useEffect, useState } from "react";

export const cryptoContext = createContext();

const CryptoContextProvider = ({ children }) => {
  const [fullCoinData, setFullCoinData] = useState([]);
  const [currency, setCurrency] = useState({
    name: "usd",
    symbol: "$",
  });

  const fetchCoinData = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-v7DytcNRwpVZptBYs8pVXPwX",
      },
    };

    fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`,
      options
    )
      .then((res) => res.json())
      .then((res) => setFullCoinData(res))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchCoinData();
    const intervalId = setInterval(() => fetchCoinData(), 10000);
    return () => clearInterval(intervalId);
  }, [currency]);

  return (
    <cryptoContext.Provider
      value={{ fullCoinData, setFullCoinData, currency, setCurrency }}
    >
      {children}
    </cryptoContext.Provider>
  );
};
export default CryptoContextProvider;
