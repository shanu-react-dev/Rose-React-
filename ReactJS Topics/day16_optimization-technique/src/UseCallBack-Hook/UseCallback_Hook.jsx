import { useCallback, useMemo, useState } from "react";
import UseCallBackChild from "./UseCallBackChild";

// function PrintMyName() {
//   console.log("I am Shanu!!");
// }
const UseCallback_Hook = () => {
  let [state, setState] = useState(0);

  function handleIncre() {
    setState(state + 1);
  }

  //   let callBackFun = useMemo(() => {
  //     return function () {
  //       console.log("Hii I am a Fucntion inside useMemo");
  //     };
  //   });

  let callBackFun = useCallback(function () {
    // return function printMyName() {
    //   console.log("I am Shanu Singh");
    // };

    // return ["SHanu", "Hii"];

    // return { username: "Shanu", age: 23 };

    return true;
  }, []);

  console.log(callBackFun);
  console.log("Hii I am A callBack Parent Component");

  return (
    <div>
      <h1>This is UseCallback Parent Component</h1>
      <h1>{state}</h1>
      <button onClick={handleIncre}>Increment</button>
      <UseCallBackChild data="Shanu" functions={callBackFun} />
    </div>
  );
};

export default UseCallback_Hook;
