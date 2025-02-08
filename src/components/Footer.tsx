import React from "react";

const Footer: React.FC = () => {
  return (
    <footer>
      <p>
        &copy; {new Date().getFullYear()} aitrends.now. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
