import { createContext, useEffect, useState } from "react";

export const userContext = createContext();
let { Provider } = userContext;
const UserContext = ({ children }) => {
  let [user, setUser] = useState(null);
  let data = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    setUser(data);
    console.log(data);
  }, []);
  return <Provider value={user}>{children}</Provider>;
};

export default UserContext;
