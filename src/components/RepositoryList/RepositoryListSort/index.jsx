import { StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import theme from "../../../theme";
import { SORTING_METHODS } from "../constants";

const styles = StyleSheet.create({
  picker: {
    backgroundColor: theme.colors.backgroundSecondary,
    borderWidth: 0,
    padding: theme.padding.main / 2,
  },
  pickerItem: {
    backgroundColor: theme.colors.backgroundSecondary,
    borderWidth: 0,
    padding: theme.padding.main / 2,
  },
});

export default function RepositoryListSort({
  sortingMethod,
  setSortingMethod,
}) {
  return (
    <Picker
      mode="dialog"
      prompt="Select an item..."
      style={styles.picker}
      itemStyle={styles.pickerItem}
      selectedValue={sortingMethod}
      onValueChange={(value) => setSortingMethod(value)}
    >
      {SORTING_METHODS.map((sortingMethod) => (
        <Picker.Item
          key={sortingMethod.value}
          label={sortingMethod.description}
          value={sortingMethod.value}
        />
      ))}
    </Picker>
  );
}
