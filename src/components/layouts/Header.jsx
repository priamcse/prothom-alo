import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <Link to="/">
          <img src="../../logo.svg" alt="Prothom Alo" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
