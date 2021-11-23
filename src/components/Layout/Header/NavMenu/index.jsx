import React from "react";
import Cookies from "js-cookie";
import constants from "../../../../services/constants";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearUserData, getUserState } from "../../../../store/user/slice";

const NavMenu = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(getUserState);
  return (
    <>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        {user?.token ? (
          <li
            onClick={() => {
              Cookies.remove(constants.jwtToken);
              dispatch(clearUserData());
            }}
          >
            <Link to="/">Log Out</Link>
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
    </>
  );
};

export default React.memo(NavMenu);
