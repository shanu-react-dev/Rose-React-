import React, { useContext } from "react";
import SideBar from "../sideBar/SideBar";
import Content from "../Content/Content";
import { userContext } from "../../utilites/UserContext";

const Home = () => {
  let { user, setUser } = useContext(userContext);
  console.log(user);
  return (
    <div className="homepage">
      <SideBar />
      <Content data={{ user, setUser }} />
    </div>
  );
};

export default Home;
