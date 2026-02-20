import React from "react";
import { createContext } from "react";

export let createdContext = createContext();
console.log(createdContext);
let { Provider } = createdContext;

const GrandParent = ({ children }) => {
  console.log(children);
  return (
    <Provider value={{ username: "Shanu", age: 23, gender: "male" }}>
      {children}
    </Provider>
  );
};

export default GrandParent;
