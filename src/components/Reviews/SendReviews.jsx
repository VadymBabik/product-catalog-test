import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";
import { sendReview } from "../../store/product/actions";
import { useDispatch, useSelector } from "react-redux";
import { getUserState } from "../../store/user/slice";

const SendReviews = ({ id }) => {
  const [rate, setRating] = useState(0);
  const [text, setText] = useState("");
  const { user } = useSelector(getUserState);
  const dispatch = useDispatch();
  return (
    <div style={{ marginBottom: "40px" }}>
      <Rating onClick={(rate) => setRating(rate)} ratingValue={rate} />
      <div className="row" style={{ marginBottom: 0 }}>
        <div className="input-field col s12">
          <textarea
            value={text}
            onChange={(event) => setText(event.target.value)}
            id="textarea1"
            className="materialize-textarea"
          />
          <label htmlFor="textarea1">Review</label>
        </div>
      </div>
      {user?.token ? (
        <button
          className="btn waves-effect waves-light"
          type="button"
          name="action"
          onClick={() => {
            dispatch(sendReview({ rate, text }, id));
            setRating(0);
            setText("");
          }}
        >
          Send
          <i className="material-icons right">send</i>
        </button>
      ) : (
        <button
          data-target="modalReview"
          className="btn modal-trigger waves-effect waves-light"
        >
          Send
          <i className="material-icons right">send</i>
        </button>
      )}
    </div>
  );
};

export default React.memo(SendReviews);
