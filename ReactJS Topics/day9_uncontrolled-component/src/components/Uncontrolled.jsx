import { useRef } from "react";

const Uncontrolled = () => {
  let userNameRef = useRef("");
  let passwordRef = useRef("");

  let handleSubmit = (e) => {
    e.preventDefault();
    let username = userNameRef.current.value;
    let password = passwordRef.current.value;
    console.log(username, password);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Enter Username</label>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Enter Password"
          ref={userNameRef}
        />

        <label htmlFor="password">Enter Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter Password"
          ref={passwordRef}
        />

        <input type="submit" value="Submit"></input>
      </form>
    </div>
  );
};

export default Uncontrolled;
