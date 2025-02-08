import React from "react";

const Footer: React.FC = () => {
  return (
    <footer style={{ fontSize: "0.6rem" }}>
      <p style={{ margin: 0 }}>
        &copy; {new Date().getFullYear()} aitrends.now. All rights reserved. For
        the love of Tech.
      </p>
    </footer>
  );
};

export default Footer;
