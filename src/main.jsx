import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import CryptoContextProvider from "./context/CryptoContext.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <CryptoContextProvider>
    <BrowserRouter >
    <App />
    </BrowserRouter>
  </CryptoContextProvider>
);
