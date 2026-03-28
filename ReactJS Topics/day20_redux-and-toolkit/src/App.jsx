import {useDispatch, useSelector} from "react-redux"
import { decrement, increment } from "./features/features"
const App = () => {
  const count = useSelector((state)=>state.counter.count)
  console.log(count)
  const dispatch = useDispatch()
  return (
    <div>
      <h1>Hi this is APp component</h1>
      <h1>{count}</h1>

      <button onClick={() => dispatch(increment()) }>Increment</button>
      <button onClick={() => dispatch(decrement()) }>decrement</button>
    </div>
  )
}
export default App