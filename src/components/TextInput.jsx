import { TextInput as NativeTextInput, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  textInput: {
    borderWidth: theme.border.width,
    borderColor: theme.border.color,
    borderRadius: theme.border.radius,
    padding: 10,
    paddingHorizontal: 20,
  },
});

export const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [styles.textInput, style];

  return (
    <NativeTextInput
      style={textInputStyle}
      placeholderTextColor={theme.colors.placeholderText}
      {...props}
    />
  );
};
