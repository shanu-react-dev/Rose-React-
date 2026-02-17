import React, { useState } from "react";
import { LoggedIn } from "../components/LoggedIn";
import { NotLoggedIn } from "../components/NotLoggedIn";

const Switch = () => {
  let [isLoggedIn, setIsLoggedIn] = useState(true);
  console.log(isLoggedIn);

  switch (isLoggedIn) {
    case true:
      return (
        <div>
          <button onClick={() => setIsLoggedIn(!isLoggedIn)}>Logout</button>
          <LoggedIn data="Tyrion" />
        </div>
      );
    case false:
      return (
        <div>
          <button onClick={() => setIsLoggedIn(!isLoggedIn)}>Log in</button>
          <NotLoggedIn />
        </div>
      );
    default:
      return "No data found";
  }
};

export default Switch;
