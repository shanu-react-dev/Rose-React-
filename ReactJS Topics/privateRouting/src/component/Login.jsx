import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handlesubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify({ username: "Shanu" }));
    navigate("/");
  };
  return (
    <div>
      <form onSubmit={handlesubmit}>
        <button type="submit">Button</button>
      </form>
    </div>
  );
};

export default Login;
