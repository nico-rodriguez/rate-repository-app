import { Pressable, ScrollView, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import theme from '../../theme';
import AppBarTab from './AppBarTab';
import { useQuery } from '@apollo/client';
import { ME } from '../../graphql/queries';
import useSignOut from '../../hooks/useSignOut';

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
  const { data, loading, error } = useQuery(ME);
  const { handleSignOut } = useSignOut();

  return (
    <Pressable style={styles.container}>
      <ScrollView horizontal contentContainerStyle={styles.tabsContainer}>
        <AppBarTab textContent='Repositories' />
        {!loading && !error && data.me ? (
          <AppBarTab textContent='Sign out' onPress={handleSignOut} />
        ) : (
          <AppBarTab textContent='Sign in' route='/signin' />
        )}
      </ScrollView>
    </Pressable>
  );
};

export default AppBar;
