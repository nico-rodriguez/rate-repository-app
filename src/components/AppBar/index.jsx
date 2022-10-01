import { Pressable, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import theme from '../../theme';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    padding: theme.padding.main,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.backgroundPrimary,
  },
});

const AppBar = () => {
  return (
    <Pressable style={styles.container}>
      <AppBarTab textContent='Repositories' />
    </Pressable>
  );
};

export default AppBar;
