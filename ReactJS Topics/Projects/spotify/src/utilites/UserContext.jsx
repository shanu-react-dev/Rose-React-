import { createContext, useEffect, useState } from "react";

export let userContext = createContext();
let { Provider } = userContext;
const UserContext = ({ children }) => {
  let [user, setUser] = useState(null);
  let data = JSON.parse(localStorage.getItem("user"));

  console.log(data);
  useEffect(() => {
    setUser(data);
  }, []);

  return <Provider value={{ user, setUser }}>{children}</Provider>;
};

export default UserContext;
