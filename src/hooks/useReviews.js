import { useQuery } from "@apollo/client";
import { ME } from "../graphql/queries";

const useReviews = () => {
  const { loading, data } = useQuery(ME, {
    //prevent getting cached data
    fetchPolicy: "cache-and-network",
    variables: { includeReviews: true },
  });

  const reviews = data?.me?.reviews;

  return { reviews, loading };
};

export default useReviews;
