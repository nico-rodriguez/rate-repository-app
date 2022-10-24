import { FlatList, StyleSheet, View } from 'react-native';
import theme from '../../../theme';
import RepositoryItem from './RepositoryItem';

const styles = StyleSheet.create({
  wrapper: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.backgroundSecondary,
  },
  container: {
    backgroundColor: '#ffffff',
  },
  separator: {
    height: 10,
    backgroundColor: theme.colors.backgroundSecondary,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryListContainer = ({ repositories }) => {
  // Get the nodes from the edges array
  const repositoriesNodes = repositories
    ? repositories.edges.map(({ node }) => node)
    : [];

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <FlatList
          data={repositoriesNodes}
          ItemSeparatorComponent={ItemSeparator}
          renderItem={({ item }) => <RepositoryItem {...item} />}
        />
      </View>
    </View>
  );
};

export default RepositoryListContainer;
