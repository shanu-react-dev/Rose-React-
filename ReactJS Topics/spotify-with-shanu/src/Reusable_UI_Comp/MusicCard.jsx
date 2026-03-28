import { FaPlay } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FaPause } from "react-icons/fa";
import { usePlayer } from "../components/context/PlayerContext";

const MusicCard = ({audio_url,img_url,songName,singerName, data}) => {
  const navigate = useNavigate()
  const { currentSong, playSong, pauseSong } = usePlayer()
  const isPlaying = currentSong === audio_url;

  console.log(audio_url)
  // let handlePlay = (e) => {
  //   if(!data){
  //     navigate("/login")
  //   }else{
  //     toggle()
  //   }
    
  // }

  let handlePlay = () => {
  if (!data) {
    navigate("/login");
  } else {
    if (isPlaying) {
      pauseSong();
    } else {
      playSong(audio_url);
    }
  }
};
  
  return (
    <div className="card">
            <div className="thumbnail">
              <img src={img_url} alt="" />
              <div className="playBtn" onClick={handlePlay}>
                {
                  isPlaying? <FaPause />: <FaPlay/>
                }
              </div>
            </div>

            <div className="details">
              <h3 className="songName">{songName}</h3>
              <p className="singers">{singerName}</p>
            </div>
    </div>
  );
};

export default MusicCard;
