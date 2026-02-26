import React, { createContext, useState } from "react";

export let themeCont = createContext();
console.log(themeCont);
let { Provider } = themeCont; 

const ThemeContext = (props) => {
  let [theme, setTheme] = useState("light");
  let changeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  console.log(props);
  let { children } = props;
  return <Provider value={{ theme, changeTheme }}>{children}</Provider>;
};

export default ThemeContext;
