import { useState } from "react";
import HigherOrderComponent from "./HigherOrderComponent";

const ClickCounter = (props) => {
  console.log(props);
  let { count, setCount } = props;
  //   let [count, setCount] = useState(0);
  //   let handleIncre = () => {
  //     setCount(count + 1);
  //   };
  return (
    <div>
      {/* <h1>{count}</h1>
      <button onClick={handleIncre}>Increment</button> */}

      <h1>{count}</h1>
      <button onClick={setCount}>Increment</button>
    </div>
  );
};

export default HigherOrderComponent(ClickCounter);
