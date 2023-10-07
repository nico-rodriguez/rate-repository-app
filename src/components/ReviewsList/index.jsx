import ReviewsListContainer from "./ReviewsListContainer";
import useReviews from "../../hooks/useReviews";

const ReviewsList = () => {
  const { reviews } = useReviews();

  return (
    <ReviewsListContainer reviews={reviews} />
  );
};

export default ReviewsList;
