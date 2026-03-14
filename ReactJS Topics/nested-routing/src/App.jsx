import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import { Home } from "./components/Home";
import Portfolio from "./components/Portfolio";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  let routes = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "/portfolio",
          element: <Portfolio />,
          children: [
            {
              //   path: "",
              index: true,
              element: <Projects />,
            },
            {
              path: "/portfolio/contacts",
              element: <Contact />,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={routes}></RouterProvider>;
};

export default App;
