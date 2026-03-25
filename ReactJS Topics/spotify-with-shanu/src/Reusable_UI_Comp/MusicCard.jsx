import { CgPlayButtonO } from "react-icons/cg";

const MusicCard = () => {
    return <div className="card">
        <div className="thumbnail">
            <img src="" alt="" />
            <CgPlayButtonO />
        </div>

        <div className="details">
            <h3 className="songName"></h3>
            <p className="singers"></p>
        </div>
    </div>
}

export default MusicCard