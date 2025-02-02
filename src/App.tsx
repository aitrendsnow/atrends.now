import { useState, useEffect } from "react";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./index.css";

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  const handleShare = (title: string, url: string): void => {
    if (navigator.share) {
      navigator
        .share({
          title: title,
          url: url,
        })
        .then(() => console.log("Content shared successfully"))
        .catch((error) => console.error("Error sharing content:", error));
    } else {
      alert("Sharing is not supported on this device.");
    }
  };

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center text-center min-vh-100">
      {/* Theme Switcher */}
      <button
        onClick={toggleTheme}
        className="theme-switcher-btn position-absolute top-0 end-0 m-3"
        aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      >
        {theme === "light" ? (
          <i className="bi bi-moon-fill" aria-hidden="true"></i>
        ) : (
          <i className="bi bi-sun-fill" aria-hidden="true"></i>
        )}
      </button>

      {/* Profile Section */}
      <div className="profile-section">
        <img
          src="/aitrends.now/profile-image.webp"
          alt="Profile picture of aitrends.now"
          className="profile-image"
          loading="lazy"
        />
        <h1 className="profile-username">aitrends.now</h1>
        <p className="profile-description">
          Tech enthusiast. Follow for updates & a shared love for tech.
        </p>
      </div>

      {/* Links Section */}
      <div className="links-section">
        <div className="link-card">
          <a
            href="https://threads.net/@aitrends.now"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              aria-label="Threads"
              viewBox="0 0 192 192"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4484 44.7443 97.3355 44.7443 97.222 44.7443C82.2364 44.7443 69.7731 51.1409 62.102 62.7807L75.881 72.2328C81.6116 63.5383 90.6052 61.6848 97.2286 61.6848C97.3051 61.6848 97.3819 61.6848 97.4576 61.6855C105.707 61.7381 111.932 64.1366 115.961 68.814C118.893 72.2193 120.854 76.925 121.825 82.8638C114.511 81.6207 106.601 81.2385 98.145 81.7233C74.3247 83.0954 59.0111 96.9879 60.0396 116.292C60.5615 126.084 65.4397 134.508 73.775 140.011C80.8224 144.663 89.899 146.938 99.3323 146.423C111.79 145.74 121.563 140.987 128.381 132.296C133.559 125.696 136.834 117.143 138.28 106.366C144.217 109.949 148.617 114.664 151.047 120.332C155.179 129.967 155.42 145.8 142.501 158.708C131.182 170.016 117.576 174.908 97.0135 175.059C74.2042 174.89 56.9538 167.575 45.7381 153.317C35.2355 139.966 29.8077 120.682 29.6052 96C29.8077 71.3178 35.2355 52.0336 45.7381 38.6827C56.9538 24.4249 74.2039 17.11 97.0132 16.9405C119.988 17.1113 137.539 24.4614 149.184 38.788C154.894 45.8136 159.199 54.6488 162.037 64.9503L178.184 60.6422C174.744 47.9622 169.331 37.0357 161.965 27.974C147.036 9.60668 125.202 0.195148 97.0695 0H96.9569C68.8816 0.19447 47.2921 9.6418 32.7883 28.0793C19.8819 44.4864 13.2244 67.3157 13.0007 95.9325L13 96L13.0007 96.0675C13.2244 124.684 19.8819 147.514 32.7883 163.921C47.2921 182.358 68.8816 191.806 96.9569 192H97.0695C122.03 191.827 139.624 185.292 154.118 170.811C173.081 151.866 172.51 128.119 166.26 113.541C161.776 103.087 153.227 94.5962 141.537 88.9883ZM98.4405 129.507C88.0005 130.095 77.1544 125.409 76.6196 115.372C76.2232 107.93 81.9158 99.626 99.0812 98.6368C101.047 98.5234 102.976 98.468 104.871 98.468C111.106 98.468 116.939 99.0737 122.242 100.233C120.264 124.935 108.662 128.946 98.4405 129.507Z" />
            </svg>
            <span>Threads</span>
          </a>
          <span
            className="link-options"
            onClick={() =>
              handleShare("Threads", "https://threads.net/@aitrends.now")
            }
            role="button"
            tabIndex={0}
            aria-label="Share Threads link"
          >
            ⋮
          </span>
        </div>

        <div className="link-card">
          <a
            href="https://bluesky.social/@aitrends.now"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 511.999 452.266"
              width="24"
              height="24"
              aria-label="Bluesky"
            >
              <path
                fill="#0085FF"
                d="M110.985 30.442c58.695 44.217 121.837 133.856 145.013 181.961 23.176-48.105 86.322-137.744 145.016-181.961 42.361-31.897 110.985-56.584 110.985 21.96 0 15.681-8.962 131.776-14.223 150.628-18.272 65.516-84.873 82.228-144.112 72.116 103.55 17.68 129.889 76.238 73 134.8-108.04 111.223-155.288-27.905-167.385-63.554-3.489-10.262-2.991-10.498-6.561 0-12.098 35.649-59.342 174.777-167.382 63.554-56.89-58.562-30.551-117.12 72.999-134.8-59.239 10.112-125.84-6.6-144.112-72.116C8.962 184.178 0 68.083 0 52.402c0-78.544 68.633-53.857 110.985-21.96z"
              />
            </svg>
            <span>Bluesky</span>
          </a>
          <span
            className="link-options"
            onClick={() =>
              handleShare("Bluesky", "https://bluesky.social/@aitrends.now")
            }
            role="button"
            tabIndex={0}
            aria-label="Share Bluesky link"
          >
            ⋮
          </span>
        </div>

        <div className="link-card">
          <a
            href="https://instagram.com/aitrends.now"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-instagram"></i>
            <span>Instagram</span>
          </a>
          <span
            className="link-options"
            onClick={() =>
              handleShare("Instagram", "https://instagram.com/aitrends.now")
            }
            role="button"
            tabIndex={0}
            aria-label="Share Instagram link"
          >
            ⋮
          </span>
        </div>

        <div className="link-card special">
          <a
            href="https://aitrends.now/ebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-book"></i>
            <span>Download your ebook</span>
          </a>
          <span
            className="link-options"
            onClick={() =>
              handleShare("Download your ebook", "https://aitrends.now/ebook")
            }
            role="button"
            tabIndex={0}
            aria-label="Share Ebook link"
          >
            ⋮
          </span>
        </div>

        <div className="link-card special">
          <a href="mailto:contact@aitrends.now">
            <i className="bi bi-envelope-fill"></i>
            <span>Get the latest by email</span>
          </a>
          <span
            className="link-options"
            onClick={() =>
              handleShare(
                "Get the latest by email",
                "mailto:contact@aitrends.now"
              )
            }
            role="button"
            tabIndex={0}
            aria-label="Share Email link"
          >
            ⋮
          </span>
        </div>
      </div>

      <Footer />
    </div>
  );
}
