import { View, StyleSheet, Pressable } from "react-native";
import theme from "../../../theme";
import FormikTextInput from "../../FormikTextInput";
import Text from "../../Text";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: theme.padding.main,
  },
  button: {
    marginTop: 5,
    borderRadius: theme.border.radius,
    backgroundColor: theme.colors.primary,
    padding: 15,
    width: "100%",
    alignItems: "center",
  },
});

const SignUpForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput name="password" placeholder="Password" secureTextEntry />
      <FormikTextInput
        name="passwordConfirmation"
        placeholder="Password confirmation"
        secureTextEntry
      />
      <Pressable onPress={onSubmit} style={styles.button}>
        <Text color="textLight" fontWeight="bold" fontSize="large">
          Sign up
        </Text>
      </Pressable>
    </View>
  );
};

export default SignUpForm;
