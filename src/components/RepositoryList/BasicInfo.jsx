import { Image, StyleSheet, View } from 'react-native';
import theme from '../../theme';
import Text from '../Text';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  avatar: {
    width: 72,
    height: 72,
    borderRadius: 5,
    marginRight: 30,
  },
  textInfo: {
    alignItems: 'flex-start',
    flexShrink: 1,
  },
  textRow: {
    marginBottom: 10,
  },
  language: {
    backgroundColor: theme.colors.primary,
    padding: 5,
    borderRadius: 5,
  },
});

const BasicInfo = ({ ownerAvatarUrl, fullName, description, language }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: ownerAvatarUrl }} style={styles.avatar} />
      <View style={styles.textInfo}>
        <Text fontWeight='bold' style={styles.textRow}>
          {fullName}
        </Text>
        <Text color='textSecondary' style={styles.textRow}>
          {description}
        </Text>
        <Text color='textLight' style={[styles.textRow, styles.language]}>
          {language}
        </Text>
      </View>
    </View>
  );
};

export default BasicInfo;
