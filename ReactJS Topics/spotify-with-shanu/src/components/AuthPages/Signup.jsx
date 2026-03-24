import { useReducer } from "react";
import { Reducer } from "../utilities/Reducer";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

let initialData = {
  username: "",
  email: "",
  password: "",
};

const Signup = () => {
  let [initialVal, dispatch] = useReducer(Reducer, initialData);
  const navigate = useNavigate();
  const handleChange = (e) => {
    let { name, value } = e.target;
    dispatch({ type: "updateUser", name, value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(initialVal);
    try {
      let res = await axios.get(
        `http://localhost:5500/users?email=${initialVal.email}`,
      );
      console.log(res);
      if (res.data.length == 0) {
        let { data } = await axios.post(
          "http://localhost:5500/users",
          initialVal,
        );
        console.log(data);
        dispatch({ type: "reset", initialData });
        toast.success("Registered Successfully", {
          position: "top-right",
          theme: "dark",
          autoClose: 2000,
        });
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      } else {
        toast.error("User already exist", {
          position: "top-right",
          theme: "dark",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Signup To Vibe</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          id="username"
          value={initialVal.username}
          placeholder="enter your username"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          id="email"
          value={initialVal.email}
          placeholder="enter your email"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          id="password"
          value={initialVal.password}
          placeholder="enter your password"
          onChange={handleChange}
        />
        <input type="submit" value="Sign Up" />
      </form>
      <ToastContainer />
    </div>
  );
};

export default Signup;
