import React from "react";
import NavMenu from "./NavMenu";
import ModalLogin from "../../Base/Modal/ModalLogin";
import ModalRegistration from "../../Base/Modal/ModalRegistration";

const Header = () => {
  return (
    <>
      <nav className="indigo darken-3">
        <div className="nav-wrapper container">
          <a href="/" className="brand-logo">
            PRODUCT Catalog
          </a>
          <NavMenu />
        </div>
      </nav>
      <ModalLogin />
      <ModalRegistration />
    </>
  );
};

export default Header;
