import React, { useState } from "react";
import { LoggedIn } from "../components/LoggedIn";
import { NotLoggedIn } from "../components/NotLoggedIn";

const ShortCircuiting = () => {
  let [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <div>
      {isLoggedIn && <LoggedIn />}
      {!isLoggedIn && <NotLoggedIn />}
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default ShortCircuiting;
