import { createContext, useContext, useState } from "react"

let playerContext = createContext()
let {Provider} = playerContext

let audio = new Audio()

export const PlayerContext = ({children}) => {
    const [currentSong, setCurrentSong] = useState(null)

    const playSong = (url) => {
        if(audio.src!==url){
            audio.pause()
            audio = new Audio(url)
        }

        audio.play()
        setCurrentSong(url)
    }

    const pauseSong = (url) => {
        audio.pause()
        setCurrentSong(url)
    }

    return <Provider value={{currentSong, playSong, pauseSong}}>{children}</Provider>
}

export const usePlayer = () => useContext(playerContext)