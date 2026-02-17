import React, { useState } from "react";

const Controlled = () => {
  let [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  let { username, password } = formData;

  let handleChange = (e) => {
    // console.log(e.target);
    let { name, value } = e.target;
    // console.log(name);
    setFormData({ ...formData, [name]: value });
  };
  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      username: "",
      password: "",
    });
  };
  return (
    <div>
      <h1>Login Here!!</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Enter Username</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Enter Username"
          onChange={handleChange}
          value={username}
        />

        <label htmlFor="password">Enter Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter Password"
          onChange={handleChange}
          value={password}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Controlled;
