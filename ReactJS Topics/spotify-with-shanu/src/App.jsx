import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/Home";
import Signup from "./components/AuthPages/Signup";
import Login from "./components/AuthPages/Login";
import UserContext from "./components/context/UserContext";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
      ],
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return (
    <UserContext>
      <RouterProvider router={router}></RouterProvider>
    </UserContext>
  );
};

export default App;
