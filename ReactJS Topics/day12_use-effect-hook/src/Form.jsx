import axios from "axios";
import React, { useState } from "react";

const Form = ({ data }) => {
  let [formData, setFormData] = useState({
    login: "",
    id: "",
    avatar_url: "",
    html_url: "",
  });

  let { login, id, avatar_url, html_url } = formData;

  let handleChange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    data.push(formData);
    console.log(formData);
    let pushedData = await axios.post("https://api.github.com/users", formData);
  };

  return (
    <div>
      <h2>Enter Details</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Username"
          name="login"
          onChange={handleChange}
          value={login}
        />
        <input
          type="text"
          placeholder="Enter ID"
          name="id"
          onChange={handleChange}
          value={id}
        />
        <input
          type="url"
          name="avatar_url"
          id="avatar_url"
          placeholder="Enter Image URL"
          onChange={handleChange}
          value={avatar_url}
        />
        <input
          type="url"
          placeholder="ENter Github URL"
          name="html_url"
          onChange={handleChange}
          value={html_url}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Form;
