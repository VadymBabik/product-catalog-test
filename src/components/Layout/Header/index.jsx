import React from "react";
import NavMenu from "./NavMenu";
import ModalLogin from "../../Base/Modal/ModalLogin";
import ModalRegistration from "../../Base/Modal/ModalRegistration";
import { Link } from "react-router-dom";
import ModalReviews from "../../Base/Modal/ModalReviews";

const Header = () => {
  return (
    <div className="navbar-fixed">
      <nav className="teal accent-4">
        <div className="nav-wrapper container">
          <Link to="/" className="brand-logo">
            PRODUCT <span className="hide-on-med-and-down">Catalog</span>
          </Link>
          <a href="!#" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
          <NavMenu />
        </div>
      </nav>
      <ModalLogin />
      <ModalRegistration />
      <ModalReviews />
    </div>
  );
};

export default React.memo(Header);
