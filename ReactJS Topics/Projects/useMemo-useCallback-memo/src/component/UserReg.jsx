import { useFormik } from "formik";
import formSchema from "./formSchema";
import axios from "axios";

let initialdata = {
  userName: "",
  password: "",
  email: "",
  contact: "",
};

const UserReg = () => {
  let {
    handleBlur,
    handleChange,
    handleSubmit,
    values,
    errors,
    touched,
    resetForm,
  } = useFormik({
    initialValues: initialdata,
    validationSchema: formSchema,
    onSubmit: async (data) => {
      try {
        console.log(data);
        resetForm();
        await axios.post("http://localhost:5000/user", data);
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <div>
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="userName">Enter Username</label>
        <input
          type="text"
          name="userName"
          id="userName"
          placeholder="Enter Username"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.userName}
        />

        <p>{touched.userName && errors.userName ? errors.userName : ""}</p>
        <label htmlFor="password">Enter Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter Password"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
        />
        <p>{touched.password && errors.password ? errors.password : ""}</p>
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
        <p>{touched.email && errors.email ? errors.email : ""}</p>
        <label htmlFor="contact">Enter Contact</label>
        <input
          type="tel"
          name="contact"
          id="contact"
          placeholder="Enter Contact"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.contact}
        />
        <p>{touched.contact && errors.contact ? errors.contact : ""}</p>
        <button type="submit">Register..</button>
      </form>
    </div>
  );
};

export default UserReg;
