import { format } from 'date-fns';
import { StyleSheet, View } from 'react-native';
import theme from '../../../theme';
import Text from '../../Text';

const styles = StyleSheet.create({
  container: {
    padding: theme.padding.main,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
  },
  ratingContainer: {
    marginRight: 10,
  },
  rating: {
    color: theme.colors.primary,
    borderWidth: theme.border.width,
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: theme.colors.primary,
    padding: 10,
  },
  textInfo: {
    flexShrink: 1,
    gap: 5,
  },
  createdAt: {
    marginBottom: 3,
  },
});

const ReviewItem = ({ createdAt, rating, text, user }) => {
  return (
    <View style={styles.container} testID='repositoryItem'>
      <View style={styles.ratingContainer}>
        <Text style={styles.rating}>{rating}</Text>
      </View>
      <View style={styles.textInfo}>
        <Text fontWeight='bold' style={styles.textRow}>
          {user.username}
        </Text>
        <Text color='textSecondary' style={[styles.textRow, styles.createdAt]}>
          {format(new Date(createdAt), 'MM.dd.yyyy')}
        </Text>
        <Text>{text}</Text>
      </View>
    </View>
  );
};

export default ReviewItem;
