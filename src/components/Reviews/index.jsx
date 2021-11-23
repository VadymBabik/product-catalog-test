import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductState } from "../../store/product/slice";
import { getReviewsList } from "../../store/product/actions";
import ReviewsItem from "./ReviewsItem";
import SendReviews from "./SendReviews";

const Reviews = ({ id }) => {
  const { reviews } = useSelector(getProductState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReviewsList(id));
  }, [dispatch, id]);
  const data = (arr) =>
    arr?.length
      ? [...arr]?.sort((a, b) =>
          a.created_at < b.created_at ? 1 : a.created_at > b.created_at ? -1 : 0
        )
      : arr;
  return (
    <>
      <SendReviews id={id} />
      <h4>Reviews list</h4>
      <ul className="collection">
        {data(reviews)?.map((e) => (
          <ReviewsItem key={e.id} item={e} />
        ))}
      </ul>
    </>
  );
};

export default React.memo(Reviews);
