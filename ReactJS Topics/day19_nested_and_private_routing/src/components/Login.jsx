import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let [data, setData] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  let { username, password } = data;
  let handleChange = (e) => {
    let { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    localStorage.setItem("loginData", JSON.stringify(data));
    setData({ username: "", password: "" });
    navigate("/home");
  };
  return (
    <div>
      <h1>Login Here</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="username"
          id="username"
          name="username"
          onChange={handleChange}
          value={username}
        ></input>
        <input
          type="password"
          placeholder="password"
          id="password"
          name="password"
          onChange={handleChange}
          value={password}
        ></input>

        <input type="submit" value={"Login.."} />
      </form>
    </div>
  );
};

export default Login;
