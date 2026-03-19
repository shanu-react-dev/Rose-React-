import axios from "axios";
import { useState } from "react";

const Signup = () => {
  let [formData, setFormdata] = useState({
    name: "",
    email: "",
    imgUrl: "",
  });
  let { name, email, imgUrl } = formData;
  let handleChange = (e) => {
    let { name, value } = e.target;
    setFormdata({ ...formData, [name]: value });
  };
  let handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/users", formData);
    console.log(formData);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          id="name"
          name="name"
          onChange={handleChange}
          value={name}
        />
        <input
          type="email"
          placeholder="Enter your email"
          id="email"
          name="email"
          onChange={handleChange}
          value={email}
        />
        <input
          type="url"
          placeholder="Enter your img URL"
          id="imgUrl"
          name="imgUrl"
          onChange={handleChange}
          value={imgUrl}
        />
        <button type="submit">Register..</button>
      </form>
    </div>
  );
};

export default Signup;
