import { Formik } from 'formik';
import { object, string } from 'yup';
import useSignIn from '../../hooks/useSignIn';
import SignInForm from './SignInForm';

const initialValues = {
  username: '',
  password: '',
};

const validationSchema = object({
  username: string().required('Username is required'),
  password: string().required('Password is required'),
});

const SignIn = () => {
  const [signIn] = useSignIn();

  const handleSubmit = async (values) => {
    console.log(values);
    const { username, password } = values;

    try {
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
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;
