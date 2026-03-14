import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./component/Home";
import Layout from "./Layout";
import Login from "./component/Login";
import PrivateRouting from "./utilities/PrivateRouting";
import About from "./component/About";
import Portfolio from "./component/Portfolio";
import Help from "./component/Help";
import PublicRouting from "./utilities/PublicRouting";

const App = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
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
        {
          path: "/about",
          element: (
            <PrivateRouting>
              <About />
            </PrivateRouting>
          ),
        },
        {
          path: "/portfolio",
          element: <Portfolio />,
        },
        {
          path: "/help",
          element: <Help />,
        },
        {
          path: "/login",
          element: (
            <PublicRouting>
              <Login />
            </PublicRouting>
          ),
        },
      ],
    },
  ]);
  return <RouterProvider router={routes}></RouterProvider>;
};

export default App;
