import { Navigate, Route, Routes } from "react-router-native";
import RepositoryList from "../components/RepositoryList";
import Review from "../components/Review";
import SignIn from "../components/SignIn";
import SignUp from "../components/Signup";
import SingleRepository from "../components/SingleRepository";
import ReviewsList from "../components/ReviewsList";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<RepositoryList />} />
      <Route
        path="/repositories/:repositoryId"
        element={<SingleRepository />}
      />
      <Route path="/my-reviews" element={<ReviewsList />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/review-form" element={<Review />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;
