import React, { useRef } from "react";

const Input = () => {
  let inputRef = useRef(null);
  //   console.log(inputRef);
  let handleClick = () => {
    return inputRef.current.focus();
  };
  console.log(inputRef);
  console.log("I am Shanu");
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Make it focused</button>
    </div>
  );
};

export default Input;
