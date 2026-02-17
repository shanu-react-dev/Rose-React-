import { useFormik } from "formik";
import { validationObj } from "./FormSchema";

let initialData = {
  username: "",
  password: "",
};
const LoginForm = () => {
  let { values, handleChange, handleSubmit, handleReset, errors, touched } =
    useFormik({
      initialValues: initialData,
      validationSchema: validationObj,
      onSubmit: (data) => {
        console.log(data);
      },
    });
  //   console.log(errors);
  //   console.log(values);
  return (
    <div>
      <h1>Login Here</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Enter username</label>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Enter username"
          onChange={handleChange}
        />
        <p style={{ color: "red" }}>
          {errors.username && touched.username ? `${errors.username}` : ""}
        </p>

        <label htmlFor="password">Enter Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter Password"
          onChange={handleChange}
        />

        <p style={{ color: "red" }}>
          {errors.password && touched.password ? `${errors.password}` : ""}
        </p>

        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default LoginForm;
