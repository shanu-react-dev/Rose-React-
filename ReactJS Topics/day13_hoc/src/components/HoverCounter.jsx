import React, { useState } from "react";
import HigherOrderComponent from "./HigherOrderComponent";

const HoverCounter = (props) => {
  console.log(props);
  //   let [count, setCount] = useState(0);
  //   let handleHover = () => {
  //     setCount(count + 1);
  //   };
  return (
    <div>
      {/* <h1 onMouseOver={handleHover} style={{ backgroundColor: "yellowgreen" }}>
        {count} from Hover Component
      </h1> */}
      {/* <button>Increme</button> */}
      <h1 onMouseOver={props.setCount}>{props.count} from Hover Component</h1>
    </div>
  );
};

export default HigherOrderComponent(HoverCounter);
