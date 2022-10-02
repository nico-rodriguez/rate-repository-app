import { Pressable, ScrollView, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import theme from '../../theme';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    padding: theme.padding.main,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.backgroundPrimary,
  },
  tabsContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
});

const AppBar = () => {
  return (
    <Pressable style={styles.container}>
      <ScrollView horizontal contentContainerStyle={styles.tabsContainer}>
        <AppBarTab textContent='Repositories' />
        <AppBarTab textContent='Sign in' route='/signin' />
      </ScrollView>
    </Pressable>
  );
};

export default AppBar;
