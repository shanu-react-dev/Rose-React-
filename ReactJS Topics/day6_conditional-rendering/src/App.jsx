import { useState } from "react";
import { LoggedIn } from "./components/LoggedIn";
import { NotLoggedIn } from "./components/NotLoggedIn";

function App() {
  let [loggedIn, setLoggedIn] = useState(false);
  let handleAuth = () => {
    setLoggedIn(!loggedIn);
  };
  if (loggedIn) {
    return (
      <div>
        <button onClick={handleAuth}>Logout</button>
        <LoggedIn data={{ name: "Shanu" }} />
      </div>
    );
  } else {
    return (
      <div>
        <button onClick={handleAuth}>Login</button>
        <NotLoggedIn />
      </div>
    );
  }
}

export default App;
