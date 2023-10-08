import { format } from "date-fns";
import { Alert, Pressable, StyleSheet, View } from "react-native";
import theme from "../../../../theme";
import Text from "../../../Text";
import { useNavigate } from "react-router-native";
import { useMutation } from "@apollo/client";
import { DELETE_REPOSITRY } from "../../../../graphql/mutations";

const styles = StyleSheet.create({
  container: {
    padding: theme.padding.main,
    backgroundColor: "#ffffff",
    flexDirection: "row",
  },
  ratingContainer: {
    marginRight: 10,
  },
  rating: {
    color: theme.colors.primary,
    borderWidth: theme.border.width,
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderColor: theme.colors.primary,
    padding: 10,
  },
  textInfo: {
    flexShrink: 1,
    gap: 5,
  },
  createdAt: {
    marginBottom: 3,
  },
  buttonsContainer: {
    flexDirection: "row",
    gap: theme.padding.main,
    padding: theme.padding.main,
  },
  button: {
    marginTop: 5,
    borderRadius: theme.border.radius,
    backgroundColor: theme.colors.primary,
    padding: 15,
    flex: 1,
    alignItems: "center",
  },
});

const UserReview = ({ createdAt, rating, text, repository }) => {
  const navigate = useNavigate();

  const [deleteReview] = useMutation(DELETE_REPOSITRY);

  const handleViewRepository = (repositoryId) => {
    navigate(`/repositories/${repositoryId}`);
  };

  const handleDeleteReview = () => {
    Alert.alert(
      "Delete review",
      "Are you sure you want to delete this review?",
      [
        {
          text: "Cancel",
          onPress: () => navigate("/my-reviews"),
          style: "cancel",
        },
        {
          text: "Delete",
          onPress: () =>
            deleteReview({ variables: { deleteReviewId: repository.id } }),
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <View>
      <View style={styles.container} testID="repositoryItem">
        <View style={styles.ratingContainer}>
          <Text style={styles.rating}>{rating}</Text>
        </View>
        <View style={styles.textInfo}>
          <Text fontWeight="bold" style={styles.textRow}>
            {repository.name}
          </Text>
          <Text
            color="textSecondary"
            style={[styles.textRow, styles.createdAt]}
          >
            {format(new Date(createdAt), "MM.dd.yyyy")}
          </Text>
          <Text>{text}</Text>
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <Pressable
          onPress={() => handleViewRepository(repository.id)}
          style={styles.button}
        >
          <Text color="textLight" fontWeight="bold" fontSize="large">
            View repository
          </Text>
        </Pressable>
        <Pressable
          onPress={handleDeleteReview}
          style={[styles.button, { backgroundColor: theme.colors.error }]}
        >
          <Text color="textLight" fontWeight="bold" fontSize="large">
            Delete review
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default UserReview;
