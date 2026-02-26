import React, { useCallback, useContext } from "react";
import { themeCont } from "./ThemeContext";

const Dd = () => {
  let data = useContext(themeCont);

  let { theme, changeTheme } = data;

  return (
    <div>
      <p
        style={{
          background: theme === "light" ? "#fff" : "#1a1a1a",
          color: theme === "light" ? "#1a1a1a" : "#fff",
        }}
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem
        aliquam ipsa quisquam, debitis optio quasi ab facilis aperiam enim
        aspernatur? Deleniti vel repudiandae cumque nesciunt iste enim voluptate
        autem voluptatibus.
      </p>

      <button onClick={changeTheme}>Change Theme</button>
    </div>
  );
};

export default Dd;
