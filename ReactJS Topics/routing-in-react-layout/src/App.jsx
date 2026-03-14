import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Home from "./component/Home";
import About from "./component/About";
import Portfolio from "./component/Portfolio";
const App = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
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
      ],
    },
  ]);

  return <RouterProvider router={routes}></RouterProvider>;
};

export default App;
