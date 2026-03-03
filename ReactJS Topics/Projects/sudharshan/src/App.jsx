import React, { useEffect, useState } from "react";

const App = () => {
  let [count, setCount] = useState(0);
  let effect = useEffect(() => {
    fetch("https://api.github.com/users")
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        console.log(data);
        return data;
      });
    return () => {
      console.log("THis is a cleanup function");
    };
  }, [count]);

  //   console.log(typeof effect);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default App;
