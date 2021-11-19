import React from "react";
import NavMenu from "./NavMenu";

const Header = () => {
  return (
    <nav>
      <div className="nav-wrapper container">
        <a href="/" className="brand-logo">
          PRODUCT Catalog
        </a>
        <NavMenu />
      </div>
    </nav>
  );
};

export default Header;
