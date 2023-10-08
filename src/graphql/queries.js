import { gql } from "@apollo/client";

const REVIEW_CONTENTS = gql`
  fragment ReviewContents on Review {
    id
    text
    rating
    createdAt
    user {
      id
      username
    }
    repository {
      id,
      name
    }
  }
`;

const REPOSITORY_CONTENTS = gql`
  ${REVIEW_CONTENTS}
  fragment RepositoryContents on Repository {
    id
    fullName
    description
    language
    stargazersCount
    forksCount
    reviewCount
    ratingAverage
    ownerAvatarUrl
    url
    reviews {
      edges {
        node {
          ...ReviewContents
        }
      }
    }
  }
`;

export const GET_REPOSITORIES = gql`
  ${REPOSITORY_CONTENTS}
  query (
    $orderDirection: OrderDirection
    $orderBy: AllRepositoriesOrderBy
    $searchKeyword: String
  ) {
    repositories(
      orderDirection: $orderDirection
      orderBy: $orderBy
      searchKeyword: $searchKeyword
    ) {
      edges {
        node {
          ...RepositoryContents
        }
      }
    }
  }
`;

export const GET_REPOSITORY = gql`
  ${REPOSITORY_CONTENTS}
  query Repository($id: ID!) {
    repository(id: $id) {
      ...RepositoryContents
    }
  }
`;

export const ME = gql`
  ${REVIEW_CONTENTS}
  query GetCurrentUser($first: Int, $after: String, $includeReviews: Boolean = false) {
    me {
      id
      username
      reviews(first: $first, after: $after) @include(if: $includeReviews) {
        edges {
          node {
            ...ReviewContents
          }
        }
      }
    }
  }
`;
