import { StyleSheet, View } from 'react-native';
import { Link } from 'react-router-native';
import Text from '../Text';

const styles = StyleSheet.create({
  container: {
    marginRight: 16,
  },
});

const AppBarTab = ({ textContent, route, onPress }) => {
  return (
    <View style={styles.container}>
      <Link to={route ?? '/'} onPress={onPress}>
        <Text fontSize='large' fontWeight='bold' color='textLight'>
          {textContent}
        </Text>
      </Link>
    </View>
  );
};

export default AppBarTab;
