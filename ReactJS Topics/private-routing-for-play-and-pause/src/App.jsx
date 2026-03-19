import Home from "./components/Home";
import Login from "./components/Login";
import Layout from "./Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserContext from "./utilities/UserContext";

const App = () => {
  const routes = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: (
            <UserContext>
              <Home />
            </UserContext>
          ),
        },
        {
          path: "login",
          element: <Login />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes}></RouterProvider>;
};

export default App;
