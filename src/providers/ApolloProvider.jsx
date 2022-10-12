import { ApolloProvider as AP } from '@apollo/client';
import createApolloClient from '../utils/apolloClient';
import AuthStorage from '../utils/authStorage';

const ApolloProvider = ({ children }) => {
  const authStorage = new AuthStorage();
  const apolloClient = createApolloClient(authStorage);

  return <AP client={apolloClient}>{children}</AP>;
};

export default ApolloProvider;
