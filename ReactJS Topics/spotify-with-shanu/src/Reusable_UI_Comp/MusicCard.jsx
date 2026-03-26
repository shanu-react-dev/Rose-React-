import { arrOfMusic } from "../components/utilities/MusicData";
import { Fragment } from "react";
import { FaPlay } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const MusicCard = ({data}) => {
  const navigate = useNavigate()

  let {user, setUser} = data
  let handlePlay = (e) => {
    if(!user){
      navigate("/login")
    }
  }
  
  return (
    <div className="card">
      {arrOfMusic.map((ele, index) => {
        return (
          <Fragment key={index}>
            <div className="thumbnail">
              <img src={ele.img_url} alt="" />
              <div className="playBtn" onClick={handlePlay}>
                <FaPlay/>
              </div>
            </div>

            <div className="details">
              <h3 className="songName">{ele.songName}</h3>
              <p className="singers">{ele.singerName}</p>
            </div>
          </Fragment>
        );
      })}
    </div>
  );
};

export default MusicCard;
