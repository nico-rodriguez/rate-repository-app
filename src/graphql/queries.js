import { gql } from "@apollo/client";

const REPOSITORY_CONTENTS = gql`
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
          id
          text
          rating
          createdAt
          user {
            id
            username
          }
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
  query {
    me {
      id
      username
    }
  }
`;
