import { useState } from "react";

function App() {
  let [state, setState] = useState(0);
  // console.log(useState("Shanu"));
  let [name, setName] = useState("Sundari");

  function handleIncrement() {
    setState(state + 1);
  }
  function handleDecrement() {
    setState(state - 1);
  }

  function changeName() {
    setName((name = "Shanu"));
  }

  return (
    <div>
      <h1>App Component</h1>
      <h1>{state}</h1>
      {/* <button onClick={() => setState(state + 1)}>Increment</button>
      <button onClick={() => setState(state - 1)}>Decrement</button>
      <button onClick={() => setState((state = 0))}>Reset</button> */}

      <button onClick={handleIncrement}>Incremenet</button>
      <button onClick={handleDecrement}>Decrement</button>

      <h1>{name}</h1>
      <button onClick={changeName}>Change Name</button>
    </div>
  );
}

export default App;
