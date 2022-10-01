import { StyleSheet, View } from 'react-native';
import Text from '../Text';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});

const roundToThousands = (num) => {
  if (num < 1000) return String(num);

  return `${(num / 1000).toFixed(1)}k`;
};

const SingleStat = ({ name, value }) => {
  return (
    <View style={styles.container}>
      <Text fontWeight='bold'>{roundToThousands(value)}</Text>
      <Text color='textSecondary'>{name}</Text>
    </View>
  );
};

export default SingleStat;
