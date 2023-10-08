import { useQuery } from "@apollo/client";
import { ME } from "../graphql/queries";

const useReviews = (variables) => {
  const { loading, data, fetchMore, ...result } = useQuery(ME, {
    //prevent getting cached data
    fetchPolicy: "cache-and-network",
    variables: { includeReviews: true, ...variables },
  });

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.me?.reviews.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.me.reviews.pageInfo.endCursor,
        ...variables,
      },
    });
  };

  const reviews = data?.me?.reviews;

  return { reviews, loading, fetchMore: handleFetchMore, ...result };
};

export default useReviews;
