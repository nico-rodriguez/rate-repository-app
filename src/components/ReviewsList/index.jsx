import ReviewsListContainer from "./ReviewsListContainer";
import useReviews from "../../hooks/useReviews";

const ReviewsList = () => {
  const { reviews, fetchMore } = useReviews({ first: 8 });

  const handleEndReached = () => {
    fetchMore();
  };

  return (
    <ReviewsListContainer
      reviews={reviews}
      handleEndReached={handleEndReached}
    />
  );
};

export default ReviewsList;
