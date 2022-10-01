import { StyleSheet, View } from 'react-native';
import theme from '../../theme';
import BasicInfo from './BasicInfo';
import Stats from './Stats';

const styles = StyleSheet.create({
  container: {
    padding: theme.padding.main,
  },
});

const RepositoryItem = ({
  fullName,
  description,
  language,
  stargazersCount,
  forksCount,
  reviewCount,
  ratingAverage,
  ownerAvatarUrl,
}) => {
  return (
    <View style={styles.container}>
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
    </View>
  );
};

export default RepositoryItem;
