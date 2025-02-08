import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const detectWebView = () => {
  const isWebView =
    navigator.userAgent.includes("FBAN") ||
    navigator.userAgent.includes("FBAV") ||
    navigator.userAgent.includes("Instagram");

  if (isWebView) {
    document.documentElement.style.setProperty("--footer-font-size", "0.7rem");
  }
};

const Main = () => {
  useEffect(() => {
    detectWebView();
  }, []);

  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(<Main />);
