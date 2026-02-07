import { useState } from "react";
import { LoggedIn } from "./components/LoggedIn";
import { NotLoggedIn } from "./components/NotLoggedIn";

function App() {
  let [loggedIn, setLoggedIn] = useState(false);
  if (loggedIn) {
    return <LoggedIn />;
  } else {
    return <NotLoggedIn />;
  }
}

export default App;
