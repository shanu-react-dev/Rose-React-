import { useState } from "react";
import { useMemo } from "react";
import ChildWithUseMemo from "./ChildWithUseMemo";

const UseMemo = () => {
  let [count, setCount] = useState(0);
  let [name, setName] = useState("Shanu");
  //   let optimizedOne = useMemo(() => {
  //     let optimizedValue = null;
  //     for (let i = 0; i <= 100000; i++) {
  //       console.log(i);
  //       optimizedValue += i;
  //     }
  //     return optimizedValue;
  //   }, [name]);
  //   console.log(optimizedOne);

  let arrayData = useMemo(() => {
    let fruitData = ["Orange", "Pomegranate", "Pineapple", "Grapes"];
    return fruitData;
  }, [count]);
  console.log(arrayData);
  console.log("i am parent comonent");

  return (
    <div>
      <h1>{count}</h1>
      <h1>{name} is a worst person..</h1>
      <button onClick={() => setName("Sundari")}>Change Name</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <ChildWithUseMemo arrayData={arrayData} />
    </div>
  );
};

export default UseMemo;
