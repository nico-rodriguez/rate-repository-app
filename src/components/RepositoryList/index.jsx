import { useState } from "react";
import useRepositories from "../../hooks/useRepositories";
import RepositoryListContainer from "./RepositoryListContainer";
import RepositoryListSort from "./RepositoryListSort";
import { CREATED_AT } from "./constants";

const RepositoryList = () => {
  const [sortingMethod, setSortingMethod] = useState(CREATED_AT);
  const { repositories } = useRepositories({ sortingMethod });

  return (
    <>
      <RepositoryListSort
        sortingMethod={sortingMethod}
        setSortingMethod={setSortingMethod}
      />
      <RepositoryListContainer repositories={repositories} />;
    </>
  );
};

export default RepositoryList;
