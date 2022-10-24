import { StyleSheet, View } from 'react-native';
import SingleStat from './SingleStat';

const styles = StyleSheet.create({
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

const Stats = ({ stargazersCount, forksCount, reviewCount, ratingAverage }) => {
  return (
    <View style={[styles.row, styles.stats]}>
      <SingleStat name='Stars' value={stargazersCount} />
      <SingleStat name='Forks' value={forksCount} />
      <SingleStat name='Reviews' value={reviewCount} />
      <SingleStat name='Rating' value={ratingAverage} />
    </View>
  );
};

export default Stats;
