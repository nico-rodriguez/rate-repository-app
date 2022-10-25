import * as Linking from 'expo-linking';
import { Pressable, StyleSheet, View } from 'react-native';
import theme from '../../theme';
import Text from '../Text';

const styles = StyleSheet.create({
  container: {
    marginTop: theme.padding.main,
    padding: theme.padding.main,
    backgroundColor: theme.colors.primary,
    borderRadius: theme.border.radius,
    textAlign: 'center',
  },
});

function Button({ text, externalURL }) {
  const openExternalURL = async (externalURL) => {
    await Linking.openURL(externalURL);
  };
  return (
    <View style={styles.container}>
      <Pressable onPress={() => openExternalURL(externalURL)}>
        <Text color='textLight'>{text}</Text>
      </Pressable>
    </View>
  );
}

export default Button;
