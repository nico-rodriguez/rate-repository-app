import { Formik } from "formik";
import { number, object, string } from "yup";
import ReviewForm from "./ReviewForm";
import useCreateReview from "../../hooks/useCreateReview";
import { useNavigate } from "react-router-native";

const initialValues = {
  repositoryOwnerName: "",
  repositoryName: "",
  repositoryRating: undefined,
  review: "",
};

const validationSchema = object({
  repositoryOwnerName: string().required("Repository owner name is required"),
  repositoryName: string().required("Repository name is required"),
  repositoryRating: number()
    .required("Rating is required")
    .moreThan(-1, "Rating should be between 0 and 100")
    .lessThan(101, "Rating should be between 0 and 100")
    .integer("Rating should be a whole number between 0 and 100"),
  review: string().optional(),
});

const Review = () => {
  const [createReview] = useCreateReview();

  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    const { repositoryOwnerName, repositoryName, repositoryRating, review } =
      values;

    try {
      const repositoryId = await createReview({
        repositoryOwnerName,
        repositoryName,
        repositoryRating: parseInt(repositoryRating),
        review,
      });

      navigate({ pathname: `/repositories/${repositoryId}` });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <ReviewForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default Review;
