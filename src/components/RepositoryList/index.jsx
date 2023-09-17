import { useState } from "react";
import useRepositories from "../../hooks/useRepositories";
import RepositoryListContainer from "./RepositoryListContainer";
import RepositoryListSort from "./RepositoryListSort";
import { CREATED_AT } from "./constants";
import RepositoryListFilter from "./RepositoryListFilter";
import { useDebounce } from "use-debounce";

const RepositoryList = () => {
  const [sortingMethod, setSortingMethod] = useState(CREATED_AT);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchKeywordDebounced] = useDebounce(searchKeyword, 500);

  const { repositories } = useRepositories(
    sortingMethod,
    searchKeywordDebounced
  );

  return (
    <>
      <RepositoryListSort
        sortingMethod={sortingMethod}
        setSortingMethod={setSortingMethod}
      />
      <RepositoryListFilter
        searchKeyword={searchKeyword}
        setSearchKeyword={setSearchKeyword}
      />
      <RepositoryListContainer repositories={repositories} />;
    </>
  );
};

export default RepositoryList;
