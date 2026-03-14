import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul>
          {/* <li>
            <a href="http://localhost:5173/home">Home</a>
          </li>
          <li>
            <a href="http://localhost:5173/about">About</a>
          </li>
          <li>
            <a href="http://localhost:5173/portfolio">portfolio</a>
          </li> */}

          <li>
            <Link to={"/home"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/portfolio"}>Portfolio</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
