import React, { useEffect, useRef, useState } from "react";
import M from "materialize-css";
import { useDispatch } from "react-redux";
import { loginUsers } from "../../../store/user/actions";

const ModalLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const modalLogin = useRef(null);
  useEffect(() => {
    M.Modal.init(modalLogin.current);
  }, []);
  const dispatch = useDispatch();
  const getData = () => {
    dispatch(loginUsers({ username, password }));
    setUsername("");
    setPassword("");
  };

  return (
    <div
      ref={modalLogin}
      style={{ width: "500px" }}
      id="modalLogin"
      className="modal"
    >
      <div className="modal-content">
        <h4>Login</h4>
        <div className="row">
          <div className="input-field col s12">
            <label htmlFor="user_name">User name</label>
            <input
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              id="user_name"
              type="text"
              className="validate"
            />
          </div>
          <div className="input-field col s12">
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              id="password"
              type="password"
              className="validate"
            />
          </div>
        </div>
      </div>
      <div className="modal-footer row">
        <div className="col s6 center">
          <button
            disabled={!username || !password}
            type="button"
            className="btn modalLogin-trigger modal-close"
            onClick={getData}
          >
            Login
          </button>
        </div>
        <div className="col s6 center">
          <button type="button" className="btn modalLogin-trigger modal-close">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalLogin;
