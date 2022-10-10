import { NativeRouter } from 'react-router-native';
import ApolloProvider from './ApolloProvider';

const AppProvider = ({ children }) => {
  return (
    <NativeRouter>
      <ApolloProvider>{children}</ApolloProvider>
    </NativeRouter>
  );
};

export default AppProvider;
