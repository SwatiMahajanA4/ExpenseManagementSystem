// import { Navigate } from "react-router-dom";
import MainPage from "./MainPage";

const ProtectedPage = function ({ isLoggedIn, children }) {
  if (isLoggedIn) {
    return <MainPage />;
  } else {
    return children;
  }
};

export default ProtectedPage;
