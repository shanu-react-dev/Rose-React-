import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/Pages/Home";
import Login from "./AuthFolder/Login";
import PrivateRouting from "./utilites/PrivateRouting";

const App = () => {
  const routes = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: (
            <PrivateRouting>
              <Home />
            </PrivateRouting>
          ),
        },
      ],
    },
    {
      path: "login",
      element: <Login />,
    },
  ]);

  return <RouterProvider router={routes}></RouterProvider>;
};

export default App;
