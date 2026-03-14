import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Portfolio from "./Portfolio";
import Navbar from "./components/Navbar";

const App = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/portfolio",
      element: <Portfolio />,
    },
  ]);
  return <RouterProvider router={routes}></RouterProvider>;
};

export default App;
