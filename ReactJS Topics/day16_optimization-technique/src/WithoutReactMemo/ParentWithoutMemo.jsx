import React, { useState } from "react";
import ChildWithoutMemo from "./ChildWithoutMemo";

const ParentWithoutMemo = () => {
  let [state, setState] = useState(0);
  //   let [cars, setCars] = useState(["Porsche", "Bugatti", "Lambo"]);
  let handleHover = () => {
    setState(state + 1);
  };
  console.log("Hii I am Appa of my Child... 💕💕💕");
  return (
    <div>
      <h1 onMouseOver={handleHover}>{state}</h1>
      {/* <ChildWithoutMemo data="Shanu" state={state} /> */}
      <ChildWithoutMemo arroFruits={["Orange", "Pomegranate", "Grapes"]} />
      {/* <ChildWithoutMemo cars={cars} /> */}
    </div>
  );
};

export default ParentWithoutMemo;
