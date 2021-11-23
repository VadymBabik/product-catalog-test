import React, { useEffect, useRef } from "react";
import M from "materialize-css";
import Cookies from "js-cookie";
import constants from "../../../../services/constants";
import { useDispatch, useSelector } from "react-redux";
import { clearUserData, getUserState } from "../../../../store/user/slice";

const MobileMenu = () => {
  const sidenav = useRef(null);
  const dispatch = useDispatch();
  const { user } = useSelector(getUserState);
  useEffect(() => {
    M.Sidenav.init(sidenav.current);
  }, []);

  return (
    <ul ref={sidenav} className="sidenav" id="mobile-demo">
      {user?.token ? (
        <li
          onClick={() => {
            Cookies.remove(constants.jwtToken);
            dispatch(clearUserData());
          }}
        >
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

export default React.memo(MobileMenu);
