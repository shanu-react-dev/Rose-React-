import React, { useState } from "react";

const usePlay = (data) => {
  let [myData] = useState(data);
  let dataChange = () => {
    return (myData = !myData);
  };
  return [myData, dataChange];
};
const App = () => {
  let [data, setData] = usePlay(true);
  //   console.log(myVal);
  console.log(data);
  console.log(setData(!data));
  return <div>App</div>;
};

export default App;
