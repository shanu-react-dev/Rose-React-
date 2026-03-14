import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let [data, setData] = useState({
    email: "",
  });

  let navigate = useNavigate();
  let { email } = data;
  let handleChange = (e) => {
    let { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  let handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(data));
    setData({ email: "" });
    navigate("/");
  };
  return (
    <div>
      <h1>Login Here</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter your mail"
          name="email"
          onChange={handleChange}
          value={email}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
