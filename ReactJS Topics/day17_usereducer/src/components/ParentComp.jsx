// import { useState } from "react";

import { useReducer } from "react";

// const ParentComp = () => {
//   let [state, setState] = useState(0);
//   return (
//     <div>
//       <h1>{state}</h1>
//       <button onClick={() => setState(state + 1)}>Increment</button>
//     </div>
//   );
// };

// export default ParentComp;

import { reducer } from "./reducer";
const ParentComp = () => {
  // console.log(useReducer());
  const [initialVal, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      <h1>{initialVal}</h1>
      <button onClick={() => dispatch({ action: "increment" })}>
        Increment
      </button>
      <button onClick={() => dispatch({ action: "decrement" })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ action: "reset" })}>Reset</button>
    </div>
  );
};

export default ParentComp;
