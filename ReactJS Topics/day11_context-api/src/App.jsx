import React from "react";
import GrandParent from "./components/GrandParent";
import Parent from "./components/Parent";
import Child from "./components/Child";

const App = () => {
  return (
    <div>
      <GrandParent>
        <Parent />
      </GrandParent>
      <Child />
    </div>
  );
};

export default App;
