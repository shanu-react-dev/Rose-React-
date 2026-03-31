import {useDispatch, useSelector} from "react-redux"
import { updateUserData } from "../Features/FormFeatures"

function Form() {
  let formData = useSelector((state)=>state.formSlice)
  // console.log(formData)
  const dispatch = useDispatch()

  const handleChange = (e) => {
    const {name, value} = e.target
    dispatch(updateUserData({name, value}))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <>
      <section id="center">
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Enter Username:</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter Username"
            onChange={handleChange}
          />
          <label htmlFor="password">Enter Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter Password"
            onChange={handleChange}
          />
          <button type="submit">Login</button>
        </form>
      </section>
    </>
  );
}

export default Form;
