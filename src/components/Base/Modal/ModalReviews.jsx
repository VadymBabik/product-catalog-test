import React, { useEffect, useRef } from "react";
import M from "materialize-css";

const ModalReviews = () => {
  const modalReview = useRef(null);

  useEffect(() => {
    M.Modal.init(modalReview.current);
  }, []);

  const closeModal = () => modalReview.current.M_Modal.close();

  return (
    <div
      ref={modalReview}
      style={{ maxWidth: "500px" }}
      id="modalReview"
      className="modal"
    >
      <div className="modal-content">
        <h4>Review</h4>
        <div className="row">
          <h5>Only authorized users can comment</h5>
        </div>
      </div>
      <div className="modal-footer row">
        <div className="col s6 center">
          <button
            onClick={closeModal}
            data-target="modalRegistration"
            className="btn modal-trigger waves-effect waves-light"
          >
            Sing Up
          </button>
        </div>
        <div className="col s6 center">
          <button
            onClick={closeModal}
            data-target="modalLogin"
            className="btn modal-trigger waves-effect waves-light"
          >
            Log In
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalReviews;
