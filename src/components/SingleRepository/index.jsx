import { useQuery } from '@apollo/client';
import { FlatList, View, StyleSheet } from 'react-native';
import { useParams } from 'react-router-native';
import { GET_REPOSITORY } from '../../graphql/queries';
import theme from '../../theme';
import RepositoryItem from '../RepositoryItem';
import Text from '../Text';
import ReviewItem from './ReviewItem';

const styles = StyleSheet.create({
  listWrapper: {
    backgroundColor: theme.colors.backgroundSecondary,
  },
  listHeader: {
    marginBottom: 10,
    backgroundColor: '#ffffff',
  },
  separator: {
    height: 10,
    backgroundColor: theme.colors.backgroundSecondary,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

function SingleRepository() {
  const { repositoryId } = useParams();
  const { loading, error, data } = useQuery(GET_REPOSITORY, {
    variables: { id: repositoryId },
  });

  if (loading) return <Text>Loading...</Text>;

  if (error) return <Text>Error: {error}</Text>;

  const { repository } = data;
  const reviews = repository.reviews?.edges.map(({ node }) => node);

  return (
    <View style={styles.listWrapper}>
      <FlatList
        data={reviews}
        renderItem={({ item }) => <ReviewItem {...item} />}
        ItemSeparatorComponent={ItemSeparator}
        keyExtractor={({ id }) => id}
        ListHeaderComponent={() => (
          <RepositoryItem {...repository} showExternalLink />
        )}
        ListHeaderComponentStyle={styles.listHeader}
      />
    </View>
  );
}

export default SingleRepository;
