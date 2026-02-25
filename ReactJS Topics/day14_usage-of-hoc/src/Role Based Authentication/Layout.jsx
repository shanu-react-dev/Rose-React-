import React, { useState } from "react";
import auth from "./auth";
import AdminComp from "./AdminComp";
import UserComp from "./UserComp";

const SecuredAdm = auth(AdminComp, "admin");
const SecuredUse = auth(UserComp, "user");
const Layout = () => {
  let [user, setUser] = useState("user");
  console.log(user);
  return (
    <div>
      <button onClick={() => setUser("user")}>Login as user</button>
      <button onClick={() => setUser("admin")}>Login as Admin</button>

      {user === "admin" ? (
        <SecuredAdm role="admin" />
      ) : (
        <SecuredUse role="user" />
      )}
    </div>
  );
};

export default Layout;
