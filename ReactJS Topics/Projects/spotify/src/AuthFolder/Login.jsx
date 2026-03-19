import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Bounce, ToastContainer, toast } from "react-toastify";
import UserContext, { userContext } from "../utilites/UserContext";

const Login = () => {
  let [data, setData] = useState({
    email: "",
  });
  let { user, setUser } = useContext(userContext);
  console.log(user);

  let navigate = useNavigate();
  let { email } = data;
  let handleChange = (e) => {
    let { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    let { data } = await axios.get(`http://localhost:5000/users/?${email}`);
    console.log(data);
    if (data[0]) {
      toast.success("Logged in Successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      window.localStorage.setItem("user", JSON.stringify(email));
      setUser(user);
      setTimeout(() => {
        navigate("/");
      }, 5000);
    }
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
