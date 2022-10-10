import { ApolloProvider as AP } from '@apollo/client';
import createApolloClient from '../utils/apolloClient';

const ApolloProvider = ({ children }) => {
  const apolloClient = createApolloClient();

  return <AP client={apolloClient}>{children}</AP>;
};

export default ApolloProvider;
