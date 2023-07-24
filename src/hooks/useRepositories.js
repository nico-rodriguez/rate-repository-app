import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = () => {
  const { loading, data } = useQuery(GET_REPOSITORIES, {
    //prevent getting cached data with the repository query
    fetchPolicy: "cache-and-network",
  });

  const repositories = data?.repositories;

  return { repositories, loading };
};

export default useRepositories;
