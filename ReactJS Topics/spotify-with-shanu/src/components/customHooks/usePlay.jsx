// import { useEffect, useState } from "react"

import { useState } from "react";


// export const usePlay = (url) => {
//     let [play] = useState(new Audio(url))
//     let [isPlaying, setIsPlaying] = useState(false)
//     const toggle = ()=>setIsPlaying(!isPlaying)

//     console.log(play)

//     useEffect(()=> {
//         isPlaying?play.play():play.pause()
//     })

//     return [isPlaying, toggle]
// }

let currentAudio = null;

export const usePlay = (url) => {
  const [isPlaying, setIsPlaying] = useState(false);


  const toggle = () => {
    if (currentAudio && currentAudio.src !== url) {
      currentAudio.pause();
    }

    if (!currentAudio || currentAudio.src !== url) {
      currentAudio = new Audio(url);
    }

    if (currentAudio.paused) {
      currentAudio.play();
      setIsPlaying(true);
    } else {
      currentAudio.pause();
      setIsPlaying(false);
    }
  };

  return [isPlaying, toggle];
};