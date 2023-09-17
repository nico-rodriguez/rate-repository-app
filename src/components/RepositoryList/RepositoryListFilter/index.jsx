import { StyleSheet, TextInput, View } from "react-native";
import theme from "../../../theme";

const styles = StyleSheet.create({
  textInputWrapper: {
    backgroundColor: theme.colors.backgroundSecondary,
    padding: theme.padding.main / 2,
  },
  textInput: {
    backgroundColor: "#ffffff",
    borderRadius: theme.border.radius,
    padding: theme.padding.main / 2,
  },
});

export default function RepositoryListFilter({
  searchKeyword,
  setSearchKeyword,
}) {
  return (
    <View style={styles.textInputWrapper}>
      <TextInput
        inputMode="text"
        maxLength={30}
        placeholder="Filter by repository name..."
        placeholderTextColor={theme.colors.textSecondary}
        style={styles.textInput}
        value={searchKeyword}
        onChangeText={(text) => setSearchKeyword(text)}
      />
    </View>
  );
}
