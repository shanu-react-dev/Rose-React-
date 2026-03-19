import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const Login = () => {
  let [email, setEmail] = useState("");
  let navigate = useNavigate();
  const handleChange = (e) => {
    setEmail(e.target.value);
    console.log(email);
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(email));
    navigate("/");
    toast("Logged in Successfully");
  };
  return (
    <div>
      <h1>Login Here</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your mail"
          id="email"
          value={email}
          required
          onChange={handleChange}
        />
        <input type="submit" value={"Login"} />
      </form>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </div>
  );
};

export default Login;
