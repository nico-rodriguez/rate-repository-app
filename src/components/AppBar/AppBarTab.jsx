import { StyleSheet, View } from 'react-native';
import { Link } from 'react-router-native';
import Text from '../Text';

const styles = StyleSheet.create({
  container: {
    marginRight: 16,
  },
});

const AppBarTab = ({ textContent, route }) => {
  return (
    <View style={styles.container}>
      <Link to={route ?? '/'}>
        <Text fontSize='large' fontWeight='bold' color='textLight'>
          {textContent}
        </Text>
      </Link>
    </View>
  );
};

export default AppBarTab;
