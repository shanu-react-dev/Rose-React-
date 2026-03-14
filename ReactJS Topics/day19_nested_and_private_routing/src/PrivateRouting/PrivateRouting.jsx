import React from "react";
import Login from "../components/Login";
import { Navigate } from "react-router-dom";

const PrivateRouting = ({ children }) => {
  const isLoggedIn = localStorage.getItem("loginData");
  console.log(children);
  console.log(isLoggedIn);
  return isLoggedIn ? { children } : <Navigate to={"/login"} />;
};

export default PrivateRouting;
