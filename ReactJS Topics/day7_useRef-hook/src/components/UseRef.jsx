import React from "react";
import { useRef } from "react";

const UseRef = () => {
  // console.log(useRef)
  let data = useRef(0);
  console.log(data);

  let increment = () => {
    data.current = data.current + 1;
    console.log(data.current);
  };
  return (
    <div>
      <h1>{data.current}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default UseRef;
