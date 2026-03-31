import "./App.css";
import { useReducer } from "react";
import { Reducer } from "./Reducer";
import Form from "./redux-with-form/Form";
import {Provider} from "react-redux"
import {store} from "./store/store"

let initialData = {
  username: "",
  password: "",
};

function App() {
  let [initialVal, dispatch] = useReducer(Reducer, initialData);

  let handleChange = (e) => {
    let { name, value } = e.target;

    dispatch({type: "update", name, value})
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(initialVal)
  };

  return (
    <>
      <section id="center">
        {/* <form onSubmit={handleSubmit}>
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
        </form> */}

        <Provider store={store}>
          <Form/>
        </Provider>
      </section>
    </>
  );
}

export default App;
