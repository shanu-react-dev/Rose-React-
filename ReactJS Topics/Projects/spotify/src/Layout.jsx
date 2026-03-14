import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

const Layout = () => {
  return (
    <div>
      {/* <h1>Layout</h1> */}
      <Navbar />
      <hr />
      <Outlet />
    </div>
  );
};

export default Layout;
