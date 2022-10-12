import { useContext } from 'react';
import AuthStorageContext from '../context/AuthStorageContext';

const useAuthStorage = () => {
  const context = useContext(AuthStorageContext);

  if (context === undefined) {
    throw new Error('useAuthStorage must be used within a AuthStorageProvider');
  }

  return context;
};

export default useAuthStorage;
