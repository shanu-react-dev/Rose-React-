import { useFormik } from "formik";
import formSchema from "../component/formSchema";
import axios from "axios";
import { useEffect } from "react";

let initialData = {
  userName: "",
  password: "",
  email: "",
  contact: "",
};

const Registration = ({ refreshData, editUser, setEditUser }) => {
  let {
    handleBlur,
    handleChange,
    handleSubmit,
    values,
    resetForm,
    errors,
    setValues,
  } = useFormik({
    initialValues: initialData,
    validationSchema: formSchema,
    onSubmit: async (data) => {
      try {
        if (editUser) {
          await axios.put(`http://localhost:5000/user/${editUser.id}`, data);
          refreshData();
          setEditUser(null);
        } else {
          await axios.post("http://localhost:5000/user", data);
        }
        resetForm();
      } catch (error) {
        console.log(error);
      }
    },
  });

  useEffect(() => {
    if (editUser) {
      setValues(editUser);
    }
  }, [editUser]);
  return (
    <div>
      <h1>{editUser ? "Update Form" : "Register Here"}</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="userName">Enter Username</label>
        <input
          type="text"
          name="userName"
          id="userName"
          placeholder="Enter Username"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.userName}
        />
        <label htmlFor="password">Enter Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter Password"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.password}
        />
        <label htmlFor="email">Enter email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter Email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
        />
        <label htmlFor="contact">Enter Contact</label>
        <input
          type="tel"
          name="contact"
          id="contact"
          placeholder="Enter Contact"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.contact}
        />
        <button type="submit">
          {editUser ? "Update Form" : "Register Here"}
        </button>
      </form>
    </div>
  );
};

export default Registration;
