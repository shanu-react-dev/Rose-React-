import { useReducer } from "react";
import formReducer from "./FormReducer";
import style from "./form.module.css";

const initialData = {
  username: "",
  password: "",
};

const Form = () => {
  const [formData, dispatch] = useReducer(formReducer, initialData);
  const handleChange = (e) => {
    dispatch({
      type: "dataChange",
      name: e.target.name,
      value: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className={style.main}>
      <h1>Login Form</h1>
      <form onSubmit={handleSubmit} className={style.form}>
        <label htmlFor="username">Enter Username</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Enter username"
          value={formData.username}
          onChange={handleChange}
        />
        <label htmlFor="password">Enter Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter password"
          value={formData.password}
          onChange={handleChange}
        />
        <input type="submit" value={"Login"} />
      </form>
    </div>
  );
};

export default Form;
