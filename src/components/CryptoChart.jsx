"use client";

import { useContext, useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useParams } from "react-router-dom";
import { cryptoContext } from "../context/CryptoContext";

// Register the components Chart.js needs
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const CryptoChart = () => {
  const [historicalData, setHistoricalData] = useState([]);
  const { fullCoinData, currency } = useContext(cryptoContext);
  const { id } = useParams();
  const getSymbol = () => {
    const coin = fullCoinData.find((coin) => coin.id === id);
    return coin ? coin.symbol.toUpperCase() : "N/A";
  };

  const getHistoricalData = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-v7DytcNRwpVZptBYs8pVXPwX",
      },
    };

    try {
      const res = await fetch(
        `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency.name}&days=10`,
        options
      );
      const data = await res.json();
      setHistoricalData(data.prices);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getHistoricalData();
  }, []);

  const dailyData = [];
  const seenDates = new Set();

  historicalData.forEach(([timestamp, price]) => {
    const date = new Date(timestamp).toLocaleDateString().slice(0, -5);
    if (!seenDates.has(date)) {
      seenDates.add(date);
      dailyData.push({ date, price });
    }
  });

  const chartData = {
    labels: dailyData.map((item) => item.date),
    datasets: [
      {
        label: `Price Chart ${getSymbol()}`,
        data: dailyData.map((item) => item.price),
        borderColor: "rgba(59, 130, 246, 1)",
        backgroundColor: "rgba(59, 130, 246, 0.1)",
        borderWidth: 3,
        pointBackgroundColor: "rgba(59, 130, 246, 1)",
        pointBorderColor: "rgba(255, 255, 255, 1)",
        pointBorderWidth: 2,
        pointRadius: 6,
        pointHoverRadius: 8,
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "rgba(255, 255, 255, 0.8)",
          font: {
            size: 14,
            weight: "600",
          },
          padding: 20,
        },
      },
      title: {
        display: true,
        text: "Last 10 Days Price Movement",
        color: "rgba(255, 255, 255, 0.9)",
        font: {
          size: 18,
          weight: "bold",
        },
        padding: {
          top: 10,
          bottom: 30,
        },
      },
      tooltip: {
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        titleColor: "rgba(255, 255, 255, 1)",
        bodyColor: "rgba(255, 255, 255, 0.9)",
        borderColor: "rgba(59, 130, 246, 1)",
        borderWidth: 1,
        cornerRadius: 8,
        padding: 12,
      },
    },
    scales: {
      x: {
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
          borderColor: "rgba(255, 255, 255, 0.2)",
        },
        ticks: {
          color: "rgba(255, 255, 255, 0.7)",
          font: {
            size: 12,
          },
        },
      },
      y: {
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
          borderColor: "rgba(255, 255, 255, 0.2)",
        },
        ticks: {
          color: "rgba(255, 255, 255, 0.7)",
          font: {
            size: 12,
          },
        },
      },
    },
  };

  return (
    <div className="w-full max-w-4xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 mx-auto mt-10 shadow-2xl">
      {historicalData.length > 0 ? (
        <div className="h-96">
          <Line data={chartData} options={options} />
        </div>
      ) : (
        <div className="h-96 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400 mx-auto mb-4"></div>
            <p className="text-gray-300 text-lg font-medium">
              Loading Chart...
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CryptoChart;
