import { useState } from "react";
import { LoggedIn } from "./components/LoggedIn";
import { NotLoggedIn } from "./components/NotLoggedIn";
import Switch from "./conditionalStatement using switch and ternary Operator/Switch";
import Ternary from "./conditionalStatement using switch and ternary Operator/Ternary";
import ShortCircuiting from "./conditionalStatement using switch and ternary Operator/ShortCircuiting";

function App() {
  // let [loggedIn, setLoggedIn] = useState(false);
  // let handleAuth = () => {
  //   setLoggedIn(!loggedIn);
  // };
  // if (loggedIn) {
  //   return (
  //     <div>
  //       <button onClick={handleAuth}>Logout</button>
  //       <LoggedIn data={{ name: "Shanu" }} />
  //     </div>
  //   );
  // } else {
  //   return (
  //     <div>
  //       <button onClick={handleAuth}>Login</button>
  //       <NotLoggedIn />
  //     </div>
  //   );
  // }
  // return <Switch />;
  // return <Ternary />;
  return <ShortCircuiting />;
}

export default App;
