import { useField } from "formik";
import { StyleSheet } from "react-native";
import theme from "../theme";
import Text from "./Text";
import { TextInput } from "./TextInput";

const styles = StyleSheet.create({
  textInput: {
    margin: 5,
    width: "100%",
  },
  errorText: {
    marginBottom: 5,
    color: theme.colors.error,
    alignSelf: "flex-start",
  },
});

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  return (
    <>
      <TextInput
        onChangeText={(value) => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        style={styles.textInput}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );
};

export default FormikTextInput;
