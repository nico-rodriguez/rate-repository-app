import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { Formik } from 'formik';
import SignInForm from '.';

describe('Sign in form', () => {
  it('Should call onSubmit function with correct arguments when a valid form is submitted', async () => {
    const onSubmit = jest.fn();
    const { getByPlaceholderText, getByText } = render(
      <Formik
        initialValues={{
          username: '',
          password: '',
        }}
        onSubmit={onSubmit}
      >
        {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
      </Formik>
    );

    const username = 'kalle';
    const password = 'password';
    fireEvent.changeText(getByPlaceholderText('Username'), username);
    fireEvent.changeText(getByPlaceholderText('Password'), password);
    fireEvent.press(getByText('Sign in'));

    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledTimes(1);
      // onSubmit.mock.calls[0][0] contains the first argument of the first call
      expect(onSubmit.mock.calls[0][0]).toEqual({
        username,
        password,
      });
    });
  });
});
