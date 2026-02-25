import { useState } from "react";
import AdminComponent from "./components/AdminComponent";
import UserComponent from "./components/UserComponent";
import hoc from "./components/hoc";
import Layout from "./Role Based Authentication/Layout";

// const SecuredAdmin = hoc(AdminComponent, "admin");
// const SecuredUser = hoc(UserComponent, "user");
const App = () => {
  //   let [user, setUser] = useState("user");
  //   console.log(user);
  return (
    <div>
      {/* <button onClick={() => setUser("user")}>Login As User</button>
      <button onClick={() => setUser("admin")}>Login as Admin</button>

      {user == "user" ? (
        <SecuredUser role="user" />
      ) : (
        <SecuredAdmin role="admin" />
      )} */}
      {/* <SecuredAdmin role={"admin"} />
      <SecuredUser role={"user"} /> */}

      <Layout />
    </div>
  );
};

export default App;
