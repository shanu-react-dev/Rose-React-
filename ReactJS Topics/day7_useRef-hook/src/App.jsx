import React, { useState } from "react";
import UseRef from "./components/UseRef";
import Input from "./components/Input";

const App = () => {
  //   let [state, setState] = useState(0);
  //   console.log(state, `this is ${state} time rendering`);
  //   let increment = () => {
  //     setState((prev) => prev + 1);
  //     setState((prev) => prev + 1);
  //   };
  return (
    <div>
      {/* <h1>{state}</h1>
      <button onClick={increment}>Increment</button> */}
      {/* <UseRef /> */}
      <Input />
    </div>
  );
};

export default App;
