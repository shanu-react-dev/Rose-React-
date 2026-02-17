import { useState } from "react";

const ControlledForms = () => {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let handleChange = (e) => {
    setUsername(e.target.value);
  };

  let handlePassword = (e) => {
    setPassword(e.target.value);
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(username);
    console.log(password);
  };
  return (
    <div>
      <h1>Login Form</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Enter Username</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Enter your username"
          onChange={handleChange}
        />

        <label htmlFor="password">Enter Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter Password"
          onChange={handlePassword}
        />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default ControlledForms;
