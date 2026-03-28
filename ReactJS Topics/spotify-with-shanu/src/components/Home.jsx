import { Fragment, useContext } from "react";
import MusicCard from "../Reusable_UI_Comp/MusicCard";
import { userContext } from "./context/UserContext";
import { arrOfMusic } from "./utilities/MusicData";

const Home = () => {
  let data = useContext(userContext);
  let {user} = data
  return (
    <div>
      {
        arrOfMusic.map((ele, index)=>{
          return <Fragment key={index}>
            <MusicCard {...ele} data= {user}/>
          </Fragment>
        })
      }
    </div>
  );
};

export default Home;
