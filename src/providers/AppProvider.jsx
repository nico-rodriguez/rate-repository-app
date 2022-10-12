import { NativeRouter } from 'react-router-native';
import ApolloProvider from './ApolloProvider';
import AuthStorageProvider from './AuthStorageProvider';

const AppProvider = ({ children }) => {
  return (
    <NativeRouter>
      <ApolloProvider>
        <AuthStorageProvider>{children}</AuthStorageProvider>
      </ApolloProvider>
    </NativeRouter>
  );
};

export default AppProvider;
