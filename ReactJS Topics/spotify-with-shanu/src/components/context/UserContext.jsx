import { createContext, useState, useEffect } from "react";

export const userContext = createContext();
const { Provider } = userContext;

const UserContext = ({ children }) => {
  let [user, setUser] = useState("");
  let presentUser = localStorage.getItem("user");

  useEffect(() => {
    setUser(presentUser);
  }, []);
  return <Provider value={{ user, setUser }}>{children}</Provider>;
};

export default UserContext;
