import { useState } from "react";

const HigherOrderComponent = (PassedComponent) => {
  let NewComponent = () => {
    let [count, setCount] = useState(0);
    let handleCount = () => {
      setCount(count + 1);
    };
    return (
      <PassedComponent
        count={count}
        setCount={handleCount}
        userObject={{ username: "Shanu", age: 23, gender: "male" }}
      ></PassedComponent>
    );
  };
  return NewComponent;
};

export default HigherOrderComponent;
