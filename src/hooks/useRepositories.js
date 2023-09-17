import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = ({ sortingMethod }) => {
  const orderBy = sortingMethod.includes("RATING_AVERAGE")
    ? "RATING_AVERAGE"
    : "CREATED_AT";
  const orderDirection = sortingMethod.includes("DESC") ? "DESC" : "ASC";

  const { loading, data } = useQuery(GET_REPOSITORIES, {
    //prevent getting cached data with the repository query
    fetchPolicy: "cache-and-network",
    variables: { orderBy, orderDirection },
  });

  const repositories = data?.repositories;

  return { repositories, loading };
};

export default useRepositories;
