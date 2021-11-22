import React from "react";
import { useSelector } from "react-redux";
import { getUserState } from "../../../../store/user/slice";

const NavMenu = () => {
  const { user } = useSelector(getUserState);
  return (
    <ul id="nav-mobile" className="right hide-on-med-and-down">
      {user?.token ? (
        <li>
          <a href="/">Log Out</a>
        </li>
      ) : (
        <>
          <li>
            <a className="modal-trigger" href="#modalRegistration">
              Sing Up
            </a>
          </li>
          <li>
            <a className="modal-trigger" href="#modalLogin">
              Log In
            </a>
          </li>
        </>
      )}
    </ul>
  );
};

export default NavMenu;
