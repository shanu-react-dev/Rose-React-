import React, { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";
import onthefloor from "./Assets/on_the_floor.mp3";
import { FaRegPauseCircle } from "react-icons/fa";

const usePlay = (path) => {
  const [media] = useState(new Audio(path));
  console.log(media);
  const [isPlaying, setIsPlaying] = useState(false);
  const toggle = (e) => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    isPlaying ? media.play() : media.pause();
  }, [isPlaying, toggle]);

  return [isPlaying, toggle];
};

const App = () => {
  //   let [isPlaying, setIsPlaying] = useState(false);

  //   let audio = new Audio(onthefloor);
  //   console.log(audio);

  //   let handleClick = (e) => {
  //     setIsPlaying((prev) => !prev);
  //   };

  let [isplaying, toggle] = usePlay(onthefloor);

  return (
    <div>
      <h1>Hii This is the file where we will have music</h1>
      <div className="musicCard">
        <div className="musicImg"></div>
        <div className="details"></div>
        {/* <div className="btn" onClick={handleClick}>
          {isPlaying === false ? (
            <FaPlay onClick={() => audio.play()} />
          ) : (
            <FaRegPauseCircle onClick={() => audio.pause()} />
          )}
        </div> */}

        <div>
          {isplaying ? (
            <FaRegPauseCircle onClick={toggle} />
          ) : (
            <FaPlay onClick={toggle} />
          )}
        </div>
      </div>
      {/* <Player /> */}
    </div>
  );
};

export default App;
