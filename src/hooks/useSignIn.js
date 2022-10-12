import { useApolloClient, useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-native';
import { SIGN_IN } from '../graphql/mutations';
import useAuthStorage from './useAuthStorage';

const useSignIn = () => {
  const { authStorage } = useAuthStorage();
  const apolloClient = useApolloClient();
  const [mutate, result] = useMutation(SIGN_IN);
  const navigate = useNavigate();

  const signIn = async ({ username, password }) => {
    const { data } = await mutate({ variables: { username, password } });
    const accessToken = data?.authenticate.accessToken;

    await authStorage.setAccessToken(accessToken);

    await apolloClient.resetStore();

    navigate('/repositories');
  };

  return [signIn, result];
};

export default useSignIn;
