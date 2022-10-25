import { Navigate, Route, Routes } from 'react-router-native';
import RepositoryList from '../components/RepositoryList';
import SignIn from '../components/SignIn';
import SingleRepository from '../components/SingleRepository';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<RepositoryList />} />
      <Route
        path='/repositories/:repositoryId'
        element={<SingleRepository />}
      />
      <Route path='/signin' element={<SignIn />} />
      <Route path='*' element={<Navigate to='/' replace />} />
    </Routes>
  );
};

export default AppRoutes;
