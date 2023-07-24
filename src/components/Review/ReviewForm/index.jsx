import { Pressable, View, StyleSheet } from "react-native";
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

const ReviewForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput
        name="repositoryOwnerName"
        placeholder="Repository owner name"
      />
      <FormikTextInput name="repositoryName" placeholder="Repository name" />
      <FormikTextInput
        name="repositoryRating"
        placeholder="Rating between 0 and 100"
        inputMode="numeric"
        keyboardType="numeric"
      />
      <FormikTextInput name="review" placeholder="Review" multiline />
      <Pressable onPress={onSubmit} style={styles.button}>
        <Text color="textLight" fontWeight="bold" fontSize="large">
          Create a review
        </Text>
      </Pressable>
    </View>
  );
};

export default ReviewForm;
