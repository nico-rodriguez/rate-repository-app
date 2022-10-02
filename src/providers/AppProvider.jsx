import { NativeRouter } from 'react-router-native';

const AppProvider = ({ children }) => {
  return <NativeRouter>{children}</NativeRouter>;
};

export default AppProvider;
