import { FlatList, StyleSheet, View } from 'react-native';
import theme from '../../../theme';
import UserReview from './UserReview';

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

const ReviewsListContainer = ({ reviews }) => {
  // Get the nodes from the edges array
  const reviewsNodes = reviews
    ? reviews.edges.map(({ node }) => node)
    : [];

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <FlatList
          data={reviewsNodes}
          ItemSeparatorComponent={ItemSeparator}
          renderItem={({ item }) => <UserReview {...item} />}
        />
      </View>
    </View>
  );
};

export default ReviewsListContainer;
