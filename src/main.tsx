import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const isWebView = () => {
  const userAgent = navigator.userAgent || navigator.vendor;
  return (
    /FBAN|FBAV|Instagram|Twitter|Threads/i.test(userAgent) || // Detect common WebViews
    navigator.standalone // Detect iOS standalone mode
  );
};

if (isWebView()) {
  document.documentElement.style.setProperty("--footer-padding", "15px");
  document.documentElement.style.setProperty("--footer-font-size", "0.75rem");
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
