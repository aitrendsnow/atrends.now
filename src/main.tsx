import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const detectWebView = (): boolean => {
  const userAgent = navigator.userAgent || navigator.vendor;
  const isStandalone =
    (window.navigator as unknown as { standalone?: boolean }).standalone ||
    false;

  return /FBAN|FBAV|Instagram|Twitter|Threads/i.test(userAgent) || isStandalone;
};

const applyWebViewStyles = () => {
  if (detectWebView()) {
    document.documentElement.style.setProperty("--footer-padding", "15px");
    document.documentElement.style.setProperty("--footer-font-size", "0.75rem");
  }
};

// Apply styles before app renders
applyWebViewStyles();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
