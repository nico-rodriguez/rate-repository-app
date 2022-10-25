import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-native';
import { GET_REPOSITORY } from '../../graphql/queries';
import RepositoryItem from '../RepositoryItem';
import Text from '../Text';

function SingleRepository() {
  const { repositoryId } = useParams();
  const { loading, error, data } = useQuery(GET_REPOSITORY, {
    variables: { id: repositoryId },
  });

  if (loading) return <Text>Loading...</Text>;

  if (error) return <Text>Error: {error}</Text>;

  const { repository } = data;

  return <RepositoryItem {...repository} showExternalLink />;
}

export default SingleRepository;
