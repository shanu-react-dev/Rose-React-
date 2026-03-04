import { useState } from "react";
import axios from "axios";

const AddUser = () => {
  let [formData, setFormData] = useState({
    username: "",
    gitLink: "",
    avatar_url: "",
  });

  let { username, gitLink, avatar_url } = formData;

  function handleChange(e) {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    let postData = async function () {
      let data = await axios.post("http://localhost:5000/users", formData);
      console.log(data);
    };
    postData();
  }
  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Enter Username</label>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Enter Your Username"
          onChange={handleChange}
          value={username}
        />

        <label htmlFor="gitLink">Enter git hub link</label>
        <input
          type="gitLink"
          name="gitLink"
          id="gitLink"
          placeholder="Enter your gitLink"
          onChange={handleChange}
          value={gitLink}
        />

        <label htmlFor="avatar_url">Enter Image URL</label>
        <input
          type="url"
          name="avatar_url"
          id="avatar_url"
          placeholder="Enter avatar_url"
          onChange={handleChange}
          value={avatar_url}
        />

        <label htmlFor=""></label>
        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default AddUser;
