import React from "react";
import { Navigate } from "react-router-dom";

const PublicRouting = ({ children }) => {
  const user = localStorage.getItem("user");
  if (user) {
    <Navigate to={"/"} />;
  } else {
    {
      return children;
    }
  }
};

export default PublicRouting;
