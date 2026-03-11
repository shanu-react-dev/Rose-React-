import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";

const App = () => {
  const routes = createBrowserRouter([
    {
      path: "/home",
      element: <Home />,
    },
  ]);
  return <RouterProvider router={routes}></RouterProvider>;
};

export default App;
