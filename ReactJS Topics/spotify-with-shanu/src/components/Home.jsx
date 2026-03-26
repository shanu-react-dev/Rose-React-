import { useContext } from "react";
import MusicCard from "../Reusable_UI_Comp/MusicCard";
import { userContext } from "./context/UserContext";

const Home = () => {
  let data = useContext(userContext);
  console.log(data);
  return (
    <div>
      <MusicCard data={data} />
    </div>
  );
};

export default Home;
