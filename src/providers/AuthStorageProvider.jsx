import AuthStorageContext from '../context/AuthStorageContext';
import AuthStorage from '../utils/authStorage';

function AuthStorageProvider({ children }) {
  const authStorage = new AuthStorage();

  const value = {
    authStorage,
  };

  return (
    <AuthStorageContext.Provider value={value}>
      {children}
    </AuthStorageContext.Provider>
  );
}

export default AuthStorageProvider;
