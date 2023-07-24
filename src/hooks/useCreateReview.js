import { useMutation } from "@apollo/client";
import { CREATE_REVIEW } from "../graphql/mutations";

const useCreateReview = () => {
  const [mutate, result] = useMutation(CREATE_REVIEW);

  const createReview = async ({
    repositoryOwnerName,
    repositoryName,
    repositoryRating,
    review,
  }) => {
    const { data } = await mutate({
      variables: {
        ownerName: repositoryOwnerName,
        rating: repositoryRating,
        repositoryName,
        text: review,
      },
    });

    return data?.createReview?.repositoryId;
  };

  return [createReview, result];
};

export default useCreateReview;
