import { useFormik } from "formik";
import { FormSchema } from "./FormSchema";
import styles from "./Forms.module.css";
import { useState } from "react";

console.log(styles);

const Forms = () => {
  let {
    errors,
    handleBlur,
    handleChange,
    handleReset,
    handleSubmit,
    touched,
    values,
  } = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: FormSchema,
    onSubmit: (data) => {
      console.log(data);
      handleReset();
    },
  });

  let [show, setShow] = useState(false);

  console.log(errors);
  return (
    <div className={styles.formContainer}>
      <h2>Login With Me</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="username"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.username}
        />
        <p>{errors.username && touched.username ? errors.username : ""}</p>
        <label htmlFor="password">Password</label>
        <div className={styles.passwordBox}>
          <input
            type={show === true ? "text" : "password"}
            id="password"
            name="password"
            placeholder="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          <button onClick={() => setShow(!show)} className={styles.showBtn}>
            {show === true ? "Hide" : "show"}
          </button>
        </div>
        <p>{errors.password && touched.password ? errors.password : ""}</p>

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Forms;
