import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/Pages/Home";
import Login from "./AuthFolder/Login";
// import PrivateRouting from "./utilites/PrivateRouting";
import Signup from "./AuthFolder/Signup";
import UserContext from "./utilites/UserContext";

const App = () => {
  const routes = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "register",
      element: <Signup />,
    },
  ]);

  return (
    <UserContext>
      <RouterProvider router={routes} />
    </UserContext>
  );
};

export default App;
