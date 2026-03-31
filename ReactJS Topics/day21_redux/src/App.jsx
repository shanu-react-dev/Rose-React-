import "./App.css";
import { increment, decrement } from "./features/counterSlice";
import {useDispatch, useSelector} from "react-redux"

function App() {
  const count = useSelector((state) => state.counter.count)
  console.log(count)
  const dispatch = useDispatch()
  return (
    <>
      <section id="center">
        <h1>Hii this is Redux and toolkit!!!</h1>
        <h1>{count}</h1>
        <button onClick={()=>dispatch(increment())}>increment</button>
        <button onClick={() => dispatch(decrement())}>decrement</button>
      </section>
    </>
  );
}

export default App;
