import React, { useState } from "react";
import { LoggedIn } from "../components/LoggedIn";
import { NotLoggedIn } from "../components/NotLoggedIn";

const Ternary = () => {
  let [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div>
      {isLoggedIn ? <LoggedIn data="Shanu" /> : <NotLoggedIn />}

      <button onClick={() => setIsLoggedIn(!LoggedIn)}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default Ternary;
