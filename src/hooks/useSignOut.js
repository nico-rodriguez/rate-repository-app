import { useApolloClient } from '@apollo/client';
import useAuthStorage from './useAuthStorage';

const useSignOut = () => {
  const { authStorage } = useAuthStorage();
  const apolloClient = useApolloClient();

  const handleSignOut = () => {
    authStorage.removeAccessToken();
    apolloClient.resetStore();
  };

  return { handleSignOut };
};

export default useSignOut;
