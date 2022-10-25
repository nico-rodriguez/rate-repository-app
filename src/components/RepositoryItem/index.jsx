import { Pressable, StyleSheet, View } from 'react-native';
import { useNavigate } from 'react-router-native';
import theme from '../../theme';
import Button from '../Button';
import BasicInfo from './BasicInfo';
import Stats from './Stats';

const styles = StyleSheet.create({
  container: {
    padding: theme.padding.main,
  },
});

const RepositoryItem = ({
  id,
  fullName,
  description,
  language,
  stargazersCount,
  forksCount,
  reviewCount,
  ratingAverage,
  ownerAvatarUrl,
  showExternalLink,
  url,
}) => {
  const navigate = useNavigate();

  return (
    <Pressable onPress={() => navigate(`/repositories/${id}`)}>
      <View style={styles.container} testID='repositoryItem'>
        <BasicInfo
          ownerAvatarUrl={ownerAvatarUrl}
          fullName={fullName}
          description={description}
          language={language}
        />
        <Stats
          stargazersCount={stargazersCount}
          forksCount={forksCount}
          reviewCount={reviewCount}
          ratingAverage={ratingAverage}
        />
        {showExternalLink && <Button text='Open in GitHub' externalURL={url} />}
      </View>
    </Pressable>
  );
};

export default RepositoryItem;
