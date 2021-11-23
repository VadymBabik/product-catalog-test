import moment from "moment";
import React from "react";

const ReviewsItem = ({ item }) => {
  const { created_at, created_by, rate, text } = item;
  return (
    <li className="collection-item">
      <span>{`${created_by?.username} at ${moment(created_at).format(
        "YYYY-MM-DD HH:MM"
      )}`}</span>
      <div>{`Rate: ${rate}`}</div>
      <div>{`Comment: ${text}`}</div>
    </li>
  );
};

export default React.memo(ReviewsItem);
