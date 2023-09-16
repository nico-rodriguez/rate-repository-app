import { Formik } from "formik";
import SignUpForm from "./SignupForm";
import { object, ref, string } from "yup";
import useSignUp from "../../hooks/useSignUp";
import useSignIn from "../../hooks/useSignIn";

const initialValues = {
  username: "",
  password: "",
  passwordConfirmation: "",
};

const validationSchema = object({
  username: string()
    .min(5, "Username must have at least 5 characters")
    .max(30, "Username can't have more than 30 characters")
    .required("Username is required"),
  password: string()
    .min(5, "Username must have at least 5 characters")
    .max(30, "Username can't have more than 30 characters")
    .required("Password is required"),
  passwordConfirmation: string()
    .required("Password confirmation is required")
    .oneOf([ref("password"), ""], "Passwords do not match"),
});

const SignUp = () => {
  const [signUp] = useSignUp();
  const [signIn] = useSignIn();

  const handleSubmit = async (values) => {
    const { username, password } = values;

    try {
      await signUp({ username, password });

      await signIn({ username, password });
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
      {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignUp;
