import React, { useEffect, useRef, useState } from "react";
import M from "materialize-css";
import { registerUsers } from "../../../store/user/actions";
import { useDispatch } from "react-redux";

const ModalRegistration = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const modalRegistration = useRef(null);
  useEffect(() => {
    M.Modal.init(modalRegistration.current);
  }, []);
  const dispatch = useDispatch();
  const getData = () => {
    dispatch(registerUsers({ username, password }));
    setUsername("");
    setPassword("");
  };

  return (
    <div
      ref={modalRegistration}
      style={{ maxWidth: "500px" }}
      id="modalRegistration"
      className="modal"
    >
      <div className="modal-content">
        <h4>Registration</h4>
        <div className="row">
          <div className="input-field col s12">
            <label htmlFor="user_nam">User name</label>
            <input
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              id="user_nam"
              type="text"
              className="validate"
            />
          </div>
          <div className="input-field col s12">
            <label htmlFor="pasword">Password</label>
            <input
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              id="pasword"
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
            className="btn modalRegistration-trigger modal-close"
            onClick={getData}
          >
            Registration
          </button>
        </div>
        <div className="col s6 center">
          <button
            type="button"
            className="btn modalRegistration-trigger modal-close"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalRegistration;
