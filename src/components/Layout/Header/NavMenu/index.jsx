import React from "react";

const NavMenu = () => {
  return (
    <ul id="nav-mobile" className="right hide-on-med-and-down">
      <li>
        <span>Hello user</span>
      </li>
      <li>
        <a href="/">Sing Up</a>
      </li>
      <li>
        <a href="/">Log In</a>
      </li>
      <li>
        <a href="/">Log Out</a>
      </li>
    </ul>
  );
};

export default NavMenu;
