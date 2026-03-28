import ReactDOM from "react-dom/client";
import App from "./App";
import "./global.css"
import { PlayerContext } from "./components/context/PlayerContext";
ReactDOM.createRoot(document.getElementById("root")).render(
    <PlayerContext>
        <App />
    </PlayerContext>
);
