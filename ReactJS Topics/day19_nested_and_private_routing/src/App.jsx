import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Login from "./components/Login";
import PrivateRouting from "./PrivateRouting/PrivateRouting";
import HomePage from "./components/HomePage";
import About from "./components/About";

const App = () => {
  const routes = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Login />,
        },
        {
          path: "/home",
          element: (
            <PrivateRouting>
              <HomePage />
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
      ],
    },
  ]);

  return <RouterProvider router={routes}></RouterProvider>;
};

export default App;
