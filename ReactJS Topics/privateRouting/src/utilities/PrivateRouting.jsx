import { Navigate } from "react-router-dom";

const PrivateRouting = ({ children }) => {
  const user = localStorage.getItem("user");
  if (!user) {
    return <Navigate to={"/login"} />;
  } else {
    {
      return children;
    }
  }
};

export default PrivateRouting;
