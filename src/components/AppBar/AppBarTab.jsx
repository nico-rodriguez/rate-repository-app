import { Link } from 'react-router-native';
import Text from '../Text';

const AppBarTab = ({ textContent, route }) => {
  return (
    <Link to={route ?? '/'}>
      <Text fontSize='large' fontWeight='bold' color='textLight'>
        {textContent}
      </Text>
    </Link>
  );
};

export default AppBarTab;
