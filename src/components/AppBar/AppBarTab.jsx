import Text from '../Text';

const AppBarTab = ({ textContent }) => {
  return (
    <Text fontSize='large' fontWeight='bold' color='textLight'>
      {textContent}
    </Text>
  );
};

export default AppBarTab;
