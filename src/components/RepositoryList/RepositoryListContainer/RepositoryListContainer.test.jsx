import { render } from '@testing-library/react-native';
import RepositoryListContainer from '.';

const roundToThousands = (num) => {
  if (num < 1000) return String(num);

  return `${(num / 1000).toFixed(1)}k`;
};

describe('Rendering', () => {
  it('Should render name, description, language, forks count, stargazers count, rating average and review count', () => {
    const repositories = {
      totalCount: 8,
      pageInfo: {
        hasNextPage: true,
        endCursor:
          'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
        startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
      },
      edges: [
        {
          node: {
            id: 'jaredpalmer.formik',
            fullName: 'jaredpalmer/formik',
            description: 'Build forms in React, without the tears',
            language: 'TypeScript',
            forksCount: 1619,
            stargazersCount: 21856,
            ratingAverage: 88,
            reviewCount: 3,
            ownerAvatarUrl:
              'https://avatars2.githubusercontent.com/u/4060187?v=4',
          },
          cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
        },
        {
          node: {
            id: 'async-library.react-async',
            fullName: 'async-library/react-async',
            description: 'Flexible promise-based React data loader',
            language: 'JavaScript',
            forksCount: 69,
            stargazersCount: 1760,
            ratingAverage: 72,
            reviewCount: 3,
            ownerAvatarUrl:
              'https://avatars1.githubusercontent.com/u/54310907?v=4',
          },
          cursor:
            'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
        },
      ],
    };
    const repositoryNodes = repositories.edges.map(({ node }) => node);

    const { getAllByTestId } = render(
      <RepositoryListContainer repositories={repositories} />
    );

    const [firstRepositoryItem, secondRepositoryItem] =
      getAllByTestId('repositoryItem');

    expect(firstRepositoryItem).toHaveTextContent(repositoryNodes[0].fullName);
    expect(firstRepositoryItem).toHaveTextContent(
      repositoryNodes[0].description
    );
    expect(firstRepositoryItem).toHaveTextContent(repositoryNodes[0].language);
    expect(firstRepositoryItem).toHaveTextContent(
      roundToThousands(repositoryNodes[0].forksCount)
    );
    expect(firstRepositoryItem).toHaveTextContent(
      roundToThousands(repositoryNodes[0].stargazersCount)
    );
    expect(firstRepositoryItem).toHaveTextContent(
      repositoryNodes[0].ratingAverage
    );
    expect(firstRepositoryItem).toHaveTextContent(
      repositoryNodes[0].reviewCount
    );

    expect(secondRepositoryItem).toHaveTextContent(repositoryNodes[1].fullName);
    expect(secondRepositoryItem).toHaveTextContent(
      repositoryNodes[1].description
    );
    expect(secondRepositoryItem).toHaveTextContent(repositoryNodes[1].language);
    expect(secondRepositoryItem).toHaveTextContent(
      roundToThousands(repositoryNodes[1].forksCount)
    );
    expect(secondRepositoryItem).toHaveTextContent(
      roundToThousands(repositoryNodes[1].stargazersCount)
    );
    expect(secondRepositoryItem).toHaveTextContent(
      repositoryNodes[1].ratingAverage
    );
    expect(secondRepositoryItem).toHaveTextContent(
      repositoryNodes[1].reviewCount
    );
  });
});
